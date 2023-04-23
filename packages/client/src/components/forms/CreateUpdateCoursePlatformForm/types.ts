import type { CoursePlatformCreateInput } from '@shared/graphql';

export type CreateUpdateCoursePlatformFormData = Omit<CoursePlatformCreateInput, 'courses'>;
