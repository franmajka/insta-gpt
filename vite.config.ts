import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import { resolve } from 'path';


export default defineConfig({
  plugins: [solid()],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'src/background.ts'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
  }
})
