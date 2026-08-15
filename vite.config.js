import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react-dom/') || id.includes('node_modules/react/') || id.includes('node_modules/react-router/')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/@phosphor-icons/')) {
            return 'vendor-phosphor';
          }
          if (id.includes('node_modules/@icons-pack/')) {
            return 'vendor-simple-icons';
          }
        },
        chunkFileNames: 'assets/[name]-[hash:8].js',
        entryFileNames: 'assets/[name]-[hash:8].js',
        assetFileNames: 'assets/[name]-[hash:8][extname]',
      },
    },
    modulePreload: { polyfill: false },
    reportCompressedSize: false,
  },
})
