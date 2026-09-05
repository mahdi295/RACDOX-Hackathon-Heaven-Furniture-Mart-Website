import { Check, Truck, CalendarCheck, CreditCard, LayoutGrid, PenTool, Gem } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Parallax } from "@/components/Parallax";
import { img } from "@/lib/assets";
import { whyChooseUs, services, ourServices } from "@/data/company";

const serviceIcons = [CalendarCheck, Truck, CreditCard];
const featureIcons = [LayoutGrid, PenTool, Gem];

export function WhyHeaven() {
  return (
    <section className="section-y bg-background">
      <div className="container-hfm">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Anchoring photo — this section previously had zero imagery */}
          <Reveal className="relative">
            <Parallax strength={36} className="aspect-4/5 rounded-sm lg:sticky lg:top-28">
              <img
                src={img("living-11-cozy-chair-post.webp")}
                alt="Cozy accent chair social post"
                className="w-full scale-100 rounded-sm object-cover"
                loading="lazy"
              />
            </Parallax>
            <div className="border-gold bg-background absolute -bottom-6 left-6 max-w-[220px] rounded-sm border p-5 shadow-lg sm:left-8">
              <p className="text-gold font-serif text-3xl leading-none">6+</p>
              <p className="text-muted-foreground mt-1.5 text-xs leading-snug">
                Years crafting bespoke pieces for Chattogram homes
              </p>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="eyebrow">Our Expertise</p>
              <h2 className="display-lg mt-4">Why Heaven</h2>
              <span className="rule-gold mt-6" />
              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {whyChooseUs.map((w) => (
                  <li key={w} className="flex items-center gap-3">
                    <span className="bg-gold/15 text-gold flex size-7 shrink-0 items-center justify-center rounded-full">
                      <Check className="size-3.5" aria-hidden />
                    </span>
                    <span className="text-foreground/90 text-[0.975rem]">{w}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {services.map((s, i) => {
                const Icon = featureIcons[i] ?? Gem;
                return (
                  <Reveal key={s.title} delay={i * 90}>
                    <div className="group border-border bg-card hover:border-gold/50 relative overflow-hidden rounded-sm border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-7">
                      <span className="bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal flex size-10 items-center justify-center rounded-full transition-colors duration-300">
                        <Icon className="size-4.5" aria-hidden />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                      <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.body}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="border-border grid gap-6 border-t pt-10 sm:grid-cols-3">
            {ourServices.map((s, i) => {
              const Icon = serviceIcons[i] ?? Check;
              return (
                <div key={s} className="flex items-center gap-4">
                  <Icon className="text-gold size-6 shrink-0" aria-hidden />
                  <span className="font-medium">{s}</span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
