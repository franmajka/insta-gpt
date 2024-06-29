import js from "@eslint/js";
import solid from "eslint-plugin-solid/configs/typescript.js";
import prettierConfig from "eslint-config-prettier";
import prettier from "eslint-plugin-prettier";
import * as tsParser from "@typescript-eslint/parser";
import globals from "globals";

export default [
  js.configs.recommended,
  prettierConfig,
  solid,
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      prettier,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        "chrome": true
      },
      parser: tsParser,
      parserOptions: {
        project: "tsconfig.app.json",
      },
    },
    rules: {
      "prettier/prettier": "error",
    },
  },
];
