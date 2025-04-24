import { defineConfig } from 'vite'
import adastra from 'adastra-plugin'

export default defineConfig({
  publicDir: "public",
  polyfill: false,
  polyfillModulePreload: false,
  plugins: [adastra()],
  server: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, Content-Type, Authorization",
    },
  },
  build: {
    cssMinify: true,
    jsMinify: true,
    emptyOutDir: false,
    copyPublicDir: false,
  },
});
