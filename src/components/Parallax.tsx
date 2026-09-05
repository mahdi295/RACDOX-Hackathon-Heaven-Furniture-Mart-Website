import { type ReactNode, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Wraps children in a scroll-linked vertical translate. Used to give image
 * layers depth against static text (image moves slower/faster than scroll),
 * matching the parallax treatment used across premium furniture sites
 * (Minotti, Poliform, Roche Bobois) instead of flat scroll-triggered fades.
 */
export function Parallax({
  children,
  className,
  strength = 60,
}: {
  children: ReactNode;
  className?: string;
  /** Pixels of vertical drift across the section's scroll range. Negative = drifts up. */
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={{ y }} className="size-full">
        {children}
      </motion.div>
    </div>
  );
}
