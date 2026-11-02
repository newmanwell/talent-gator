# TalentGator website

Marketing site for **TalentGator**, a headhunting / executive search firm. This started as a landing-page mockup made in claude.ai to show the client, and is now being built out for real.

## Constraints
- Plain **HTML, CSS and vanilla JS only**: no frameworks, no build step, no npm dependencies.
- The page must work without JavaScript; JS is progressive enhancement only.
- Keep it accessible: real `<button>`/`<a>`/`<label>`, visible focus states, 4.5:1 text contrast, works at phone width, respects `prefers-reduced-motion`.

## Files
- `index.html`: single landing page (header, hero, client logos, services, process, sectors + testimonial, candidates CTA, contact form, footer).
- `styles.css`: all styles. Design tokens are CSS variables at the top of the file.
- `script.js`: mobile nav toggle, footer year, contact form validation (no backend yet).
- `assets/logo.svg`: standalone logo. The header uses an **inline** copy of the same SVG so it inherits `--accent` and the web font.

## Design system
- Look: dark "swamp" green ground with a sharp chartreuse accent. Bold and confident, not cartoonish.
- Colours: ink `#0E1A14` (dark ground and text on light), accent `#C6F24E`, light cards `#F4F7F4`, muted text on light `#4A5750`, muted text on dark `#C9D3CC`. Changing `--accent` rethemes the whole site, logo included.
- Type: **Space Grotesk** (700/500) for headings and the logo, **Inter** (400/500/600) for body. Loaded from Google Fonts.
- Shapes: pill buttons (999px radius), 18–28px radii on cards and panels.

## Logo
- Recreated by hand as vector from a screenshot the client provided (original: a black elongated pointed bar with two fangs underneath and white "TALENTGATOR" lettering).
- Recoloured for the dark header: shape in the accent colour, lettering in ink.
- The lettering is live `<text>` in Space Grotesk, which is an approximation. **Swap in the client's original SVG (with text converted to outlines) when we get it.**
- If the client insists on their original black/white colours, put the logo on a light header bar rather than the dark one.

## Placeholder content (waiting on the client)
Anything in `[BRACKETS]` is a deliberate placeholder. Don't invent real-looking numbers or names to fill these:
- Stats: `[XX]+` placements, `[XX]%` retained after 1 year, `[XX] days` average shortlist
- `[HERO PHOTO]`, `[CLIENT LOGO]` ×5, `[CLIENT TESTIMONIAL]` with `[Name]`, `[Title]`, `[Company]`
- `[SECTOR]` (the listed sectors are a guess), `[EMAIL ADDRESS]`, `[PHONE NUMBER]`, `[OFFICE ADDRESS]`
- Footer Privacy / Terms / LinkedIn links point to `#`.
- The services (Executive Search, Specialist Recruitment, Talent Mapping) and copy are a first draft; confirm with the client.

## Likely next steps
- Connect the contact form to a real endpoint (Formspree / Netlify Forms / client backend); see the TODO in `script.js`.
- Add a candidate CV submission flow (currently the "Submit your CV" button just links to the contact form).
- Real images, optimised (WebP/AVIF, with `width`/`height` set and `loading="lazy"` below the fold).
- SEO basics: Open Graph tags, favicon set, `sitemap.xml`.
