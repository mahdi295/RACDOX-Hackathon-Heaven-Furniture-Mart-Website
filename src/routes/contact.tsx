import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react";
import { PageHero, SiteLayout } from "@/components/layout/SiteLayout";
import { Reveal } from "@/components/Reveal";
import { ConsultationForm } from "@/components/ConsultationForm";
import { company, ourServices } from "@/data/company";
import { img } from "@/lib/assets";
import { whatsappLink } from "@/lib/whatsapp";

const title = "Request a Consultation | Heaven Furniture Mart, Chattogram";
const description =
  "Talk to Heaven Furniture Mart about a bespoke furniture project — free design consultation, WhatsApp or call, showroom on Agrabad Access Road, Chattogram.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title="Request a Consultation"
        intro="Tell us about the room and we'll come back with ideas, materials and a plan. Consultations are free."
        image={img("living-05-beige-tufted-sofa.webp")}
        imageAlt="Beige tufted sofa crafted by Heaven Furniture Mart"
      />

      <section className="section-y bg-background">
        <div className="container-hfm grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <Reveal>
            <ConsultationForm />
          </Reveal>

          <Reveal delay={100}>
            <div className="bg-charcoal text-ivory rounded-sm p-8 md:p-10">
              <h2 className="text-ivory text-xl font-semibold">Talk to us directly</h2>
              <ul className="mt-7 space-y-5 text-sm">
                <li className="flex gap-3">
                  <Phone className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                  <a href={company.phoneHref} className="hover:text-gold transition-colors">
                    {company.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MessageCircle className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-gold transition-colors"
                  >
                    Message us on WhatsApp
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                  <a href={company.emailHref} className="hover:text-gold transition-colors">
                    {company.email}
                  </a>
                </li>
                <li className="flex gap-3">
                  <MapPin className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
                  <a
                    href={company.mapsUrl}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="hover:text-gold transition-colors"
                  >
                    {company.addressFull}
                  </a>
                </li>
              </ul>

              <div className="border-ivory/15 mt-8 border-t pt-7">
                <p className="text-gold font-serif text-sm tracking-[0.2em] uppercase">
                  What's included
                </p>
                <ul className="text-ivory/75 mt-4 space-y-2 text-sm">
                  {ourServices.map((s) => (
                    <li key={s}>· {s}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex gap-3">
                <a
                  href={company.social.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Facebook"
                  className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
                >
                  <Facebook className="size-4" aria-hidden />
                </a>
                <a
                  href={company.social.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
                >
                  <Instagram className="size-4" aria-hidden />
                </a>
                <a
                  href={company.social.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="YouTube"
                  className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
                >
                  <Youtube className="size-4" aria-hidden />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}
