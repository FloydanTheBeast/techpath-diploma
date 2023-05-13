import { Outlet } from 'react-router';

import { RouteAccessType, appRoutes } from 'src/constants';
import { CourseDetailsPage } from 'src/pages';
import { CoursesPage } from 'src/pages/CoursesPage';
import { RouteProps } from 'src/types';

export const ROUTES: RouteProps[] = [
  {
    index: true,
    element: <CoursesPage />,
  },
  {
    path: appRoutes.courses.details,
    element: <CourseDetailsPage />,
  },
];

export const COURSES_ROUTE: RouteProps = {
  path: appRoutes.courses.index,
  element: <Outlet />,
  childRoutes: ROUTES,
  accessRoles: [RouteAccessType.anyAuthorized],
};
