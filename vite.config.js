import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  server: {
    headers: {
      "Content-Security-Policy": "script-src 'self' 'unsafe-eval' 'unsafe-inline'; object-src 'none';"
    }
  },
  plugins: [react()],
  base: "/0xravii/",
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
        // Remove the favicon line that's causing the error
      },
      output: {
        manualChunks: {
          three: ['three'],
          'three-deps': [
            '@react-three/fiber', 
            '@react-three/drei',
            'three/examples/jsm/lights/RectAreaLightUniformsLib',
            'three/examples/jsm/postprocessing/EffectComposer',
            'three/examples/jsm/postprocessing/RenderPass',
            'three/examples/jsm/postprocessing/UnrealBloomPass'
          ],
          vendor: ['react', 'react-dom']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
      'three', 
      '@react-three/fiber', 
      '@react-three/drei',
      'three/examples/jsm/lights/RectAreaLightUniformsLib',
      'three/examples/jsm/postprocessing/EffectComposer',
      'three/examples/jsm/postprocessing/RenderPass',
      'three/examples/jsm/postprocessing/UnrealBloomPass'
    ],
    exclude: ['@react-three/drei/loaders']
  },
  resolve: {
    alias: {
      'three': 'three',
      '@three': '@react-three'
    }
  },
  publicDir: 'public',
  assetsInclude: ['**/*.gltf', '**/*.glb', '**/*.hdr', '**/*.png', '**/*.jpg']
})