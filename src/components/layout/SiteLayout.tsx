import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Parallax } from "@/components/Parallax";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="focus:bg-gold focus:text-accent-foreground sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-sm focus:px-4 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="bg-charcoal relative isolate overflow-hidden">
      <Parallax strength={40} className="absolute inset-0 size-full">
        <img src={image} alt={imageAlt} className="size-full scale-110 object-cover opacity-30" />
      </Parallax>
      <div className="from-charcoal/95 via-charcoal/70 to-charcoal/90 absolute inset-0 bg-gradient-to-b" />
      <div className="container-hfm relative pt-36 pb-16 md:pt-44 md:pb-24">
        <p className="eyebrow text-gold">{eyebrow}</p>
        <h1 className="display-lg text-ivory mt-4 max-w-3xl">{title}</h1>
        {intro && <p className="text-ivory/75 mt-5 max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
