import * as yup from 'yup';

import { CreateUpdateCoursePlatformFormData } from './types';

export const createCoursePlatformValidationSchema: yup.ObjectSchema<CreateUpdateCoursePlatformFormData> =
  yup.object({
    name: yup.string().required(),
    url: yup.string().url().required(),
    logoUrl: yup
      .string()
      .label('Logo Url')
      .nullable()
      .url()
      .test({
        name: 'is-image-url',
        message: ({ label }) => `${label} must point to image`,
        test: val =>
          !val ||
          ['jpg', 'jpeg', 'tiff', 'png', 'gif', 'bmp'].includes(val?.split('.').at(-1) ?? ''),
      }),
  });
