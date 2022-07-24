module.exports = {
  extends: 'react-app',
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/explicit-member-accessibility': 'warn',
    'no-unused-expressions': 'warn',
    'no-console': 'warn',
    'no-nested-ternary': 'warn',
    'class-methods-use-this': 'warn',
    'no-await-in-loop': 'warn',
    'global-require': 'warn',
    '@typescript-eslint/no-redeclare': 'off',
  },
};
