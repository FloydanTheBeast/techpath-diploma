import { RouteProps } from 'src/types';

import { APP_ROUTE } from './app';
import { AUTH_ROUTE } from './auth';
import { COURSE_PLATFORMS_ROUTE } from './coursePlatforms';
import { COURSES_ROUTE } from './courses';
import { ROADMAPS_ROUTE } from './roadmaps';

export const APP_ROUTES: RouteProps[] = [
  APP_ROUTE,
  AUTH_ROUTE,
  COURSES_ROUTE,
  COURSE_PLATFORMS_ROUTE,
  ROADMAPS_ROUTE,
];
