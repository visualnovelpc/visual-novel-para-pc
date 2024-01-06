import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://eledoce.github.io/visual-novel-para-pc',
  base: '/visual-novel-para-pc/',
})
