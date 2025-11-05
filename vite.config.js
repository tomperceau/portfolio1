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
       contact: resolve(__dirname, "pages/contact.html"),
       projets: resolve(__dirname, "pages/projets.html"),
       projet1: resolve(__dirname, "pages/projet1.html"),
       projet2: resolve(__dirname, "pages/projet2.html"),
       projet3: resolve(__dirname, "pages/projet3.html"),
       // ajoutez d'autres pages si nécessaire
     },
   },
 },

});