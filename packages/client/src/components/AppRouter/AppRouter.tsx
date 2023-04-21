import React from 'react';

import { LoadingOverlay } from '@mantine/core';
import { Nullable } from '@shared/types';
import { Route, Routes, useLocation } from 'react-router-dom';

import { useCurrentUser, useRoutes } from 'src/hooks';
import { LayoutResolver } from 'src/layouts';
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

const AppRouter: React.FC = () => {
  const { loadingCurrentUser } = useCurrentUser();
  const routes = useRoutes(APP_ROUTES);
  const location = useLocation();

  // scroll to top on routing
  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <React.Fragment>
      <LoadingOverlay overlayOpacity={1} visible={loadingCurrentUser} />
      <Routes>
        {routes.map(({ element, childRoutes, index, ...routeProps }) => (
          <Route
            key={routeProps.path || 'index'}
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            index={index as any}
            {...routeProps}
            element={<LayoutResolver>{element}</LayoutResolver>}
          >
            {renderNestedRoutes(childRoutes)}
          </Route>
        ))}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </React.Fragment>
  );
};

export { AppRouter };
