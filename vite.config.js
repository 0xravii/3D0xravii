import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'none';"
    }
  },
  plugins: [react()],
  base: "/0xravii",
  publicDir: 'public', // Ensure this is set
  assetsInclude: ['**/*.gltf'], // Add GLTF files to assets
})
