import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/chat-supi/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1600,
  },
})
