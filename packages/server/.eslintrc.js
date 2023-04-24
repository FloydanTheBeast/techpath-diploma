module.exports = {
  extends: ['../../.eslintrc.js'],
  ignorePatterns: ['!**/*', 'src/ogm-types.ts'],
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
