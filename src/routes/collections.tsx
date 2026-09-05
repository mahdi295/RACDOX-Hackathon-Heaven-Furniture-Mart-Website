import { createFileRoute, Link } from "@tanstack/react-router";
import { Search, Images } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Lightbox } from "@/components/ui/lightbox";
import { collections } from "@/data/collections";
import { img, catalogueImages } from "@/lib/assets";

const title = "Collections | Heaven Furniture Mart, Chattogram";
const description =
  "Living room, bedroom, dining, office & study and custom space-saving furniture — five made-to-measure collections from Heaven Furniture Mart, Chattogram.";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  const [selectedSlug, setSelectedSlug] = useState<(typeof collections)[number]["slug"]>("living");
  const [search, setSearch] = useState("");

  const selectedCollection =
    collections.find((collection) => collection.slug === selectedSlug) ?? collections[0]!;

  const filteredGallery = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return selectedCollection.gallery;
    }

    return selectedCollection.gallery.filter(({ alt }) => alt.toLowerCase().includes(query));
  }, [search, selectedCollection]);

  const collectionOptions = collections.map((collection) => ({
    ...collection,
    isActive: collection.slug === selectedCollection.slug,
  }));

  const CATALOGUE_PAGE_SIZE = 24;
  const [catalogueVisible, setCatalogueVisible] = useState(CATALOGUE_PAGE_SIZE);
  const fullCatalogue = useMemo(
    () => catalogueImages(selectedCollection.slug),
    [selectedCollection.slug],
  );

  const [lightbox, setLightbox] = useState<{
    items: { src: string; alt: string; caption?: string }[];
    index: number;
  } | null>(null);

  useEffect(() => {
    setCatalogueVisible(CATALOGUE_PAGE_SIZE);
  }, [selectedCollection.slug]);

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Furniture Categories"
        title="Premium collections for inspired living"
        intro="Curated silhouettes, tailored sizes, and enduring finishes — explore the collection that fits your space best."
        image={img(selectedCollection.cover)}
        imageAlt={selectedCollection.coverAlt}
      />

      <section className="section-y bg-background py-5 sm:py-8 lg:py-10">
        <div className="container-hfm">
          <div className="lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8">
            <aside className="mb-6 sm:mb-8 lg:mb-0 lg:pr-6">
              <div className="border-border bg-card sticky top-24 overflow-hidden rounded-md border shadow-sm">
                <div className="border-border border-b p-3 sm:p-4">
                  <label className="relative block">
                    <span className="sr-only">Search furniture</span>
                    <Search className="text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" />
                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Search furniture..."
                      className="border-input bg-background text-foreground placeholder:text-muted-foreground w-full rounded-sm border py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-gold"
                    />
                  </label>
                </div>

                <div className="p-3 sm:p-4">
                  <p className="text-foreground/70 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs">
                    Collections
                  </p>
                  <nav aria-label="Collection categories" className="space-y-1">
                    {collectionOptions.map((collection) => (
                      <button
                        key={collection.slug}
                        type="button"
                        onClick={() => {
                          setSelectedSlug(collection.slug);
                          setSearch("");
                        }}
                        className={[
                          "w-full rounded-sm border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 sm:py-3",
                          collection.isActive
                            ? "border-gold bg-gold/10 text-gold shadow-sm"
                            : "border-transparent bg-transparent text-foreground/80 hover:border-border hover:bg-secondary/60 hover:text-gold",
                        ].join(" ")}
                      >
                        <span className="flex items-center justify-between gap-3">
                          <span>{collection.name}</span>
                          {collection.isActive ? (
                            <span className="bg-gold size-2 rounded-full" aria-hidden="true" />
                          ) : null}
                        </span>
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            <div className="min-w-0">
              <div className="border-border bg-card rounded-md border p-4 shadow-sm sm:p-5 lg:p-6">
                <div className="flex flex-col gap-3 border-b border-border pb-4 sm:pb-5 lg:flex-row lg:items-end lg:justify-between">
                  <div>
                    <p className="eyebrow text-[0.7rem] tracking-[0.18em] sm:text-[0.8rem]">
                      Curated collection
                    </p>
                    <h2 className="display-lg mt-2 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem]">
                      {selectedCollection.name}
                    </h2>
                  </div>
                  <Link
                    to="/contact"
                    className="bg-gold text-accent-foreground inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90"
                  >
                    Discuss This Design
                  </Link>
                </div>

                <div className="mt-4 flex flex-col gap-3 md:mt-5 md:flex-row md:items-center md:justify-between">
                  <p className="text-rust font-serif text-base tracking-wide sm:text-lg">
                    {selectedCollection.items}
                  </p>
                  <span className="text-muted-foreground text-sm">
                    {filteredGallery.length} {filteredGallery.length === 1 ? "piece" : "pieces"}
                  </span>
                </div>

                <p className="text-muted-foreground mt-4 max-w-3xl leading-relaxed text-sm sm:text-base">
                  {selectedCollection.blurb}
                </p>
              </div>

              <div className="mt-5 sm:mt-6">
                {filteredGallery.length > 0 ? (
                  <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
                    {filteredGallery.map((item, index) => (
                      <article
                        key={`${selectedCollection.slug}-${item.file}-${index}`}
                        className="group overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <div className="overflow-hidden">
                          <img
                            src={img(item.file)}
                            alt={item.alt}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                const items = filteredGallery.map((g) => ({
                                  src: img(g.file),
                                  alt: g.alt,
                                }));
                                setLightbox({ items, index });
                              }
                            }}
                            onClick={() => {
                              const items = filteredGallery.map((g) => ({
                                src: img(g.file),
                                alt: g.alt,
                              }));
                              setLightbox({ items, index });
                            }}
                            className="hover-zoom-img aspect-[4/3] w-full object-cover cursor-pointer"
                            loading="lazy"
                          />
                        </div>
                        <div className="space-y-2 p-3 sm:p-4">
                          <p className="text-foreground text-[11px] font-semibold uppercase tracking-[0.15em] sm:text-xs">
                            {selectedCollection.name}
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.alt}
                          </p>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="border-border bg-card rounded-md border p-6 text-center shadow-sm sm:p-8">
                    <p className="text-foreground text-lg font-medium">
                      No pieces match your search.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSearch("")}
                      className="text-gold mt-3 font-medium underline-offset-4 hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>

              {fullCatalogue.length > 0 ? (
                <div className="mt-10 border-t border-border pt-8">
                  <div className="flex items-center gap-2">
                    <Images className="text-gold size-5" aria-hidden />
                    <h3 className="text-lg font-semibold">
                      Full {selectedCollection.name} catalogue
                    </h3>
                    <span className="text-muted-foreground text-sm">
                      ({fullCatalogue.length} photos)
                    </span>
                  </div>
                  <p className="text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed">
                    Every piece we've photographed in this category, straight from our own showroom
                    floor — browse the full set below.
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
                    {fullCatalogue.slice(0, catalogueVisible).map((item, index) => (
                      <div
                        key={item.file}
                        className="group aspect-square overflow-hidden rounded-sm bg-secondary/40"
                      >
                        <img
                          src={item.url}
                          alt={`${selectedCollection.name} design, Heaven Furniture Mart catalogue #${index + 1}`}
                          onClick={() =>
                            setLightbox({
                              items: fullCatalogue.map((f) => ({
                                src: f.url,
                                alt: selectedCollection.name,
                              })),
                              index,
                            })
                          }
                          role="button"
                          tabIndex={0}
                          className="hover-zoom-img size-full object-cover cursor-pointer"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  {catalogueVisible < fullCatalogue.length ? (
                    <div className="mt-6 flex justify-center">
                      <button
                        type="button"
                        onClick={() =>
                          setCatalogueVisible((v) =>
                            Math.min(v + CATALOGUE_PAGE_SIZE, fullCatalogue.length),
                          )
                        }
                        className="border-border hover:border-gold hover:text-gold rounded-sm border px-6 py-3 text-sm font-semibold transition-colors"
                      >
                        Load more ({fullCatalogue.length - catalogueVisible} remaining)
                      </button>
                    </div>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </section>
      {lightbox ? (
        <Lightbox
          isOpen={!!lightbox}
          items={lightbox.items}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </SiteLayout>
  );
}
