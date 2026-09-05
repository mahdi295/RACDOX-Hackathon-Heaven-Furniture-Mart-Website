import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

type Item = { src: string; alt?: string; caption?: string };

type Props = {
  isOpen: boolean;
  items: Item[];
  startIndex?: number;
  onClose: () => void;
};

export function Lightbox({ isOpen, items, startIndex = 0, onClose }: Props) {
  const [index, setIndex] = useState(startIndex);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const prevActive = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      prevActive.current = document.activeElement as HTMLElement | null;
      setIndex(startIndex);
      setTimeout(() => closeRef.current?.focus(), 0);
      lockBodyScroll();
    } else {
      unlockBodyScroll();
      prevActive.current?.focus();
    }
  }, [isOpen, startIndex]);

  // Ensure the lock is released if the component unmounts unexpectedly
  useEffect(() => {
    return () => {
      unlockBodyScroll();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setIndex((i) => Math.min((items?.length ?? 1) - 1, i + 1));
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, items, onClose]);

  useEffect(() => {
    // Preload adjacent images
    if (!isOpen) return;
    const next = items?.[index + 1];
    const prev = items?.[index - 1];
    if (next) new Image().src = next.src;
    if (prev) new Image().src = prev.src;
  }, [index, isOpen, items]);

  useEffect(() => setIndex(startIndex), [startIndex]);

  const count = items?.length ?? 0;
  const go = (dir: number) =>
    setIndex((i) => Math.min(Math.max(count - 1, 0), Math.max(0, i + dir)));

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <motion.div
            onClick={onClose}
            className="absolute inset-0 bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.button
            aria-label="Close (Esc)"
            ref={closeRef}
            onClick={onClose}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="absolute right-4 top-4 z-50 rounded-full bg-charcoal/70 p-3 text-ivory backdrop-blur-sm hover:bg-gold hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-gold"
          >
            <X className="size-5" />
          </motion.button>

          <button
            aria-label="Previous image"
            onClick={() => go(-1)}
            disabled={index === 0}
            aria-disabled={index === 0}
            className="absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/60 via-black/40 to-black/20 p-3 text-white hover:scale-105 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <ChevronLeft className="size-6" />
          </button>

          <button
            aria-label="Next image"
            onClick={() => go(1)}
            disabled={index === count - 1}
            aria-disabled={index === count - 1}
            className="absolute right-12 top-1/2 z-50 -translate-y-1/2 rounded-full bg-gradient-to-l from-black/60 via-black/40 to-black/20 p-3 text-white hover:scale-105 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <ChevronRight className="size-6" />
          </button>

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={items?.[index]?.alt ?? "Image preview"}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="relative z-40 max-h-[90vh] max-w-[90vw] p-4"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              const threshold = 100;
              if (info.offset.x > threshold) go(-1);
              else if (info.offset.x < -threshold) go(1);
            }}
          >
            <motion.img
              key={items?.[index]?.src}
              src={items?.[index]?.src}
              alt={items?.[index]?.alt ?? ""}
              className="max-h-[80vh] w-auto max-w-[90vw] rounded-sm object-contain shadow-2xl"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28 }}
            />

            {/* Screen reader announcement only (no visible caption) */}
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {items?.[index]
                ? `Image ${index + 1} of ${count}: ${String(items[index]?.alt ?? "").replace(/\.[a-z0-9]+$/i, "")}`
                : ""}
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export default Lightbox;
