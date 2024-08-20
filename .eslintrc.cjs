module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "no-console": "error",
    "no-alert": "error",
    "prefer-const": "error",
    "no-unused-vars": "error",
    "react/jsx-key": "error",
    "react/no-array-index-key": "warn",
    "react/no-unused-prop-types": "error",
    "react/no-unknown-property": "error",
    "prettier/prettier": "error",
  },
};
