// @ts-check
'use strict';

const { getImportNoUnresolvedRuleIgnoreArray } = require('./src/__eslintrc-helpers');

module.exports = ((/** @type {import('eslint').Linter.Config} */ e) => e)({
  extends: './node_modules/@arthurka/eslint',
  rules: {
    'import/no-unresolved': ['error', {
      ignore: getImportNoUnresolvedRuleIgnoreArray(__dirname),
    }],
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    'react/jsx-indent': 'warn',
    'react/jsx-key': 'warn',
    'react/no-array-index-key': 'off',
    'react/jsx-closing-tag-location': 'off',
  },
});
