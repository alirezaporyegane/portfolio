import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'img': path.resolve(__dirname, './public/img')
    }
  },
  server: {
    port: 8080
  },
  mode: process.env.NODE_ENV,
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0')
  }
})
