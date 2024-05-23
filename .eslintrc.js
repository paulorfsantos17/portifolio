module.exports = {
  plugins: ['simple-import-sort'],
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
  extends: [
    'eslint:recommended',
    'next',
    '@rocketseat/eslint-config/next',
    'next/core-web-vitals',
  ],
}
