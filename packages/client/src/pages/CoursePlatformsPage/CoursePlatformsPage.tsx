import React from 'react';

import { ActionIcon, Button, Group, Image, ThemeIcon, Tooltip } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  CoursePlatformInfoFragment,
  GetCoursePlatformsDocument,
  GetCoursesDocument,
  useCreateCoursePlatformMutation,
  useDeleteCourseByIdMutation,
  useGetCoursePlatformsQuery,
  useUpdateCoursePlatformByIdMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import {
  IconCheck,
  IconDatabasePlus,
  IconEdit,
  IconExternalLink,
  IconSchool,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
import { MRT_ColumnDef } from 'mantine-react-table';

import {
  ContentPageLayout,
  CreateUpdateCoursePlatformModal,
  CreateUpdateCoursePlatformModalArgs,
  DataGrid,
} from 'src/components';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

const columns: MRT_ColumnDef<CoursePlatformInfoFragment>[] = [
  {
    header: 'Id',
    accessorKey: 'id',
  },
  {
    header: 'Logo',
    size: 30,
    accessorFn: ({ logoUrl }) =>
      logoUrl ? (
        <Image fit="contain" height={32} width={32} src={logoUrl} />
      ) : (
        <ThemeIcon color="dark">
          <IconSchool size="2rem" stroke={1.5} />
        </ThemeIcon>
      ),
  },
  {
    header: 'Name',
    accessorKey: 'name',
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
];

export const CoursePlatformsPage: React.FC = () => {
  const { openModal, switchClosability, closeModal } =
    useModal<CreateUpdateCoursePlatformModalArgs>(ModalId.CreateUpdateCoursePlatformModal);
  const { data, loading: loadingCourses } = useGetCoursePlatformsQuery();
  const [createCoursePlatform, { loading: creatingCoursePlatform }] =
    useCreateCoursePlatformMutation();
  const [updateCoursePlatform, { loading: updatingCoursePlatform }] =
    useUpdateCoursePlatformByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const coursePlatforms = data?.coursePlatforms;

  const handleCreateFormSubmit: CreateUpdateCoursePlatformModalArgs['onSubmit'] =
    async formData => {
      switchClosability(false);
      try {
        await createCoursePlatform({
          variables: { input: formData },
          refetchQueries: [GetCoursePlatformsDocument],
        });
        closeModal();
        notifications.show({
          title: 'Success',
          message: 'Course platform has been created',
          color: 'green',
          withCloseButton: true,
          icon: <IconCheck />,
          withBorder: true,
        });
      } catch (error) {
        notifications.show({
          title: 'Something went wrong',
          message: error.message,
          color: 'green',
          withCloseButton: true,
          icon: <IconCheck />,
          withBorder: true,
        });
      } finally {
        switchClosability(true);
      }
    };

  const handleUpdateFormSubmit = async (
    formData: Parameters<CreateUpdateCoursePlatformModalArgs['onSubmit']>[0],
    id: string,
  ) => {
    switchClosability(false);
    try {
      await updateCoursePlatform({
        variables: { id, input: formData },
        refetchQueries: [GetCoursePlatformsDocument],
      });
      closeModal();
      notifications.show({
        title: 'Success',
        message: 'Course platform has been updated',
        color: 'green',
        withCloseButton: true,
        icon: <IconCheck />,
        withBorder: true,
      });
    } catch (error) {
      notifications.show({
        title: 'Something went wrong',
        message: error.message,
        color: 'red',
        withCloseButton: true,
        icon: <IconX />,
        withBorder: true,
      });
    } finally {
      switchClosability(true);
    }
  };

  const handleCoursePlatformDelete = async (id: Nullable<string>) => {
    if (!id) {
      return;
    }

    // TODO: Confirmation modal
    if (window.confirm('Are you sure you want to delete the course platform?')) {
      await deleteCourse({ variables: { id }, refetchQueries: [GetCoursesDocument] });
    }
  };

  return (
    <ContentPageLayout title="Course Platforms">
      <DataGrid
        displayColumnDefOptions={{
          'mrt-row-actions': {
            mantineTableHeadCellProps: {
              align: 'center',
            },
            size: 80,
          },
        }}
        columns={columns}
        data={coursePlatforms ?? []}
        state={{ isLoading: loadingCourses }}
        enableColumnOrdering
        enableEditing
        renderRowActions={({
          row: {
            original: { id, name, url, logoUrl },
          },
        }) => (
          <Group position="center">
            <Tooltip withArrow position="left" label="Edit">
              <ActionIcon
                onClick={() =>
                  openModal(ModalId.CreateUpdateCoursePlatformModal, {
                    onSubmit: formData => handleUpdateFormSubmit(formData, id),
                    defaultValues: {
                      name,
                      url,
                      logoUrl,
                    },
                  })
                }
              >
                <IconEdit stroke={1.5} />
              </ActionIcon>
            </Tooltip>
            <Tooltip withArrow position="right" label="Delete">
              <ActionIcon color="red" onClick={async () => await handleCoursePlatformDelete(id)}>
                <IconTrash stroke={1.5} />
              </ActionIcon>
            </Tooltip>
          </Group>
        )}
        renderTopToolbarCustomActions={() => {
          return (
            <Button
              onClick={() =>
                openModal(ModalId.CreateUpdateCoursePlatformModal, {
                  onSubmit: handleCreateFormSubmit,
                })
              }
              leftIcon={<IconDatabasePlus size="1rem" />}
              variant="outline"
            >
              Create new platform
            </Button>
          );
        }}
      />

      <CreateUpdateCoursePlatformModal loading={creatingCoursePlatform || updatingCoursePlatform} />
    </ContentPageLayout>
  );
};
