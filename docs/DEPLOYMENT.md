# Deployment

## How the site works (no backend required)
This is a fully static-data marketing/lead-gen site — no database, no server API calls. The "Request a Consultation" form validates client-side, then hands the visitor a pre-filled **WhatsApp deep link** (`src/lib/whatsapp.ts`) to send the enquiry directly to the business number. This means:
- Nothing to host besides the built site itself
- Leads only reach the business if the visitor clicks "Continue on WhatsApp" after submitting — if you later want guaranteed lead capture (e.g. also emailing/logging every submission server-side even if the visitor doesn't click through), that requires adding a small backend endpoint — not currently built.

## Build target
`vite.config.ts` is configured with nitro's `cloudflare-module` preset — `npm run build` outputs a Cloudflare Workers–ready bundle (`.output/`, plus `wrangler.json`).

### Deploy to Cloudflare (as configured)
```bash
npm run build
npx wrangler deploy   # or: npx nitro deploy --prebuilt
```

### Deploying elsewhere (Vercel / Netlify / your own VPS)
The app is SSR (TanStack Start), so a plain "upload the folder to any static host" won't run the server routes/head tags correctly. Options:
- **Easiest for a hackathon deadline:** deploy as-is to Cloudflare Workers/Pages (free tier, matches current config, zero changes needed).
- **Vercel/Netlify:** need their respective nitro presets (`vercel`, `netlify`) swapped into the build config — ask if you want this changed.
- **Static-only fallback:** if you don't need true SSR (fine for this kind of marketing site), TanStack Start also supports a prerendered/SPA output mode — bigger config change, only worth it if Cloudflare isn't an option.

## Troubleshooting: "Can't set compatibility date in the future" (error 10021)
This happens when Cloudflare rejects the `compatibility_date` in `wrangler.json` because it's later than Cloudflare's own clock. The date comes from `vite.config.ts`'s nitro config, which is now **pinned explicitly** (`compatibilityDate: "2025-01-01"`) instead of defaulting to your machine's system clock — the old default is exactly what caused this, if your PC's date/time was ever set ahead by mistake.
- If you still see this error, double-check your computer's system clock/date is correct — a wrong clock breaks other things too (npm, HTTPS certs).
- To move onto a newer compatibility date later (safe, optional), bump the string in `vite.config.ts` to any real past date and rebuild.

## Environment / domain
No environment variables or secrets are required for the current feature set (no API keys, no analytics wired in yet). Before going live:
- [ ] Point your domain's DNS at Cloudflare (or chosen host)
- [ ] Update `og:title`/`og:description`/social preview image if you want a custom share-card image (currently text-only Open Graph tags in `src/routes/__root.tsx` and per-route `head()`)
- [ ] Consider adding basic analytics (Plausible/Google Analytics) — not currently included
