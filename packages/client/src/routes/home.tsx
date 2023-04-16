import { Title } from '@mantine/core';
import { Outlet } from 'react-router';

import { appRoutes } from 'src/constants';
import { LayoutResolver } from 'src/layouts';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <Title>Home page</Title>,
  },
];
export const HOME_ROUTE: RouteProps = {
  path: appRoutes.app.index,
  element: (
    <LayoutResolver>
      <Outlet />
    </LayoutResolver>
  ),
  childRoutes: ROUTES,
};
