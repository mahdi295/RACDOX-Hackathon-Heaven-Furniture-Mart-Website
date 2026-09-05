import { Award, Building2, CalendarCheck, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { company } from "@/data/company";

const items = [
  {
    icon: Clock,
    label: `Since ${company.founded}`,
    detail: "Serving Chattogram",
  },
  {
    icon: CalendarCheck,
    label: "Furniture Fair 2024 & 2025",
    detail: "Chattogram International Furniture Fair",
  },
  {
    icon: Building2,
    label: "Chamber of Commerce",
    detail: "Registered member since 2025",
  },
  {
    icon: Award,
    label: "BFIOA Recognition",
    detail: "Nationwide, 2026",
  },
];

export function AwardsStrip() {
  return (
    <section className="border-border border-y bg-background">
      <div className="container-hfm">
        <div className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-4 sm:py-8">
          {items.map((item, i) => (
            <Reveal
              key={item.label}
              delay={i * 70}
              className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left"
            >
              <item.icon className="text-gold size-6 shrink-0" aria-hidden />
              <div>
                <p className="text-sm leading-tight font-semibold">{item.label}</p>
                <p className="text-muted-foreground mt-0.5 text-xs leading-tight">{item.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
