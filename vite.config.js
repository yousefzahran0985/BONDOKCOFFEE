import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite' // 1. جديد: استيراد التيلويند

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(), // 2. جديد: تفعيل التيلويند (يفضل وضعه في الأول)
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
})