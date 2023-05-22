module.exports = {
  extends: ['plugin:@nrwl/nx/react', 'plugin:react/recommended', '../../.eslintrc.js'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  ignorePatterns: ['!**/*'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',

    // '@typescript-eslint/no-implicit-any-catch': ['error', { allowExplicitAny: true }],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: 'shared/**',
            group: 'external',
            position: 'after',
          },
          {
            pattern: 'src/**',
            group: 'internal',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {},
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {},
    },
    {
      files: ['*.js', '*.jsx'],
      rules: {},
    },
  ],
};
