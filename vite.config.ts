import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

export default defineConfig({
  root: 'src',
  cacheDir: resolve(__dirname + '/src/.cache/'),
  server: {
    port: 3000,
  },
  build: {
    outDir: '../api',
    emptyOutDir: true
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: process.env.NODE_ENV ==='production' ? 'index.ts' : 'src/index.ts',
      tsCompiler: 'esbuild',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
