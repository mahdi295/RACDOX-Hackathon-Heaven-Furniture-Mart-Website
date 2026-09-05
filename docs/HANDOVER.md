# Final Handover Report

## A. What was built
Homepage (`/`) with Hero (3-slide crossfade carousel), Brand Intro, 5-category Collections grid, Why Heaven / services, Bespoke Process (5 steps), Gallery (swipeable carousel), Voices (MD quote + customer testimonial), Showroom strip, Milestones, FAQ, Closing CTA. Supporting routes: `/collections` (all 5 categories, deep-linkable), `/bespoke` (process + FYTOBYTE case study), `/about` (story + milestones + fair/award grid), `/showroom` (visit info), `/contact` (consultation form + direct contact). `/journal` intentionally not built — see `CONTENT_REVIEW.md`.

## B. Business content used, and source
All Part 4 copy (tagline, MD quote, services, FAQ, milestones, testimonial, address) reproduced verbatim from the Master Build Plan / Facebook page export — see `CONTENT_REVIEW.md` for the line-by-line verification.

## C. Real assets used, and placement
52 real photos, all traceable to `Heaven-Assets-Organized` folders — full mapping in `ASSET_GUIDE.md`.

## D. Missing info needing manual verification
See `CONTENT_REVIEW.md` — bespoke process steps 03–05, milestones freshness, FYTOBYTE feature-prominently approval, phone/email still active.

## E. Run locally
```bash
npm install && npm run dev
```

## F. Deploy / live URL
See `DEPLOYMENT.md`. **Live URL: not yet deployed — deploy before recording/submitting** (`npm run build && npx wrangler deploy`, or your preferred host).

## G. Manual testing
See `TESTING.md`. Latest bugfix pass (lightbox, Cloudflare deploy fix): `REBUILD_CHANGELOG.md` #9–14.

## H. Known limitations
- Consultation form has no server-side capture — a lead is only guaranteed if the visitor clicks through to WhatsApp after submitting (by design, per plan Part 5 — "no confirmed backend exists"). Fine for the hackathon; worth a real backend if this becomes the live business site.
- No `/journal` route (deliberate cut, per plan's own priority order).
- No sitemap.xml / canonical URLs yet — needs the real deployed domain first (see `DEPLOYMENT.md`).
- Built on TanStack Start, not Next.js as the plan specified — see `PLAN_DEVIATIONS.md` for why, and how to change it if required.

## I. Suggested 60–90 second recording sequence
Matches plan Part 15 exactly: Hero (let one slide transition play) → Collections (scroll all 5 cards) → Bespoke section/process → Gallery (swipe the carousel) → Showroom → Milestones/MD quote → Closing CTA → fill the consultation form → show WhatsApp deep link firing with prefilled message → quick resize/mobile-view glimpse. No voice or face required.

## J. Suggested Facebook submission caption
> Heaven Furniture Mart's Facebook page, reimagined as a full bespoke-furniture brand website — built for #racdox_hackathon 2026. Real showroom photography, a working consultation-to-WhatsApp flow, and a five-category collection browser, all built around Heaven's own real brand assets and copy. 🛋️🪵 #racdox_hackathon
