import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    experimental: {
        integrations: true,
      },
    markdown: {
        drafts: true,
    }
});
