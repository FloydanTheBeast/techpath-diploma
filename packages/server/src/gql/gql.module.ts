import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';

import { GqlService } from './gql.service';
import { gqlProviderFactory } from './providers/gql-provider-factory';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: gqlProviderFactory,
      inject: [ConfigService],
    }),
  ],
  providers: [GqlService],
  exports: [GqlService],
})
export class GqlModule {}
