import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("./preset/index"), {
    languageOptions: {
        ecmaVersion: "latest",
        sourceType: "script",
        parserOptions: {
            tsconfigRootDir: import.meta.dirname,
        },
    },
}];