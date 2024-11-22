import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/books': {
        target: 'https://projetnodejs-u0it.onrender.com',
        changeOrigin: true,
      },
      '/auth': { // Ajouter le proxy pour l'authentification
        target: 'https://projetnodejs-u0it.onrender.com',
        changeOrigin: true,
      },
    },
  },
});
