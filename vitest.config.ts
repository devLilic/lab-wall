import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    root: __dirname,
    include: ['test/{shared,network,wall-controller,wall-preview,thumbnail-plugin}/**/*.{test,spec}.?(c|m)[jt]s?(x)'],
    exclude: ['test/**/screenshots/**', 'test/**/e2e.spec.ts'],
    testTimeout: 1000 * 29,
  },
})
