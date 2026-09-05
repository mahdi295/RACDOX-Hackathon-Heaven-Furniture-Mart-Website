import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Lightweight pointer-reactive gradient backdrop — no WebGL/three.js dependency,
 * just a 2D canvas radial blend in the brand's gold/charcoal-teal tones. Gives
 * the "alive" cinematic-layer feel (getlayers.ai style) behind CTA/hero sections
 * without the weight of a real 3D scene, which would clash with the brand's
 * handcrafted-luxury mood.
 */
export function PointerGradient({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Target follows pointer, current eases toward target for a soft drift.
    let targetX = 0.5;
    let targetY = 0.4;
    let curX = 0.5;
    let curY = 0.4;
    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, width * dpr);
      canvas.height = Math.max(1, height * dpr);
    };

    // Canvas is pointer-events-none (sits under interactive content), so track
    // pointer position on the window and map it into the canvas's own rect.
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      targetX = (e.clientX - rect.left) / rect.width;
      targetY = (e.clientY - rect.top) / rect.height;
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      t += 0.0035;
      curX += (targetX - curX) * 0.04;
      curY += (targetY - curY) * 0.04;

      const px = (curX + Math.sin(t) * 0.03) * width;
      const py = (curY + Math.cos(t * 0.8) * 0.03) * height;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const gold = ctx.createRadialGradient(px, py, 0, px, py, Math.max(width, height) * 0.55);
      gold.addColorStop(0, "rgba(217, 162, 58, 0.35)");
      gold.addColorStop(0.5, "rgba(217, 162, 58, 0.08)");
      gold.addColorStop(1, "rgba(217, 162, 58, 0)");
      ctx.fillStyle = gold;
      ctx.fillRect(0, 0, width, height);

      const tealX = width * (1 - curX * 0.6);
      const tealY = height * (0.5 + Math.sin(t * 0.6) * 0.2);
      const teal = ctx.createRadialGradient(
        tealX,
        tealY,
        0,
        tealX,
        tealY,
        Math.max(width, height) * 0.5,
      );
      teal.addColorStop(0, "rgba(54, 80, 81, 0.55)");
      teal.addColorStop(1, "rgba(54, 80, 81, 0)");
      ctx.fillStyle = teal;
      ctx.fillRect(0, 0, width, height);

      raf = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);

    if (reduceMotion) {
      // Single static paint, no animation loop.
      curX = targetX;
      curY = targetY;
      draw();
    } else {
      raf = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 size-full", className)}
    />
  );
}
