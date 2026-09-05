import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { caseStudy } from "@/data/collections";
import { services, ourServices } from "@/data/company";
import { img } from "@/lib/assets";
import { BespokeProcessTimeline } from "@/components/sections/BespokeProcessTimeline";

const title = "Bespoke Furniture Process | Heaven Furniture Mart";
const description =
  "How a bespoke Heaven Furniture Mart project runs: meet, research, design, craft and deliver — plus a real completed corporate interior in Chattogram.";

export const Route = createFileRoute("/bespoke")({
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
  component: BespokePage,
});

function BespokePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Bespoke"
        title="Furniture designed around your space, style and vision"
        intro="From custom dimensions to personalized designs and finishes — every project starts with a free design consultation."
        image={img("office-02-conference-room-CLEAN.webp")}
        imageAlt="Conference room furnished by Heaven Furniture Mart"
      />

      <section className="section-y bg-background">
        <div className="container-hfm grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <div className="border-border bg-card group hover:border-gold/50 h-full rounded-sm border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-rust font-serif text-sm tracking-[0.2em] uppercase">0{i + 1}</p>
                <h2 className="mt-3 text-xl font-semibold">{s.title}</h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">{s.body}</p>
                <span className="bg-gold mt-6 block h-px w-8 transition-all duration-300 group-hover:w-14" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <BespokeProcessTimeline />

      <section className="section-y bg-background">
        <div className="container-hfm">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Materials &amp; Craft</p>
            <h2 className="display-lg mt-4">What "hand-finished" actually means</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Every carved detail, tufted seam and gold-leaf edge on a Heaven piece is shaped by
              hand, the same way this kind of work has always been done.
            </p>
            <span className="rule-gold mt-6" />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                file: "craft-01-hand-carving-detail.webp",
                alt: "Craftsman hand-carving an intricate geometric pattern into solid wood",
              },
              {
                file: "craft-02-chisel-shavings.webp",
                alt: "Close-up of a chisel cutting curls from a wooden panel",
              },
              {
                file: "craft-03-hand-plane-workshop.webp",
                alt: "Hand plane shaping a wooden board on a workbench",
              },
              {
                file: "craft-04-drawknife-shaping.webp",
                alt: "Drawknife shaping a length of timber by hand",
              },
            ].map((c, i) => (
              <Reveal key={c.file} delay={i * 80}>
                <img
                  src={img(c.file)}
                  alt={c.alt}
                  className="aspect-square w-full rounded-sm object-cover"
                  loading="lazy"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-hfm">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Recent Project</p>
            <h2 className="display-lg mt-4">{caseStudy.title}</h2>
            <span className="rule-gold mt-6" />
            <p className="text-muted-foreground mt-6 leading-relaxed">{caseStudy.body}</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {caseStudy.images.map((im, i) => (
              <Reveal key={im.file} delay={i * 70}>
                <figure className="group overflow-hidden rounded-sm">
                  <img
                    src={img(im.file)}
                    alt={im.alt}
                    className="hover-zoom-img aspect-3/4 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
          <p className="text-muted-foreground mt-4 text-xs">
            Photographed at handover, published with {caseStudy.client}'s own project announcement.
          </p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="container-hfm border-border flex flex-wrap items-center justify-between gap-8 border-t pt-12">
          <ul className="grid gap-3 sm:grid-cols-3 sm:gap-10">
            {ourServices.map((s) => (
              <li key={s} className="flex items-center gap-3 font-medium">
                <span className="bg-gold size-1.5 rounded-full" aria-hidden />
                {s}
              </li>
            ))}
          </ul>
          <Link
            to="/contact"
            className="bg-gold text-accent-foreground rounded-sm px-7 py-4 text-sm font-semibold"
          >
            Request a Consultation
          </Link>
        </div>
      </section>
    </SiteLayout>
  );
}
