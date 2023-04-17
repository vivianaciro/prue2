import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:'https://vivianaciro.github.io/prue2',
  plugins: [react()],
})
