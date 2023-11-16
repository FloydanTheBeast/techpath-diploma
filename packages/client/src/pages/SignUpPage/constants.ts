import * as yup from 'yup';

import type { SignUpFormData } from './types';

export const signUpFormValidationSchema: yup.ObjectSchema<SignUpFormData> = yup.object({
  firstName: yup.string().label('First Name').required(),
  lastName: yup.string().label('Last Name').required(),
  email: yup.string().label('Email').email().required(),
  password: yup.string().min(6).label('Password').required(),
  repeatPassword: yup
    .string()
    .required()
    .oneOf([yup.ref<string>('password')], "Passwords don't match"),
});
