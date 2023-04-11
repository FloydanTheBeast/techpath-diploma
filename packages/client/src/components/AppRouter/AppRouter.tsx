import React from 'react';

import { Nullable } from '@shared/types';
import { Route, Routes, Navigate, matchPath, useLocation } from 'react-router-dom';

import { appRoutes } from 'src/constants';
import { useRoutes } from 'src/hooks';
import { APP_ROUTES } from 'src/routes';
import type { RouteProps } from 'src/types';

const renderNestedRoutes = (routesProps: RouteProps[] = []) => {
  const renderRouteContent = (routeProps: Nullable<RouteProps>) => {
    if (!routeProps) return null;

    const { element, childRoutes, index, ...restProps } = routeProps;

    return (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      <Route index={index as any} key={routeProps.path || 'index'} element={element} {...restProps}>
        {!index && renderNestedRoutes(childRoutes)}
      </Route>
    );
  };

  return routesProps.map(renderRouteContent);
};

export const AppRouter: React.FC = React.memo(() => {
  // const { isAuthenticated } = useAuth(); TODO
  const isAuthenticated = false;
  const routes = useRoutes(APP_ROUTES);

  const location = useLocation();

  if (!matchPath({ path: appRoutes.auth.index, end: false }, location.pathname) && !isAuthenticated)
    return <Navigate to={appRoutes.auth.index} replace />;

  return (
    <Routes>
      {renderNestedRoutes(routes)}

      <Route path="*" element={<h2>Not found</h2>} />
    </Routes>
  );
});
