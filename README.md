# Code Crafted

Static marketing site for Code Crafted.

## Local preview

```sh
python3 -m http.server 8000 --directory site
```

Open `http://localhost:8000`.

## Structure

- `site/` — deployable static site
- `site/assets/` — brand files, fonts, paper images, and third-party browser libraries
- `site/css/` — styles
- `site/js/` — client-side behavior
- `.github/workflows/deploy-pages.yml` — GitHub Pages deployment

## GitHub Pages

Before first deployment, open the repository’s **Settings → Pages** and select **GitHub Actions** as the publishing source. Every push to `main` then deploys `site/`; the workflow can also run manually from the Actions tab.
