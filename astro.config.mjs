import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import critters from "astro-critters";
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare(),
  integrations: [sitemap(), tailwind(), critters(), compress()],
  // https://github.com/natemoo-re/astro-icon/issues/35
  ...(import.meta.env.PROD && {
    vite: {
      resolve: {
        alias: {
          svgo: import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo",
        },
      },
    },
  }),
});
