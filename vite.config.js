/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tech-tutorials/',
  preview: {
    allowedHosts: ['.trycloudflare.com']
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router-dom')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'vendor-icons'
          }
          if (id.includes('node_modules/html2pdf.js')) {
            return 'vendor-pdf'
          }
          if (id.includes('node_modules/mermaid')) {
            return 'vendor-mermaid'
          }
          // Shiki + all of its sub-packages belong to the same chunk so that
          // a single lazy import can load the whole highlighter.
          if (
            id.includes('node_modules/shiki') ||
            id.includes('node_modules/@shikijs')
          ) {
            return 'vendor-shiki'
          }
        }
      }
    },
    chunkSizeWarningLimit: 1500
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    include: ['src/**/*.{test,spec}.{js,jsx}', 'scripts/**/*.test.js'],
  },
})
