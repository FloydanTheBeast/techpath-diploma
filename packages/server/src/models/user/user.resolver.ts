import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserRole } from '@shared/types';

import {
  AuthSessionResponse,
  AuthSessionWithUserResponse,
  UserResponse,
  UserSignInInput,
  UserSignUpInput,
} from './gql-types';
import { UserService } from './user.service';
import { AuthService } from '../../auth/auth.service';
import { CurrentUser } from '../../common/decorators';
import { GqlAuthGuard } from '../../common/guards';
import { JwtPayload } from '../../common/types';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => UserResponse)
  @UseGuards(GqlAuthGuard)
  async currentUser(@CurrentUser() { id }: JwtPayload) {
    return this.userService.getUser(id);
  }

  @Mutation(() => AuthSessionWithUserResponse, { description: 'Sign up new common user' })
  async signUp(@Args('data') data: UserSignUpInput): Promise<AuthSessionWithUserResponse> {
    const user = await this.userService.createUser({ ...data, roles: [UserRole.user] });
    const session = await this.authService.createSession(user);

    return { user, ...session };
  }

  @Mutation(() => AuthSessionWithUserResponse, { description: 'Sign in existing user' })
  async signIn(@Args('data') data: UserSignInInput): Promise<AuthSessionWithUserResponse> {
    const user = await this.userService.loginUser(data);
    const session = await this.authService.createSession(user);

    return { user, ...session };
  }

  @Mutation(() => AuthSessionResponse, { description: 'Refresh user auth session' })
  async refreshSession(@Args('refreshToken') refreshToken: string): Promise<AuthSessionResponse> {
    const session = await this.authService.refreshSession(refreshToken);

    return session;
  }
}
