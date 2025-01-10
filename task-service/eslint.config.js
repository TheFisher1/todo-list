const globals = require("globals");
const pluginJs = require("@eslint/js");

/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {
    languageOptions: { globals: globals.browser },
  },
  pluginJs.configs.recommended,
  {
    overrides: [
      {
        files: ["src/**/*.js"],
      },
    ],
  },
];
