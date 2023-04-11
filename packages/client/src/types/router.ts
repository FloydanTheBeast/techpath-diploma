import type { RouteProps as OriginalRouteProps } from 'react-router-dom';

export type RouteProps = Omit<OriginalRouteProps, 'children'> & {
  childRoutes?: RouteProps[];
  // accessRoles?: RouteAccessType[]; TODO
};
