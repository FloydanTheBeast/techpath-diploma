import React from 'react';

import _ from 'lodash';

import { RouteAccessType } from 'src/constants';
import type { RouteProps } from 'src/types';

import { useCurrentUser } from './useCurrentUser';

export const useRoutes = (routesTree: RouteProps[]): RouteProps[] => {
  const { isAuthorized, permissions } = useCurrentUser();

  const checkRouteAccess = React.useCallback(
    ({ accessRoles }: RouteProps): boolean => {
      return (
        accessRoles?.some(accessRole => {
          switch (accessRole) {
            case RouteAccessType.unauthorized:
              return !isAuthorized;
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
    [permissions, isAuthorized],
  );

  const routesTreeWalker = React.useCallback(
    (routesTree: RouteProps[] = [], parentPermissions: RouteAccessType[]): RouteProps[] => {
      if (!routesTree) return [];

      return routesTree
        .map(({ accessRoles, childRoutes, ...routeProps }) => {
          accessRoles = accessRoles || [];

          const shouldInheritPermissions =
            _.isEmpty(accessRoles) || accessRoles?.includes(RouteAccessType.inherit);

          if (shouldInheritPermissions) {
            accessRoles = [
              ...parentPermissions,
              ...accessRoles.filter(role => role !== RouteAccessType.inherit),
            ];
          }

          return {
            ...routeProps,
            accessRoles,
            childRoutes: routesTreeWalker(childRoutes, accessRoles),
          };
        })
        .filter(checkRouteAccess);
    },
    [checkRouteAccess],
  );

  return routesTreeWalker(routesTree, []);
};
