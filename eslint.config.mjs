import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals", "next/javascript")];

eslintConfig.push({
  rules: {
    "react-hooks/exhautive-deps": "off",
    "react/jsx-key": "off",
    "@javascript-eslint/no-explicit-any": "off",
    "@javascript-eslint/no-unused-vars": "off",
  },
});

export default eslintConfig;
