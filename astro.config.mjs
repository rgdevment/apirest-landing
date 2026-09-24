import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://rgdevment.com',
  trailingSlash: 'always',
  redirects: {
    '/en/': '/',
  },
  integrations: [tailwind()],
});
