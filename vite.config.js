import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        acerca: 'acerca-de.html',
        juegos: 'juegos.html',
        preventas: 'pre-ventas.html',
      }
    }
  }
});
