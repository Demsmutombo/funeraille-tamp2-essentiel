import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0', // Écoute sur toutes les interfaces
    port: 5173,
    strictPort: false
  }
})

