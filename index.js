module.exports = {
  extends: ['xo', 'xo-typescript/space'],
  rules: {
    'object-curly-spacing': ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-unsafe-member-access': 0,
    '@typescript-eslint/no-unsafe-call': 0,
    '@typescript-eslint/no-unsafe-return': 0,
    '@typescript-eslint/no-floating-promises': 0,
  },
};
