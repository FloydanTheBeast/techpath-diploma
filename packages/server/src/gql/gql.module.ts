import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule, JwtService } from '@nestjs/jwt';

import { GqlService } from './gql.service';
import { gqlProviderFactory } from './providers/gql-provider-factory';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      imports: [JwtModule],
      driver: ApolloDriver,
      useFactory: gqlProviderFactory,
      inject: [ConfigService, JwtService],
    }),
  ],
  providers: [GqlService],
  exports: [GqlService],
})
export class GqlModule {}
