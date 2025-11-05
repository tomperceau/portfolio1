import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  base: "/portfolio1/",
  build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       accueil: resolve(__dirname, "pages/contact.html"),
       projet: resolve(__dirname, "pages/projet.html"),
       projet1: resolve(__dirname, "pages/projet-1.html"),
       projet2: resolve(__dirname, "pages/projet-2.html"),
       projet3: resolve(__dirname, "pages/projet-3.html"),
       // ajoutez d'autres pages si nécessaire
     },
   },
 },

});