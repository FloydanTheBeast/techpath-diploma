import React from 'react';

import { Button, Menu } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import {
  CourseWhere,
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
import _ from 'lodash';
import { MRT_ColumnFiltersState } from 'mantine-react-table';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, CreateUpdateCourseModal, DataGrid } from 'src/components';
import { CreateUpdateCourseModalArgs } from 'src/components/modals/CreateUpdateCourse/types';
import { ModalId, RouteEntityType, TOPIC_TAGS, appRoutes } from 'src/constants';
import {
  useDebounce,
  useModal,
  usePagination,
  usePaginationQueryOptions,
  useSearchQueryOptions,
} from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { COURSES_TABLE_COLUMNS } from '../constants';

export const CoursesPageAdmin: React.FC = () => {
  const [columnFilters, setColumnFilters] = React.useState<MRT_ColumnFiltersState>([]);

  const { openModal, closeModal, switchClosability } = useModal<CreateUpdateCourseModalArgs>(
    ModalId.CreateUpdateCourseModal,
  );
  const paginationOptions = usePaginationQueryOptions();
  const { paginationState, dispatchPaginationState } = usePagination();
  const searchOptions = useSearchQueryOptions(['title', 'description']);

  const [createCourse, { loading: creatingCourse }] = useCreateCourseMutation();
  const [updateCourse, { loading: updatingCourse }] = useUpdateCourseByIdMutation();
  const [deleteCourse] = useDeleteCourseByIdMutation();

  const columns = React.useMemo(
    () =>
      COURSES_TABLE_COLUMNS({
        // FIXME: Get from global state
        languages: ['ru', 'en', 'fr', 'es', 'de'],
        platforms: ['Stepik', 'Coursera'],
        difficulties: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
        topics: TOPIC_TAGS,
        setFiltersState: setColumnFilters,
      }).filter(col => !['id'].includes(col.accessorKey as string)),
    [],
  );

  const coursesFilters = React.useMemo((): CourseWhere => {
    return columnFilters.reduce((acc, colFilter) => {
      if (typeof colFilter.value === 'string') {
        return _.set(acc, `${colFilter.id}_CONTAINS`, colFilter.value);
      }

      if (Array.isArray(colFilter.value) && !_.isEmpty(colFilter.value.filter(Boolean))) {
        return _.set(acc, `${colFilter.id}_IN`, colFilter.value);
      }

      if (typeof colFilter.value === 'object') {
        const val = colFilter.value as { min?: number; max?: number };
        _.set(acc, `${colFilter.id}_GTE`, val.min);
        _.set(acc, `${colFilter.id}_LTE`, val.max);
        return acc;
      }

      return acc;
    }, {} as CourseWhere);
  }, [columnFilters]);

  const debouncedCoursesFilters = useDebounce(coursesFilters, 1000);

  const { data, loading: loadingCourses } = useGetCoursesQuery({
    variables: {
      where: { ...searchOptions, ...debouncedCoursesFilters },
      options: { ...paginationOptions, sort: [{ createdAt: SortDirection.Desc }] },
    },
    notifyOnNetworkStatusChange: true,
  });

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
      // FIXME: Update cache
      await deleteCourse({ variables: { id }, refetchQueries: [GetCoursesDocument] });
      notifications.show({
        title: 'Success',
        message: 'Course has been deleted',
        color: 'green',
        withCloseButton: true,
        icon: <IconCheck />,
        withBorder: true,
      });
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
        state={{ isLoading: loadingCourses, columnFilters }}
        enableColumnOrdering
        rowCount={paginationState.count}
        initialState={{
          showGlobalFilter: true,
        }}
        manualFiltering
        onColumnFiltersChange={setColumnFilters}
        positionGlobalFilter="left"
        enableRowActions
        renderRowActionMenuItems={({
          row: {
            original: { id, title, url, description, platform, tags, difficulty, languages, price },
          },
        }) => (
          <React.Fragment>
            <Menu.Item
              icon={<IconListDetails size="1rem" />}
              component={Link}
              to={generatePath(appRoutes.courses.details, {
                [RouteEntityType.course]: id,
              })}
            >
              View details
            </Menu.Item>
            <Menu.Item
              icon={<IconEdit size="1rem" />}
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
              icon={<IconTrash size="1rem" />}
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
