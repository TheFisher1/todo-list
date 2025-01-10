const globals = require("globals");
const pluginJs = require("@eslint/js");
const pluginReact = require("eslint-plugin-react");


/** @type {import('eslint').Linter.Config[]} */
module.exports = [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'react/unescaped-entities': 'off',
    },
  },
  {
    overrides: [
      {
        files: ["src/**/*.jsx", "src/**/*.js"],
      },
    ],
  },
];
