import { Navigate, Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { AuthLayout } from 'src/layouts';
import { SignInPage, SignUpPage } from 'src/pages';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <Navigate to={appRoutes.auth.signin} replace />,
  },
  {
    path: appRoutes.auth.signin,
    element: <SignInPage />,
  },
  {
    path: appRoutes.auth.signup,
    element: <SignUpPage />,
  },
];

export const AUTH_ROUTE: RouteProps = {
  path: appRoutes.auth.index,
  element: (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  ),
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.unauthorized],
};
