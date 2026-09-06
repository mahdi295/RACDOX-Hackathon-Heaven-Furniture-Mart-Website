import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { img } from "@/lib/assets";
import { company } from "@/data/company";
import { cn } from "@/lib/utils";
import { lockBodyScroll, unlockBodyScroll } from "@/lib/scroll-lock";

const nav = [
  { to: "/collections", label: "Collections" },
  { to: "/bespoke", label: "Bespoke" },
  { to: "/about", label: "About" },
  { to: "/showroom", label: "Showroom" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    lockBodyScroll();
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      unlockBodyScroll();
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/85"
          : "bg-transparent",
      )}
    >
      <div className="container-hfm flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="Heaven Furniture Mart — home">
          <img
            src={img("logo-mark-light.webp")}
            alt="Heaven Furniture Mart logo"
            className="h-8 w-auto"
            width={120}
            height={44}
          />
          <span className="sr-only">Heaven Furniture Mart</span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="group relative py-2 text-sm font-medium tracking-wide text-ivory/80 transition-colors duration-200 hover:text-gold"
              activeProps={{ className: "text-gold font-semibold" }}
            >
              {({ isActive }) => (
                <>
                  <span>{n.label}</span>
                  {/* Subtle active underline indicator */}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-all duration-300",
                      isActive
                        ? "bg-gold opacity-100 scale-x-100"
                        : "bg-gold/0 opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:bg-gold/40 group-hover:opacity-100",
                    )}
                  />
                </>
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phoneHref}
            className="text-ivory/85 hover:text-gold inline-flex items-center gap-2 text-sm"
          >
            <Phone className="size-4" aria-hidden />
            {company.phone}
          </a>
          <Link
            to="/contact"
            className="bg-gold text-accent-foreground rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90"
          >
            Request a Consultation
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden rounded-md p-2 transition-colors duration-300 
             bg-charcoal/60 backdrop-blur-sm 
             text-ivory hover:bg-gold hover:text-charcoal active:scale-90"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              onClick={() => setOpen(false)}
              aria-hidden="true"
            />

            <motion.aside
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed left-0 top-0 z-50 flex h-dvh w-[88vw] max-w-[400px] flex-col bg-charcoal text-ivory shadow-2xl lg:hidden"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
                mass: 0.8,
              }}
            >
              <div className="flex items-center justify-between border-b border-ivory/10 px-5 py-4">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
                  <img
                    src={img("logo-mark-light.webp")}
                    alt="Heaven Furniture Mart logo"
                    className="h-7 w-auto"
                    width={100}
                    height={32}
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-ivory/80 transition-colors duration-200 hover:bg-ivory/10 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold"
                >
                  <X className="size-5" aria-hidden="true" />
                </button>
              </div>

              <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-5 py-5">
                <motion.div
                  initial="closed"
                  animate="open"
                  variants={{
                    open: {
                      transition: {
                        delayChildren: 0.08,
                        staggerChildren: 0.06,
                      },
                    },
                  }}
                  className="flex flex-col"
                >
                  {nav.map((n) => (
                    <motion.div
                      key={n.to}
                      variants={{
                        closed: { opacity: 0, x: -18 },
                        open: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.26, ease: "easeOut" }}
                    >
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="group flex items-center justify-between border-b border-ivory/10 py-4 text-[17px] font-medium tracking-wide transition-colors duration-200 hover:text-gold focus:outline-none focus:text-gold"
                        activeProps={{ className: "text-gold font-semibold" }}
                      >
                        {({ isActive }) => (
                          <>
                            <div className="flex items-center gap-3">
                              {isActive ? (
                                <span
                                  className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(217,162,58,0.8)]"
                                  aria-hidden="true"
                                />
                              ) : null}
                              <span>{n.label}</span>
                            </div>
                            <span
                              className={cn(
                                "text-sm transition-all duration-200",
                                isActive
                                  ? "text-gold font-serif text-xs uppercase tracking-widest"
                                  : "text-ivory/30 group-hover:translate-x-1 group-hover:text-gold",
                              )}
                            >
                              {isActive ? "Current" : "→"}
                            </span>
                          </>
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.34, duration: 0.25, ease: "easeOut" }}
                  className="mt-8"
                >
                  <a
                    href={company.phoneHref}
                    className="flex items-center gap-3 py-3 text-base text-ivory/80 transition-colors hover:text-gold"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    <span>{company.phone}</span>
                  </a>

                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="mt-4 block w-full rounded-sm bg-gold px-5 py-3.5 text-center font-semibold text-accent-foreground transition-all duration-200 hover:brightness-95 active:scale-[0.98]"
                  >
                    Request a Consultation
                  </Link>
                </motion.div>
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
