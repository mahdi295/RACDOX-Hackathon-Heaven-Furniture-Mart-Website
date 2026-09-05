import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/data/collections";

export function Collections() {
  const [featured, ...rest] = collections;

  return (
    <section id="collections" className="section-y bg-secondary/60">
      <div className="container-hfm">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="display-lg max-w-xl">Five collections, all made to measure</h2>
          <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
            Browse by room, or skip straight to a free consultation if nothing here matches your
            space exactly.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2">
          {/* Featured category — large, image-forward */}
          {featured ? (
            <Reveal className="lg:col-span-2 lg:row-span-2" delay={0}>
              <Link
                to="/collections"
                hash={featured.slug}
                className="group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-sm"
              >
                <img
                  src={img(featured.cover)}
                  alt={featured.coverAlt}
                  className="absolute inset-0 size-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                  loading="lazy"
                />
                {featured.gallery[1] ? (
                  <img
                    src={img(featured.gallery[1].file)}
                    alt={featured.gallery[1].alt}
                    className="hover-zoom-img absolute inset-0 size-full scale-105 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    loading="lazy"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="from-charcoal/95 via-charcoal/40 absolute inset-0 bg-gradient-to-t to-transparent" />
                <div className="relative p-8 sm:p-10">
                  <p className="text-gold font-serif text-sm tracking-wide">{featured.items}</p>
                  <h3 className="text-ivory mt-2 font-serif text-3xl leading-tight sm:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="text-ivory/75 mt-3 max-w-md text-sm leading-relaxed">
                    {featured.blurb}
                  </p>
                  <span className="text-ivory group-hover:text-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors">
                    Explore Collection
                    <ArrowUpRight className="size-4" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {/* Remaining categories — 2x2 compact tiles */}
          {rest.map((c, i) => (
            <Reveal key={c.slug} delay={100 + i * 80}>
              <Link
                to="/collections"
                hash={c.slug}
                className="group bg-card relative flex h-full min-h-[200px] flex-col justify-end overflow-hidden rounded-sm"
              >
                <img
                  src={img(c.cover)}
                  alt={c.coverAlt}
                  className="absolute inset-0 size-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                  loading="lazy"
                />
                {c.gallery[1] ? (
                  <img
                    src={img(c.gallery[1].file)}
                    alt={c.gallery[1].alt}
                    className="hover-zoom-img absolute inset-0 size-full scale-105 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    loading="lazy"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="from-charcoal/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />
                <div className="relative p-5">
                  <h3 className="text-ivory text-lg font-semibold">{c.name}</h3>
                  <p className="text-ivory/70 mt-1 text-xs">{c.items}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* Bespoke — distinct banner, not another card */}
        <Reveal delay={400} className="mt-4">
          <div className="border-gold/30 bg-charcoal flex flex-col items-start justify-between gap-6 rounded-sm border p-8 sm:flex-row sm:items-center sm:p-10">
            <div>
              <p className="text-gold font-serif text-sm tracking-wide">Bespoke</p>
              <h3 className="text-ivory mt-2 text-xl leading-snug font-semibold sm:text-2xl">
                Nothing here fits your room? That's the normal starting point.
              </h3>
              <p className="text-ivory/70 mt-2 max-w-lg text-sm leading-relaxed">
                Every project begins with a free design consultation and a set of measurements —
                then we design around them.
              </p>
            </div>
            <Link
              to="/bespoke"
              className="bg-gold text-accent-foreground inline-flex w-fit shrink-0 rounded-sm px-6 py-3 text-sm font-semibold"
            >
              See the process
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
