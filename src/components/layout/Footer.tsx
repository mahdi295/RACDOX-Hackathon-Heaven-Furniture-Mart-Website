import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { img } from "@/lib/assets";
import { company } from "@/data/company";

export function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="container-hfm grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        <div>
          <img
            src={img("logo-mark-light.webp")}
            alt="Heaven Furniture Mart logo"
            className="h-14 w-auto"
            width={196}
            height={56}
            loading="lazy"
          />
          <p className="text-ivory/70 mt-5 max-w-xs text-sm leading-relaxed">
            {company.tagline}. Bespoke furniture and interior styling from Agrabad, Chattogram since{" "}
            {company.founded}.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={company.social.facebook}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Heaven Furniture Mart on Facebook"
              className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
            >
              <Facebook className="size-4" aria-hidden />
            </a>
            <a
              href={company.social.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Heaven Furniture Mart on Instagram"
              className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
            >
              <Instagram className="size-4" aria-hidden />
            </a>
            <a
              href={company.social.youtube}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Heaven Furniture Mart on YouTube"
              className="border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors"
            >
              <Youtube className="size-4" aria-hidden />
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-gold font-serif text-sm tracking-[0.22em] uppercase">Explore</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/collections", label: "Collections" },
              { to: "/bespoke", label: "Bespoke Process" },
              { to: "/about", label: "About Us" },
              { to: "/showroom", label: "Showroom" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ivory/75 hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-gold font-serif text-sm tracking-[0.22em] uppercase">Collections</h2>
          <ul className="text-ivory/75 mt-5 space-y-3 text-sm">
            <li>Living Room Collection</li>
            <li>Bedroom Collection</li>
            <li>Dining Collection</li>
            <li>Office &amp; Study</li>
            <li>Custom &amp; Space-Saving Furniture</li>
          </ul>
        </div>

        <div>
          <h2 className="text-gold font-serif text-sm tracking-[0.22em] uppercase">
            Visit &amp; Talk
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="text-ivory/75 hover:text-gold transition-colors"
              >
                {company.addressFull}
              </a>
            </li>
            <li className="flex gap-3">
              <Phone className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
              <a
                href={company.phoneHref}
                className="text-ivory/75 hover:text-gold transition-colors"
              >
                {company.phone}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="text-gold mt-0.5 size-4 shrink-0" aria-hidden />
              <a
                href={company.emailHref}
                className="text-ivory/75 hover:text-gold transition-colors"
              >
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-ivory/10 border-t">
        <div className="container-hfm text-ivory/50 flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>EST. {company.founded} · Agrabad, Chattogram, Bangladesh</p>
        </div>
      </div>
    </footer>
  );
}
