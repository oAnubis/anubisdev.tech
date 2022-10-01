import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'http://anubisdev.tech',
    experimental: {
        integrations: true,
      },
    markdown: {
        drafts: true,
    }
});
