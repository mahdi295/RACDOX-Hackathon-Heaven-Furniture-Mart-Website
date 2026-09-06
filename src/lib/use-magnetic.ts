import { useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

/**
 * Pointer-follow spring physics shared by MagneticLink and MagneticButton.
 * Element pulls slightly toward the cursor on hover, springs back on leave.
 * Works on any element ref (anchor, button) — extracted so the effect isn't
 * locked to <Link>.
 */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMouseMove = (e: React.MouseEvent<T>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.28);
    y.set(relY * 0.35);
  };

  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { ref, springX, springY, onMouseMove, onMouseLeave };
}
