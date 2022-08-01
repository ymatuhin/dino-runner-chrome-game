import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), sitemap()],
  site: `https://dino-runner-chrome-game.${process.env.PUBLIC_DOMAIN}`,
});
