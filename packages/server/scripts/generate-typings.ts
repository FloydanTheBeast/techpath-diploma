import path from 'path';

import { OGM, generate } from '@neo4j/graphql-ogm';
import neo4j from 'neo4j-driver';

import { typeDefs } from '../src/gql';

const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('admin', 'password'));

const ogm = new OGM({ typeDefs, driver });

const main = async () => {
  await generate({
    ogm,
    outFile: path.join(__dirname, '../src/ogm-types.ts'),
  });

  console.log('Types Generated');
  process.exit(0);
};

main();
