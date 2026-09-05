# Content Guide

This document explains how to update the website content while keeping the layout and structure intact.

## Primary content files
The main business content lives in:
- `src/data/company.ts`
- `src/data/collections.ts`

These files control the brand language, contact details, case studies, collections, and FAQ content.

## Business information
Edit `src/data/company.ts` for:
- business name and tagline
- founder and role
- phone and WhatsApp numbers
- email and location
- social profiles
- about section text
- FAQ entries
- CTA and closing text

## Collection and product content
Edit `src/data/collections.ts` for:
- living, bedroom, dining, office, and custom furniture categories
- gallery assets and captions
- bespoke process steps
- milestones and award history
- customer testimonial content
- case study sections

## Good editorial practices
- Keep the tone refined, premium, and confident.
- Prefer clear local business language over generic marketing filler.
- Use the exact showroom address and contact information consistently.
- Avoid discount-heavy or exaggerated claims unless they are verified.
- Keep the voice aligned with the brand: luxury, custom-built, and comfortable.

## Adding or replacing a photo
1. Place the asset in `src/assets/images/` using a clear naming convention.
2. Reference it with the existing asset helper pattern.
3. Keep the alt text descriptive and brand-appropriate.
4. Prefer real showroom and product photography over generic stock content.

## SEO and page-level metadata
Each route file in `src/routes/` defines its own page title and description. These values should be updated whenever the page messaging changes.

## Content review checklist
Before publishing, confirm:
- phone number is still active
- email is monitored
- showroom address is current
- social links are valid
- product language matches the real inventory and offering
- all custom process wording is approved by the business owner
