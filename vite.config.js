import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        sourcemap: true,
    },
    // to explore on local networks
    server: {
        host: '0.0.0.0',
        port: 3001,
        https: {
            cert: '/usr/local/etc/nginx/ssl/server.crt',
            key: '/usr/local/etc/nginx/ssl/server.key.unsecure',
        },
        fs: {
            allow: ['..']
        },
        // proxy: {
        //     // proxy @ nginx
        //     // '/api': 'http://localhost'
        //
        //     // proxy @ koa
        //     '/api': {
        //         target: 'http://localhost:8080',
        //         // target: 'https://localhost:8081',
        //         changeOrigin: true,
        //         rewrite: (path) => path.replace(/^\/api/, '')
        //     }
        // }
    }
})
