import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true }
  }),
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/'
})
