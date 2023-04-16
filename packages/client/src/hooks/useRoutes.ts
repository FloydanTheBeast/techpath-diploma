import React from 'react';

import _ from 'lodash';

import { RouteAccessType } from 'src/constants';
import type { RouteProps } from 'src/types';

import { useAuth } from './useAuth';
import { useCurrentUser } from './useCurrentUser';

export const useRoutes = (routesTree: RouteProps[]): RouteProps[] => {
  const { isAuthenticated } = useAuth();
  const { permissions } = useCurrentUser();

  const checkRouteAccess = React.useCallback(
    ({ accessRoles }: RouteProps): boolean => {
      return (
        accessRoles?.some(accessRole => {
          switch (accessRole) {
            case RouteAccessType.unauthorized:
              return !isAuthenticated;
            case RouteAccessType.anyAuthorized:
              return Object.values(permissions).some(Boolean);
            case RouteAccessType.hasAdminRole:
              return permissions.isAdmin;
            case RouteAccessType.hasUserRole:
              return permissions.isUser;
            default:
              return false;
          }
        }) ?? true
      );
    },
    [permissions, isAuthenticated],
  );

  const routesTreeWalker = React.useCallback(
    (routesTree: RouteProps[] = [], parentPermissions: RouteAccessType[]): RouteProps[] => {
      if (!routesTree) return [];

      return routesTree
        .filter(route => checkRouteAccess(route))
        .map(route => {
          let accessPermissions = route.accessRoles || [];
          const shouldInheritPermissions =
            _.isEmpty(route.accessRoles) || route.accessRoles?.includes(RouteAccessType.inherit);

          if (shouldInheritPermissions) {
            accessPermissions = parentPermissions;
          }

          return {
            ...route,
            element: route.element,
            childRoutes: routesTreeWalker(route.childRoutes, accessPermissions),
          };
        });
    },
    [checkRouteAccess],
  );

  return routesTreeWalker(routesTree, []);
};
