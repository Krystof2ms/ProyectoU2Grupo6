import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: 'index.html',
        acercaDe: 'acerca-de.html',
        juegos: 'juegos.html',
        preVentas: 'pre-ventas.html'
      }
    } 
  }
});
