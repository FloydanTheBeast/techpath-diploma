import React from 'react';

import { Button, Menu } from '@mantine/core';
import {
  GetCoursesDocument,
  useCreateCourseMutation,
  useDeleteCourseByIdMutation,
  useGetCoursesQuery,
  useUpdateCourseByIdMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import { IconDatabasePlus, IconEdit, IconListDetails, IconTrash } from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, CreateUpdateCourseModal, DataGrid } from 'src/components';
import { CreateUpdateCourseModalArgs } from 'src/components/modals/CreateUpdateCourse/types';
import { ModalId, RouteEntityType, appRoutes } from 'src/constants';
import {
  useModal,
  usePagination,
  usePaginationQueryOptions,
  useSearchQueryOptions,
} from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { COURSES_TABLE_COLUMNS } from '../constants';

export const CoursesPageAdmin: React.FC = () => {
  const { openModal, closeModal, switchClosability } = useModal<CreateUpdateCourseModalArgs>(
    ModalId.CreateUpdateCourseModal,
  );
  const paginationOptions = usePaginationQueryOptions();
  const { paginationState, dispatchPaginationState } = usePagination();
  const searchOptions = useSearchQueryOptions(['title', 'description']);

  const { data, loading: loadingCourses } = useGetCoursesQuery({
    variables: {
      where: searchOptions,
      options: paginationOptions,
    },
    notifyOnNetworkStatusChange: true,
  });
  const [createCourse, { loading: creatingCourse }] = useCreateCourseMutation();
  const [updateCourse, { loading: updatingCourse }] = useUpdateCourseByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const handleCreateFormSubmit: CreateUpdateCourseModalArgs['onSubmit'] = async ({
    platformId,
    topicTagsIds,
    ...formData
  }) => {
    switchClosability(false);
    try {
      await createCourse({
        variables: {
          input: {
            ...formData,
            platform: platformId ? { connect: { where: { node: { id: platformId } } } } : undefined,
            tags: {
              connect: topicTagsIds
                ? topicTagsIds.map(tag => ({ where: { node: { id: tag } } }))
                : undefined,
            },
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
    {
      platformId,
      topicTagsIds,
      ...formData
    }: Parameters<CreateUpdateCourseModalArgs['onSubmit']>[0],
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
          disconnect: {
            tags: [{ where: {} }],
          },
          connect: {
            tags: topicTagsIds
              ? topicTagsIds.map(tag => ({ where: { node: { id: tag } } }))
              : undefined,
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

  React.useEffect(() => {
    if (!loadingCourses) {
      dispatchPaginationState({
        type: PaginationActionType.changeCount,
        payload: { count: data?.coursesAggregate.count || 0 },
      });
    }
  }, [dispatchPaginationState, loadingCourses, data?.coursesAggregate.count]);

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
        rowCount={paginationState.count}
        initialState={{
          showGlobalFilter: true,
        }}
        positionGlobalFilter="left"
        enableRowActions
        renderRowActionMenuItems={({
          row: {
            original: { id, title, url, description, platform, tags },
          },
        }) => (
          <React.Fragment>
            <Menu.Item
              icon={<IconListDetails />}
              component={Link}
              to={generatePath(appRoutes.courses.details, {
                [RouteEntityType.course]: id,
              })}
            >
              View details
            </Menu.Item>
            <Menu.Item
              icon={<IconEdit />}
              onClick={() =>
                openModal(ModalId.CreateUpdateCourseModal, {
                  onSubmit: formData => handleUpdateFormSubmit(formData, id),
                  defaultValues: {
                    title,
                    url,
                    description,
                    platformId: platform?.id,
                    topicTagsIds: tags.map(tag => tag.id),
                  },
                })
              }
            >
              Edit course
            </Menu.Item>
            <Menu.Item icon={<IconTrash />} onClick={async () => await handleCourseDelete(id)}>
              Delete course
            </Menu.Item>
          </React.Fragment>
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
