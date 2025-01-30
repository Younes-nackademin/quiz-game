import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Öppnar appen automatiskt i webbläsaren
  },
  build: {
    outDir: 'dist', // Mappen där byggfilerna sparas
  },
});
