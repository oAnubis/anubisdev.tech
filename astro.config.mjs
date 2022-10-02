import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://anubisdev.tech',
  experimental: {
    integrations: true
  },
  markdown: {
    drafts: true
  },
  integrations: [react(), tailwind()]
});