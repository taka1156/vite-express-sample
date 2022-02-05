import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  base:  process.env.NODE_ENV === 'production' ? '/api/docs/': './',
  root: 'app/client/',
  cacheDir: resolve(__dirname + '/app/.cache/client/'),
  build: {
    outDir: '../../dist/client/',
    emptyOutDir: true
  },
  plugins: [
    vue()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'app'),
    },
  },
});
