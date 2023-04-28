import path from 'path';

import type { CodegenConfig } from '@graphql-codegen/cli';
import { config as dotenvConfig } from 'dotenv';

dotenvConfig({ path: path.resolve('.env') });

const { GRAPHQL_API_URL } = process.env;

const codegenConfig: CodegenConfig = {
  schema: GRAPHQL_API_URL,
  documents: [`${__dirname}/src/**/*.ts`],
  generates: {
    [`${__dirname}/src/__generated__/index.ts`]: {
      documents: ['src/**/*.ts'],
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
