# TalentGator

Marketing website for **TalentGator**, a headhunting and executive search firm. It is a single landing page built with plain HTML, CSS and vanilla JavaScript: no frameworks, no build step and no dependencies.

## Live site

The site is deployed on **GitHub Pages**:

https://newmanwell.github.io/talent-gator/

This is the default GitHub Pages address. It will move to a proper custom domain name once the customer has chosen one.

## Project structure

| Path | Purpose |
| --- | --- |
| `index.html` | The landing page: header, hero, client logos, services, process, sectors and testimonial, candidates CTA, contact form and footer |
| `styles.css` | All styles. Design tokens (colours, fonts, spacing) are CSS variables at the top of the file |
| `script.js` | Mobile nav toggle, footer year and contact form validation |
| `assets/` | Images and the standalone logo (`assets/logo.svg`) |

## Running locally

There is nothing to install or build. Open `index.html` in a browser, or serve the folder with any static server:

```
python3 -m http.server
```

Then visit http://localhost:8000.

## Deployment

GitHub Pages serves the site straight from the repository, so there is no build step. Pushing changes to the published branch updates the live site, usually within a minute or two.

## Design notes

- **Look:** dark green ground with a chartreuse accent.
- **Fonts:** Space Grotesk (headings and logo) and Inter (body), loaded from Google Fonts.
- **Theming:** changing `--accent` in `styles.css` rethemes the whole site, logo included.
- **Accessibility:** the page works without JavaScript, has visible focus states, and respects `prefers-reduced-motion`.

## Placeholder content

Anything in `[BRACKETS]` on the page is a deliberate placeholder while we wait on the client, for example the stats, hero photo, client logos, testimonial and contact details. Don't fill these with invented numbers or names.

## Next steps

- Choose and connect a custom domain.
- Connect the contact form to a real endpoint (the form currently only validates in the browser).
- Add a candidate CV submission flow.
- Replace the placeholders with real images and content, optimised for the web.
- Add SEO basics: Open Graph tags, a favicon set and `sitemap.xml`.
- Swap in the client's original logo SVG when it arrives.
