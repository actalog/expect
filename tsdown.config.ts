import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: ['./src/index.ts'],
  format: 'cjs',
  minify: true,
  clean: true,
  outExtensions: () => ({ js: '.js' }),
})
