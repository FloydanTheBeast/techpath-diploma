import React from 'react';

import { LoadingOverlay } from '@mantine/core';
import { Nullable } from '@shared/types';
import { Route, Routes } from 'react-router-dom';

import { useCurrentUser, useRoutes } from 'src/hooks';
import { NotFoundPage } from 'src/pages';
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

const AppRouter: React.FC = React.memo(() => {
  const { loadingCurrentUser } = useCurrentUser();
  const routes = useRoutes(APP_ROUTES);

  return (
    <React.Fragment>
      <LoadingOverlay overlayOpacity={1} visible={loadingCurrentUser} />
      <Routes>
        {renderNestedRoutes(routes)}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
});

AppRouter.displayName = 'AppRouter';

export { AppRouter };
