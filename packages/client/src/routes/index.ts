import { RouteProps } from 'src/types';

import { AUTH_ROUTE } from './auth';
import { COURSES_ROUTE } from './courses';
import { HOME_ROUTE } from './home';

export const APP_ROUTES: RouteProps[] = [HOME_ROUTE, AUTH_ROUTE, COURSES_ROUTE];
