import React from 'react';

import {
  ActionIcon,
  Group,
  SegmentedControl,
  SimpleGrid,
  Skeleton,
  Stack,
  TextInput,
} from '@mantine/core';
import { useSearchCoursesQuery, useSearchRoadmapsQuery } from '@shared/graphql';
import { IconSearch } from '@tabler/icons-react';
import { useSearchParams } from 'react-router-dom';

import { COURSE_CARD_HEIGHT, ContentPageLayout, CourseCard, RoadmapCard } from 'src/components';
import { SEARCH_ENTITY_QUERY_STRING_NAME, SEARCH_QUERY_STRING_NAME } from 'src/constants';
import { useDebounce } from 'src/hooks';

export const GlobalSearchPage: React.FC = () => {
  const [urlSearchParams, setUrlsSearchParams] = useSearchParams();
  const querySearchParam = urlSearchParams.get(SEARCH_QUERY_STRING_NAME) ?? '';
  const entitySearchParam = urlSearchParams.get(SEARCH_ENTITY_QUERY_STRING_NAME) ?? 'courses';

  const [query, setQuery] = React.useState(querySearchParam);
  const [searchEntity, setSearchEntity] = React.useState(entitySearchParam);

  const searchQuery = useDebounce(query, 1000);

  const { data: coursesData, loading: loadingCourses } = useSearchCoursesQuery({
    variables: {
      searchQuery: `${searchQuery}~`,
      where: {
        score: { min: 0.5 },
      },
      limit: 50,
    },
    skip: !searchQuery || searchEntity !== 'courses', // TODO: Move to constants
  });

  const { data: roadmapsData, loading: loadingRoadmaps } = useSearchRoadmapsQuery({
    variables: {
      searchQuery: `${searchQuery}~`,
      where: {
        score: { min: 0.0 },
      },
      limit: 50,
    },
    skip: !searchQuery || searchEntity !== 'roadmaps', // TODO: Move to constants
  });

  const renderData = React.useCallback(() => {
    if (searchEntity === 'courses') {
      return loadingCourses
        ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} h={COURSE_CARD_HEIGHT} />)
        : coursesData?.coursesFulltextCourseInfo.map(({ course }) => (
            <CourseCard key={course.id} course={course} />
          ));
    }

    if (searchEntity === 'roadmaps') {
      return loadingRoadmaps
        ? new Array(12).fill(0).map((_, i) => <Skeleton key={i} h={COURSE_CARD_HEIGHT} />)
        : roadmapsData?.roadmapsFulltextRoadmapInfo.map(({ roadmap }) => (
            <RoadmapCard key={roadmap.id} roadmap={roadmap} />
          ));
    }
  }, [coursesData, roadmapsData, loadingCourses, loadingRoadmaps, searchEntity]);

  return (
    <ContentPageLayout title="Search">
      <Stack>
        <Group>
          <TextInput
            placeholder="Search"
            defaultValue={querySearchParam}
            onChange={event => {
              setQuery(event.target.value);
              setUrlsSearchParams(prev => ({
                ...Object.fromEntries(prev.entries()),
                [SEARCH_QUERY_STRING_NAME]: event.target.value,
              }));
            }}
          />
          <SegmentedControl
            data={[
              { label: 'Courses', value: 'courses' },
              { label: 'Roadmaps', value: 'roadmaps' },
            ]}
            defaultValue={entitySearchParam}
            onChange={value => {
              setSearchEntity(value);
              setUrlsSearchParams(prev => ({
                ...Object.fromEntries(prev.entries()),
                [SEARCH_ENTITY_QUERY_STRING_NAME]: value,
              }));
            }}
          />
        </Group>
        <SimpleGrid
          breakpoints={[
            { minWidth: 'sm', cols: 1 },
            { minWidth: 'lg', cols: 2 },
            { minWidth: 'xl', cols: 3 },
            { minWidth: 1920, cols: 4 },
          ]}
        >
          {renderData()}
        </SimpleGrid>
      </Stack>
    </ContentPageLayout>
  );
};
