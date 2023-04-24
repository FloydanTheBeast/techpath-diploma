import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { GraphQLError } from 'graphql';

import { UserSignInInput } from './gql-types';
import { GqlService } from '../../gql/gql.service';
import { UserCreateInput } from '../../ogm-types';

@Injectable()
export class UserService {
  private userModel;

  constructor(private readonly gqlService: GqlService) {
    this.userModel = this.gqlService.ogm.model('User');
  }

  async getUser(id: string) {
    return (await this.userModel.find({ where: { id } }))[0];
  }

  async createUser(createUserInput: UserCreateInput) {
    const user = (
      await this.userModel.create({
        input: [
          {
            ...createUserInput,
            password: await bcrypt.hash(createUserInput.password, 10),
          },
        ],
      })
    ).users[0];

    if (!user) {
      throw new GraphQLError('Error while creating a user');
    }

    return user;
  }

  async loginUser({ password, email }: UserSignInInput) {
    const user = (await this.userModel.find({ where: { email } }))[0];

    if (!user) {
      throw new GraphQLError('User not found');
    }

    if (!(await bcrypt.compare(password, user.password))) {
      throw new GraphQLError('User not found');
    }

    return user;
  }
}
