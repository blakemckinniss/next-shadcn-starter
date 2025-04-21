// eslint.config.mjs
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals'; // Import globals for browser/node environments

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat for extending eslintrc-style configs (like eslint-config-next)
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  // 1. Ignore node_modules and .next
  {
    ignores: ['node_modules/', '.next/', 'src/generated/'],
  },

  // 2. Base ESLint recommended rules
  eslint.configs.recommended,

  // 3. Configuration for global environments applicable to JS/TS files
  // (Moved up, was #4)
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser, // Add browser globals
        ...globals.node,   // Add Node.js globals
        React: 'readonly', // Add React global
      },
    },
    // We can add specific JS/TS rules here if needed,
    // but rely on next/typescript for TS specifics.
    rules: {
      // Example: Enforce 'no-any' rule from custom instructions globally
      // Note: This might conflict if next/typescript also sets it.
      // Adjust as needed based on final config behavior.
      // '@typescript-eslint/no-explicit-any': 'error',
    }
  },

  // 4. Next.js specific configurations via FlatCompat
  // (Moved up, was #6)
  // Extends both core-web-vitals and the typescript-specific rules from Next.js config
  // This should handle TS parsing, project setup, and relevant rules.
  // Extends both core-web-vitals and the typescript-specific rules from Next.js config
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // 7. Optional: Prettier integration (if Prettier is used)
  // Requires eslint-config-prettier
  // ...compat.extends('prettier'), // Add this if eslint-config-prettier is installed
);
