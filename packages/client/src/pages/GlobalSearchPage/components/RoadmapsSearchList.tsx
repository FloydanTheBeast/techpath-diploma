import React from 'react';

import { Center, Loader, SimpleGrid, Skeleton, Text } from '@mantine/core';
import { RoadmapInfoFragment, useSearchRoadmapsLazyQuery } from '@shared/graphql';
import { VirtuosoGrid } from 'react-virtuoso';

import { RoadmapCard } from 'src/components';
import { ROADMAP_CARD_HEIGHT } from 'src/components/common/RoadmapCard/constants';

import { SearchListProps } from '../types';

const RoadmapsSearchListInner: React.FC<SearchListProps> = ({ searchQuery, scrollerRef }) => {
  const [roadmaps, setroadmaps] = React.useState<RoadmapInfoFragment[]>([]);
  const [isLoadingInitialData, setIsLoadingInitialData] = React.useState(false);

  const [getRoadmaps, { loading: loadingRoadmaps }] = useSearchRoadmapsLazyQuery();

  const loadMore = React.useCallback(
    async (_: unknown, reset?: boolean) => {
      if (reset) setIsLoadingInitialData(true);

      const { data: newRoadmaps } = await getRoadmaps({
        variables: {
          searchQuery: `${searchQuery}~`,
          where: { score: { min: 0.3 } },
          limit: 24,
          offset: reset ? 0 : roadmaps.length,
        },
      });

      setroadmaps(prevRoadmaps => [
        ...(reset ? [] : prevRoadmaps),
        ...(newRoadmaps?.roadmapsFulltextRoadmapInfo.map(({ roadmap }) => roadmap) ?? []),
      ]);

      if (reset) setIsLoadingInitialData(false);
    },
    [roadmaps.length, setroadmaps, getRoadmaps, searchQuery],
  );

  // Clear roadmaps list on search query change
  React.useEffect(() => {
    loadMore(0, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <VirtuosoGrid
      data={roadmaps}
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
                  .map((_, i) => <Skeleton key={i} h={ROADMAP_CARD_HEIGHT} w="100%" />)
              : children}
          </SimpleGrid>
        )),
        Footer: () => (
          <Center py="xl">
            {loadingRoadmaps ? (
              <Loader variant="dots" size="xl" color="gray" />
            ) : (
              <Text color="dimmed">That&apos;s all for now</Text>
            )}
          </Center>
        ),
      }}
      itemContent={(_, roadmap) => <RoadmapCard roadmap={roadmap} />}
    />
  );
};

export const RoadmapsSearchList = React.memo(RoadmapsSearchListInner);
