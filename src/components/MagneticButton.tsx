import { type ButtonHTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "@/lib/use-magnetic";

type MagneticButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/**
 * Same magnetic pull as MagneticLink, for plain <button> elements that aren't
 * router links (form submits, in-page actions).
 */
export function MagneticButton({ children, className, ...props }: MagneticButtonProps) {
  const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagnetic<HTMLButtonElement>();

  // The button's own width classes (e.g. w-full sm:w-auto) need to live on the
  // wrapper span too, or an inline-block span collapses to content width and
  // the button beneath it stops actually filling its container.
  return (
    <motion.span
      style={{ x: springX, y: springY, display: "block" }}
      className={className?.match(/\bw-full\b/) ? className : "inline-block"}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <button ref={ref} className={className} {...props}>
        {children}
      </button>
    </motion.span>
  );
}
