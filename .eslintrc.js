module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'prettier', 'plugin:jest/all'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugin: ['prettier', 'jest'],
  rules: {
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    camelCase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'prettier/prettier': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error'
  }
};
