import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), robotsTxt()],
  site: 'https://porfolio.dev/',
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  })
});