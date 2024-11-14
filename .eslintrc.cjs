module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,  // Node.js এনভায়রনমেন্ট সঠিকভাবে চিহ্নিত হচ্ছে
    },
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
    ],
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module',
    },
    plugins: [
      'react',
      '@typescript-eslint',
    ],
    rules: {
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'no-undef': ['error', { 'typeof': true }],  // 'require' যেমন জিনিসগুলো সঠিকভাবে চিনতে
    },
  };
  