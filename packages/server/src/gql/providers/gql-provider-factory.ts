import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GqlModuleAsyncOptions } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { ForbiddenError } from 'apollo-server';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import neo4j from 'neo4j-driver';

import { Neo4GqlAuthPlugin } from './neo4j-gql-auth.plugin';
import { AppConfig } from '../../common/types';
import { typeDefs } from '../type-defs';

export const gqlProviderFactory: GqlModuleAsyncOptions<ApolloDriverConfig>['useFactory'] = async (
  configService: ConfigService<AppConfig>,
  jwtService: JwtService,
) => {
  // FIXME: Use driver from outside source
  const driver = neo4j.driver(
    configService.getOrThrow('NEO4J_LOCALHOST_URI'),
    neo4j.auth.basic(
      configService.getOrThrow('NEO4J_USER'),
      configService.getOrThrow('NEO4J_PASSWORD'),
    ),
  );

  const neoSchema = new Neo4jGraphQL({
    typeDefs,
    driver,
    plugins: {
      // TODO: Write own auth plugin
      // ref: https://neo4j.com/docs/graphql-manual/current/auth/setup/#_configuration,
      // https://github.com/neo4j/graphql/blob/dev/packages/plugins/graphql-plugin-auth/src/Neo4jGraphQLAuthJWTPlugin.ts
      auth: new Neo4GqlAuthPlugin(
        { secret: configService.getOrThrow('JWT_ACCESS_SECRET') },
        jwtService,
      ),
    },
    config: {
      enableRegex: true,
    },
  });

  const schema = await neoSchema.getSchema();
  await neoSchema.assertIndexesAndConstraints({
    options: { create: true },
  });

  return {
    playground: false,
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true,
    autoSchemaFile: true,
    formatError: error => {
      if (error.message === 'Forbidden') {
        return new ForbiddenError(error.message, {
          response: { statusCode: 403, message: error.message },
        });
      }
      return error;
    },
    schema,
  };
};
