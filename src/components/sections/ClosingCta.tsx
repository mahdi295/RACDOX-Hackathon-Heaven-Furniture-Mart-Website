import { Phone } from "lucide-react";
import { img } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { PointerGradient } from "@/components/PointerGradient";
import { MagneticLink } from "@/components/MagneticLink";
import { closing, company } from "@/data/company";

export function ClosingCta() {
  return (
    <section className="bg-charcoal relative isolate overflow-hidden">
      <img
        src={img("dining-01-luxury-dining-set.webp")}
        alt="Carved luxury dining set in a styled Heaven Furniture Mart showroom interior"
        className="absolute inset-0 size-full object-cover opacity-20"
        loading="lazy"
      />
      <div className="from-charcoal/95 to-charcoal/90 absolute inset-0 bg-gradient-to-r" />
      <PointerGradient className="mix-blend-screen opacity-80" />
      <div className="container-hfm relative py-20 text-center md:py-28">
        <Reveal>
          <p className="eyebrow text-gold">Let's begin</p>
          <h2 className="display-lg text-ivory mx-auto mt-4 max-w-3xl">{closing.heading}</h2>
          <p className="text-ivory/75 mx-auto mt-6 max-w-2xl leading-relaxed">{closing.body}</p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
            <MagneticLink
              to="/contact"
              className="inline-flex items-center justify-center bg-gold text-accent-foreground rounded-sm px-7 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
            >
              Request a Consultation
            </MagneticLink>
            <a
              href={company.phoneHref}
              className="border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex items-center gap-2 rounded-sm border px-7 py-4 text-sm font-semibold tracking-wide transition-colors"
            >
              <Phone className="size-4" aria-hidden />
              Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
