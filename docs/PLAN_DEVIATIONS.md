# Project Decisions and Deviations

This document explains the main implementation decisions taken during the project, especially where the actual build differs from an earlier plan or default expectation.

## Why TanStack Start was used
The project was implemented with TanStack Start rather than a different framework because it satisfies the actual functional requirements for a modern React marketing site:
- React + TypeScript + SSR
- file-based route structure
- easy component composition and section-based layout
- strong integration with styling and animations
- modern deployment flexibility

This keeps the codebase efficient without forcing a larger framework migration.

## Why Cloudflare is the preferred host
The project is configured for Cloudflare deployment because it fits the current infrastructure and build flow well.

Benefits include:
- straightforward deployment for a SSR React app
- low operational overhead
- good fit for a local luxury-brand marketing site
- minimal extra backend requirements

## Why the project stays content-first
The site is built primarily as a brand and lead generation experience, not as a full commerce platform. This means the content is treated as the key product layer:
- product categories
- business story
- showroom location
- consultation flow
- premium brand perception

This matches the actual goals of the furniture business more closely than a heavy e-commerce setup.

## What is intentionally not included
To keep the website polished and business-appropriate, the current scope does not include:
- a full online store
- customer login or account management
- order tracking
- a database-driven lead system
- complex automation beyond direct WhatsApp inquiry

These choices are aligned with the current business model and project goals.

## Summary
The build decisions prioritize speed, realism, and business fit over chasing a generic framework standard. The result is a premium product website that is fast, attractive, and built around actual showroom conversion rather than feature bloat.
