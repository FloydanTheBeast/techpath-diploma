import React from 'react';

import { Flex, Grid, SimpleGrid } from '@mantine/core';
import { useGetCoursesQuery } from '@shared/graphql';

import { ContentPageLayout, DataGrid } from 'src/components';
import { CourseCard, DataViewSwitch } from 'src/components/common';
import { DataViewType } from 'src/components/common/DataViewSwitch/constants';

import { COURSES_TABLE_COLUMNS } from '../constants';

const columns = COURSES_TABLE_COLUMNS.filter(col => !['id'].includes(col.accessorKey as string));

export const CoursesPageUser: React.FC = () => {
  const { data, loading: loadingCourses } = useGetCoursesQuery();
  const [dataViewType, setDataViewType] = React.useState<DataViewType>(DataViewType.Table);

  const dataView = React.useMemo(() => {
    switch (dataViewType) {
      case DataViewType.Table:
        return (
          <DataGrid
            columns={columns}
            data={data?.courses ?? []}
            state={{ isLoading: loadingCourses }}
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
  }, [dataViewType, data, loadingCourses]);

  return (
    <ContentPageLayout
      title="Courses"
      headerRightElement={<DataViewSwitch value={dataViewType} onChange={setDataViewType} />}
    >
      {dataView}
    </ContentPageLayout>
  );
};
