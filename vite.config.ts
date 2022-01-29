import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';
import { resolve } from 'path';

export default defineConfig({
    root: 'src',
    server: {
        port: 3000,
        open: '/api/v1/'
    },
    plugins: [
        ...VitePluginNode({
            adapter: 'express',
            appPath: './src/index.ts',
            tsCompiler: 'esbuild'
        })
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        }
    }
});
