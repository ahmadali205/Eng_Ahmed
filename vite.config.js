import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' makes every asset path relative, so the same build works on
// https://<user>.github.io/ and on https://<user>.github.io/<repo-name>/
// without changing anything. (The site has no client-side routes.)
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
  },
});
