import type { CoursePlatformCreateInput } from '@shared/graphql';

export type CreateCoursePlatformFormData = Omit<CoursePlatformCreateInput, 'courses'>;
