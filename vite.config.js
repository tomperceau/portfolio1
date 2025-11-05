import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  base: "/portfolio1/",
  build: {
   rollupOptions: {
     input: {
       main: resolve(__dirname, "index.html"),
       accueil: resolve(__dirname, "pages/contact.html"),
       plus: resolve(__dirname, "pages/projet.html"),
       plus: resolve(__dirname, "pages/projet-1.html"),
       plus: resolve(__dirname, "pages/projet-2.html"),
       plus: resolve(__dirname, "pages/projet-3.html"),
       // ajoutez d'autres pages si nécessaire
     },
   },
 },

});