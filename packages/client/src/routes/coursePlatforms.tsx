import { Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { CoursePlatformsPage } from 'src/pages';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <CoursePlatformsPage />,
  },
];

export const COURSE_PLATFORMS_ROUTE: RouteProps = {
  path: appRoutes.coursePlatforms.index,
  element: <Outlet />,
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.anyAuthorized],
};
