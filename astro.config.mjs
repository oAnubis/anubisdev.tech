import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './remark-reading-time.mjs';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://anubisdev.tech',
  experimental: {
    integrations: true
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
    extendDefaultPlugins: true,
    drafts: true
  },
  integrations: [react(), tailwind(), mdx()]
});