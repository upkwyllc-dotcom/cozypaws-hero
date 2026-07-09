import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/cozypaws-hero/',
  plugins: [react()],
})
