import React from 'react';

import { ActionIcon, Box, Button, Group, Popover, Text, Tooltip } from '@mantine/core';
import {
  CourseInfoFragment,
  GetCoursesDocument,
  useCreateCourseMutation,
  useDeleteCourseByIdMutation,
  useGetCoursesQuery,
  useUpdateCourseByIdMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import { IconDatabasePlus, IconEdit, IconExternalLink, IconTrash } from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';

import {
  ContentPageLayout,
  CoursePlatformLogo,
  CreateUpdateCourseModal,
  DataGrid,
} from 'src/components';
import { CreateUpdateCourseModalArgs } from 'src/components/modals/CreateUpdateCourse/types';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

const columns: MRT_ColumnDef<CourseInfoFragment>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Title',
    accessorKey: 'title',
  },
  {
    header: 'Platform',
    accessorFn: ({ platform }) =>
      platform ? (
        <Popover position="right" withArrow>
          <Popover.Target>
            <Box display="inline-block" sx={{ cursor: 'pointer' }}>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
            </Box>
          </Popover.Target>
          <Popover.Dropdown>
            <Group>
              <CoursePlatformLogo logoUrl={platform.logoUrl} />
              <Text>{platform?.name}</Text>
              <ActionIcon component="a" href={platform.url} target="_blank">
                <IconExternalLink />
              </ActionIcon>
            </Group>
          </Popover.Dropdown>
        </Popover>
      ) : (
        <Text c="dimmed">None</Text>
      ),
    size: 30,
  },
  {
    header: 'Url',
    accessorFn: ({ url }) => (
      <Button
        component="a"
        href={url}
        target="_blank"
        compact
        variant="subtle"
        leftIcon={<IconExternalLink size="0.9rem" />}
      >
        {url}
      </Button>
    ),
  },
  {
    header: 'Description',
    accessorFn: ({ description }) => (
      <Tooltip label={description} width={300} multiline withArrow openDelay={500} withinPortal>
        <Text lineClamp={3} sx={{ cursor: 'help' }}>
          {description}
        </Text>
      </Tooltip>
    ),
    size: 300,
  },
];

export const CoursesPage: React.FC = () => {
  const { openModal, closeModal, switchClosability } = useModal<CreateUpdateCourseModalArgs>(
    ModalId.CreateUpdateCourseModal,
  );
  const { data, loading: loadingCourses } = useGetCoursesQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [createCourse, { loading: creatingCourse }] = useCreateCourseMutation();
  const [updateCourse, { loading: updatingCourse }] = useUpdateCourseByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const handleCreateFormSubmit: CreateUpdateCourseModalArgs['onSubmit'] = async formData => {
    switchClosability(false);
    try {
      await createCourse({
        variables: { input: formData },
        refetchQueries: [GetCoursesDocument],
      });
      closeModal();
    } catch (error) {
      // TODO: Spawn notification
    } finally {
      switchClosability(true);
    }
  };

  const handleUpdateFormSubmit = async (
    formData: Parameters<CreateUpdateCourseModalArgs['onSubmit']>[0],
    id: string,
  ) => {
    switchClosability(false);
    try {
      await updateCourse({
        variables: { id, input: formData },
        refetchQueries: [GetCoursesDocument],
      });
      closeModal();
    } catch (error) {
      // TODO: Spawn notification
    } finally {
      switchClosability(true);
    }
  };

  const handleCourseDelete = async (id: Nullable<string>) => {
    if (!id) {
      return;
    }

    // TODO: Confirmation modal
    if (window.confirm('Are you sure you want to delete the course?')) {
      await deleteCourse({ variables: { id }, refetchQueries: [GetCoursesDocument] });
    }
  };

  const courses = data?.courses;

  return (
    <ContentPageLayout title="Courses">
      <DataGrid
        displayColumnDefOptions={{
          'mrt-row-actions': {
            mantineTableHeadCellProps: {
              align: 'center',
            },
            minSize: 80,
          },
        }}
        columns={columns}
        data={courses ?? []}
        state={{ isLoading: loadingCourses }}
        enableColumnOrdering
        enableEditing
        renderRowActions={({
          row: {
            original: { id, title, url, description },
          },
        }) => (
          <Group position="center">
            <Tooltip withArrow position="left" label="Edit">
              <ActionIcon
                onClick={() =>
                  openModal(ModalId.CreateUpdateCourseModal, {
                    onSubmit: formData => handleUpdateFormSubmit(formData, id),
                    defaultValues: {
                      title,
                      url,
                      description,
                    },
                  })
                }
              >
                <IconEdit stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow position="right" label="Delete">
              <ActionIcon color="red" onClick={async () => await handleCourseDelete(id)}>
                <IconTrash stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
        renderTopToolbarCustomActions={() => {
          return (
            <Button
              onClick={() =>
                openModal(ModalId.CreateUpdateCourseModal, {
                  onSubmit: handleCreateFormSubmit,
                })
              }
              leftIcon={<IconDatabasePlus size="1rem" />}
              variant="outline"
            >
              Create new course
            </Button>
          );
        }}
      />

      <CreateUpdateCourseModal loading={creatingCourse || updatingCourse} />
    </ContentPageLayout>
  );
};
