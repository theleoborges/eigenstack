import { defineConfig } from 'astro/config';

// Update `site` and `base` to match your GitHub Pages URL.
// For a project page (https://<user>.github.io/<repo>) set base to '/<repo>'.
// For a custom domain or user/org page, leave base as '/'.
export default defineConfig({
  site: 'https://eigenstack.co',
  base: '/',
  output: 'static',
  trailingSlash: 'ignore',
  server: {
    // Allow ngrok / tunneled hosts to reach the dev server.
    allowedHosts: true,
  },
});
