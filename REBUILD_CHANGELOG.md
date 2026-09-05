# Rebuild Changelog — mapped against the original audit

| # | Audit finding | Fixed | Where |
|---|---|---|---|
| 1 | 806 raw JPG, 207MB, no WebP | All 806 images converted to WebP (q78, capped 2000px width), originals removed. Total 150MB. `img()` resolver auto-falls back `.jpg/.png` → `.webp` so zero data-file changes needed. | `src/assets/images/**`, `src/lib/assets.ts` |
| 2 | No scroll parallax / flat motion | New `Parallax.tsx` (scroll-linked `useTransform`) applied to: Hero-adjacent subpage banners (`PageHero`), WhyHeaven anchor photo | `src/components/Parallax.tsx`, `src/components/layout/SiteLayout.tsx`, `sections/WhyHeaven.tsx` |
| 3 | Hero — generic crossfade, no scroll cue | Slow continuous Ken Burns pan (scale 1.06→1.16 over slide duration instead of static hold), animated scroll-down chevron cue added | `sections/Hero.tsx` |
| 4 | Grid monotony — Gallery uniform carousel | Rebuilt as asymmetric bento grid (varied col/row spans), hover caption reveal | `sections/Gallery.tsx` |
| 4b | Collections cards — single static image | Hover now crossfades to a second detail/angle shot from the same collection's gallery, on both the featured tile and the 4 compact tiles | `sections/Collections.tsx` |
| 5 | Testimonials — off-brand palette (zinc/yellow), text-only, no avatars | Reskinned to brand tokens (ivory/gold/charcoal), added initials-avatar chips, pulled 2 strongest reviews into large "featured" cards above the ambient marquee | `sections/Voices.tsx` |
| 6 | Section rhythm too uniform | WhyHeaven restructured around a photo anchor (was pure icon/text — zero imagery); services grid now responsive 3-col→1-col instead of flat stack | `sections/WhyHeaven.tsx` |
| 7 | No micro-interactions (magnetic buttons, pointer accents) | `MagneticLink.tsx` (pointer-pull spring) applied to Hero + Closing CTA primary buttons. `PointerGradient.tsx` (lightweight canvas, brand gold/teal, pointer-reactive) added behind Closing CTA — the "getlayers.ai-style" layer, brand-toned instead of generic 3D | `src/components/MagneticLink.tsx`, `src/components/PointerGradient.tsx`, `sections/Hero.tsx`, `sections/ClosingCta.tsx` |
| 8 | "WhyHeaven" section fully generic icon-grid | See #6 — now photo-anchored with a stat callout ("6+ years") | `sections/WhyHeaven.tsx` |

## Not changed (already solid, confirmed during audit)
- Collections section was already asymmetric bento (large featured + 2×2), not uniform as first assumed from the live-fetch alone — only the hover-reveal was added.
- Process section already image+timeline split — left as is.
- Design tokens, typography pairing (Poppins/Cormorant/Manrope), a11y (focus rings, skip link, mobile drawer) — already strong, untouched.

## Bugfix pass (this revision)
| # | Bug | Fix | Where |
|---|---|---|---|
| 9 | Lightbox close button was jarring red, off-brand (`bg-red-600`), file had Windows CRLF line endings baked in (sign of a broken partial edit from a prior AI pass) | Close button reskinned to brand tokens (charcoal/gold, matches every other overlay control on the site); file re-saved with LF endings | `src/components/ui/lightbox.tsx` |
| 10 | `z-60` used on the lightbox close/prev/next buttons — not a real Tailwind class (default scale stops at `z-50`), so it silently did nothing; buttons could end up visually covered by the image dialog since it shares the same effective stacking level and comes later in the DOM | Replaced with valid `z-50`/`z-40` values that correctly layer buttons above the image | `src/components/ui/lightbox.tsx` |
| 11 | Scroll-lock logic (with `@ts-ignore` + a `window.__hfm...` global) was copy-pasted separately into both the mobile nav and the lightbox | Extracted into one shared, properly-typed util — no more `@ts-ignore`, single source of truth | `src/lib/scroll-lock.ts`, `src/components/layout/Navbar.tsx`, `src/components/ui/lightbox.tsx` |
| 12 | Milestones event photos rendered their caption twice — once always-visible below the image, once again in the hover overlay | Removed the redundant static caption; hover-reveal caption (consistent with Gallery/Collections pattern) is the only one now | `src/components/sections/Milestones.tsx` |
| 13 | `as any` used twice for CSS custom-property typing | Replaced with proper `CSSProperties` typing | `src/components/sections/Milestones.tsx` |
| 14 | Cloudflare deploy failing with `Can't set compatibility date in the future` (error 10021) | Root cause: nitro's `cloudflare-module` preset defaults `compatibility_date` to the **build machine's system clock**, so a wrong/drifted clock produces a future date Cloudflare rejects. Pinned an explicit, known-good `compatibilityDate` in the nitro config instead of relying on the clock | `vite.config.ts` |

## Verified
- `npx tsc --noEmit` — clean
- `npx eslint .` — 0 errors (6 pre-existing warnings, all vendored shadcn/ui files, not actionable)
- `npm run build` (full Vite + Nitro + Cloudflare Workers build) — succeeds, no errors, `wrangler.json` now emits a fixed past `compatibility_date`

## Known trade-off to flag
- Asset folder is 150MB even after WebP conversion (down from 207MB) — some raw catalogue photos were very high resolution before compression. If Cloudflare Workers asset limits become an issue at deploy, drop `quality` to ~65 or cap width to 1400px in the conversion step for another ~30-40% cut.
