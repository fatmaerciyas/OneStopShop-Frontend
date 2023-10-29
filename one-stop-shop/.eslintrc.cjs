module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
  },
};

// module.exports = {
//   rules: {
//     "@typescript-eslint/no-explicit-any": "off",
//   },
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     "eslint:recommended",
//     "plugin:@typescript-eslint/eslint-recommended",
//     "plugin:@typescript-eslint/recommended",
//   ],
//   ignorePatterns: ["dist", ".eslintrc.cjs"],
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   rules: {
//     "react-refresh/only-export-components": [
//       "warn",
//       { allowConstantExport: true },
//     ],
//   },
// };

/* eslint-env node */
// module.exports = {
//   extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
//   parser: "@typescript-eslint/parser",
//   plugins: ["@typescript-eslint"],
//   root: true,
// };

// module.exports = {
//   rules: {
//     "@typescript-eslint/no-explicit-any": "error",
//   },
// };
