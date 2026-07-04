import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{test,spec}.{js,jsx}', 'src/test/**'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.vitest,
      },
    },
  },
  {
    files: ['scripts/**', 'test-pdf-script.js', 'test-pdf-script.cjs'],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // Data/content files contain user-facing strings (regex snippets, code
  // examples, paths) where backslash handling is intentional display content,
  // so the blanket no-useless-escape rule creates false positives there.
  // Likewise, no-irregular-whitespace flags intentional Unicode whitespace
  // characters used in code examples to demo Java's strip() vs trim().
  {
    files: ['src/data/**/*.js'],
    rules: {
      'no-useless-escape': 'off',
      'no-irregular-whitespace': 'off',
    },
  },
])
