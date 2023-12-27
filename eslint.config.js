export default [
  {
    "extends": "eslint-config-egg",
    "ignorePatterns": [
      "dist",
      "coverage",
      "node_modules"
    ],
    "rules": {
      "indent": ["warning", 2]
    },
    'parser': '@typescript-eslint/parser',
    "parserOptions": {
      "parser": 'babel-eslint'
    }
  }
]