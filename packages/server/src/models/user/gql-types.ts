import { Field, InputType, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserResponse {
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
  @Field(() => UserResponse)
  user: UserResponse;
  @Field()
  accessToken: string;
  @Field()
  accessTokenExpiresIn: number;
  @Field()
  refreshToken: string;
  @Field()
  refreshTokenExpiresIn: number;
}
