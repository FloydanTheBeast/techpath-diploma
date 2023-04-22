import type { CreateUpdateCoursePlatformForm } from 'src/components/forms';

export type CreateUpdateCoursePlatformModalArgs = {
  onSubmit: React.ComponentProps<typeof CreateUpdateCoursePlatformForm>['onSubmit'];
  defaultValues?: React.ComponentProps<typeof CreateUpdateCoursePlatformForm>['defaultValues'];
};
