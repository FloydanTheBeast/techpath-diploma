import { Neo4jGraphQL } from '@neo4j/graphql';
import { Neo4jGraphQLAuthJWTPlugin } from '@neo4j/graphql-plugin-auth';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { GqlModuleAsyncOptions } from '@nestjs/graphql';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import neo4j from 'neo4j-driver';

import { AppConfig } from '../../common/types';
import { typeDefs } from '../type-defs';

export const gqlProviderFactory: GqlModuleAsyncOptions<ApolloDriverConfig>['useFactory'] = async (
  configService: ConfigService<AppConfig>,
) => {
  // FIXME: Use driver from outside source
  const driver = neo4j.driver(
    configService.getOrThrow('NEO4J_URI'),
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
      auth: new Neo4jGraphQLAuthJWTPlugin({
        secret: configService.getOrThrow('JWT_ACCESS_SECRET'),
      }),
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
    schema,
  };
};
