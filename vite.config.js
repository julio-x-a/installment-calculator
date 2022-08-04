// vite.config.js
import { defineConfig } from 'vite'
import dns from 'dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        open: 'index.html'
    }

    // server: {
    //     proxy: {
    //         // string shorthand
    //         '/foo': 'http://localhost:4567',
    //         // with options
    //         '/api': {
    //             target: 'http://jsonplaceholder.typicode.com',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/api/, '')
    //         },
    //         // with RegEx
    //         '^/fallback/.*': {
    //             target: 'http://jsonplaceholder.typicode.com',
    //             changeOrigin: true,
    //             rewrite: (path) => path.replace(/^\/fallback/, '')
    //         },
    //         // Using the proxy instance
    //         '/api': {
    //             target: 'http://jsonplaceholder.typicode.com',
    //             changeOrigin: true,
    //             configure: (proxy, options) => {
    //                 // proxy will be an instance of 'http-proxy'
    //             }
    //         },
    //         // Proxying websockets or socket.io
    //         '/socket.io': {
    //             target: 'ws://localhost:5173',
    //             ws: true
    //         }
    //     }
    // }
});
