import { defineConfig } from 'astro/config';
import pagefind from 'astro-pagefind';
import tailwind from '@astrojs/tailwind';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  integrations: [tailwind(), pagefind(), react()],
  site: 'https://eledoce.github.io/visual-novel-para-pc',
  base: '/visual-novel-para-pc/'
});