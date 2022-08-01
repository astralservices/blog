import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

import partytown from "@astrojs/partytown";
import turbolinks from "@astrojs/turbolinks";

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), tailwind(), sitemap(), partytown(), turbolinks()],
  site: `https://blog.astralapp.io`,
});
