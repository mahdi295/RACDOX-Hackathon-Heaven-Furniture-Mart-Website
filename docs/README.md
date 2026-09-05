# Heaven Furniture Mart — Website

Bespoke luxury furniture site for Heaven Furniture Mart (Agrabad, Chattogram). Built with TanStack Start (React 19 + SSR), Tailwind CSS v4, shadcn/ui, embla-carousel, framer-motion.

## Stack
- **Framework:** TanStack Start + TanStack Router (file-based routes in `src/routes/`)
- **Styling:** Tailwind CSS v4 (`src/styles.css`, brand tokens under `@theme`)
- **UI kit:** shadcn/ui components in `src/components/ui/` (generated, edit sparingly)
- **Motion:** framer-motion (`Reveal.tsx`, `Hero.tsx` crossfade carousel)
- **Carousel:** embla-carousel-react via shadcn `Carousel` (Hero dots, Gallery swipe)
- **Deploy target:** Cloudflare Workers (nitro `cloudflare-module` preset, see `vite.config.ts`)

## Run locally
```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build to .output/
npm run lint      # eslint + prettier
```

## Project structure
```
src/
  routes/            # one file per page (index, about, bespoke, collections, showroom, contact)
  components/
    layout/           # Navbar, Footer, SiteLayout, PageHero
    sections/         # Hero, Collections, Gallery, WhyHeaven, Process, Voices, etc.
    ui/               # shadcn primitives
  data/               # company.ts (contact/copy), collections.ts (products, gallery, events)
  assets/images/      # real photo files (see ASSET_GUIDE.md)
  lib/assets.ts       # img("filename.jpg") -> resolved build URL
```

## Editing content
Almost all copy lives in `src/data/company.ts` and `src/data/collections.ts` — see `CONTENT_GUIDE.md`.

## Known non-blocking items
See `CONTENT_REVIEW.md` for what was carried over from the original build plan without independent verification (mainly the exact 5-step bespoke process wording), and for the log of bugs found/fixed in each review pass.
