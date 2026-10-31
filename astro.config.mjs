import { defineConfig } from "astro/config";

export default defineConfig({
  output: "static",
  site: "https://nurperigazioglu.com",
  i18n: {
    locales: ["tr"], // add "en" in phase 3
    defaultLocale: "tr",
    routing: { prefixDefaultLocale: false },
  },
});
