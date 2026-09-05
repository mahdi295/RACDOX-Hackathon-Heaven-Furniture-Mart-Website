# Content Guide

How to update site copy without touching layout code.

## Company info, contact, socials
`src/data/company.ts`
- `company` — name, tagline, phone, WhatsApp number, email, address, map link, social URLs
- `aboutBrand`, `whyChooseUs`, `services`, `ourServices`, `scaleAndTrust` — About/Why-Heaven copy blocks
- `mdQuote` — Managing Director quote (Voices section)
- `closing` — final CTA heading/body
- `faqs` — FAQ accordion (array of `{ q, a }`)

## Products, gallery, process, milestones
`src/data/collections.ts`
- `collections` — the 5 product categories (Living, Bedroom, Dining, Office, Custom). Each has `slug`, `name`, `items`, `blurb`, `cover`, `coverAlt`, and a `gallery` array of `{ file, alt }`
- `bespokeProcess` — the 5-step process cards (see `CONTENT_REVIEW.md` — steps 03–05 wording is provisional)
- `milestones` — timeline on About page
- `eventPhotos` — fair/award photos with captions
- `caseStudy` — the FYTOBYTE office project on the Bespoke page
- `testimonial` — the written customer review

## Adding a new photo
1. Drop the file in `src/assets/images/` (keep the same descriptive-filename convention, e.g. `living-12-new-sofa.jpg`)
2. Reference it anywhere with `img("living-12-new-sofa.jpg")` from `@/lib/assets`
3. No manual registration needed — `lib/assets.ts` globs the folder automatically at build time

## Editing a page's SEO title/description
Each route file (`src/routes/*.tsx`) exports its own `title`/`description` consts near the top, used in `head()`.
