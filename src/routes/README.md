# Route Overview

This project uses file-based routing through TanStack Start. Each page in this directory corresponds to a route in the website.

## Route structure
- `index.tsx` — homepage
- `about.tsx` — brand story and profile
- `collections.tsx` — furniture collections
- `bespoke.tsx` — bespoke process and custom design story
- `showroom.tsx` — showroom visit information
- `contact.tsx` — consultation and contact page

## Routing conventions
This project follows the framework’s route-based structure rather than a Pages or App Router pattern. The root wrapper is `__root.tsx`, and route files remain within `src/routes/`.

## Notes for editing
- Keep route files focused on page-level composition.
- Content should generally be sourced from the data layer where possible.
- `routeTree.gen.ts` is generated automatically and should not be edited manually.

## Purpose of the route design
The route structure is aligned with a premium local showroom site, supporting clear browsing for:
- brand story
- product categories
- custom work process
- showroom visit info
- direct business inquiry
