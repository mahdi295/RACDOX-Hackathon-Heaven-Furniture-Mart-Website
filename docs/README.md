# Documentation Overview

This folder contains the documentation for the Heaven Furniture Mart website project. The project is a premium, bespoke furniture brand website for a showroom in Agrabad, Chattogram, designed to communicate craftsmanship, premium materials, and a personal consultation-led buying experience.

## Documentation set
- `README.md` — root project overview and quick-start guide
- `DEPLOYMENT.md` — hosting, Cloudflare setup, and deployment troubleshooting
- `CONTENT_GUIDE.md` — how to update copy across the site without changing layouts
- `ASSET_GUIDE.md` — asset sourcing, naming, and quality notes
- `TESTING.md` — QA checklist, checks, and quality gate guidance
- `CONTENT_REVIEW.md` — editorial review and business validation notes
- `PLAN_DEVIATIONS.md` — framework and implementation decisions versus the original plan
- `HANDOVER.md` — stakeholder-ready summary of what was built and what remains

## Project context
The website is built to support a local premium furniture business with:
- a luxury visual identity
- category-based collections for living, bedroom, dining, office, and custom solutions
- direct WhatsApp and phone inquiry flow
- branded showroom location and contact details
- a polished, conversion-focused presentation for modern customers

## Key business facts reflected in the site
- Business: Heaven Furniture Mart
- Founder: Abul Kalam Bhuiyan
- Location: Agrabad Access Road, Chattogram
- Contact: +880 1960-481983
- Email: heavenfurnituremart@gmail.com
- Working model: showroom-first, bespoke-furniture oriented, consultation-led sales

## Where content lives
The majority of copy and business data live in:
- `src/data/company.ts`
- `src/data/collections.ts`

Use `CONTENT_GUIDE.md` for practical editing instructions without touching the React code structure.

## Where to start
1. Read the root `README.md` for the overview.
2. Review `CONTENT_GUIDE.md` before changing copy.
3. Check `DEPLOYMENT.md` before live publishing.
4. Use `TESTING.md` before presenting or launching the site.
