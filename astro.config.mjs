import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://bruggink-totaaltechniek.nl',
  integrations: [sitemap()],
});
