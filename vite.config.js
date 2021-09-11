import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
        // rollupOptions: {
        //     external: 'public/style/global_shared.css'
        // }
    },
    // to explore on local networks
    server: {
        host: '0.0.0.0',
        fs: {
            allow: ['..']
        },
        proxy: {
            // string shorthand
            /*'/foo': 'http://localhost:4567',*/
            // with options
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            },
            // with RegEx
            /*'^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, '')
            },*/
            // Using the proxy instance
            /*'/api': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                configure: (proxy, options) => {
                    // proxy will be an instance of 'http-proxy'
                }
            }*/
        }
    }
})
