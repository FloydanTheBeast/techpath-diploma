import React from 'react';

import type { RouteProps } from 'src/types';

export const useRoutes = (routesTree: RouteProps[]): RouteProps[] => {
  // TODO:
  // const { currentUser } = useAuth();
  // const userRole = currentUser?.role;

  // const checkRouteAccess = React.useCallback(
  //   ({ accessRoles }: RouteProps): boolean => {
  //     return (
  //       accessRoles?.some(accessRole => {
  //         switch (accessRole) {
  //           case RouteAccessType.unauthorized:
  //             return !userRole;
  //           case RouteAccessType.anyAuthorized:
  //             return !!userRole;
  //           case RouteAccessType.agent:
  //             return userRole === UserRole.Agent;
  //           case RouteAccessType.admin:
  //             return userRole === UserRole.Administrator;
  //           default:
  //             return false;
  //         }
  //       }) ?? true
  //     );
  //   },
  //   [userRole],
  // );

  const routesTreeWalker = React.useCallback((routesTree: RouteProps[] = []): RouteProps[] => {
    if (!routesTree) return [];

    return routesTree.map(route => {
      return {
        ...route,
        element: route.element,
        childRoutes: routesTreeWalker(route.childRoutes),
      };
    }); // .filter(checkRouteAccess);
  }, []);

  return routesTreeWalker(routesTree);
};
