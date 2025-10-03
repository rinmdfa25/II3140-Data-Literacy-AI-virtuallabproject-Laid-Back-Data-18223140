import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "eslint:recommended", "plugin:react/recommended")];

eslintConfig.push({
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-key": "off",
    "@javascript-eslint/no-explicit-any": "off",
    "@javascript-eslint/no-unused-vars": "off",
  },
});

export default eslintConfig;
