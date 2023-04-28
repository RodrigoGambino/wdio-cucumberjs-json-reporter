/// <reference types="vitest" />
import { defineConfig } from 'vite'

export default defineConfig({
    test: {
        include: ['test/**/*.test.ts'],
        /**
         * not to ESM ported packages
         */
        exclude: [
            'dist', '.idea', '.git', '.cache',
            '**/node_modules/**'
        ],
        coverage: {
            enabled: true,
            provider: 'c8',
            exclude: ['**/build/**', '**/__fixtures__/**', '**/*.test.ts'],
            lines: 100,
            functions: 100,
            branches: 85,
            statements: 100
        }
    }
})
