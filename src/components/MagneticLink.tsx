import { type ComponentProps, useRef } from "react";
import { Link } from "@tanstack/react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";

type LinkProps = ComponentProps<typeof Link>;

/**
 * A Link that pulls itself slightly toward the pointer on hover, then springs
 * back on leave — the "magnetic button" micro-interaction common on premium
 * furniture/agency sites (Minotti, Poliform). Falls back to a plain static
 * link for touch/reduced-motion, since the effect only makes sense with a mouse.
 */
export function MagneticLink({ children, className, ...props }: LinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.28);
    y.set(relY * 0.35);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span
      style={{ x: springX, y: springY, display: "inline-block" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link ref={ref} className={className} {...props}>
        {children}
      </Link>
    </motion.span>
  );
}
