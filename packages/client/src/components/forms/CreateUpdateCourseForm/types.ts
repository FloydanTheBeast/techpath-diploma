import type { CourseCreateInput } from '@shared/graphql';
import { Nullable } from '@shared/types';

export type CreateUpdateCourseFormData = Pick<
  CourseCreateInput,
  'title' | 'description' | 'url' | 'difficulty'
> & {
  platformId: Nullable<string>;
  topicTagsIds: Nullable<string[]>;
  languageCountryCodeISO: Nullable<string>;
  price: Nullable<{
    price: Nullable<number>;
    currencyCodeISO: Nullable<string>;
  }>;
};
