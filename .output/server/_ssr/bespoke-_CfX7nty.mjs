import { n as __toESM } from "../_runtime.mjs";
import { a as useScroll, n as useSpring, o as motion } from "../_libs/framer-motion+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { f as MessageCircle, o as SearchCheck, r as Truck, u as PencilRuler, y as Hammer } from "../_libs/lucide-react.mjs";
import { h as services, p as ourServices, r as SiteLayout, t as PageHero, u as img } from "./SiteLayout-91KFfyvO.mjs";
import { t as Reveal } from "./Reveal-CkjjARpL.mjs";
import { n as caseStudy, t as bespokeProcess } from "./collections-N2yjn05X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/bespoke-_CfX7nty.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var icons = [
	MessageCircle,
	SearchCheck,
	PencilRuler,
	Hammer,
	Truck
];
function BespokeProcessTimeline() {
	const trackRef = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: trackRef,
		offset: ["start 75%", "end 55%"]
	});
	const lineScale = useSpring(scrollYProgress, {
		stiffness: 90,
		damping: 24,
		mass: .4
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-charcoal section-y relative overflow-hidden text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "bg-gold/5 pointer-events-none absolute -top-32 -right-32 size-96 rounded-full blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow text-gold",
							children: "The Process"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg text-ivory mt-4",
							children: "Five steps, start to installation"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-ivory/60 max-w-xs text-sm leading-relaxed",
					children: "Every bespoke order follows the same disciplined path — nothing skipped, nothing rushed."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
				ref: trackRef,
				className: "relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6",
				style: { counterReset: "step" },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-hidden": true,
					className: "bg-ivory/10 absolute top-6 right-0 left-0 hidden h-px md:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						className: "bg-gold h-full origin-left",
						style: { scaleX: lineScale }
					})
				}), bespokeProcess.map((step, i) => {
					const Icon = icons[i] ?? MessageCircle;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.li, {
						initial: {
							opacity: 0,
							y: 24
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .55,
							delay: i * .1,
							ease: [
								.21,
								.47,
								.32,
								.98
							]
						},
						className: "group relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative z-10 flex md:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-charcoal border-gold/40 text-gold group-hover:bg-gold group-hover:text-charcoal flex size-12 shrink-0 items-center justify-center rounded-full border-2 transition-colors duration-300",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "size-5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "ml-5 md:mt-6 md:ml-0",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-gold/70 font-serif text-sm tracking-[0.3em]",
										children: step.no
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-ivory mt-1 text-lg font-semibold",
										children: step.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-ivory/60 mt-2 text-sm leading-relaxed",
										children: step.body
									})
								]
							})]
						}), i < bespokeProcess.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							"aria-hidden": true,
							className: "bg-ivory/10 absolute top-12 left-6 h-[calc(100%+1.5rem)] w-px md:hidden"
						}) : null]
					}, step.no);
				})]
			})]
		})]
	});
}
function BespokePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Bespoke",
			title: "Furniture designed around your space, style and vision",
			intro: "From custom dimensions to personalized designs and finishes — every project starts with a free design consultation.",
			image: img("office-02-conference-room-CLEAN.webp"),
			imageAlt: "Conference room furnished by Heaven Furniture Mart"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-hfm grid gap-6 md:grid-cols-3",
				children: services.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border bg-card group hover:border-gold/50 h-full rounded-sm border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-rust font-serif text-sm tracking-[0.2em] uppercase",
								children: ["0", i + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-3 text-xl font-semibold",
								children: s.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-3 leading-relaxed",
								children: s.body
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "bg-gold mt-6 block h-px w-8 transition-all duration-300 group-hover:w-14" })
						]
					})
				}, s.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BespokeProcessTimeline, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Materials & Craft"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "What \"hand-finished\" actually means"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-4 leading-relaxed",
							children: "Every carved detail, tufted seam and gold-leaf edge on a Heaven piece is shaped by hand, the same way this kind of work has always been done."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid grid-cols-2 gap-4 md:grid-cols-4",
					children: [
						{
							file: "craft-01-hand-carving-detail.webp",
							alt: "Craftsman hand-carving an intricate geometric pattern into solid wood"
						},
						{
							file: "craft-02-chisel-shavings.webp",
							alt: "Close-up of a chisel cutting curls from a wooden panel"
						},
						{
							file: "craft-03-hand-plane-workshop.webp",
							alt: "Hand plane shaping a wooden board on a workbench"
						},
						{
							file: "craft-04-drawknife-shaping.webp",
							alt: "Drawknife shaping a length of timber by hand"
						}
					].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img(c.file),
							alt: c.alt,
							className: "aspect-square w-full rounded-sm object-cover",
							loading: "lazy"
						})
					}, c.file))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-secondary/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
						className: "max-w-2xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "Recent Project"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "display-lg mt-4",
								children: caseStudy.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground mt-6 leading-relaxed",
								children: caseStudy.body
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
						children: caseStudy.images.map((im, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 70,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
								className: "group overflow-hidden rounded-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(im.file),
									alt: im.alt,
									className: "hover-zoom-img aspect-3/4 w-full object-cover",
									loading: "lazy"
								})
							})
						}, im.file))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground mt-4 text-xs",
						children: [
							"Photographed at handover, published with ",
							caseStudy.client,
							"'s own project announcement."
						]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm border-border flex flex-wrap items-center justify-between gap-8 border-t pt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "grid gap-3 sm:grid-cols-3 sm:gap-10",
					children: ourServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center gap-3 font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "bg-gold size-1.5 rounded-full",
							"aria-hidden": true
						}), s]
					}, s))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/contact",
					className: "bg-gold text-accent-foreground rounded-sm px-7 py-4 text-sm font-semibold",
					children: "Request a Consultation"
				})]
			})
		})
	] });
}
//#endregion
export { BespokePage as component };
