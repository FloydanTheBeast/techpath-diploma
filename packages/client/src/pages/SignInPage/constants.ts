import * as yup from 'yup';

import { SignInFormData } from './types';

export const signInFormValidationSchema: yup.ObjectSchema<SignInFormData> = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
});
