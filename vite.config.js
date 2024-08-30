import { defineConfig } from 'vite'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/my-portfolio/",
  server:{
    port: 3000,
    open: true,
  }
})