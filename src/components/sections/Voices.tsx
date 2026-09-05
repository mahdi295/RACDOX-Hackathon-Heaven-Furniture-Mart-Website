import { motion, useAnimationControls } from "framer-motion";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { Reveal } from "@/components/Reveal";

const reviews = [
  {
    name: "Jefranul Rakib",
    role: "Living Room Customer",
    quote:
      "I bought a living room set from Heaven Furniture, and honestly, the whole experience was amazing. The staff was incredibly helpful without being pushy, and everything arrived right on time without a single scratch.",
  },
  {
    name: "Vf Qatar",
    role: "Showroom Visitor",
    quote:
      "Visited them, good quality products they have. Everything has customization option. Got their catalog and everything 😊 Hospitality was good.",
  },
  {
    name: "Md Mehedi",
    role: "Satisfied Buyer",
    quote: "Nice furniture collection, had a good experience with them ☺️",
  },
  {
    name: "A.K.M Rakibul Basher",
    role: "Customer",
    quote: "Product quality bhalo. But delivery time matter Kore.",
  },
  {
    name: "Mayeen Uddin Hasan",
    role: "Customer",
    quote: "Nice furniture collection, and good customer service.",
  },
  {
    name: "Dil Afroz Begum",
    role: "Customer",
    quote: "Good service, staff behaviour and fast delivery.",
  },
  {
    name: "Al Mamun",
    role: "Verified Buyer",
    quote: "Product quality was good. And the staffs were very polite. Very recommended.",
  },
  {
    name: "SAJIBUR RAHMAN",
    role: "Design Consultation Client",
    quote:
      "One aspect that truly sets Heaven Furniture apart is their exceptional customer service. The staff members are knowledgeable, friendly, and genuinely invested in helping customers find the perfect furniture.",
  },
  {
    name: "Rakibur Rahaman",
    role: "Custom Project Client",
    quote:
      "Finally got a custom desktop table made from Heaven Mart Furniture. Honestly, now my setup fits perfectly and is comfortable.",
  },
  {
    name: "Tarek Aziz",
    role: "Furniture Buyer",
    quote:
      "I am very satisfied with the furniture I bought from Heaven Furniture. The quality of the furniture is good, the wood is sturdy and the finishing is quite nice. The design is modern and comfortable to use.",
  },
] as const;

// Two strongest, longest reviews get pulled out as large "featured" cards —
// gives the section visual weight instead of every quote reading identical.
const featuredNames = new Set(["Jefranul Rakib", "SAJIBUR RAHMAN"]);
const featuredReviews = reviews.filter((r) => featuredNames.has(r.name));
const marqueeReviews = [...reviews, ...reviews];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
}

function Avatar({ name }: { name: string }) {
  return (
    <span className="bg-charcoal text-ivory flex size-11 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold">
      {initials(name)}
    </span>
  );
}

function Stars() {
  return (
    <div className="text-gold flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => (
        <Star key={i} className="size-3.5 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Voices() {
  const marqueeControls = useAnimationControls();

  useEffect(() => {
    void marqueeControls.start({
      x: ["0%", "-50%"],
      transition: { duration: 42, ease: "linear", repeat: Infinity },
    });
  }, [marqueeControls]);

  return (
    <section className="bg-background section-y">
      <div className="container-hfm">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">What Clients Say</p>
          <h2 className="display-lg mt-4">Heard from the showroom floor</h2>
          <span className="rule-gold mt-6" />
        </Reveal>

        {/* Two featured, larger quotes — real weight instead of a flat wall of text */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {featuredReviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 90}>
              <div className="border-border bg-card h-full rounded-sm border p-8">
                <Stars />
                <p className="text-foreground mt-5 text-lg leading-relaxed">“{r.quote}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar name={r.name} />
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Full set, as an ambient marquee beneath the featured pair */}
      <div className="relative mt-10 overflow-hidden">
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent sm:w-24" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent sm:w-24" />

        <motion.div
          className="flex w-max gap-4 py-2"
          animate={marqueeControls}
          initial={{ x: "0%" }}
          onHoverStart={() => marqueeControls.stop()}
          onHoverEnd={() =>
            marqueeControls.start({
              x: ["0%", "-50%"],
              transition: { duration: 42, ease: "linear", repeat: Infinity },
            })
          }
        >
          {marqueeReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              className="border-border bg-card min-w-[280px] max-w-[340px] shrink-0 rounded-sm border p-5"
            >
              <Stars />
              <p className="text-foreground/85 mt-3 line-clamp-4 text-sm leading-relaxed">
                “{review.quote}”
              </p>
              <div className="mt-4 flex items-center gap-2.5">
                <Avatar name={review.name} />
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold">{review.name}</p>
                  <p className="text-muted-foreground text-[0.7rem]">{review.role}</p>
                </div>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
