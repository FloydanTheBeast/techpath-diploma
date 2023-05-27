import React from 'react';

import { Button, Menu } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  GetCoursesDocument,
  SortDirection,
  useCreateCourseMutation,
  useDeleteCourseByIdMutation,
  useGetCoursesQuery,
  useUpdateCourseByIdMutation,
} from '@shared/graphql';
import { Nullable } from '@shared/types';
import {
  IconCheck,
  IconDatabasePlus,
  IconEdit,
  IconListDetails,
  IconTrash,
  IconX,
} from '@tabler/icons-react';
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
      options: { ...paginationOptions, sort: [{ createdAt: SortDirection.Desc }] },
    },
    notifyOnNetworkStatusChange: true,
  });
  const [createCourse, { loading: creatingCourse }] = useCreateCourseMutation();
  const [updateCourse, { loading: updatingCourse }] = useUpdateCourseByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const columns = React.useMemo(
    () =>
      COURSES_TABLE_COLUMNS({
        languages: ['ru', 'en', 'fr', 'es', 'de'],
        platforms: ['Stepik', 'Coursera'],
        difficulties: ['beginner', 'intermediate', 'advanced'],
        topics: [],
        setFiltersState: () => void 0,
      }).filter(col => !['id'].includes(col.accessorKey as string)),
    [],
  );

  const handleCreateFormSubmit: CreateUpdateCourseModalArgs['onSubmit'] = async ({
    platformId,
    topicTagsIds,
    languageCountryCodeISO,
    price,
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
            languages: languageCountryCodeISO
              ? { connect: [{ where: { node: { countryCodeISO: languageCountryCodeISO } } }] }
              : undefined,
            price: price
              ? { create: { node: { price: price.price, currencyCodeISO: price.currencyCodeISO } } }
              : undefined,
          },
        },
        refetchQueries: [GetCoursesDocument],
      });
      closeModal();
      notifications.show({
        title: 'Success',
        message: 'Course has been created',
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

  const handleUpdateFormSubmit = async (
    {
      platformId,
      topicTagsIds,
      languageCountryCodeISO,
      price,
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
            platform: {
              disconnect: { where: {} },
              connect: { where: { node: { id: platformId } } },
            },
            price: price
              ? {
                  delete: { where: {} },
                  create: { node: { price: price.price, currencyCodeISO: price.currencyCodeISO } },
                }
              : undefined,
            tags: [
              { disconnect: [{ where: {} }] },
              {
                connect: topicTagsIds
                  ? topicTagsIds.map(tag => ({ where: { node: { id: tag } } }))
                  : undefined,
              },
            ],
            languages: languageCountryCodeISO
              ? [
                  { disconnect: [{ where: {} }] },
                  { connect: [{ where: { node: { countryCodeISO: languageCountryCodeISO } } }] },
                ]
              : undefined,
          },
        },
        refetchQueries: [GetCoursesDocument],
      });
      closeModal();
      notifications.show({
        title: 'Success',
        message: 'Course has been updated',
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
        columns={columns}
        data={courses ?? []}
        state={{ isLoading: loadingCourses }}
        enableColumnOrdering
        rowCount={paginationState.count}
        initialState={{
          showGlobalFilter: true,
        }}
        enableColumnFilters={false} // TODO
        positionGlobalFilter="left"
        enableRowActions
        renderRowActionMenuItems={({
          row: {
            original: { id, title, url, description, platform, tags, difficulty, languages, price },
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
                    languageCountryCodeISO: languages[0]?.countryCodeISO,
                    difficulty,
                    price: {
                      price: price?.price,
                      currencyCodeISO: price?.currencyCodeISO,
                    },
                  },
                })
              }
            >
              Edit course
            </Menu.Item>
            <Menu.Item
              icon={<IconTrash />}
              color="red"
              onClick={async () => await handleCourseDelete(id)}
            >
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
