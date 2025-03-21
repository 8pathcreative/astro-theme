import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    mode: 'directory'
  }),
  outDir: './dist',
  publicDir: './public',
  site: 'http://localhost:3000' // Or your deployment URL
});
