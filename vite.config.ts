import lensConfigPlugin from "@adk/lens-react/vite-plugin";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), lensConfigPlugin()],
})
