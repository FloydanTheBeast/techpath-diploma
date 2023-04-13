import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig();

const { GRAPHQL_API_URL } = process.env;

const codegenConfig: CodegenConfig = {
  schema: GRAPHQL_API_URL,
  documents: [`${__dirname}/src/**/*.ts`],
  generates: {
    [`${__dirname}/src/graphql/__generated__/index.ts`]: {
      documents: ['src/graphql/**/*.ts'],
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
    },
  },
  overwrite: true,
  config: {
    documentMode: 'documentNode',
    withHooks: true,
  },
  hooks: {
    afterAllFileWrite: ['prettier --write'],
  },
};

export default codegenConfig;
