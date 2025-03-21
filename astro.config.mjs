import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  output: 'server',
  adapter: cloudflare({
    mode: 'directory'
  }),
  outDir: './dist',
  publicDir: './public',
  site: 'http://localhost:3000' // Or your deployment URL
});
