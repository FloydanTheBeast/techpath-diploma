import type { CreateUpdateCoursePlatformForm } from 'src/components/forms';
import type { CreateUpdateModalArgs } from 'src/types';

export type CreateUpdateCoursePlatformModalArgs = CreateUpdateModalArgs<
  typeof CreateUpdateCoursePlatformForm
>;
