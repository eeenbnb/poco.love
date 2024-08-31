/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@poco.love/eslint-config/next.js",
    "@poco.love/eslint-config/react-internal.js",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
