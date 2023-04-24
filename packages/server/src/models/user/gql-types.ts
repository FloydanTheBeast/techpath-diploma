import { Field, InputType, ObjectType } from '@nestjs/graphql';

import { User } from '../../ogm-types';

@ObjectType()
export class UserResponse implements Omit<User, 'password'> {
  @Field()
  id: string;
  @Field()
  email: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field(() => [String])
  roles: string[];
}

@InputType()
export class UserSignUpInput {
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
}

@InputType()
export class UserSignInInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType()
export class AuthSessionResponse {
  @Field()
  accessToken: string;
  @Field()
  accessTokenExpiresIn: number;
  @Field()
  refreshToken: string;
  @Field()
  refreshTokenExpiresIn: number;
}

@ObjectType()
export class AuthSessionWithUserResponse extends AuthSessionResponse {
  @Field(() => UserResponse)
  user: User;
}
