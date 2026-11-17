# Code Crafted

Static marketing site for Code Crafted.

## Structure

- `site/` — deployable static site
- `site/assets/` — brand files, the workflow illustration, and locally hosted fonts
- `site/css/` — styles
- `site/js/` — client-side behavior
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

## GitHub Pages

Before first deployment, open the repository’s **Settings → Pages** and select **GitHub Actions** as the publishing source. Every push to `main` then deploys `site/`; the workflow can also run manually from the Actions tab.
