import React from 'react';

import { SimpleGrid } from '@mantine/core';
import { useGetCoursesQuery } from '@shared/graphql';

import { ContentPageLayout, DataGrid } from 'src/components';
import { CourseCard, DataViewSwitch } from 'src/components/common';
import { DataViewType } from 'src/components/common/DataViewSwitch/constants';
import { usePagination, usePaginationQueryOptions, useSearchQueryOptions } from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { COURSES_TABLE_COLUMNS } from '../constants';

const columns = COURSES_TABLE_COLUMNS.filter(col => !['id'].includes(col.accessorKey as string));

export const CoursesPageUser: React.FC = () => {
  const paginationOptions = usePaginationQueryOptions();
  const { paginationState, dispatchPaginationState } = usePagination();
  const searchOptions = useSearchQueryOptions(['title', 'description']);

  const { data, loading: loadingCourses } = useGetCoursesQuery({
    variables: {
      where: searchOptions,
      options: paginationOptions,
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

  const dataView = React.useMemo(() => {
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
          />
        );
      case DataViewType.Grid:
        return (
          <SimpleGrid
            breakpoints={[
              { minWidth: 'xs', cols: 1 },
              { minWidth: 'sm', cols: 2 },
              { minWidth: 'lg', cols: 3 },
              { minWidth: 'xl', cols: 4 },
            ]}
          >
            {data?.courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </SimpleGrid>
        );
    }
  }, [dataViewType, data, loadingCourses, paginationState.count]);

  return (
    <ContentPageLayout
      title="Courses"
      headerRightElement={<DataViewSwitch value={dataViewType} onChange={setDataViewType} />}
    >
      {dataView}
    </ContentPageLayout>
  );
};
