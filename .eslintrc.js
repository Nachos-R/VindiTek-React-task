module.exports = {
  extends: 'airbnb',
  parserOptions: {
    ecmaVersion: 6
  },
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
    'linebreak-style': ['error', 'unix']
  }
};
