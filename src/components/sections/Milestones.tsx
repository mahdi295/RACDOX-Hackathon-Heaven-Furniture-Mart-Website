import type { CSSProperties } from "react";
import { img } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { milestones, eventPhotos } from "@/data/collections";

export function Milestones() {
  return (
    <section className="section-y" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container-hfm grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20 items-start">
        <div>
          <p className="eyebrow text-accent">HIGHLIGHTS</p>
          <h2 className="display-lg mt-4">Milestones</h2>
          <span className="rule-gold mt-6" />

          <ol className="mt-9">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 200}>
                <li
                  className="milestones-item flex gap-6 border-b py-5 last:border-b-0 relative"
                  style={{ "--delay": `${i * 200}ms` } as CSSProperties}
                >
                  <span
                    className="milestones-year text-accent w-28 shrink-0 font-serif text-lg"
                    style={{ color: "#D4A843" }}
                  >
                    {m.year}
                  </span>
                  <span className="text-foreground/90">{m.text}</span>
                  <div className="milestones-item-line" aria-hidden />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <div className="grid grid-cols-2 gap-6 lg:gap-6">
            {eventPhotos.slice(0, 4).map((e, i) => (
              <Reveal key={e.file} delay={110 + i * 200}>
                <figure
                  className="milestones-figure group overflow-hidden rounded-md shadow-sm relative"
                  style={{ "--delay": `${110 + i * 200}ms` } as CSSProperties}
                >
                  <img
                    src={img(e.file)}
                    alt={e.alt}
                    className="hover-zoom-img aspect-4/3 w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/30 to-transparent">
                    <p className="text-muted-foreground text-sm m-0">{e.caption}</p>
                  </div>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
