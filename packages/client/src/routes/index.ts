import { RouteProps } from 'src/types';

import { AUTH_ROUTE } from './auth';
import { COURSE_PLATFORMS_ROUTE } from './coursePlatforms';
import { COURSES_ROUTE } from './courses';
import { HOME_ROUTE } from './home';
import { ROADMAPS_ROUTE } from './roadmaps';

export const APP_ROUTES: RouteProps[] = [
  HOME_ROUTE,
  AUTH_ROUTE,
  COURSES_ROUTE,
  COURSE_PLATFORMS_ROUTE,
  ROADMAPS_ROUTE,
];
