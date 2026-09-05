/**
 * Brand asset resolver.
 * All real image files live in `src/assets/images/<category>/`, with a further
 * `catalogue/` subfolder per category holding the full raw photo set. Vite's
 * `import.meta.glob` turns each into a fingerprinted, production-safe URL at
 * build time — works on any host (not tied to a single dev/preview origin).
 */
const modules = import.meta.glob("../assets/images/**/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
  query: "?url",
}) as Record<string, string>;

const byName: Record<string, string> = {};
type CatalogueEntry = { file: string; url: string };
const catalogueByCategory: Record<string, CatalogueEntry[]> = {};

for (const [path, url] of Object.entries(modules)) {
  const file = path.split("/").pop()!;
  byName[file] = url;

  // Path shape: ../assets/images/<category>/catalogue/<file>
  const match = path.match(/assets\/images\/([^/]+)\/catalogue\//);
  if (match?.[1]) {
    const category = match[1];
    (catalogueByCategory[category] ??= []).push({ file, url });
  }
}
for (const list of Object.values(catalogueByCategory)) {
  list.sort((a, b) => a.file.localeCompare(b.file));
}

/**
 * Resolve a brand asset URL by its original filename (e.g. "logo-mark-light.png").
 * All raster photography now ships as .webp only (converted for performance) —
 * any legacy .jpg/.jpeg/.png reference transparently falls back to the .webp twin
 * so existing data/component references never need to change.
 */
export function img(filename: string): string {
  let url = byName[filename];
  if (!url && /\.(jpe?g|png)$/i.test(filename)) {
    url = byName[filename.replace(/\.(jpe?g|png)$/i, ".webp")];
  }
  if (!url && import.meta.env.DEV) {
    console.warn(`[assets] missing asset: ${filename}`);
  }
  return url ?? "";
}

/** Full raw catalogue photo set for a collection category (e.g. "living"), in stable order. */
export function catalogueImages(category: string): CatalogueEntry[] {
  return catalogueByCategory[category] ?? [];
}

export const assetNames = Object.keys(byName);
