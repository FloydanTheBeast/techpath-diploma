import { Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { GlobalSearchPage, HomePage } from 'src/pages';
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
];
export const APP_ROUTE: RouteProps = {
  path: appRoutes.app.index,
  element: <Outlet />,
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.unauthorized, RouteAccessType.anyAuthorized],
};
