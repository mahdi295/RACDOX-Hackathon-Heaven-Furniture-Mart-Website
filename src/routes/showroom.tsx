import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";
import { collections } from "@/data/collections";
import { img } from "@/lib/assets";

const title = "Visit Our Showroom | Heaven Furniture Mart, Agrabad";
const description =
  "Visit the Heaven Furniture Mart showroom opposite RAK Ceramics on Agrabad Access Road, Chattogram 4217 — full living, bedroom, dining and storage sets on display.";

export const Route = createFileRoute("/showroom")({
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
  component: ShowroomPage,
});

const interiorShots = [
  collections[2]!.gallery[0]!,
  collections[0]!.gallery[1]!,
  collections[4]!.gallery[0]!,
  collections[1]!.gallery[0]!,
];

function ShowroomPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="The Showroom"
        title="Agrabad Access Road, Chattogram"
        intro="Opposite of RAK Ceramics. Sit on the sofas, open the wardrobes, check the joinery — then decide."
        image={img("showroom-exterior-storefront-01.webp")}
        imageAlt="Heaven Furniture Mart storefront on Agrabad Access Road, Chattogram"
      />

      <section className="section-y bg-background">
        <div className="container-hfm grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <Reveal>
            <img
              src={img("showroom-exterior-storefront-current.webp")}
              alt="Heaven Furniture Mart's current Agrabad showroom storefront"
              className="aspect-16/10 w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={100}>
            <p className="eyebrow">Plan your visit</p>
            <h2 className="display-lg mt-4">Come see the finish</h2>
            <span className="rule-gold mt-6" />
            <ul className="mt-8 space-y-5">
              <li className="flex gap-3">
                <MapPin className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold">Address</p>
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {company.addressFull}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a
                    href={company.phoneHref}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href={company.emailHref}
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
              </li>
            </ul>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="bg-gold text-accent-foreground rounded-sm px-6 py-3.5 text-sm font-semibold"
              >
                Open in Google Maps
              </a>
              <Link
                to="/contact"
                className="border-foreground/25 hover:border-gold hover:text-gold rounded-sm border px-6 py-3.5 text-sm font-semibold transition-colors"
              >
                Book a consultation
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-secondary/60">
        <div className="container-hfm">
          <Reveal className="max-w-2xl">
            <p className="eyebrow">Inside</p>
            <h2 className="display-lg mt-4">On the floor right now</h2>
            <span className="rule-gold mt-6" />
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {interiorShots.map((s, i) => (
              <Reveal key={s.file} delay={i * 70}>
                <figure className="group overflow-hidden rounded-sm">
                  <img
                    src={img(s.file)}
                    alt={s.alt}
                    className="hover-zoom-img aspect-3/4 w-full object-cover"
                    loading="lazy"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
