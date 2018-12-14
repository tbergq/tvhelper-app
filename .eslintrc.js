const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  root: true,

  extends: ['@kiwicom/eslint-config', "prettier",
    "prettier/react",
    "prettier/flowtype"],
  plugins: ['prettier'],

  // adjust the rules as needed
  parser: 'babel-eslint',
  env: {
    jest: true,
    node: true,
  },
  rules: {
    "prettier/prettier": [
      ERROR,
      { singleQuote: true, trailingComma: "all", jsxBracketSameLine: false }
    ]
  }
};
