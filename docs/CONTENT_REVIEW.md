# Content Review

Cross-checked against `Heaven-Furniture-Mart-Master-Build-Plan-v4.md`. Everything in Part 4 (exact copy) is reproduced verbatim in `src/data/company.ts` / `src/data/collections.ts` — tagline, MD quote, services, milestones, FAQ, address, testimonial. No invented copy. **No discount/offer language exists anywhere in the codebase** — confirmed by grep, matches Part 0.1 / 4.5's hard requirement.

## ⚠️ Open items — from the plan's own Part 8, still open
- [ ] Phone/WhatsApp still active: +880 1960-481983
- [ ] Email still monitored: heavenfurnituremart@gmail.com
- [ ] **Bespoke process steps 03–05** (`collections.ts` → `bespokeProcess`, "Design / Craft / Deliver") — plan's own Part 4.8 flags these as agent-extrapolated continuations of the two real documented steps ("Meet", "Research"). Confirm actual internal workflow wording with the MD.
- [ ] Any milestones newer than the 2026 BFIOA recognition entry
- [ ] Whether it's okay to feature the FYTOBYTE case-study photos prominently — they show real, identifiable FYTOBYTE staff in candid shots, not styled product photography. Current build follows the plan's own mitigation: uses `fytobyte-00-overview.jpg` (furniture-focused, not a face close-up) and captions honestly ("Photographed at handover, published with FYTOBYTE's own project announcement") — but final go/no-go on "prominent" placement is still the client's call.
- [ ] The plan notes one **unconfirmed** claim that must stay off the site: an interior-design/consultation job posting seen on LinkedIn. This is separate from the confirmed IIUC CSE Fest sponsorship. It is **not** in the current build — correct, leave it out.

## ⚠️ Needs owner confirmation (not from the plan — found in this review)
- **Founding vs showroom date**: site distinguishes "Founded 2020" from "Agrabad showroom opened 2021" (`about.tsx`). Confirm both dates, or simplify if the business was always at this address.
- **Award/body name spelling**: ~~"BFIOA" (2026 milestone) — verify exact name~~ **Confirmed** — matches the official Company Deck PDF exactly ("Received the BFIOA recognition nationwide").

## Deliberate scope decisions (not gaps — see PLAN_DEVIATIONS.md)
- `/journal` route intentionally not built — the plan's own Part 3.2 cut-order lists it first to cut under time pressure, and Tier 3 content ("small doses") doesn't require a dedicated route.
- Tech stack is TanStack Start, not Next.js as Part 6 specifies — functionally equivalent (SSR React, same styling/forms/motion/icon libraries), changed for a documented reason. See `PLAN_DEVIATIONS.md`.

## Independently verified in this pass
- Phone, email, address in `company.ts` cross-checked against `facebook-page-details.txt` — match.
- All 52 referenced image files correspond 1:1 to real uploaded files — no missing assets, no orphaned data entries.
- Consultation form fields (Part 5) match exactly: Name*, Phone*, Project Type, Furniture Category, Message, Preferred contact.
- WhatsApp deep-link message template (Part 5) matches exactly, field-for-field.
- MD quote (Part 4.4) reproduced word-for-word.
- Address (Part 4.9c) — "Opposite of RAK Ceramics, Agrabad Access Road, Chattogram, 4217" — used consistently in footer, showroom section, contact page, and Maps query string.

## Structural cleanup pass (this revision)
A second AI agent's edits (see chat history / `prev_work/`) restored good work but reintroduced two real bugs and left homepage bloat unaddressed. Fixed and re-verified (build + lint + tsc + dev-server smoke test all clean):

- **Homepage cut from 12 sections to 8** (Hero, Collections, WhyHeaven, Process, Gallery, Voices, ShowroomStrip, FAQ, ClosingCTA). Removed `BrandIntro` (redundant with WhyHeaven + About), `Milestones` (kept exclusively on About, was duplicated on both), `SocialProof` (redundant with Footer's social links, and its grid tiles all linked to Facebook regardless of platform shown — a real bug, not just clutter).
- **About page**: removed duplicate `Voices` (testimonials now live only on the homepage), replaced the team photo repeated twice on one page with a different real photo (MD at the 2024 fair booth), removed a fake "MD photo" that was actually just the Facebook profile-picture logo tile — replaced with an honest initials badge.
- **Footer logo bug**: was rendering the dark-colored logo on the dark footer background (same near-invisible issue as the original navbar bug) — swapped to the light-colored mark.
- **Showroom page**: same storefront photo was used 4 times sitewide; now 2 (homepage strip + showroom hero banner — different roles, matches the audit's own "same image, different role" rule), with the showroom content section now showing a distinct product photo instead of repeating the exterior shot.
- **Bespoke page**: process section rebuilt as a connected, scroll-animated timeline (icons, gold progress line, staggered reveal) instead of a static 5-column grid.
- Renamed two malformed filenames (`logo(2).png`, `14th Chattogram Furniture Fair, 2024(2).jpg`) to the project's naming convention and folded the second into the fair's event-photo set.

## Third structural/bugfix pass (this revision)
Full file-by-file audit (`npx tsc`, `npx eslint`, manual read of every custom component/route). Found and fixed one real regression from an earlier AI edit to `lightbox.tsx` (off-brand red close button, an invalid `z-60` Tailwind class that could let images cover the close/nav buttons, Windows CRLF line endings mixed into an otherwise LF codebase) plus a duplicated-caption bug in Milestones and a Cloudflare deploy failure caused by the compatibility date defaulting to the build machine's clock instead of a pinned value. Full list: `REBUILD_CHANGELOG.md` #9–14. Everything else in the codebase (all other routes, sections, data files) checked clean — no further bugs found.

## Still open — real manual work, not something to fabricate
From the second agent's own roadmap, genuinely worth doing but requiring the owner (not invented content):
- **Lead capture reliability**: consultation form currently only reaches the business if the visitor clicks through to WhatsApp. A guaranteed capture (email/DB) needs a real backend — out of scope for a static hackathon build, worth doing for the live business.
- ~~**More original photography**: workshop/joinery/material close-ups, delivery & installation, showroom interior~~ **Resolved this revision**: real showroom interior photo added, real MD portrait added (replacing the placeholder initials badge), current storefront photo added (second angle, updated signage), craftsmanship/workshop process shots added to the Bespoke page, and 16 additional real product photos (sourced and categorized by the owner from the business's own Facebook page) added across all 5 collection galleries — living, bedroom, dining, office, and custom each now have noticeably more variety. Delivery/installation photography is still not available.
- **SEO finishing**: sitemap.xml, canonical URLs, Open Graph share image — all need the real deployed domain first (see `DEPLOYMENT.md`).
- **Claims audit**: any "leading brand" / "trusted by hundreds" style language should be checked against what the business can actually stand behind — current copy was kept close to the real Facebook/plan source and avoids this pattern, but review before public launch.
