# SEO Launch Checklist

## Before deploy

- Confirm `https://andikakamiswara.pages.dev/` is the final canonical domain.
- Keep `robots.txt`, `sitemap.xml`, and `site.webmanifest` in the `public/` directory.
- Rebuild the site and check that the generated `dist/index.html` still contains the SEO metadata and fallback HTML.

## After deploy

- Open the live homepage source and confirm:
  - `<title>` is correct
  - canonical points to `https://andikakamiswara.pages.dev/`
  - Open Graph tags exist
  - JSON-LD scripts exist
- Visit:
  - `https://andikakamiswara.pages.dev/robots.txt`
  - `https://andikakamiswara.pages.dev/sitemap.xml`
  - `https://andikakamiswara.pages.dev/site.webmanifest`

## Search Console

- Add the site property in Google Search Console.
- Submit `https://andikakamiswara.pages.dev/sitemap.xml`.
- Use URL Inspection on the homepage and request indexing after deployment.

## Social preview

- Test the live URL in:
  - LinkedIn Post Inspector
  - Facebook Sharing Debugger
  - Twitter Card Validator alternative tools if needed

## Content improvements for next phase

- Add one dedicated case study page per strongest project.
- Add a downloadable CV link with a crawlable URL.
- Replace generic project images with stronger branded covers or screenshots where possible.
