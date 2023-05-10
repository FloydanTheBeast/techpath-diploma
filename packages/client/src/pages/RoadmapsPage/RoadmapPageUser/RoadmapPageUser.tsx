import React from 'react';

import { Menu } from '@mantine/core';
import { useGetRoadmapsQuery } from '@shared/graphql';
import { IconListDetails } from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, DataGrid } from 'src/components';
import { RouteEntityType, appRoutes } from 'src/constants';
import { usePagination, usePaginationQueryOptions } from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { ROADMAPS_TABLE_COLUMNS } from '../constants';

export const RoadmapsPageUser: React.FC = () => {
  const { paginationState, dispatchPaginationState } = usePagination();
  const paginationOptions = usePaginationQueryOptions();

  const { data, loading: loadingRoadmaps } = useGetRoadmapsQuery({
    variables: {
      options: paginationOptions,
    },
  });

  const roadmaps = data?.roadmaps;

  React.useEffect(() => {
    if (!loadingRoadmaps) {
      dispatchPaginationState({
        type: PaginationActionType.changeCount,
        payload: { count: data?.roadmapsAggregate.count || 0 },
      });
    }
  }, [dispatchPaginationState, loadingRoadmaps, data?.roadmapsAggregate.count]);

  return (
    <ContentPageLayout title="Roadmaps">
      <DataGrid
        state={{ isLoading: loadingRoadmaps }}
        columns={ROADMAPS_TABLE_COLUMNS}
        data={roadmaps ?? []}
        rowCount={paginationState.count}
        enableRowActions
        renderRowActionMenuItems={({ row }) => (
          <Menu.Item
            icon={<IconListDetails />}
            component={Link}
            to={generatePath(appRoutes.roadmaps.details, {
              [RouteEntityType.roadmap]: row.original.id,
            })}
          >
            View details
          </Menu.Item>
        )}
      />
    </ContentPageLayout>
  );
};
