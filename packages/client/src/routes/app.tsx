import { Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { GlobalSearchPage, HomePage, UserProfilePage } from 'src/pages';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <HomePage />,
    accessRoles: [RouteAccessType.inherit],
  },
  {
    path: appRoutes.app.search,
    element: <GlobalSearchPage />,
    accessRoles: [RouteAccessType.anyAuthorized],
  },
  {
    path: appRoutes.app.profile,
    element: <UserProfilePage />,
    accessRoles: [RouteAccessType.hasUserRole],
  },
];
export const APP_ROUTE: RouteProps = {
  path: appRoutes.app.index,
  element: <Outlet />,
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.unauthorized, RouteAccessType.anyAuthorized],
};
