# CLAUDE.md

Guidance for Claude (and any other contributor) working in this repository.

## Project overview

Personal/professional website for **Prof. Dr. Nurperi Gazioğlu**. Live at **https://nurperigazioglu.com**, hosted on **Netlify**.

The primary language is **Turkish**; **English** is the secondary language, added in phase 3.

The site is a content site: a homepage, an about page, a publications list, a contact page and, later, a blog that Nurperi Hanım can update herself without technical help.

The audience is **both patients and academic colleagues**. Pages should serve both: clear appointment and contact information for patients, and credentials and publications easy to find for colleagues. Keep the tone professional and plain, avoiding jargon in patient-facing text.

### Current state (before migration)

- Webpack 5 + Babel + React 18 + React Router single-page app.
- One page: an "under construction" holding page with logo, portrait, short notice and appointment contact links.
- Sass is well structured (`globals/`, `layout/`, `elements/`, `@use`/`@forward`) and should be kept.
- Assets: `LOGO.svg`, `photo_ng01.JPG`, `rockywall.png` (background texture), `favicon-16x16.png`.
- Known issues: README describes an old Gulp/11ty setup; webpack hard-coded to development mode; `lang="en"` on Turkish content; no `<h1>`; empty `alt` on the portrait; `box-sizing` reset only applies to pseudo-elements; JS `--doc-height` viewport hack; dependencies from 2022.
- The pre-migration state is tagged `v0-react-placeholder`.

### Target stack

- **Astro** (latest stable), which uses **Vite** as its build tool. There is no separate Vite config to maintain; Vite options go in `astro.config.mjs` under `vite` if ever needed.
- **Sass** via Vite (`npm i -D sass`); no extra config needed.
- **Static output** (`output: "static"`), deployed to **Netlify** (already connected to this repo and serving the domain).
- Netlify build settings live in `netlify.toml` (build command `npm run build`, publish directory `dist`), not only in the Netlify dashboard.
- No client-side framework by default. Add a React (or other) island only where a page genuinely needs interactivity.

## Principles

1. **Content lives in files, not templates.** Prose goes in Markdown, structured data (publications, contact details) in content collections or JSON/YAML. Templates only render. This is what makes phase 2 (CMS editing) an addition instead of a rewrite.
2. **i18n-ready from day one.** Even while only Turkish exists, UI strings live in one place and routes follow the final URL scheme, so phase 3 is translation work, not restructuring.
3. **Zero JS by default.** Static HTML first; islands only when justified.
4. **Accessible and indexable.** One `<h1>` per page, logical heading order, meaningful `alt` text, correct `lang`, per-page title and meta description.
5. **Protect the design.** Editable content is structured fields, not free-form page building.

## Directory structure (target)

```
.
├── astro.config.mjs
├── package.json
├── public/
│   ├── favicon-16x16.png
│   └── images/rockywall.png       # CSS background, referenced as /images/rockywall.png
└── src/
    ├── assets/                    # images processed by astro:assets
    │   ├── logo.svg
    │   └── photo-ng-01.jpg
    ├── components/                # Header, Footer, ContactList, LanguageSwitcher (phase 3)…
    ├── content/
    │   ├── pages/                 # Markdown for prose pages (about, home intro)
    │   ├── publications/          # one entry per publication (or a single data file)
    │   └── blog/                  # phase 2
    ├── content.config.ts          # collection schemas
    ├── data/
    │   └── contact.json           # phone, fax, GSM, email
    ├── i18n/
    │   └── ui.ts                  # UI strings keyed by locale ("Randevu Bilgileri", nav labels…)
    ├── layouts/
    │   └── BaseLayout.astro       # <html lang>, <head> meta, header, footer
    ├── pages/
    │   ├── index.astro            # Ana sayfa
    │   ├── hakkimda.astro         # Hakkımda
    │   ├── yayinlar.astro         # Yayınlar
    │   └── iletisim.astro         # İletişim
    └── styles/                    # migrated Sass partials
        ├── globals/
        ├── layout/
        ├── elements/
        └── style.scss
```

URL slugs are ASCII (`hakkimda`, `yayinlar`, `iletisim`); visible titles use correct Turkish characters.

## Migration plan (React/Webpack → Astro)

Work on the `astro-rebuild` branch. `main` is what Netlify serves at nurperigazioglu.com, so it stays on the current holding page until the new version at least matches it. Use Netlify deploy previews for the branch to check the build before merging.

1. Tag the current state: `git tag v0-react-placeholder && git push --tags`.
2. Scaffold Astro (minimal template) and merge its `package.json`/config into the repo.
3. Remove: `webpack.config.js`, `.babelrc`, `src/index.js`, `src/react/`, `src/js/resize.js`, `src/template.html`, and the webpack/babel/svgr/react dependencies.
4. Move Sass from `src/sass/` to `src/styles/` and import `style.scss` once in `BaseLayout.astro`.
5. Fix while migrating:
   - Replace `--doc-height` and `resize.js` with `100dvh` (with a `100vh` fallback).
   - Fix the reset: `*, *::before, *::after { box-sizing: inherit; }`.
   - Change the `url(~/src/assets/rockywall.png)` background to `/images/rockywall.png` (file in `public/images/`).
   - Self-host Crimson Text (e.g. `@fontsource/crimson-text` or Astro's font tooling) instead of the Google Fonts `@import`; this avoids sending visitor IPs to Google (KVKK).
6. Assets: rename `photo_ng01.JPG` → `photo-ng-01.jpg`, `LOGO.svg` → `logo.svg`. Render the portrait with `<Image />` from `astro:assets`; import the SVG logo as a component.
7. Rebuild the holding page in `index.astro` with `lang="tr"`, a proper `<h1>`, real `alt` text and contact data read from `src/data/contact.json`.
8. Configure i18n in `astro.config.mjs` now, even with a single locale:
   ```js
   i18n: {
     locales: ["tr"],          // add "en" in phase 3
     defaultLocale: "tr",
     routing: { prefixDefaultLocale: false },
   }
   ```
9. Add `netlify.toml`:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"
   ```
   Also check the Node version Netlify uses (set `NODE_VERSION` or an `.nvmrc`) against Astro's requirement, and that the dashboard settings don't override the file.
10. Rewrite `README.md` to describe the real stack, commands and roadmap.
11. Merge to `main`, confirm the production deploy on nurperigazioglu.com, and check the live site.

## Commands

```
npm install
npm run dev       # local dev server
npm run build     # static build to dist/
npm run preview   # serve the production build locally
```

## Roadmap

### Phase 0 — Content gathering (runs alongside phase 1)

- [ ] Biography text (short version for homepage, long version for Hakkımda), approved by Nurperi Hanım.
- [ ] Professional photos, with permission to use them.
- [ ] Full publications list, compiled and entered by hand for now (one collection entry per publication). Automating it from ORCID/PubMed can be revisited later.
- [ ] Final contact details and address/map location if wanted.
- [ ] Check legal and regulatory requirements: KVKK privacy notice and cookie handling; Turkish rules on how physicians may present themselves online (no patient testimonials, no promotional claims). Confirm with someone qualified.
- [x] Hosting: Netlify. Domain: nurperigazioglu.com (both already live).
- [x] Email: Zoho Mail, with DNS records (MX, SPF, DKIM, verification TXT) managed in Netlify DNS.

### Phase 1 — Working website (Turkish, static)

- [ ] Complete the Astro migration above.
- [ ] Pages: Ana sayfa, Hakkımda, Yayınlar, İletişim.
- [ ] All content in content files/collections with schemas in `content.config.ts`, even though it is edited by hand for now.
- [ ] Shared layout: header with logo and navigation, footer with contact links and privacy notice link.
- [ ] Widgets: YouTube embeds via `youtube-nocookie.com`, ideally click-to-load (thumbnail first) to keep pages light and KVKK-friendly.
- [ ] SEO: per-page `<title>` and meta description, Open Graph image for link previews (WhatsApp etc.), `sitemap.xml` via `@astrojs/sitemap`, `robots.txt`.
- [ ] Accessibility pass: headings, alt text, colour contrast of violet/lilac on the textured background, keyboard focus styles.
- [ ] Deploy to the existing Netlify site / domain (replacing the holding page).

### Phase 2 — Editing for a non-technical user

- [ ] Choose the editing approach. **Deliberately deferred** until phase 1 is solid; do not add CMS-specific files or dependencies before then. Leading option: a git-based CMS (candidates: Sveltia CMS, Decap CMS, Pages CMS), where edits are saved as commits and Netlify rebuilds automatically, with no server or database. Trial the shortlist with Nurperi Hanım before deciding.
- [ ] Define structured, Turkish-labelled forms: bio, publications (title, authors, journal, year, DOI/link), contact details, homepage intro.
- [ ] Blog collection: title, date, summary, cover image, body. Nurperi Hanım can create, edit and publish posts.
- [ ] Rely on collection schemas so a bad edit fails the build instead of publishing a broken page.
- [ ] Write a short Turkish how-to guide for her.
- [ ] Optional, later: a custom-designed editing UI on top of the same content files. Only if the CMS proves insufficient; it would require handling authentication, uploads and security.

### Phase 3 — Internationalisation

- [ ] Add `"en"` to `locales` in `astro.config.mjs`; Turkish stays at the root, English under `/en/` with translated slugs: `/en/about`, `/en/publications`, `/en/contact`, `/en/blog`.
- [ ] Keep a slug map (e.g. in `src/i18n/routes.ts`) pairing each Turkish route with its English one, used by the language switcher and `hreflang` links so each page links to its exact counterpart, not the other language's homepage.
- [ ] Translate `src/i18n/ui.ts` strings and content entries (per-locale folders or a `lang` field, decided before phase 2 content grows).
- [ ] Language switcher component; `hreflang` alternate links; per-locale sitemap entries.
- [ ] Extend CMS forms so translations can be edited.
- [ ] Decide whether blog posts are translated or Turkish-only.

## Rules for working in this repo

- **Never invent content.** Do not write biography details, credentials, publications or medical claims. Use clearly marked placeholders (`TODO: içerik bekleniyor`) instead.
- **Respect medical advertising rules.** No testimonials, superlatives ("the best"), promises of results or promotional wording.
- **Turkish text must be correct**, including ğ, ı, İ, ş, ç, ö, ü. Watch case conversions: `"i".toUpperCase()` is not `"İ"` unless using `toLocaleUpperCase("tr")`.
- **Do not change public contact details** without explicit confirmation.
- **Never touch the Netlify DNS records for email** (MX, SPF, DKIM and Zoho verification TXT records). Deploys and domain settings must leave them intact; changing them breaks the `info@` mailbox.
- **No new client-side JavaScript or dependencies** without a stated reason.
- **Keep the existing visual identity:** Crimson Text, palette in `styles/globals/_theme.scss` (`--black`, `--violet`, `--lilac`, `--beige`, `--white`), breakpoint map in `_mixins.scss` (optimise for `mobile-m`, `tablet-m`, `pc-l`).
- **Commits:** short imperative messages, matching the existing history ("Set up Sass", "Turn contact info into links").
- Run `npm run build` before committing; the build must pass.

## Decisions

- **Languages:** Turkish (primary, at the root), English (secondary, under `/en/`, phase 3).
- **Audience:** both patients and academic colleagues.
- **Hosting:** Netlify, already connected and live.
- **Domain:** nurperigazioglu.com, already served.
- **Publications:** compiled and maintained by hand for now.
- **Email:** Zoho Mail; DNS records live in Netlify DNS.
- **English slugs:** direct translations (`/hakkimda` → `/en/about`, `/yayinlar` → `/en/publications`, `/iletisim` → `/en/contact`).
- **CMS:** deferred to phase 2; no CMS work until the phase 1 foundation is solid.