import React from 'react';

import { ActionIcon, Flex, Loader, Text } from '@mantine/core';
import { SpotlightAction, SpotlightProvider, spotlight } from '@mantine/spotlight';
import { useGlobalSearchQuery } from '@shared/graphql';
import { clearHtml } from '@shared/utils';
import { IconSearch } from '@tabler/icons-react';
import { generatePath, useNavigate } from 'react-router';

import { RouteEntityType, appRoutes } from 'src/constants';
import { useDebounce } from 'src/hooks';

export const GlobalSearchProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [query, setQuery] = React.useState('');

  const navigate = useNavigate();
  const searchQuery = useDebounce(query, 1000);

  const { data, loading } = useGlobalSearchQuery({
    variables: {
      searchQuery: `${searchQuery}~`, // `~` is used for fuzzy search. Ref: https://lucene.apache.org/core/2_9_4/queryparsersyntax.html
      minScore: 0.3,
      limit: 7,
    },
    skip: !searchQuery,
  });

  const actions = React.useMemo(
    (): SpotlightAction[] =>
      [
        ...(data?.coursesFulltextCourseInfo.map(({ course }) => ({
          title: course.title,
          group: 'Courses',
          description: (
            <Text lineClamp={3} sx={{ '& *:first-child': { marginTop: 0 } }}>
              {clearHtml(course.description)}
            </Text>
          ),
          onTrigger: () =>
            navigate(
              generatePath(appRoutes.courses.details, { [RouteEntityType.course]: course.id }),
            ),
        })) ?? []),
        ...(data?.roadmapsFulltextRoadmapInfo.map(({ roadmap }) => ({
          title: roadmap.title,
          group: 'Roadmaps',
          description: (
            <Text lineClamp={3} sx={{ '& *:first-child': { marginTop: 0 } }}>
              {clearHtml(roadmap.description)}
            </Text>
          ) as any,
          onTrigger: () =>
            navigate(
              generatePath(appRoutes.roadmaps.details, { [RouteEntityType.roadmap]: roadmap.id }),
            ),
        })) ?? []),
      ].filter(Boolean) as SpotlightAction[],
    [data, navigate],
  );

  const navigateToSearchResults = () => {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <SpotlightProvider
      actions={actions}
      onQueryChange={setQuery}
      shortcut="ctrl + K"
      searchPlaceholder="Search"
      filter={(_, actions) => actions}
      onKeyDown={event => {
        if (event.ctrlKey && event.key === 'Enter') {
          spotlight.close();
          navigateToSearchResults();
        }
      }}
      searchInputProps={{
        rightSectionWidth: 100,
        rightSection: (
          <Flex w="100%" pr="md" justify="end" align="center" gap="sm">
            {loading && <Loader size="xs" color="gray" variant="bars" />}
            <ActionIcon onClick={navigateToSearchResults}>
              <IconSearch />
            </ActionIcon>
          </Flex>
        ),
      }}
    >
      {/* <GlobalSearch /> */}
      {children}
    </SpotlightProvider>
  );
};
