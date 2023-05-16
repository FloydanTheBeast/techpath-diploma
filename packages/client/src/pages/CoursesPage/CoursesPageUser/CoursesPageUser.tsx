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
  TextInput,
} from '@mantine/core';
import { SortDirection, useGetCoursesQuery } from '@shared/graphql';
import { IconListDetails, IconSearch, IconX } from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, DataGrid } from 'src/components';
import { COURSE_CARD_HEIGHT, CourseCard, DataViewSwitch } from 'src/components/common';
import { DataViewType } from 'src/components/common/DataViewSwitch/constants';
import { RouteEntityType, appRoutes } from 'src/constants';
import {
  usePagination,
  usePaginationQueryOptions,
  useSearch,
  useSearchQueryOptions,
} from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { COURSES_TABLE_COLUMNS } from '../constants';

const columns = COURSES_TABLE_COLUMNS.filter(col => !['id'].includes(col.accessorKey as string));

export const CoursesPageUser: React.FC = () => {
  const paginationOptions = usePaginationQueryOptions();
  const { paginationState, dispatchPaginationState, pageSizeOptions } = usePagination();
  const { setSearchQuery } = useSearch();
  const searchOptions = useSearchQueryOptions(['title', 'description']);

  const { data, loading: loadingCourses } = useGetCoursesQuery({
    variables: {
      where: searchOptions,
      options: { ...paginationOptions, sort: [{ createdAt: SortDirection.Desc }] },
    },
  });

  const [dataViewType, setDataViewType] = React.useState<DataViewType>(DataViewType.Table);

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
            state={{ isLoading: loadingCourses }}
            rowCount={paginationState.count}
            mantinePaginationProps={{ rowsPerPageOptions: pageSizeOptions.map(String) }}
            enableRowActions
            renderRowActionMenuItems={({ row }) => (
              <Menu.Item
                icon={<IconListDetails />}
                component={Link}
                to={generatePath(appRoutes.courses.details, {
                  [RouteEntityType.course]: row.original.id,
                })}
              >
                View details
              </Menu.Item>
            )}
          />
        );
      case DataViewType.Grid:
        return (
          <Paper withBorder p={8}>
            <Stack>
              <Flex>
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
                  : data?.courses.map(course => <CourseCard key={course.id} course={course} />)}
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
