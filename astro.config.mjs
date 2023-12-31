import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: "https://nemanjadjurcic.com",
  vite: {
    ssr: {
      external: ['svgo']
    }
  },
  integrations: [tailwind(), sitemap(), robotsTxt(), compress()]
});
