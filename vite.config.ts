import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Swiper from 'swiper'

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
})
