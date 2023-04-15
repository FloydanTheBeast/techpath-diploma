import { Outlet } from 'react-router';

import { appRoutes } from 'src/constants';
import { AppLayout } from 'src/layouts';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <h2>Home page</h2>,
  },
];
export const HOME_ROUTE: RouteProps = {
  path: appRoutes.app.index,
  element: (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ),
  childRoutes: ROUTES,
};
