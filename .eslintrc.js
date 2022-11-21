module.exports = {
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'plugin:import/typescript',
  ],
  plugins: ['react', '@typescript-eslint', 'jest', 'import'],
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  rules: {
    "object-curly-newline": ["error", {
        "ObjectExpression": { "multiline": true, "minProperties": 2, consistent: true },
        "ObjectPattern": { "multiline": true, consistent: true },
        "ImportDeclaration": { "multiline": true },
        "ExportDeclaration": { "multiline": true, "minProperties": 3 }
    }],
    // 'import/no-unresolved': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'react/jsx-indent-props': [2],
    'import/order': ['error', {
        'groups': ['builtin', 'external', 'internal', 'parent', ['sibling', 'index']],
        'pathGroups': [
          {
            group: 'external',
            pattern: '@ant-design/**',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': ['builtin'],
      }]
  },
  'settings': {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'typescript': {
        'alwaysTryTypes': true,
        'project': './tsconfig.json',
      }
    }
  }
};
