import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
// export default defineConfig({
  // integrations: [tailwind()],
  // vite: {
    // ssr: {
     // external: ['svgo']
   // }
 // }
//});

// In astro.config.mjs
export default {
  outDir: './dist',
  publicDir: './public',
  site: 'http://localhost:3000' // Or your deployment URL
}
