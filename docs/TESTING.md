# Testing / QA

## Verified in this pass (automated)
- `npm run build` — clean, no errors, SSR + client bundles produce successfully.
- `npm run lint` — 0 errors. 6 remaining warnings are shadcn/ui boilerplate (`react-refresh/only-export-components`) — expected, not actionable, do not fix by splitting those files (they're vendored primitives).
- Asset resolution — all 52 `img("...")` calls across the codebase resolve to a real bundled file; no `[assets] missing asset` console warnings.
- Full audit pass (this revision): `lightbox.tsx` bugs fixed (off-brand red close button, invalid `z-60` class, duplicated scroll-lock code, CRLF corruption) — see `REBUILD_CHANGELOG.md` #9–11. Confirm on a real device: open a collection gallery image, check the close (X) and arrow buttons are visible and clickable over every photo, not just small ones.

## Manual QA checklist before demo/launch
Run through each on **mobile width (375px)**, **tablet (768px)**, and **desktop (1440px)**:

- [ ] Navbar: logo visible and undistorted at all widths; mobile menu opens/closes, scroll locks body
- [ ] Homepage Hero: 3 slides crossfade automatically (~5.5s), dots (desktop) reflect current slide and are clickable
- [ ] Homepage Gallery: carousel swipes on touch, prev/next arrows work, no layout shift
- [ ] All 5 collection cards on Home link to the correct anchor on `/collections`
- [ ] `/collections` in-page nav links scroll to the right section (`scroll-mt-24` offset clears the fixed navbar)
- [ ] Contact form (`ConsultationForm.tsx`) — required-field validation, submit success/error state
- [ ] WhatsApp link opens with prefilled number
- [ ] All external links (`Maps`, `Facebook`, `Instagram`, `YouTube`) open in a new tab
- [ ] Footer phone/email links work (`tel:`, `mailto:`)
- [ ] 404 page renders for an unknown route
- [ ] Fonts: Poppins visible on headings, Cormorant Garamond on serif accents/quotes, Manrope on body — check Network tab for `fonts.googleapis.com` request succeeding (no ad-blocker false-positive during your own testing)
- [ ] `prefers-reduced-motion` — confirm Reveal/Hero animations are unobtrusive for a user with reduced-motion OS setting (framer-motion respects this by default at the OS level for most transitions; spot-check)

## Suggested before-judging checks
- Run Lighthouse (Chrome DevTools) on `/` — target ≥90 Performance / ≥95 Accessibility / ≥95 Best Practices on desktop throttling. The two oversized PNGs flagged in `ASSET_GUIDE.md` were the main performance risk and are already fixed; re-run Lighthouse to confirm after any further image additions.
- Test on an actual mid-range Android phone if possible, not just DevTools device emulation — carousel touch/drag behavior and font rendering can differ.
