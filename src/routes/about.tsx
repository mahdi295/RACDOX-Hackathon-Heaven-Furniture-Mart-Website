import { createFileRoute } from "@tanstack/react-router";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { Milestones } from "@/components/sections/Milestones";
import { Quote } from "lucide-react";
import { aboutBrand, scaleAndTrust, whyChooseUs, company, mdQuote } from "@/data/company";
import { eventPhotos } from "@/data/collections";
import { img } from "@/lib/assets";

const title = "About Heaven Furniture Mart | Bespoke Furniture, Chattogram";
const description =
  "Founded in 2020 by Abul Kalam Bhuiyan, Heaven Furniture Mart crafts premium custom furniture in Agrabad, Chattogram — the story, the team and the milestones.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="About the Brand"
        title="A Chattogram workshop with a taste for lasting elegance"
        intro={aboutBrand.body}
        image={img("team-group-photo-exhibition-booth.webp")}
        imageAlt="The Heaven Furniture Mart team at their exhibition booth"
      />

      <section className="section-y bg-background">
        <div className="container-hfm grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <img
              src={img("Abul-Kalam-Bhuiyan-image.webp")}
              alt="Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart"
              className="aspect-4/5 w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Founded {company.founded}</p>
            <h2 className="display-lg mt-4">Built by {company.founder}</h2>
            <span className="rule-gold mt-6" />
            <p className="text-muted-foreground mt-6 leading-relaxed">
              Heaven Furniture Mart opened its Agrabad showroom in 2021 and has grown into a full
              home and office furnishing partner — design consultation, craftsmanship, delivery and
              installation under one roof.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[...scaleAndTrust, ...whyChooseUs].map((s) => (
                <li key={s} className="flex items-start gap-3 text-[0.95rem]">
                  <span className="bg-gold mt-2 size-1.5 shrink-0 rounded-full" aria-hidden />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MD Quote */}
      <section className="bg-charcoal text-ivory section-y">
        <div className="container-hfm">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Quote className="text-gold mx-auto size-9" aria-hidden />
            <blockquote className="text-ivory/90 mt-6 font-serif text-xl leading-relaxed sm:text-2xl">
              {mdQuote.quote}
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <img
                src={img("MD-Abul-Kalam-Bhuiyan.webp")}
                alt="Abul Kalam Bhuiyan, Managing Director"
                className="ring-gold/40 size-14 shrink-0 rounded-full object-cover ring-2"
                loading="lazy"
              />
              <div className="text-left">
                <p className="text-ivory font-semibold">{mdQuote.author}</p>
                <p className="text-gold font-serif text-sm tracking-widest uppercase">
                  {mdQuote.role}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Milestones />

      <section className="section-y bg-secondary/60">
        <div className="container-hfm">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Fairs, awards &amp; community</p>
            <h2 className="display-lg mt-4">Where you've seen us</h2>
            <span className="rule-gold mt-6" />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {eventPhotos.map((e, i) => (
              <Reveal key={e.file} delay={i * 60}>
                <figure className="group overflow-hidden rounded-sm">
                  <img
                    src={img(e.file)}
                    alt={e.alt}
                    className="hover-zoom-img aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                  <figcaption className="text-muted-foreground mt-2 text-sm">
                    {e.caption}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
