# Eigenstack website

The Eigenstack Pty Ltd company site, built with [Astro](https://astro.build/) and deployed as static HTML to GitHub Pages.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output to ./dist
npm run preview  # serve the built site
```

## Deploy

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes `./dist` to GitHub Pages.

One-time setup in the repo:

1. **Settings → Pages → Build and deployment → Source**: select **GitHub Actions**.
2. If using a project page (`https://<user>.github.io/<repo>`), set `base: '/<repo>'` in `astro.config.mjs`. For a custom domain or user/org page, leave `base: '/'`.
3. If using a custom domain (e.g. `eigenstack.co`), add a `public/CNAME` file with the domain on a single line.

## Structure

```
src/
  layouts/Base.astro       # html shell, fonts, global css
  components/              # Nav, Hero, LivFeature, Advisory, Writing, Footer, EigenMark
  pages/index.astro        # the only page
  styles/global.css        # css variables (accent, fonts, ink) and base reset
public/                    # static assets served at the site root
```

The design intent (warm off-white, moss accent, Newsreader display, the stacked-bars logo) lives in `src/styles/global.css` as CSS variables. Edit those and the whole site picks up the change.
