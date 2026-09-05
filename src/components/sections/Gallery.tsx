import { img } from "@/lib/assets";
import { Reveal } from "@/components/Reveal";
import { collections } from "@/data/collections";

// Editorial, uneven sizing instead of a uniform equal-width carousel —
// large "hero" shots paired with smaller detail crops, magazine-spread style.
const featured = [
  { g: collections[0]!.gallery[0]!, span: "lg:col-span-2 lg:row-span-2" },
  { g: collections[1]!.gallery[0]!, span: "lg:col-span-1 lg:row-span-1" },
  { g: collections[2]!.gallery[1]!, span: "lg:col-span-1 lg:row-span-1" },
  { g: collections[3]!.gallery[1]!, span: "lg:col-span-1 lg:row-span-2" },
  { g: collections[4]!.gallery[0]!, span: "lg:col-span-1 lg:row-span-1" },
  { g: collections[0]!.gallery[2]!, span: "lg:col-span-1 lg:row-span-1" },
  { g: collections[1]!.gallery[4]!, span: "lg:col-span-1 lg:row-span-1" },
  { g: collections[2]!.gallery[2]!, span: "lg:col-span-1 lg:row-span-1" },
];

export function Gallery() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-hfm">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Craftsmanship</p>
            <h2 className="display-lg mt-4">Real pieces, from our own showroom floor</h2>
            <span className="rule-gold mt-6" />
          </div>
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[200px]">
          {featured.map(({ g, span }, i) => (
            <Reveal key={g.file} delay={i * 60} className={span}>
              <div className="group relative size-full overflow-hidden rounded-sm">
                <img
                  src={img(g.file)}
                  alt={g.alt}
                  className="hover-zoom-img absolute inset-0 size-full object-cover"
                  loading="lazy"
                />
                <div className="from-charcoal/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-ivory text-xs font-medium tracking-wide">{g.alt}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
