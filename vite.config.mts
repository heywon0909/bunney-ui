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
            entry: {
                // root: resolve(__dirname, 'src/index.ts'),
                Bunney: resolve(__dirname, 'src/Bunney/index.ts'),
                AnimatedBunney: resolve(
                    __dirname,
                    'src/AnimatedBunney/index.ts'
                ),
                Logo: resolve(__dirname, 'src/Logo/index.ts'),
                TechBunney: resolve(__dirname, 'src/TechBunney/index.ts'),
                SmileyBunney: resolve(__dirname, 'src/SmileyBunney/index.ts'),
                Mackey: resolve(__dirname, 'src/Mackey/index.ts'),
                BunneyLoading: resolve(__dirname, 'src/BunneyLoading/index.ts'),
                SantaBunney: resolve(__dirname, 'src/SantaBunney/index.ts'),
                CookieBunney: resolve(__dirname, 'src/CookieBunney/index.ts'),
                SnowBunney: resolve(__dirname, 'src/SnowBunney/index.ts'),
            },
            name: 'bunney-ui',
            formats: ['es', 'cjs'],
        },
        rollupOptions: {
            external: [
                '@emotion/styled',
                '@emotion/react',
                'react',
                'rect-router-dom',
            ],
        },
        sourcemap: true,
    },
    resolve: {
        alias: [
            { find: '@', replacement: resolve(__dirname, 'src') },
            { find: '@/*', replacement: resolve(__dirname, 'src/*') },
            {
                find: '@/common',
                replacement: resolve(__dirname, 'src/common'),
            },
            {
                find: '@/common/*',
                replacement: resolve(__dirname, 'src/common/*'),
            },
        ],
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
