import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 3002,
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});