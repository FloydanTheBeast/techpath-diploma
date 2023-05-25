import React from 'react';

import { ActionIcon, Flex, Loader } from '@mantine/core';
import { SpotlightAction, SpotlightProvider, spotlight } from '@mantine/spotlight';
import { useGlobalSearchQuery } from '@shared/graphql';
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
      minScore: 0.5,
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
          description: course.description?.slice(0, 100),
          onTrigger: () =>
            navigate(
              generatePath(appRoutes.courses.details, { [RouteEntityType.course]: course.id }),
            ),
        })) ?? []),
        ...(data?.roadmapsFulltextRoadmapInfo.map(({ roadmap }) => ({
          title: roadmap.title,
          group: 'Roadmaps',
          description: roadmap.description?.slice(0, 100),
          onTrigger: () =>
            navigate(
              generatePath(appRoutes.roadmaps.details, { [RouteEntityType.roadmap]: roadmap.id }),
            ),
        })) ?? []),
      ].filter(Boolean) as SpotlightAction[],
    [data, navigate],
  );

  const navigateToSearchResults = () => {
    navigate(`/search?query=${query}`);
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
