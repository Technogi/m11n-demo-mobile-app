module.exports = {
  root: true,
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:import/recommended"
  ],
  "plugins": ["react", "react-hooks", "@typescript-eslint", "jest"],
  "env": {
    "browser": true,
    "es6": true,
    "jest": true
  },
  "settings": {
    "import/ignore": [
      "node_modules/react-native/index\\.js$"
    ],
    "import/resolver": {
      "typescript": {}
    },
  },
  "rules": {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "warn",
      {
        allowExpressions: true,
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "no-console": ["error", { "allow": ["warn", "error", "info"] }],
    'react/require-default-props': 0,
    'react/no-unused-prop-types': 0,
    "@typescript-eslint/no-use-before-define": ["error", { "variables": false }],
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "vars": "all",
        "args": "after-used",
        "varsIgnorePattern": "[iI]gnored",
        "argsIgnorePattern": "^_",
        "ignoreRestSiblings": true
      }
    ],
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/explicit-module-boundary-types": ["error", { "allowArgumentsExplicitlyTypedAsAny": true }],
    "no-nested-ternary": 0,
    "react/prop-types": 0,
    // ===== Disable warnings for types and interfaces ======
    // "@typescript-eslint/no-unused-vars": "off",
    // "@typescript-eslint/no-unused-vars-experimental": "warn",
    // "no-unused-vars": "off",
    // ======================================================
    "react/jsx-props-no-spreading": 0,
    "global-require": 0,
    "@typescript-eslint/dot-notation": 0,
    "import/order": ["error", {"groups": ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"]}],
    "import/no-named-as-default-member": 0,
  }
};
