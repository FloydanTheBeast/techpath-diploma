import { Navigate, Outlet } from 'react-router';

import { appRoutes } from 'src/constants';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <Navigate to={appRoutes.auth.signin} replace />,
  },
  {
    path: appRoutes.auth.signin,
    element: <h2>Sign up</h2>,
  },
  {
    path: appRoutes.auth.signup,
    element: <h2>Sign in</h2>,
  },
];

export const AUTH_ROUTE: RouteProps = {
  path: appRoutes.auth.index,
  element: <Outlet />,
  childRoutes: ROUTES,
};
