module.exports = {
  extends: [
    'xo',
    'xo-typescript/space',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'curly': 'error',
    'object-curly-spacing': ['error', 'always'],
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-implicit-any-catch': 'off',
    'capitalized-comments': 'off',
  },
};
