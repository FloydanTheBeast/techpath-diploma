import type { CourseCreateInput } from '@shared/graphql';
import { Nullable } from '@shared/types';

export type CreateUpdateCourseFormData = Pick<
  CourseCreateInput,
  'title' | 'description' | 'url'
> & {
  platformId: Nullable<string>;
  topicTagsIds: Nullable<string[]>;
};
