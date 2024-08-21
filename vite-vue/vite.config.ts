import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// eslint-disable-next-line import-x/no-nodejs-modules
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      vue: path.resolve(
        __dirname,
        '../packages/vue/dist/vue.runtime.esm-bundler.js',
      ),
    },
  },
})
