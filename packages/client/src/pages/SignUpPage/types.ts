import { UserSignUpInput } from '@shared/graphql';

export type SignUpFormData = UserSignUpInput & { repeatPassword: string };
