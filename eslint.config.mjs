import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["node_modules/**", "public/**"],
  },
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
    rules: {
      "no-console": "warn",
      "no-unused-vars": [
        "warn",
        {
          "vars": "all",
          "args": "after-used",
          "reportUsedIgnorePattern": true,
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_",
        },
      ],
      "quotes": "off",
      'prefer-const': 'warn',
      'semi': ['warn', 'always']
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    extends: [js.configs.recommended],
  },
]);
