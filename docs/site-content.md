# nurperigazioglu.com — Sitemap & Content Directives

Oct 31, 2026 · @Eren

## Status

These decisions are what phase 1 is built on. They are provisional: three of them (marked **\[Meeting\]**) are revisited with Nurperi Hanım at the end of phase 1, and anything she changes is updated here and in `CLAUDE.md`.

| Decision | Current choice | Review |
| --- | --- | --- |
| Voice | Third person everywhere except the blog (first person) | \[Meeting\] |
| Informational section name | Bilgi Köşesi | \[Meeting\] |
| Navigation contents and order | Ana Sayfa, Hakkında, Bilgi Köşesi, Blog (phase 2), İletişim | \[Meeting\] |
| About section slug | `/hakkinda` (follows the third-person voice) | \[Meeting\], with the voice |
| Publications location | Under Hakkında, with homepage and footer shortcuts | End of phase 1 |
| Blog | Top-level section, built in phase 2 | Settled |
| Press items | Linked out, never re-hosted | Settled |

## Navigation

The main navigation has five items in this order; Blog appears only once phase 2 ships it.

| Order | Label (TR) | Label (EN) | Path | Phase |
| --- | --- | --- | --- | --- |
| 1 | Ana Sayfa | Home | `/` | 1 |
| 2 | Hakkında | About | `/hakkinda` | 1 |
| 3 | Bilgi Köşesi | Health Corner (working name) | `/bilgi-kosesi` | 1 |
| 4 | Blog | Blog | `/blog` | 2 |
| 5 | İletişim | Contact | `/iletisim` | 1 |

A TR | EN language switch sits at the end of the navigation from phase 3. It links each page to its exact counterpart, never to the other language's homepage.

The footer carries: contact details, a direct link to Yayınlar (for colleagues), the KVKK notice, and the site editor's contact (required on informational sites).

## Sitemap

Every page below is built in phase 1 unless marked otherwise. English counterparts arrive in phase 3 under `/en/` with translated slugs.

```
nurperigazioglu.com
│
├── /                                 Ana Sayfa
│
├── /hakkinda                         Hakkında (hub: intro + 4 blocks)
│   ├── /hakkinda/ozgecmis            Özgeçmiş
│   ├── /hakkinda/oduller             Ödüller ve Takdirler
│   ├── /hakkinda/yayinlar            Yayınlar
│   └── /hakkinda/basin               Basında (filterable list)
│
├── /bilgi-kosesi                     Bilgi Köşesi (hub)
│   ├── /bilgi-kosesi/[konu]          Topic articles
│   ├── /bilgi-kosesi/ne-zaman-doktora   Ne Zaman Doktora Başvurmalı?
│   ├── /bilgi-kosesi/sss             Sıkça Sorulan Sorular
│   ├── /bilgi-kosesi/sozluk          Sözlük
│   └── /bilgi-kosesi/videolar        Videolar
│
├── /blog                             Blog                         [phase 2]
│   └── /blog/[slug]                  Blog post                    [phase 2]
│
├── /iletisim                         İletişim
│
└── /kvkk                             KVKK Aydınlatma Metni (footer only)
```

| Turkish path | English path (phase 3) |
| --- | --- |
| `/hakkinda` | `/en/about` |
| `/hakkinda/ozgecmis` | `/en/about/cv` |
| `/hakkinda/oduller` | `/en/about/awards` |
| `/hakkinda/yayinlar` | `/en/about/publications` |
| `/hakkinda/basin` | `/en/about/press` |
| `/bilgi-kosesi` | `/en/health-corner` (follows the final name) |
| `/bilgi-kosesi/ne-zaman-doktora` | `/en/health-corner/when-to-see-a-doctor` |
| `/bilgi-kosesi/sss` | `/en/health-corner/faq` |
| `/bilgi-kosesi/sozluk` | `/en/health-corner/glossary` |
| `/bilgi-kosesi/videolar` | `/en/health-corner/videos` |
| `/blog` | `/en/blog` |
| `/iletisim` | `/en/contact` |
| `/kvkk` | `/en/privacy` |

Slugs under Bilgi Köşesi and the English health-corner slugs depend on the final section name; renaming before launch costs nothing, after launch it needs redirects.

## Page directives

Each page states who it serves and what it contains; patients and academic colleagues are both primary audiences.

### Ana Sayfa

The homepage does the heavy lifting: it surfaces the best of every section so neither audience has to dig.

1. Introduction: name, title, specialty, portrait, two or three sentences.
2. Areas of expertise, each linking to its Bilgi Köşesi article.
3. Highlights: selected publications, recent press, latest Bilgi Köşesi articles or videos. Each block links to its full page.
4. Contact strip: appointment phone, email, link to İletişim.

### Hakkında (hub)

The hub is a real page, not a menu: a short introduction (photo, a few paragraphs, key milestones), then four blocks. Each block has a one-paragraph introduction, a teaser of its content (the latest or most notable two or three items) and a link to the full page ("Tüm yayınlar", "Tüm basın haberleri"…). The blocks are cards in UX terms, not necessarily in visual style.

- **Özgeçmiş:** full biography, CV timeline (education, positions, titles), memberships, editorial and board roles.
- **Ödüller ve Takdirler:** newest first; each entry has year (optionally `yearEnd`, shown as year–yearEnd), award, awarding body and an optional one-line context. Entries marked `selected` appear in the hub teaser; the full page lists all.
- **Yayınlar:** one page with three sections: Makaleler, Kitap ve Bölümler, Bildiriler. Each entry has authors, title, journal or book, year, and a DOI or PubMed link. Newest first within each section. Entered by hand for now.
- **Basında:** a filterable list that works like a database view. Each item has outlet, date, title, type (Röportaj, Haber, Dijital, Video), region (Yurt içi, Yurt dışı), language, a one-line summary written for this site, and the external link. Newest first; filters for type, region and year.

### Bilgi Köşesi (hub)

Plain-language health information for patients and the curious. The hub introduces the section and links to its parts.

- **Topic articles:** one page per condition or subject (e.g. hipofiz adenomu). Suggested structure: what it is, symptoms, diagnosis, treatment options, when to see a doctor. Each shows its last-updated date and its sources.
- **Ne Zaman Doktora Başvurmalı?:** general warning signs and which kind of specialist to see. It never steers readers to her specifically.
- **Sıkça Sorulan Sorular (SSS):** general questions patients ask, grouped by topic, each with a short plain-language answer and a link to the relevant topic article. Informs like the rest of the section; it does not direct readers to her as a specific doctor. Shows its last-updated date.
- **Sözlük:** A–Z terms with anchors, so articles can link to a definition.
- **Videolar:** educational videos, click-to-load YouTube embeds via `youtube-nocookie.com`. Each has title, date, topic and a short description.

### Blog (phase 2)

Longer or more personal writing in the first person: congress notes, reflections, news. Each post has title, date, summary and optional cover image.

### İletişim

Appointment phone, fax, mobile, email, address, and a click-to-load map. No contact form in phase 1; a form collects personal data and needs its own KVKK handling.

### KVKK Aydınlatma Metni

The privacy notice, linked from the footer. It covers embeds, any analytics, and contact data.

## Content rules

These rules apply to every page and to everything Nurperi Hanım adds herself in phase 2.

### Voice and tone

- Third person everywhere ("Prof. Dr. Gazioğlu 1984'te…"); first person only in the blog.
- Professional and plain. Patient-facing text avoids jargon or explains it, linking to the Sözlük.
- Correct Turkish characters everywhere (ğ, ı, İ, ş, ç, ö, ü).

### Where content goes

- Content about a medical topic goes in Bilgi Köşesi; content about her goes in Hakkında → Basında.
- A video can live in both places when it serves both purposes (e.g. a TV interview that also explains a condition). It is entered once and tagged for both lists, never duplicated.
- Press is always linked out, never re-hosted. The summary line is written for this site, not copied from the article.

### Regulatory rules (Turkey)

Physicians' websites fall under the Ministry of Health's rules on promotion and information. Final content is checked by someone qualified before launch.

- No patient testimonials, thank-you messages or satisfaction quotes.
- No superiority claims ("en iyi", "en deneyimli"), no success counters, no promised results.
- No before/after images. Patient images only with documented written consent.
- Every informational page shows its last-updated date; the footer shows the site editor's contact.
- Bilgi Köşesi informs; it does not direct readers to her as a specific doctor.
- YouTube embeds and maps load only on click, to stay KVKK-friendly.

## For the end-of-phase-1 meeting

- [ ] Voice: keep third person (and the `/hakkinda` slug), or switch to first person (`/hakkimda`)?
- [ ] Name of the informational section: Bilgi Köşesi, Hasta Bilgilendirme, or another? The slug and English name follow.
- [ ] Navigation contents and order: confirm the five items, and whether Blog appears.
- [ ] Publications: stay under Hakkında, or move to the top level if colleagues struggle to find them?
- [ ] Which videos and interviews she wants listed, and which belong in both Basında and Bilgi Köşesi.
- [ ] Who is named as the site editor in the footer.
