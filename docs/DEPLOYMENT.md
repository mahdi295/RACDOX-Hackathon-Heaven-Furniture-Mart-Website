# Deployment Guide

This website is designed as a premium marketing site for a local furniture brand without a back-end database. It is a content-driven storefront with a strong lead-generation funnel, where the consultation form sends visitors into a pre-filled WhatsApp message for direct business contact.

## Deployment model
The current build is set up for Cloudflare Workers using TanStack Start + Nitro.

### Why this setup fits
- No server-side database is required for the current experience.
- The site is mostly static content plus user interactions.
- The consultation journey is converted into a WhatsApp conversation rather than a server-captured form submission.
- It is fast, low-maintenance, and suitable for a luxury local business website.

## Local build/
```bash
npm install
npm run build
npm run lint
```

## Cloudflare deployment
```bash
npm run build
npx wrangler deploy
```

If needed, equivalent Nitro deploy flow:
```bash
npx nitro deploy --prebuilt
```

## Domains and production setup
Before public launch:
- connect the domain to Cloudflare or your chosen host
- confirm the brand name and marketing language are accurate in metadata
- verify phone, WhatsApp, address, and email all match the active business details
- consider adding analytics or remarketing later if required

## Environment notes
No API keys or environment secrets are required for the current feature set.

## Known deployment issue and fix
If Cloudflare returns the error: "Can't set compatibility date in the future", it usually means the local machine clock is ahead of the Cloudflare-supported date range.

The fix is to use a pinned compatibility date in the Nitro configuration rather than relying on a machine-generated default.

## Hosting fallback options
- Recommended: Cloudflare Workers/Pages
- Alternative: Vercel or Netlify, with SSR build config adjustments
- Static-only hosting is not the current model because this is a real SSR application and not just a flat HTML folder

## Production checklist
- [ ] Domain is live and DNS is correct
- [ ] WhatsApp number is active
- [ ] Email address is monitored
- [ ] Contact page and maps link are correct
- [ ] Open Graph metadata is reviewed
- [ ] Page speed and mobile rendering are checked
- [ ] Final brand text is signed off by the business owner
