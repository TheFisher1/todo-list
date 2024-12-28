import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/users': {
        target: 'http://localhost:3002',
        changeOrigin: true,
      },
      '/tasks': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      }
    }
  }
}) 