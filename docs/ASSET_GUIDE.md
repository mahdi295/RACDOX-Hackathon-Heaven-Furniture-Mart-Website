# Asset Guide

## What changed
An earlier version of this project stored images as `.asset.json` pointer files with relative URLs that only resolved on one specific hosting origin. Deployed anywhere else (or even downloaded and opened locally), every image 404d — this was the cause of the missing logo and broken images.

Fixed by replacing every pointer file with the real image binary in `src/assets/images/`, and rewriting `src/lib/assets.ts` to resolve them through Vite's asset pipeline (`import.meta.glob(..., { query: "?url" })`), which produces content-hashed, host-independent URLs baked into the production build.

## Current inventory (52 files)
| Folder (original) | Count | Used for |
|---|---|---|
| 01-brand | 5 | logo, hero moodboards, profile photo |
| 02-living | 11 | Living collection + gallery |
| 03-bedroom | 5 | Bedroom collection + Hero slide |
| 04-dining | 6 | Dining collection |
| 05-custom-space-saving | 5 | Custom collection |
| 06-office | 5 | Office collection |
| 06-showroom | 1 | Showroom exterior (used on Home, Showroom, About hero) |
| 07-team | 1 | About page team photo |
| 08-events | 7 | Milestones + About "fairs & awards" grid |
| 9-projects-fytobyte | 5 | Bespoke page case study |
| 10-testimonials | 1 | Voices section review screenshot |

## Image quality notes
Several source photos are square social-media crops (526×526 or 1080×1080, pulled from Facebook posts) rather than clean photography shoots. These render fine in the carousels and grid tiles (which use forgiving 4:3 / 4:5 / square containers), but if the owner can get the **original, uncropped** versions of the sofa/bed/dining hero shots, image quality on large screens (especially the homepage Hero and Collections cards) would improve further. Not blocking for launch.

## Adding/replacing images
See `CONTENT_GUIDE.md` → "Adding a new photo". Recommended max width ~2000px, JPEG quality ~80. The two heaviest source files (`dining-02-luxury-dining-table.png` at 3.5MB, `bedroom-01-luxury-carved-bed.png` at 2.3MB) were already re-exported as optimized JPEGs (490KB and 387KB) and all data references updated — see `TESTING.md` for the Lighthouse check this affected.

## Craftsmanship section images (added this revision)
4 new images in `src/components/sections` → Bespoke page "Materials & Craft" strip: `craft-01` through `craft-04`. These are generic stock photography (hands, tools, wood shavings — no identifiable person, no specific claim about being "our workshop"), used because the current asset library has zero workshop/process photography. Framed with generic copy ("the same way this kind of work has always been done") rather than any specific claim, so nothing false is being stated.

Two other supplied images were **rejected**: one staged living-room product photo (would misrepresent actual inventory if placed in a product gallery) and one with a competing brand's lion-crown logo watermark baked into the image (cannot publish another company's branding).

If real workshop photography becomes available later, swap these 4 files out — same filenames, same section, no code changes needed.

## Facebook-scraped image collection (this revision)
The owner scraped and hand-organized ~730 images from the business's own Facebook page into a sorted zip (Bed/Chair/Dining_Set/Dressing_Table/Office_Furniture/Showcase_Cabinet/Sofa/Table/Wardrobe). Reviewing all 730 individually wasn't practical, so a sampled visual review (contact sheets, every 7th file per folder) was used to hand-pick the strongest, cleanest, non-duplicate, watermark-free images — 16 total, added across every category gallery:

- Living +4 (`living-10` through `living-13`)
- Bedroom +3 (`bedroom-06` through `bedroom-08`)
- Dining +3 (`dining-07` through `dining-09`)
- Office +2 (`office-06`, `office-07`)
- Custom +4 (`custom-06` through `custom-09`)

Rejected during selection: images with "MEGA SALE" / discount-percentage graphics baked in (matches the site's own no-discount-language rule), images with a visible bystander's face reflected in a mirror, and near-duplicate re-uploads (same photo posted multiple times to Facebook). The remaining ~700 images in the sorted zip were not reviewed — if the owner wants specific pieces prioritized, point to a filename or folder position and it can be pulled in directly, faster than another full visual sample.

## New real photos (this revision)
- `showroom-interior-seating-display.jpg` — real showroom interior (previously missing entirely).
- `MD-Abul-Kalam-Bhuiyan.png` / `Abul-Kalam-Bhuiyan-image.jpeg` — real MD photos, replacing the placeholder initials badge and a stand-in fair photo.
- `showroom-exterior-storefront-current.jpg` — current storefront signage, a second real exterior angle alongside the original.
