import type { CourseCreateInput } from '@shared/graphql';

export type CreateUpdateCourseFormData = Pick<CourseCreateInput, 'title' | 'description' | 'url'>;
