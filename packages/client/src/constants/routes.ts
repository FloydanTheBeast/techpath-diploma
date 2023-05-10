import { RouteEntityType } from './reactRouter';

export const app = {
  index: '/',
};

export const auth = {
  index: '/auth',
  signin: '/auth/signin',
  signup: '/auth/signup',
} as const;

export const courses = {
  index: '/courses',
};

export const roadmaps = {
  index: '/roadmaps',
  new: '/roadmaps/new',
  details: `/roadmaps/:${RouteEntityType.roadmap}`,
};

export const coursePlatforms = {
  index: '/coursePlatforms',
};
