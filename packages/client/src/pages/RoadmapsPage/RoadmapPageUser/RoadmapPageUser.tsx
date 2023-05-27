import React from 'react';

import { Menu, Switch, ThemeIcon } from '@mantine/core';
import {
  GetRoadmapsDocument,
  SortDirection,
  useGetRoadmapsQuery,
  useUpdateUsersMutation,
} from '@shared/graphql';
import { IconBookmark, IconListDetails } from '@tabler/icons-react';
import { Link, generatePath } from 'react-router-dom';

import { ContentPageLayout, DataGrid } from 'src/components';
import { RouteEntityType, appRoutes } from 'src/constants';
import {
  useCurrentUser,
  usePagination,
  usePaginationQueryOptions,
  useSearchQueryOptions,
} from 'src/hooks';
import { PaginationActionType } from 'src/providers';

import { ROADMAPS_TABLE_COLUMNS } from '../constants';

export const RoadmapsPageUser: React.FC = () => {
  const [isShowingBoomarks, setIsShowingBoomarks] = React.useState(false);

  const { paginationState, dispatchPaginationState } = usePagination();
  const paginationOptions = usePaginationQueryOptions();
  const searchOptions = useSearchQueryOptions(['title', 'description']);
  const { currentUser } = useCurrentUser();
  const [updateUsers, { loading: updatingUsers }] = useUpdateUsersMutation();

  const { data, loading: loadingRoadmaps } = useGetRoadmapsQuery({
    variables: {
      where: {
        ...searchOptions,
        ...(isShowingBoomarks ? { bookmarkedBy_SINGLE: { id: currentUser?.id } } : null),
      },
      options: { ...paginationOptions, sort: [{ createdAt: SortDirection.Desc }] },
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
        initialState={{
          showGlobalFilter: true,
        }}
        positionGlobalFilter="left"
        enableRowActions
        renderTopToolbarCustomActions={() => (
          <Switch
            label="Only show bookmarked"
            labelPosition="left"
            onChange={event => setIsShowingBoomarks(event.currentTarget.checked)}
            checked={isShowingBoomarks}
          />
        )}
        renderRowActionMenuItems={({ row }) => (
          <React.Fragment>
            <Menu.Item
              disabled={updatingUsers}
              closeMenuOnClick={false}
              onClick={() =>
                updateUsers({
                  variables: {
                    where: {
                      id: currentUser?.id,
                    },
                    ...(!row.original.bookmarked
                      ? {
                          connect: {
                            bookmarkedRoadmaps: [{ where: { node: { id: row.original.id } } }],
                          },
                        }
                      : {
                          disconnect: {
                            bookmarkedRoadmaps: [{ where: { node: { id: row.original.id } } }],
                          },
                        }),
                  },
                  refetchQueries: [GetRoadmapsDocument],
                })
              }
              icon={
                <ThemeIcon color={row.original.bookmarked ? 'red' : 'green'}>
                  <IconBookmark />
                </ThemeIcon>
              }
            >
              {row.original.bookmarked ? 'Remove from bookmarks' : 'Add to boomarks'}
            </Menu.Item>
            <Menu.Item
              icon={<IconListDetails />}
              component={Link}
              to={generatePath(appRoutes.roadmaps.details, {
                [RouteEntityType.roadmap]: row.original.id,
              })}
            >
              View details
            </Menu.Item>
          </React.Fragment>
        )}
      />
    </ContentPageLayout>
  );
};
