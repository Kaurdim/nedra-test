module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'airbnb/hooks', 'plugin:react-hooks/recommended'],
  rules: {
    'import/no-extraneous-dependencies': [0],
    'jsx-a11y/click-events-have-key-events': [0],
    'jsx-a11y/no-static-element-interactions': [0],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'react/forbid-prop-types': 0,
    'jsx-a11y/no-autofocus': [0],
    'no-unused-expressions': 0,
    'import/first': [2],
    'import/newline-after-import': [1, { count: 2 }],
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'import/order': [2, {
      groups: [
        'builtin',
        'external',
        ['parent', 'sibling', 'index'],
      ],
      'newlines-between': 'always',
    }],
    'max-len': [2, { code: 120 }],
  },
};
