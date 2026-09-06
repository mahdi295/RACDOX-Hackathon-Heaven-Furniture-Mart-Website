import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Hero } from "@/components/sections/Hero";
import { Collections } from "@/components/sections/Collections";
import { AwardsStrip } from "@/components/sections/AwardsStrip";
import { WhyHeaven } from "@/components/sections/WhyHeaven";
import { Process } from "@/components/sections/Process";
import { Gallery } from "@/components/sections/Gallery";
import { VideoShowcase } from "@/components/sections/VideoShowcase";
import { Voices } from "@/components/sections/Voices";
import { ShowroomStrip } from "@/components/sections/ShowroomStrip";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingCta } from "@/components/sections/ClosingCta";
import { company } from "@/data/company";

const title = "Heaven Furniture Mart | Bespoke Luxury Furniture in Chattogram";
const description =
  "Bespoke luxury furniture and interior styling in Agrabad, Chattogram. Living, bedroom, dining, office and custom space-saving furniture, made to measure since 2020.";

export const Route = createFileRoute("/")({
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
  component: Index,
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  name: company.name,
  description,
  telephone: company.phone,
  email: company.email,
  foundingDate: "2020",
  founder: { "@type": "Person", name: company.founder },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Opposite of RAK Ceramics, Agrabad Access Road",
    addressLocality: "Chattogram",
    postalCode: "4217",
    addressCountry: "BD",
  },
  sameAs: [company.social.facebook, company.social.instagram, company.social.youtube],
};

const tickerItems = [
  "Chattogram",
  "Bespoke Furniture",
  "Since 2020",
  "Free Consultation",
  "Custom Dimensions",
  "Delivery & Setup",
  "Living · Bedroom · Dining",
  "Office & Study",
  "Space-Saving Solutions",
  "Agrabad Showroom",
];

function Index() {
  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />

      {/* Ticker strip */}
      <div className="bg-gold group overflow-hidden py-3 select-none" aria-hidden="true">
        <div
          className="flex w-max gap-0 group-hover:[animation-play-state:paused]"
          style={{
            animation: "hfm-ticker 28s linear infinite",
          }}
        >
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span
              key={i}
              className="text-accent-foreground mx-5 shrink-0 font-serif text-sm font-semibold tracking-[0.18em] uppercase"
            >
              {item}
              <span className="mx-5 opacity-40">·</span>
            </span>
          ))}
        </div>
      </div>

      <Collections />
      <AwardsStrip />
      <WhyHeaven />
      <Process />
      <Gallery />
      <VideoShowcase />
      <Voices />
      <ShowroomStrip />
      <FaqSection />
      <ClosingCta />
    </SiteLayout>
  );
}
