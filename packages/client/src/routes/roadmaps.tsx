import { Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { NewRoadmapPage, RoadmapDetailsPage, RoadmapsPage } from 'src/pages';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <RoadmapsPage />,
  },
  {
    path: appRoutes.roadmaps.new,
    element: <NewRoadmapPage />,
    accessRoles: [RouteAccessType.hasAdminRole],
  },
  {
    path: appRoutes.roadmaps.details,
    element: <RoadmapDetailsPage />,
  },
];

export const ROADMAPS_ROUTE: RouteProps = {
  path: appRoutes.roadmaps.index,
  element: <Outlet />,
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.anyAuthorized],
};
