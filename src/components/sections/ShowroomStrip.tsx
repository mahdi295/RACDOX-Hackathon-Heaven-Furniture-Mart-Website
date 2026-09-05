import { Link } from "@tanstack/react-router";
import { MapPin, Clock, Phone } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

export function ShowroomStrip() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-hfm grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <img
            src={img("showroom-exterior-storefront-01.webp")}
            alt="Heaven Furniture Mart showroom storefront on Agrabad Access Road, Chattogram"
            className="aspect-3/4 w-full rounded-sm object-cover lg:aspect-4/5"
            loading="lazy"
          />
        </Reveal>
        <Reveal delay={100}>
          <p className="eyebrow">The Showroom</p>
          <h2 className="display-lg mt-4">See the finish in person</h2>
          <span className="rule-gold mt-6" />
          <p className="text-muted-foreground mt-6 leading-relaxed">
            Our showroom in Agrabad carries full living, bedroom, dining and storage sets — the
            fastest way to judge joinery, upholstery and finish is to sit on it.
          </p>

          <ul className="mt-8 space-y-4 text-[0.975rem]">
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
            <li className="flex gap-3">
              <Phone className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
              <a href={company.phoneHref} className="hover:text-gold transition-colors">
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock className="text-gold mt-0.5 size-5 shrink-0" aria-hidden />
              <span>Call ahead and we'll keep a consultant free for your visit.</span>
            </li>
          </ul>

          <Link
            to="/showroom"
            className="border-foreground/25 hover:border-gold hover:text-gold mt-9 inline-flex rounded-sm border px-6 py-3 text-sm font-semibold transition-colors"
          >
            Plan your visit
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
