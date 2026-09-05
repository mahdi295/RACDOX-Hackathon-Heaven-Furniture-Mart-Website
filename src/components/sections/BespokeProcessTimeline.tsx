import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  MessageCircle,
  SearchCheck,
  PencilRuler,
  Hammer,
  Truck,
  type LucideIcon,
} from "lucide-react";
import { bespokeProcess } from "@/data/collections";

const icons: LucideIcon[] = [MessageCircle, SearchCheck, PencilRuler, Hammer, Truck];

export function BespokeProcessTimeline() {
  const trackRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 75%", "end 55%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  return (
    <section className="bg-charcoal section-y relative overflow-hidden text-ivory">
      <div className="bg-gold/5 pointer-events-none absolute -top-32 -right-32 size-96 rounded-full blur-3xl" />
      <div className="container-hfm relative">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-gold">The Process</p>
            <h2 className="display-lg text-ivory mt-4">Five steps, start to installation</h2>
            <span className="rule-gold mt-6" />
          </div>
          <p className="text-ivory/60 max-w-xs text-sm leading-relaxed">
            Every bespoke order follows the same disciplined path — nothing skipped, nothing rushed.
          </p>
        </div>

        <ol
          ref={trackRef}
          className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6"
          style={{ counterReset: "step" }}
        >
          {/* connecting line — desktop only */}
          <div
            aria-hidden
            className="bg-ivory/10 absolute top-6 right-0 left-0 hidden h-px md:block"
          >
            <motion.div className="bg-gold h-full origin-left" style={{ scaleX: lineScale }} />
          </div>

          {bespokeProcess.map((step, i) => {
            const Icon = icons[i] ?? MessageCircle;
            return (
              <motion.li
                key={step.no}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                className="group relative"
              >
                <div className="relative z-10 flex md:block">
                  <span className="bg-charcoal border-gold/40 text-gold group-hover:bg-gold group-hover:text-charcoal flex size-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300">
                    <Icon className="size-5" aria-hidden />
                  </span>

                  <div className="ml-5 md:mt-6 md:ml-0">
                    <span className="text-gold/70 font-serif text-sm tracking-[0.3em]">
                      {step.no}
                    </span>
                    <h3 className="text-ivory mt-1 text-lg font-semibold">{step.title}</h3>
                    <p className="text-ivory/60 mt-2 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>

                {/* mobile connector */}
                {i < bespokeProcess.length - 1 ? (
                  <span
                    aria-hidden
                    className="bg-ivory/10 absolute top-12 left-6 h-[calc(100%+1.5rem)] w-px md:hidden"
                  />
                ) : null}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
