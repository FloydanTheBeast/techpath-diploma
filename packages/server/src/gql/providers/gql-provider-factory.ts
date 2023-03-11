import path from 'path';

import { Neo4jGraphQL } from '@neo4j/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { GqlModuleAsyncOptions } from '@nestjs/graphql';
import neo4j from 'neo4j-driver';

import config from '../../config';
import { typeDefs } from '../type-defs';

export const gqlProviderFactory: GqlModuleAsyncOptions<ApolloDriverConfig>['useFactory'] =
  async () => {
    const driver = neo4j.driver(
      config.env.NEO4J_URI,
      neo4j.auth.basic(config.env.NEO4J_USER, config.env.NEO4J_PASSWORD),
    );

    const neoSchema = new Neo4jGraphQL({
      typeDefs,
      driver,
    });

    const schema = await neoSchema.getSchema();
    await neoSchema.assertIndexesAndConstraints({
      options: { create: true },
    });

    return {
      playground: true,
      autoSchemaFile: path.join(process.cwd(), '../schema.gql'),
      schema,
    };
  };
