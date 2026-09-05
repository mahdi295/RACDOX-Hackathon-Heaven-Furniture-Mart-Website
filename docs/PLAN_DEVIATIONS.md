# Deviations from the Master Build Plan v4

The plan (Part 6) specifies Next.js + Vercel. What's actually built is **TanStack Start + Cloudflare Workers**. Flagging this explicitly rather than leaving it silent.

## Why not migrated to Next.js
This codebase already existed on TanStack Start and is now functionally complete, tested, and matches the plan's content/design/architecture requirements exactly otherwise. With the hackathon deadline 2 days out, rewriting the framework is pure risk for zero judge-visible benefit — a judge sees the live site, not the framework name. TanStack Start satisfies every *functional* requirement Part 6 actually cares about:

| Plan requires | Built with |
|---|---|
| React + TypeScript, SSR | TanStack Start (React 19 SSR) ✓ |
| Tailwind + design tokens as CSS vars | Tailwind v4, same token approach ✓ |
| shadcn/ui selectively | shadcn/ui ✓ |
| Lucide icons | lucide-react ✓ |
| Framer Motion, subtle only | framer-motion, fade-up/reveal/hover-zoom/crossfade ✓ |
| React Hook Form + Zod | react-hook-form + zod ✓ |
| Optimized/lazy images | Vite asset pipeline, hashed URLs, lazy-loaded ✓ |
| File-based routing (`/collections`, `/bespoke`, etc.) | TanStack Router file routes ✓ |
| No cart/wishlist/login/payment | None present ✓ |

**If you specifically need Next.js** (e.g. a judge or client requirement, not just the plan's original guess), say so and it can be ported — but treat that as a deliberate, costly decision, not a default.

## Why Cloudflare instead of Vercel
The project's build config already targets Cloudflare Workers out of the box and builds/deploys cleanly (`docs/DEPLOYMENT.md`). Vercel isn't a hackathon requirement — the rule is a **public live URL**, which Cloudflare satisfies equally, likely faster to stand up than reconfiguring for Vercel this close to the deadline. Vercel remains an option (see `DEPLOYMENT.md` → "Deploying elsewhere") if you prefer it or already have a Vercel account/domain set up.
