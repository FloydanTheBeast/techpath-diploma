import { readFileSync } from 'fs';
import path from 'path';
import { cwd } from 'process';

const SCHEMA_FILENAME = 'schema.graphql';

// load GraphQL type definitions from schema.graphql file
export const typeDefs = readFileSync(
  path.resolve(cwd(), 'packages/server/src', SCHEMA_FILENAME),
).toString('utf-8');
