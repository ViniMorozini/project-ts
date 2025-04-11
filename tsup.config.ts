import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src'],
  outDir: 'build',
  target: 'es2020',
  format: ['cjs'],
  sourcemap: true,
  external: [
    'better-sqlite3',
    'pg',
    'pg-query-stream',
    'mysql',
    'mysql2',
    'oracledb',
    'tedious'
  ]
})
