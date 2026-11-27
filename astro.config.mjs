import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import starlight from "@astrojs/starlight";
import starlightConfig from "./config/starlight.mjs";
import redirects from "./config/redirects.mjs";

export default defineConfig({
  vite: { resolve: { noExternal: ["js-yaml"] } },
  site: "https://gobifrost.com",
  redirects: { "/": "/docs/about/", ...redirects },
  build: { inlineStylesheets: "auto" },
  integrations: [sitemap(), starlight(starlightConfig), mdx()],
});
