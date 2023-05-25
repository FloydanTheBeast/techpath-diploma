import React from 'react';

import { Group, SegmentedControl, Stack, TextInput } from '@mantine/core';
import { useSearchParams } from 'react-router-dom';

import { ContentPageLayout } from 'src/components';
import { SEARCH_ENTITY_QUERY_STRING_NAME, SEARCH_QUERY_STRING_NAME } from 'src/constants';
import { useDebounce } from 'src/hooks';

import { CoursesSearchList, RoadmapsSearchList } from './components';

export const GlobalSearchPage: React.FC = () => {
  const [urlSearchParams, setUrlsSearchParams] = useSearchParams();
  const querySearchParam = urlSearchParams.get(SEARCH_QUERY_STRING_NAME) ?? '';
  const entitySearchParam = urlSearchParams.get(SEARCH_ENTITY_QUERY_STRING_NAME) ?? 'courses';

  const [query, setQuery] = React.useState(querySearchParam);
  const [searchEntity, setSearchEntity] = React.useState(entitySearchParam);
  const [containerRef, setContainerRef] = React.useState<HTMLDivElement | null>(null);

  const searchQuery = useDebounce(query, 1000);

  const resultsList = React.useMemo(() => {
    if (searchEntity === 'courses') {
      return (
        <CoursesSearchList searchQuery={searchQuery} scrollerRef={containerRef ?? undefined} />
      );
    }

    if (searchEntity === 'roadmaps') {
      return (
        <RoadmapsSearchList searchQuery={searchQuery} scrollerRef={containerRef ?? undefined} />
      );
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchEntity, searchQuery, containerRef]);

  return (
    <ContentPageLayout title="Search" ref={setContainerRef}>
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
        {resultsList}
      </Stack>
    </ContentPageLayout>
  );
};
