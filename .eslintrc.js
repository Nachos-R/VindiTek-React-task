module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      globalReturn: true,
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  plugins: ['import', 'react', 'jsx-a11y'],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  rules: {
    'comma-dangle': ['error', 'never'],
    'no-unused-vars': [
      'error',
      {
        vars: 'local',
        args: 'none'
      }
    ],
    'arrow-parens': ['error', 'as-needed'],
    'react/jsx-filename-extension': 0,
    'linebreak-style': ['error', 'windows'],
    'react/jsx-one-expression-per-line': [1, { allow: 'single-child' }],
    'no-shadow': [
      'error',
      { builtinGlobals: true, hoist: 'functions', allow: ['done'] }
    ]
  }
};
