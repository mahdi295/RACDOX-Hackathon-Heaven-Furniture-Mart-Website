import { Reveal } from "@/components/Reveal";
import { bespokeProcess } from "@/data/collections";
import { img } from "@/lib/assets";

export function Process() {
  return (
    <section id="process" className="bg-charcoal text-ivory section-y">
      <div className="container-hfm">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-gold">The Bespoke Process</p>
          <h2 className="display-lg text-ivory mt-4">From a first conversation to installation</h2>
          <span className="rule-gold mt-6" />
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <ol className="space-y-0">
            {bespokeProcess.map((step, i) => (
              <Reveal key={step.no} as="li" delay={i * 70}>
                <div className="border-ivory/12 flex gap-6 border-b py-6">
                  <span className="text-gold/80 font-serif text-3xl leading-none">{step.no}</span>
                  <div>
                    <h3 className="text-ivory text-lg font-semibold">{step.title}</h3>
                    <p className="text-ivory/65 mt-1.5 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120}>
            <img
              src={img("custom-02-modern-black-gold-cabinet.webp")}
              alt="Close-up of a matte black and brass cabinet showing craftsmanship detail"
              className="aspect-4/5 w-full rounded-sm object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
