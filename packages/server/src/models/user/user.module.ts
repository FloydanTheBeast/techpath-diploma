import { Module } from '@nestjs/common';

import { UserResolver } from './user.resolver';
import { UserService } from './user.service';
import { AuthModule } from '../../auth/auth.module';
import { GqlService } from '../../gql/gql.service';

@Module({
  imports: [AuthModule],
  providers: [UserResolver, GqlService, UserService],
  exports: [UserResolver],
})
export class UserModule {}
