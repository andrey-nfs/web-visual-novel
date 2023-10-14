module.exports = {
  extends: [
    'next/core-web-vitals',
    'plugin:@next/next/recommended',
    'next',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    '@next/eslint-plugin-next',
    '@typescript-eslint',
    'react',
  ],
  root: true,
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'function-paren-newline': ['error', 'consistent'],
    'linebreak-style': 'off',
    'max-len': ['error', {
      code: 130, tabWidth: 2, ignoreStrings: true, ignoreTemplateLiterals: true,
    }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'padding-line-between-statements': ['error', { blankLine: 'always', prev: 'multiline-const', next: '*' }],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './app'],
        ],
        extensions: ['.ts', '.tsx', '.jsx', '.css'],
      },
    },
  },
};
