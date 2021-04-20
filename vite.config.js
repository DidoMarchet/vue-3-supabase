// vite.config.js
import vue from '@vitejs/plugin-vue'
import path from 'path'

module.exports = {
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: 'vue-3-supabase',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue',
        },
      },
    },
  },
  plugins: [vue()],
}
