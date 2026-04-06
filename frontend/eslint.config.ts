import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.es2021 } } }, // 全局环境, 包含浏览器和ES2021的全局变量, 防止误报未定义的全局变量
  // 忽略
  {
    ignores: ['node_modules', 'dist', 'build'],
  },

  // JS
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
  },

  // TS（必须展开）
  ...tseslint.configs.recommended,

  // Vue（必须展开）
  ...pluginVue.configs['flat/essential'],

  // Vue parser（单独补充）
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
];
