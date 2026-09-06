import { type ComponentProps } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useMagnetic } from "@/lib/use-magnetic";

type LinkProps = ComponentProps<typeof Link>;

/**
 * A Link that pulls itself slightly toward the pointer on hover, then springs
 * back on leave — the "magnetic button" micro-interaction common on premium
 * furniture/agency sites (Minotti, Poliform). Falls back to a plain static
 * link for touch/reduced-motion, since the effect only makes sense with a mouse.
 */
export function MagneticLink({ children, className, ...props }: LinkProps) {
  const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagnetic<HTMLAnchorElement>();

  return (
    <motion.span
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <Link ref={ref} className={className} {...props}>
        {children}
      </Link>
    </motion.span>
  );
}
