import React from 'react';

import { ActionIcon, Button, Group, Tooltip } from '@mantine/core';
import {
  GetCoursesDocument,
  useCreateCourseMutation,
  useDeleteCourseByIdMutation,
  useGetCoursesQuery,
  useUpdateCourseByIdMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import { IconDatabasePlus, IconEdit, IconTrash } from '@tabler/icons-react';

import { ContentPageLayout, CreateUpdateCourseModal, DataGrid } from 'src/components';
import { CreateUpdateCourseModalArgs } from 'src/components/modals/CreateUpdateCourse/types';
import { ModalId } from 'src/constants';
import { useModal } from 'src/hooks';

import { COURSES_TABLE_COLUMNS } from '../constants';

export const CoursesPageAdmin: React.FC = () => {
  const { openModal, closeModal, switchClosability } = useModal<CreateUpdateCourseModalArgs>(
    ModalId.CreateUpdateCourseModal,
  );
  const { data, loading: loadingCourses } = useGetCoursesQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [createCourse, { loading: creatingCourse }] = useCreateCourseMutation();
  const [updateCourse, { loading: updatingCourse }] = useUpdateCourseByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const handleCreateFormSubmit: CreateUpdateCourseModalArgs['onSubmit'] = async ({
    platformId,
    ...formData
  }) => {
    switchClosability(false);
    try {
      await createCourse({
        variables: {
          input: {
            ...formData,
            platform: platformId ? { connect: { where: { node: { id: platformId } } } } : undefined,
          },
        },
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
    { platformId, ...formData }: Parameters<CreateUpdateCourseModalArgs['onSubmit']>[0],
    id: string,
  ) => {
    switchClosability(false);
    try {
      await updateCourse({
        variables: {
          id,
          input: {
            ...formData,
            platform: platformId ? { connect: { where: { node: { id: platformId } } } } : undefined,
          },
        },
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
        columns={COURSES_TABLE_COLUMNS}
        data={courses ?? []}
        state={{ isLoading: loadingCourses }}
        enableColumnOrdering
        enableEditing
        renderRowActions={({
          row: {
            original: { id, title, url, description, platform },
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
                      platformId: platform?.id,
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
