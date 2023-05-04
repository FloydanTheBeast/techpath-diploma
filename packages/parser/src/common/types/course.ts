import type { CoursePrice } from '@shared/graphql';
import type { Nullable } from '@shared/types';

export type UnprocessedCourse = {
  title: string;
  description: string;
  url: string;
  price: Nullable<Pick<CoursePrice, 'currencyCodeISO' | 'price'>>;
  platform: string;
  languages: Nullable<string[]>;
};
