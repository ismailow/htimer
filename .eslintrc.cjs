module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'build'],
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react/jsx-runtime', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'import', 'react-hooks', 'prettier'],
  rules: {
    'no-undef': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'react/require-default-props': 0,
    'no-unused-vars': 'warn',
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-useless-escape': 0,
    'import/no-named-as-default': 0,
    'react/button-has-type': 'off',
    'no-plusplus': 'off',
    'react/state-in-constructor': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-unknown-property': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/control-has-associated-label': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-else-return': 0,
    'no-param-reassign': 0,
    'react/function-component-definition': 0,
    'react/jsx-max-props-per-line': [1, { when: 'multiline' }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'class-methods-use-this': 'off',
    'prettier/prettier': [
      'error',
      {
        singleAttributePerLine: true,
        endOfLine: 'auto',
      },
    ],
    'linebreak-style': [0, 'unix'],
    quotes: ['error', 'single'],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    version: 'detect',
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
    },
  },
};