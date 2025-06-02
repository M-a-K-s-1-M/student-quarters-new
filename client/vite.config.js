import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { resolve } from 'path'
import { copy } from 'fs-extra'
import { fileURLToPath } from 'url'

// https://vite.dev/config/
export default defineConfig({
  base: '', // Важно для устранения ./
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  plugins: [
    react(),
    {
      name: 'copy-public-folder',
      enforce: 'post', // Гарантирует выполнение после других плагинов
      closeBundle: async () => {
        try {
          const rootDir = fileURLToPath(new URL('.', import.meta.url))
          const source = resolve(rootDir, 'public')
          const destination = resolve(rootDir, 'dist/public')

          console.log(`Копирование из ${source} в ${destination}`)
          await copy(source, destination)
          console.log('Копирование public завершено')
        } catch (error) {
          console.error('Ошибка копирования public:', error)
        }
      }
    }
  ]
})
