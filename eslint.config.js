/*
 * @Author: June
 * @Description:
 * @Date: 2024-05-25 15:48:42
 * @LastEditTime: 2024-05-25 15:57:41
 * @LastEditors: June
 * @FilePath: \@minepro\eslint.config.js
 */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  globals: {
    uni: true,
    UniApp: true,
    Glo: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-essential',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'vue'],
  ignorePatterns: ['dist', 'node_modules', 'auto-imports.d.ts', '.hbuilderx'],
  rules: {
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
