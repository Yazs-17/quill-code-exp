import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import vueParser from 'vue-eslint-parser';

export default [
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
