import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

export default defineConfig({
  root: 'app/server/',
  cacheDir: resolve(__dirname + '/app/.cache/server/'),
  server: {
    port: 3000,
  },
  build: {
    ssr: 'index.ts',
    outDir: '../../dist/server',
    emptyOutDir: true
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'express',
      appPath: 'app/server/index.ts',
      tsCompiler: 'esbuild',
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'),
    },
  },
});
