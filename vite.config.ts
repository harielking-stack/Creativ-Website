import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Adjust if deploying to a subdirectory
  build: {
    rollupOptions: {
      input: 'index.html', // Ensure Rollup knows your entry point
    },
  },
});
