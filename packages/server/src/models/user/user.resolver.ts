import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

import { AuthSessionResponse, UserSignInInput, UserSignUpInput } from './gql-types';
import { UserService } from './user.service';
import { AuthService } from '../../auth/auth.service';
import { UserRole } from '../../common/types';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Query(() => String)
  async test() {
    return 'Hello';
  }

  @Mutation(() => AuthSessionResponse, { description: 'Sign up new common user' })
  async signUp(@Args('data') data: UserSignUpInput): Promise<AuthSessionResponse> {
    const user = await this.userService.createUser({ ...data, roles: [UserRole.user] });
    const session = await this.authService.createSession(user);

    return { user, ...session };
  }

  @Mutation(() => AuthSessionResponse, { description: 'Sign in existing user' })
  async signIn(@Args('data') data: UserSignInInput): Promise<AuthSessionResponse> {
    const user = await this.userService.getUser(data);
    const session = await this.authService.createSession(user);

    return { user, ...session };
  }
}
