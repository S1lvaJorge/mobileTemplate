import tsParser from '@typescript-eslint/parser'
import perfectionist from 'eslint-plugin-perfectionist'

export default [
  {
    ignores: [
      '**/node_modules/**',
      '**/.expo/**',
      '**/android/**',
      '**/ios/**',
      '**/build/**',
      '**/dist/**',
    ],
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      perfectionist,
    },
    rules: {
      // Perfectionist rules (simple configuration)
      'perfectionist/sort-imports': 'error',
      'perfectionist/sort-named-imports': 'error',
      'perfectionist/sort-jsx-props': 'error',

      // Basic rules
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    },
  },
]
