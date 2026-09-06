import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { img } from "@/lib/assets";
import { company } from "@/data/company";

const slides = [
  {
    file: "cover-hero-moodboard-02.webp",
    alt: "Styled living room moodboard featuring Heaven Furniture Mart pieces",
  },
  {
    file: "bedroom-02-emerald-modern-bed.webp",
    alt: "Emerald velvet bed with wood and brass detailing, crafted by Heaven Furniture Mart",
  },
  {
    file: "cover-hero-moodboard-03.webp",
    alt: "Curated furniture and interior styling moodboard by Heaven Furniture Mart",
  },
];

const AUTOPLAY_MS = 5500;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, []);

  const currentSlide = slides[index] ?? slides[0]!;

  return (
    <section className="bg-charcoal relative isolate min-h-[92vh] overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.img
          key={currentSlide.file}
          src={img(currentSlide.file)}
          alt={currentSlide.alt}
          className="absolute inset-0 size-full object-cover"
          fetchPriority={index === 0 ? "high" : undefined}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1.16 }}
          exit={{ opacity: 0 }}
          transition={{
            opacity: { duration: 1.1, ease: "easeInOut" },
            scale: { duration: AUTOPLAY_MS / 1000 + 1.5, ease: "linear" },
          }}
        />
      </AnimatePresence>

      <div className="from-charcoal/95 via-charcoal/70 absolute inset-0 bg-gradient-to-r to-transparent" />
      <div className="from-charcoal/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" />

      <div className="container-hfm relative flex min-h-[92vh] flex-col justify-end pt-36 pb-16 md:justify-center md:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow text-gold"
        >
          {company.name} · Chattogram
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="display-xl text-ivory mt-5 max-w-4xl"
        >
          {company.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-ivory/80 mt-6 max-w-xl text-lg leading-relaxed"
        >
          {company.secondaryLine}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Link
            to="/contact"
            className="bg-gold text-accent-foreground group inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            Request a Consultation
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </Link>
          <Link
            to="/collections"
            className="border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex items-center rounded-sm border px-7 py-4 text-sm font-semibold tracking-wide transition-colors"
          >
            Explore Our Work
          </Link>
        </motion.div>

        <p className="text-ivory/50 mt-14 font-serif text-xs tracking-[0.3em] uppercase">
          Est. {company.founded} · Agrabad, Chattogram
        </p>

        <div className="absolute right-0 bottom-8 hidden gap-2 md:flex">
          {slides.map((s, i) => (
            <button
              key={s.file}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-gold w-8" : "bg-ivory/40 w-1.5 hover:bg-ivory/70"
              }`}
            />
          ))}
        </div>

        <motion.a
          href="#collections"
          aria-label="Scroll to collections"
          className="text-ivory/60 hover:text-gold absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 transition-colors md:flex"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-serif text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
          <ChevronDown className="size-4" aria-hidden />
        </motion.a>
      </div>
    </section>
  );
}
