import React from 'react';

import {
  ActionIcon,
  Flex,
  Menu,
  Pagination,
  Paper,
  Select,
  SimpleGrid,
  Skeleton,
  Stack,
  Switch,
  TextInput,
  ThemeIcon,
  rem,
} from '@mantine/core';
import {
  CourseWhere,
  GetCoursesDocument,
  SortDirection,
  useGetCoursesQuery,
  useUpdateUsersMutation,
} from '@shared/graphql';
import { IconBookmark, IconListDetails, IconSearch, IconX } from '@tabler/icons-react';
import _ from 'lodash';
import { MRT_ColumnFiltersState } from 'mantine-react-table';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, DataGrid } from 'src/components';
import { COURSE_CARD_HEIGHT, CourseCard, DataViewSwitch } from 'src/components/common';
import { DataViewType } from 'src/components/common/DataViewSwitch/constants';
import { RouteEntityType, appRoutes } from 'src/constants';
import {
  useCurrentUser,
  useDebounce,
  usePagination,
  usePaginationQueryOptions,
  useSearch,
  useSearchQueryOptions,
} from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { COURSES_TABLE_COLUMNS } from '../constants';

export const CoursesPageUser: React.FC = () => {
  const [isShowingBoomarks, setIsShowingBoomarks] = React.useState(false);
  const [columnFilters, setColumnFilters] = React.useState<MRT_ColumnFiltersState>([]);
  const [dataViewType, setDataViewType] = React.useState<DataViewType>(DataViewType.Table);

  const paginationOptions = usePaginationQueryOptions();
  const { paginationState, dispatchPaginationState, pageSizeOptions } = usePagination();
  const { setSearchQuery } = useSearch();
  const searchOptions = useSearchQueryOptions(['title', 'description']);
  const { currentUser } = useCurrentUser();
  const [updateUsers, { loading: updatingUsers }] = useUpdateUsersMutation();

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
      where: {
        ...searchOptions,
        ...debouncedCoursesFilters,
        ...(isShowingBoomarks ? { bookmarkedBy_SINGLE: { id: currentUser?.id } } : null),
      },
      options: { ...paginationOptions, sort: [{ createdAt: SortDirection.Desc }] },
    },
  });

  const columns = React.useMemo(
    () =>
      COURSES_TABLE_COLUMNS({
        // FIXME: Get from global state
        languages: ['ru', 'en', 'fr', 'es', 'de'],
        platforms: ['Stepik', 'Coursera'],
        difficulties: ['beginner', 'intermediate', 'advanced'],
        topics: [],
        setFiltersState: setColumnFilters,
      }).filter(col => !['id'].includes(col.accessorKey as string)),
    [],
  );

  React.useEffect(() => {
    if (!loadingCourses) {
      dispatchPaginationState({
        type: PaginationActionType.changeCount,
        payload: { count: data?.coursesAggregate.count || 0 },
      });
    }
  }, [dispatchPaginationState, loadingCourses, data?.coursesAggregate.count]);

  const renderDataView = () => {
    switch (dataViewType) {
      case DataViewType.Table:
        return (
          <DataGrid
            columns={columns}
            data={data?.courses ?? []}
            initialState={{
              showGlobalFilter: true,
            }}
            positionGlobalFilter="left"
            state={{ isLoading: loadingCourses, columnFilters }}
            rowCount={paginationState.count}
            mantinePaginationProps={{ rowsPerPageOptions: pageSizeOptions.map(String) }}
            enableRowActions
            renderTopToolbarCustomActions={() => (
              <Switch
                label="Only show bookmarked"
                labelPosition="left"
                onChange={event => setIsShowingBoomarks(event.currentTarget.checked)}
                checked={isShowingBoomarks}
              />
            )}
            manualFiltering
            onColumnFiltersChange={setColumnFilters}
            renderRowActionMenuItems={({ row }) => (
              <React.Fragment>
                <Menu.Item
                  icon={<IconListDetails />}
                  component={Link}
                  to={generatePath(appRoutes.courses.details, {
                    [RouteEntityType.course]: row.original.id,
                  })}
                >
                  View details
                </Menu.Item>
                <Menu.Item
                  disabled={updatingUsers}
                  closeMenuOnClick={false}
                  onClick={() =>
                    updateUsers({
                      variables: {
                        where: {
                          id: currentUser?.id,
                        },
                        ...(!row.original.bookmarked
                          ? {
                              connect: {
                                bookmarkedCourses: [{ where: { node: { id: row.original.id } } }],
                              },
                            }
                          : {
                              disconnect: {
                                bookmarkedCourses: [{ where: { node: { id: row.original.id } } }],
                              },
                            }),
                      },
                      refetchQueries: [GetCoursesDocument],
                      // TODO: Update cache directly
                      // update: store => {
                      //   const queryData = store.readQuery<
                      //     GetCoursesQuery,
                      //     GetCoursesQueryVariables
                      //   >({
                      //     query: GetCoursesDocument,
                      //     variables: {
                      //       where: {
                      //         ...searchOptions,
                      //         ...(isShowingBoomarks
                      //           ? { bookmarkedBy_SINGLE: { id: currentUser?.id } }
                      //           : null),
                      //       },
                      //       options: {
                      //         ...paginationOptions,
                      //         sort: [{ createdAt: SortDirection.Desc }],
                      //       },
                      //     },
                      //   });

                      //   if (queryData?.courses) {
                      //     store.writeQuery<GetCoursesQuery>({
                      //       query: GetCoursesDocument,
                      //       data: {
                      //         ...queryData,
                      //         courses: queryData.courses.map(course => {
                      //           if (course.id === row.original.id) {
                      //             return { ...course, bookmarked: !course.bookmarked };
                      //           }
                      //           return course;
                      //         }),
                      //       },
                      //     });
                      //   }
                      // },
                    })
                  }
                  icon={
                    <ThemeIcon color={row.original.bookmarked ? 'red' : 'green'}>
                      <IconBookmark />
                    </ThemeIcon>
                  }
                >
                  {row.original.bookmarked ? 'Remove from bookmarks' : 'Add to boomarks'}
                </Menu.Item>
              </React.Fragment>
            )}
          />
        );
      case DataViewType.Grid:
        return (
          <Paper withBorder p={8}>
            <Stack>
              <Flex justify="space-between">
                <TextInput
                  icon={<IconSearch />}
                  variant="filled"
                  placeholder="Search"
                  onChange={value => setSearchQuery(value.currentTarget.value)}
                  rightSection={
                    <ActionIcon disabled={!searchOptions}>
                      <IconX />
                    </ActionIcon>
                  }
                />
                <Switch
                  label="Only show bookmarked"
                  labelPosition="left"
                  onChange={event => setIsShowingBoomarks(event.currentTarget.checked)}
                  checked={isShowingBoomarks}
                />
              </Flex>
              <SimpleGrid
                breakpoints={[
                  { minWidth: 'sm', cols: 1 },
                  { minWidth: 'lg', cols: 2 },
                  { minWidth: 'xl', cols: 3 },
                  { minWidth: 1920, cols: 4 },
                ]}
              >
                {loadingCourses
                  ? new Array(paginationState.pageSize)
                      .fill(0)
                      .map((_, i) => <Skeleton key={i} h={COURSE_CARD_HEIGHT} />)
                  : data?.courses.map(course => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        renderCustomActions={() => (
                          <Menu.Item
                            disabled={updatingUsers}
                            closeMenuOnClick={false}
                            onClick={() =>
                              updateUsers({
                                variables: {
                                  where: {
                                    id: currentUser?.id,
                                  },
                                  ...(!course.bookmarked
                                    ? {
                                        connect: {
                                          bookmarkedCourses: [
                                            { where: { node: { id: course.id } } },
                                          ],
                                        },
                                      }
                                    : {
                                        disconnect: {
                                          bookmarkedCourses: [
                                            { where: { node: { id: course.id } } },
                                          ],
                                        },
                                      }),
                                },
                                refetchQueries: [GetCoursesDocument],
                              })
                            }
                            icon={
                              <ThemeIcon size={rem(14)} color={course.bookmarked ? 'red' : 'green'}>
                                <IconBookmark />
                              </ThemeIcon>
                            }
                          >
                            {course.bookmarked ? 'Remove from bookmarks' : 'Add to boomarks'}
                          </Menu.Item>
                        )}
                      />
                    ))}
              </SimpleGrid>
              <Flex justify="center" gap="md">
                <Select
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    '.mantine-Select-input': { width: 90 },
                  }}
                  label="Rows per page"
                  data={pageSizeOptions.map(String)}
                  defaultValue={String(paginationState.pageSize)}
                  onChange={value =>
                    dispatchPaginationState({
                      type: PaginationActionType.changePagination,
                      payload: { pageSize: Number(value) },
                    })
                  }
                />
                <Pagination
                  total={Math.ceil(paginationState.count / paginationState.pageSize)}
                  defaultValue={paginationState.pageIndex + 1}
                  onChange={page =>
                    dispatchPaginationState({
                      type: PaginationActionType.changePagination,
                      payload: { pageIndex: page - 1 },
                    })
                  }
                />
              </Flex>
            </Stack>
          </Paper>
        );
    }
  };

  return (
    <ContentPageLayout
      title="Courses"
      headerRightElement={<DataViewSwitch value={dataViewType} onChange={setDataViewType} />}
    >
      {renderDataView()}
    </ContentPageLayout>
  );
};
