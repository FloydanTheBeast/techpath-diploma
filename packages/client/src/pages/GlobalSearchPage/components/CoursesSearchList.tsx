import React from 'react';

import { Center, Loader, SimpleGrid, Skeleton, Text } from '@mantine/core';
import { CourseInfoFragment, useSearchCoursesLazyQuery } from '@shared/graphql';
import { VirtuosoGrid } from 'react-virtuoso';

import { COURSE_CARD_HEIGHT, CourseCard } from 'src/components';

import { SearchListProps } from '../types';

const CoursesSearchListInner: React.FC<SearchListProps> = ({ searchQuery, scrollerRef }) => {
  const [courses, setCourses] = React.useState<CourseInfoFragment[]>([]);
  const [isLoadingInitialData, setIsLoadingInitialData] = React.useState(false);

  const [getCourses, { loading: loadingCourses }] = useSearchCoursesLazyQuery();

  const loadMore = React.useCallback(
    async (_: unknown, reset?: boolean) => {
      if (reset) setIsLoadingInitialData(true);

      const { data: newCourses } = await getCourses({
        variables: {
          searchQuery: `${searchQuery}~`,
          where: { score: { min: 0.8 } },
          limit: 24,
          offset: reset ? 0 : courses.length,
        },
      });

      setCourses(prevCourses => [
        ...(reset ? [] : prevCourses),
        ...(newCourses?.coursesFulltextCourseInfo.map(({ course }) => course) ?? []),
      ]);

      if (reset) setIsLoadingInitialData(false);
    },
    [courses.length, setCourses, getCourses, searchQuery],
  );

  // Clear courses list on search query change
  React.useEffect(() => {
    loadMore(0, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <VirtuosoGrid
      data={courses}
      customScrollParent={scrollerRef}
      overscan={24}
      endReached={loadMore}
      components={{
        // eslint-disable-next-line react/display-name
        List: React.forwardRef(({ children, ...rest }, ref) => (
          <SimpleGrid
            ref={ref}
            breakpoints={[
              { minWidth: 'sm', cols: 1 },
              { minWidth: 'lg', cols: 2 },
              { minWidth: 'xl', cols: 3 },
              { minWidth: 1920, cols: 4 },
            ]}
            {...rest}
          >
            {isLoadingInitialData
              ? new Array(12)
                  .fill(0)
                  .map((_, i) => <Skeleton key={i} h={COURSE_CARD_HEIGHT} w="100%" />)
              : children}
          </SimpleGrid>
        )),
        Footer: () => (
          <Center py="xl">
            {loadingCourses ? (
              <Loader variant="dots" size="xl" color="gray" />
            ) : (
              <Text color="dimmed">That&apos;s all for now</Text>
            )}
          </Center>
        ),
      }}
      itemContent={(_, course) => <CourseCard course={course} />}
    />
  );
};

export const CoursesSearchList = React.memo(CoursesSearchListInner);
