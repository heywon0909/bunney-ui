import { resolve } from 'path'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import commonjs from 'vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        outDir: 'dist',
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'bunney-ui',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            output: {
                exports: 'named',
            },
            external: ['@emotion/styled', '@emotion/react'],
        },
        sourcemap: true,
    },
    plugins: [
        react(),
        svgr(),
        commonjs(),
        dts({
            insertTypesEntry: true,
        }),
    ],
})
