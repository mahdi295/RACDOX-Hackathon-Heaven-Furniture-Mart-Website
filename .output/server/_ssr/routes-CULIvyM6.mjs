import { n as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence, t as useAnimationControls } from "../_libs/framer-motion+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Trigger2, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { A as Building2, C as Clock, D as ChevronDown, M as ArrowUpRight, N as ArrowRight, O as Check, S as CreditCard, b as Gem, c as Play, d as PenTool, g as LayoutGrid, i as Star, j as Award, k as CalendarCheck, l as Phone, m as MapPin, r as Truck } from "../_libs/lucide-react.mjs";
import { c as cn, d as img, g as services, i as SiteLayout, l as company, m as ourServices, r as Parallax, s as closing, t as MagneticLink, u as faqs, y as whyChooseUs } from "./SiteLayout-M5p3PCDm.mjs";
import { t as Reveal } from "./Reveal-Bjnxl8w6.mjs";
import { r as collections, t as bespokeProcess } from "./collections-N2yjn05X.mjs";
import { t as description } from "./routes-CwhIexcn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CULIvyM6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var slides = [
	{
		file: "cover-hero-moodboard-02.webp",
		alt: "Styled living room moodboard featuring Heaven Furniture Mart pieces"
	},
	{
		file: "bedroom-02-emerald-modern-bed.webp",
		alt: "Emerald velvet bed with wood and brass detailing, crafted by Heaven Furniture Mart"
	},
	{
		file: "cover-hero-moodboard-03.webp",
		alt: "Curated furniture and interior styling moodboard by Heaven Furniture Mart"
	}
];
var AUTOPLAY_MS = 5500;
function Hero() {
	const [index, setIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
		return () => clearInterval(t);
	}, []);
	const currentSlide = slides[index] ?? slides[0];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-charcoal relative isolate min-h-[92vh] overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
				mode: "sync",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: img(currentSlide.file),
					alt: currentSlide.alt,
					className: "absolute inset-0 size-full object-cover",
					fetchPriority: index === 0 ? "high" : void 0,
					initial: {
						opacity: 0,
						scale: 1.06
					},
					animate: {
						opacity: 1,
						scale: 1.16
					},
					exit: { opacity: 0 },
					transition: {
						opacity: {
							duration: 1.1,
							ease: "easeInOut"
						},
						scale: {
							duration: 7,
							ease: "linear"
						}
					}
				}, currentSlide.file)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/95 via-charcoal/70 absolute inset-0 bg-gradient-to-r to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/80 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm relative flex min-h-[92vh] flex-col justify-end pt-36 pb-16 md:justify-center md:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.p, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { duration: .6 },
						className: "eyebrow text-gold",
						children: [company.name, " · Chattogram"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .1
						},
						className: "display-xl text-ivory mt-5 max-w-4xl",
						children: company.tagline
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .2
						},
						className: "text-ivory/80 mt-6 max-w-xl text-lg leading-relaxed",
						children: company.secondaryLine
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 16
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							duration: .7,
							delay: .3
						},
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(MagneticLink, {
							to: "/contact",
							className: "bg-gold text-accent-foreground group inline-flex items-center gap-2 rounded-sm px-7 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90",
							children: ["Request a Consultation", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
								className: "size-4 transition-transform group-hover:translate-x-1",
								"aria-hidden": true
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/collections",
							className: "border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex items-center rounded-sm border px-7 py-4 text-sm font-semibold tracking-wide transition-colors",
							children: "Explore Our Work"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-ivory/50 mt-14 font-serif text-xs tracking-[0.3em] uppercase",
						children: [
							"Est. ",
							company.founded,
							" · Agrabad, Chattogram"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-0 bottom-8 hidden gap-2 md:flex",
						children: slides.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setIndex(i),
							"aria-label": `Show slide ${i + 1}`,
							className: `h-1.5 rounded-full transition-all duration-300 ${i === index ? "bg-gold w-8" : "bg-ivory/40 w-1.5 hover:bg-ivory/70"}`
						}, s.file))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.a, {
						href: "#collections",
						"aria-label": "Scroll to collections",
						className: "text-ivory/60 hover:text-gold absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 transition-colors md:flex",
						animate: { y: [
							0,
							8,
							0
						] },
						transition: {
							duration: 2.2,
							repeat: Infinity,
							ease: "easeInOut"
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-serif text-[0.65rem] tracking-[0.3em] uppercase",
							children: "Scroll"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
							className: "size-4",
							"aria-hidden": true
						})]
					})
				]
			})
		]
	});
}
function Collections() {
	const [featured, ...rest] = collections;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "collections",
		className: "section-y bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "flex flex-wrap items-end justify-between gap-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg max-w-xl",
						children: "Five collections, all made to measure"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground max-w-sm text-sm leading-relaxed",
						children: "Browse by room, or skip straight to a free consultation if nothing here matches your space exactly."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-4 lg:grid-cols-4 lg:grid-rows-2",
					children: [featured ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						className: "lg:col-span-2 lg:row-span-2",
						delay: 0,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections",
							hash: featured.slug,
							className: "group relative flex h-full min-h-[420px] flex-col justify-end overflow-hidden rounded-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(featured.cover),
									alt: featured.coverAlt,
									className: "absolute inset-0 size-full object-cover transition-opacity duration-700 group-hover:opacity-0",
									loading: "lazy"
								}),
								featured.gallery[1] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(featured.gallery[1].file),
									alt: featured.gallery[1].alt,
									className: "hover-zoom-img absolute inset-0 size-full scale-105 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100",
									loading: "lazy",
									"aria-hidden": "true"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/95 via-charcoal/40 absolute inset-0 bg-gradient-to-t to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative p-8 sm:p-10",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-gold font-serif text-sm tracking-wide",
											children: featured.items
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-ivory mt-2 font-serif text-3xl leading-tight sm:text-4xl",
											children: featured.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-ivory/75 mt-3 max-w-md text-sm leading-relaxed",
											children: featured.blurb
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-ivory group-hover:text-gold mt-5 inline-flex items-center gap-2 text-sm font-semibold transition-colors",
											children: ["Explore Collection", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
												className: "size-4",
												"aria-hidden": true
											})]
										})
									]
								})
							]
						})
					}) : null, rest.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: 100 + i * 80,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/collections",
							hash: c.slug,
							className: "group bg-card relative flex h-full min-h-[200px] flex-col justify-end overflow-hidden rounded-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(c.cover),
									alt: c.coverAlt,
									className: "absolute inset-0 size-full object-cover transition-opacity duration-700 group-hover:opacity-0",
									loading: "lazy"
								}),
								c.gallery[1] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: img(c.gallery[1].file),
									alt: c.gallery[1].alt,
									className: "hover-zoom-img absolute inset-0 size-full scale-105 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100",
									loading: "lazy",
									"aria-hidden": "true"
								}) : null,
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/90 absolute inset-0 bg-gradient-to-t via-transparent to-transparent" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "relative p-5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-ivory text-lg font-semibold",
										children: c.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-ivory/70 mt-1 text-xs",
										children: c.items
									})]
								})
							]
						})
					}, c.slug))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 400,
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-gold/30 bg-charcoal flex flex-col items-start justify-between gap-6 rounded-sm border p-8 sm:flex-row sm:items-center sm:p-10",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gold font-serif text-sm tracking-wide",
								children: "Bespoke"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-ivory mt-2 text-xl leading-snug font-semibold sm:text-2xl",
								children: "Nothing here fits your room? That's the normal starting point."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ivory/70 mt-2 max-w-lg text-sm leading-relaxed",
								children: "Every project begins with a free design consultation and a set of measurements — then we design around them."
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
							to: "/bespoke",
							className: "bg-gold text-accent-foreground inline-flex w-fit shrink-0 rounded-sm px-6 py-3 text-sm font-semibold",
							children: "See the process"
						})]
					})
				})
			]
		})
	});
}
var items = [
	{
		icon: Clock,
		label: `Since ${company.founded}`,
		detail: "Serving Chattogram"
	},
	{
		icon: CalendarCheck,
		label: "Furniture Fair 2024 & 2025",
		detail: "Chattogram International Furniture Fair"
	},
	{
		icon: Building2,
		label: "Chamber of Commerce",
		detail: "Registered member since 2025"
	},
	{
		icon: Award,
		label: "BFIOA Recognition",
		detail: "Nationwide, 2026"
	}
];
function AwardsStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "border-border border-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-hfm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-4 sm:py-8",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: i * 70,
					className: "flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-3 sm:text-left",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
						className: "text-gold size-6 shrink-0",
						"aria-hidden": true
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm leading-tight font-semibold",
						children: item.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-0.5 text-xs leading-tight",
						children: item.detail
					})] })]
				}, item.label))
			})
		})
	});
}
var serviceIcons = [
	CalendarCheck,
	Truck,
	CreditCard
];
var featureIcons = [
	LayoutGrid,
	PenTool,
	Gem
];
function WhyHeaven() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
						strength: 36,
						className: "aspect-4/5 rounded-sm lg:sticky lg:top-28",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img("living-11-cozy-chair-post.webp"),
							alt: "Cozy accent chair social post",
							className: "w-full scale-100 rounded-sm object-cover",
							loading: "lazy"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-gold bg-background absolute -bottom-6 left-6 max-w-[220px] rounded-sm border p-5 shadow-lg sm:left-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-gold font-serif text-3xl leading-none",
							children: "6+"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-1.5 text-xs leading-snug",
							children: "Years crafting bespoke pieces for Chattogram homes"
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Our Expertise"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "Why Heaven"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-8 grid gap-3 sm:grid-cols-2",
						children: whyChooseUs.map((w) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "bg-gold/15 text-gold flex size-7 shrink-0 items-center justify-center rounded-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "size-3.5",
									"aria-hidden": true
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-foreground/90 text-[0.975rem]",
								children: w
							})]
						}, w))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-1",
					children: services.map((s, i) => {
						const Icon = featureIcons[i] ?? Gem;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: i * 90,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group border-border bg-card hover:border-gold/50 relative overflow-hidden rounded-sm border p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md lg:p-7",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "bg-gold/10 text-gold group-hover:bg-gold group-hover:text-charcoal flex size-10 items-center justify-center rounded-full transition-colors duration-300",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
											className: "size-4.5",
											"aria-hidden": true
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-4 text-lg font-semibold",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground mt-2 text-sm leading-relaxed",
										children: s.body
									})
								]
							})
						}, s.title);
					})
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "mt-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "border-border grid gap-6 border-t pt-10 sm:grid-cols-3",
					children: ourServices.map((s, i) => {
						const Icon = serviceIcons[i] ?? Check;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "text-gold size-6 shrink-0",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium",
								children: s
							})]
						}, s);
					})
				})
			})]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "bg-charcoal text-ivory section-y",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "The Bespoke Process"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg text-ivory mt-4",
						children: "From a first conversation to installation"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "space-y-0",
					children: bespokeProcess.map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-ivory/12 flex gap-6 border-b py-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold/80 font-serif text-3xl leading-none",
								children: step.no
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-ivory text-lg font-semibold",
								children: step.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ivory/65 mt-1.5 text-sm leading-relaxed",
								children: step.body
							})] })]
						})
					}, step.no))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 120,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img("custom-02-modern-black-gold-cabinet.webp"),
						alt: "Close-up of a matte black and brass cabinet showing craftsmanship detail",
						className: "aspect-4/5 w-full rounded-sm object-cover",
						loading: "lazy"
					})
				})]
			})]
		})
	});
}
var featured = [
	{
		g: collections[0].gallery[0],
		span: "lg:col-span-2 lg:row-span-2"
	},
	{
		g: collections[1].gallery[0],
		span: "lg:col-span-1 lg:row-span-1"
	},
	{
		g: collections[2].gallery[1],
		span: "lg:col-span-1 lg:row-span-1"
	},
	{
		g: collections[3].gallery[1],
		span: "lg:col-span-1 lg:row-span-2"
	},
	{
		g: collections[4].gallery[0],
		span: "lg:col-span-1 lg:row-span-1"
	},
	{
		g: collections[0].gallery[2],
		span: "lg:col-span-1 lg:row-span-1"
	},
	{
		g: collections[1].gallery[4],
		span: "lg:col-span-1 lg:row-span-1"
	},
	{
		g: collections[2].gallery[2],
		span: "lg:col-span-1 lg:row-span-1"
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				className: "flex flex-wrap items-end justify-between gap-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Featured Craftsmanship"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "Real pieces, from our own showroom floor"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
					]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid auto-rows-[180px] grid-cols-2 gap-3 sm:auto-rows-[220px] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[200px]",
				children: featured.map(({ g, span }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 60,
					className: span,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group relative size-full overflow-hidden rounded-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img(g.file),
							alt: g.alt,
							className: "hover-zoom-img absolute inset-0 size-full object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "from-charcoal/80 absolute inset-0 flex items-end bg-gradient-to-t via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-ivory text-xs font-medium tracking-wide",
								children: g.alt
							})
						})]
					})
				}, g.file))
			})]
		})
	});
}
var mainVideo = {
	id: "qEwoJWbXSTs",
	title: "Virtual tour — Heaven Furniture Mart"
};
var shorts = [{
	id: "95QrFvVcLXI",
	title: "Heaven Furniture Mart — showroom moment"
}, {
	id: "h-Idu5_85WA",
	title: "Heaven Furniture Mart — showroom moment"
}];
function VideoCard({ video }) {
	const [playing, setPlaying] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `bg-charcoal group relative w-full overflow-hidden rounded-sm aspect-video`,
		children: playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
			className: "absolute inset-0 size-full",
			src: `https://www.youtube.com/embed/${video.id}?si=5RBtdu1U_AOKA9dd&autoplay=1`,
			title: video.title,
			allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
			referrerPolicy: "strict-origin-when-cross-origin",
			allowFullScreen: true
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setPlaying(true),
			className: "absolute inset-0 size-full cursor-pointer",
			"aria-label": `Play video: ${video.title}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
					alt: video.title,
					className: "size-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "bg-gold/95 text-accent-foreground absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-out group-hover:scale-110",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
						className: "ml-0.5 size-6",
						fill: "currentColor",
						"aria-hidden": true
					})
				})
			]
		})
	});
}
function VideoShowcase() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Watch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "See the showroom in motion"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3",
				children: [mainVideo, ...shorts].map((video, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 80,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoCard, { video })
				}, video.id))
			})]
		})
	});
}
var reviews = [
	{
		name: "Jefranul Rakib",
		role: "Living Room Customer",
		quote: "I bought a living room set from Heaven Furniture, and honestly, the whole experience was amazing. The staff was incredibly helpful without being pushy, and everything arrived right on time without a single scratch."
	},
	{
		name: "Vf Qatar",
		role: "Showroom Visitor",
		quote: "Visited them, good quality products they have. Everything has customization option. Got their catalog and everything 😊 Hospitality was good."
	},
	{
		name: "Md Mehedi",
		role: "Satisfied Buyer",
		quote: "Nice furniture collection, had a good experience with them ☺️"
	},
	{
		name: "A.K.M Rakibul Basher",
		role: "Customer",
		quote: "Product quality bhalo. But delivery time matter Kore."
	},
	{
		name: "Mayeen Uddin Hasan",
		role: "Customer",
		quote: "Nice furniture collection, and good customer service."
	},
	{
		name: "Dil Afroz Begum",
		role: "Customer",
		quote: "Good service, staff behaviour and fast delivery."
	},
	{
		name: "Al Mamun",
		role: "Verified Buyer",
		quote: "Product quality was good. And the staffs were very polite. Very recommended."
	},
	{
		name: "SAJIBUR RAHMAN",
		role: "Design Consultation Client",
		quote: "One aspect that truly sets Heaven Furniture apart is their exceptional customer service. The staff members are knowledgeable, friendly, and genuinely invested in helping customers find the perfect furniture."
	},
	{
		name: "Rakibur Rahaman",
		role: "Custom Project Client",
		quote: "Finally got a custom desktop table made from Heaven Mart Furniture. Honestly, now my setup fits perfectly and is comfortable."
	},
	{
		name: "Tarek Aziz",
		role: "Furniture Buyer",
		quote: "I am very satisfied with the furniture I bought from Heaven Furniture. The quality of the furniture is good, the wood is sturdy and the finishing is quite nice. The design is modern and comfortable to use."
	}
];
var featuredNames = /* @__PURE__ */ new Set(["Jefranul Rakib", "SAJIBUR RAHMAN"]);
var featuredReviews = reviews.filter((r) => featuredNames.has(r.name));
var marqueeReviews = [...reviews, ...reviews];
function initials(name) {
	return name.split(" ").filter(Boolean).slice(0, 2).map((p) => p[0].toUpperCase()).join("");
}
function Avatar({ name }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "bg-charcoal text-ivory flex size-11 shrink-0 items-center justify-center rounded-full font-serif text-sm font-semibold",
		children: initials(name)
	});
}
function Stars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-gold flex items-center gap-0.5",
		children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
			className: "size-3.5 fill-current",
			"aria-hidden": "true"
		}, i))
	});
}
function Voices() {
	const marqueeControls = useAnimationControls();
	(0, import_react.useEffect)(() => {
		marqueeControls.start({
			x: ["0%", "-50%"],
			transition: {
				duration: 42,
				ease: "linear",
				repeat: Infinity
			}
		});
	}, [marqueeControls]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-background section-y",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "What Clients Say"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "Heard from the showroom floor"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-5 sm:grid-cols-2",
				children: featuredReviews.map((r, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: i * 90,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border-border bg-card h-full rounded-sm border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-foreground mt-5 text-lg leading-relaxed",
								children: [
									"“",
									r.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-6 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { name: r.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-semibold",
									children: r.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground text-xs",
									children: r.role
								})] })]
							})
						]
					})
				}, r.name))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mt-10 overflow-hidden",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-background pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent sm:w-24" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-background pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent sm:w-24" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					className: "flex w-max gap-4 py-2",
					animate: marqueeControls,
					initial: { x: "0%" },
					onHoverStart: () => marqueeControls.stop(),
					onHoverEnd: () => marqueeControls.start({
						x: ["0%", "-50%"],
						transition: {
							duration: 42,
							ease: "linear",
							repeat: Infinity
						}
					}),
					children: marqueeReviews.map((review, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "border-border bg-card min-w-[280px] max-w-[340px] shrink-0 rounded-sm border p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-foreground/85 mt-3 line-clamp-4 text-sm leading-relaxed",
								children: [
									"“",
									review.quote,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-4 flex items-center gap-2.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, { name: review.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "min-w-0",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "truncate text-xs font-semibold",
										children: review.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground text-[0.7rem]",
										children: review.role
									})]
								})]
							})
						]
					}, `${review.name}-${index}`))
				})
			]
		})]
	});
}
function ShowroomStrip() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm grid items-center gap-12 lg:grid-cols-2 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img("showroom-exterior-storefront-01.webp"),
				alt: "Heaven Furniture Mart showroom storefront on Agrabad Access Road, Chattogram",
				className: "aspect-3/4 w-full rounded-sm object-cover lg:aspect-4/5",
				loading: "lazy"
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				delay: 100,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "The Showroom"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg mt-4",
						children: "See the finish in person"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground mt-6 leading-relaxed",
						children: "Our showroom in Agrabad carries full living, bedroom, dining and storage sets — the fastest way to judge joinery, upholstery and finish is to sit on it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 space-y-4 text-[0.975rem]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
									className: "text-gold mt-0.5 size-5 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.mapsUrl,
									target: "_blank",
									rel: "noreferrer noopener",
									className: "hover:text-gold transition-colors",
									children: company.addressFull
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
									className: "text-gold mt-0.5 size-5 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.phoneHref,
									className: "hover:text-gold transition-colors",
									children: company.phone
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, {
									className: "text-gold mt-0.5 size-5 shrink-0",
									"aria-hidden": true
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Call ahead and we'll keep a consultant free for your visit." })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/showroom",
						className: "border-foreground/25 hover:border-gold hover:text-gold mt-9 inline-flex rounded-sm border px-6 py-3 text-sm font-semibold transition-colors",
						children: "Plan your visit"
					})
				]
			})]
		})
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
function FaqSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-secondary/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Good to know"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4",
					children: "Frequently asked"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 90,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
					type: "single",
					collapsible: true,
					className: "w-full",
					children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
						value: `item-${i}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
							className: "text-left text-base font-semibold",
							children: f.q
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
							className: "text-muted-foreground text-base leading-relaxed",
							children: f.a
						})]
					}, f.q))
				})
			})]
		})
	});
}
/**
* Lightweight pointer-reactive gradient backdrop — no WebGL/three.js dependency,
* just a 2D canvas radial blend in the brand's gold/charcoal-teal tones. Gives
* the "alive" cinematic-layer feel (getlayers.ai style) behind CTA/hero sections
* without the weight of a real 3D scene, which would clash with the brand's
* handcrafted-luxury mood.
*/
function PointerGradient({ className }) {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let raf = 0;
		let width = 0;
		let height = 0;
		let dpr = Math.min(window.devicePixelRatio || 1, 2);
		let targetX = .5;
		let targetY = .4;
		let curX = .5;
		let curY = .4;
		let t = 0;
		const resize = () => {
			const rect = canvas.getBoundingClientRect();
			width = rect.width;
			height = rect.height;
			dpr = Math.min(window.devicePixelRatio || 1, 2);
			canvas.width = Math.max(1, width * dpr);
			canvas.height = Math.max(1, height * dpr);
		};
		const onPointerMove = (e) => {
			const rect = canvas.getBoundingClientRect();
			if (rect.width === 0 || rect.height === 0) return;
			targetX = (e.clientX - rect.left) / rect.width;
			targetY = (e.clientY - rect.top) / rect.height;
		};
		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		const draw = () => {
			t += .0035;
			curX += (targetX - curX) * .04;
			curY += (targetY - curY) * .04;
			const px = (curX + Math.sin(t) * .03) * width;
			const py = (curY + Math.cos(t * .8) * .03) * height;
			ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
			ctx.clearRect(0, 0, width, height);
			const gold = ctx.createRadialGradient(px, py, 0, px, py, Math.max(width, height) * .55);
			gold.addColorStop(0, "rgba(217, 162, 58, 0.35)");
			gold.addColorStop(.5, "rgba(217, 162, 58, 0.08)");
			gold.addColorStop(1, "rgba(217, 162, 58, 0)");
			ctx.fillStyle = gold;
			ctx.fillRect(0, 0, width, height);
			const tealX = width * (1 - curX * .6);
			const tealY = height * (.5 + Math.sin(t * .6) * .2);
			const teal = ctx.createRadialGradient(tealX, tealY, 0, tealX, tealY, Math.max(width, height) * .5);
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
			curX = targetX;
			curY = targetY;
			draw();
		} else raf = requestAnimationFrame(draw);
		return () => {
			cancelAnimationFrame(raf);
			window.removeEventListener("resize", resize);
			window.removeEventListener("pointermove", onPointerMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
		ref: canvasRef,
		"aria-hidden": "true",
		className: cn("pointer-events-none absolute inset-0 size-full", className)
	});
}
function ClosingCta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-charcoal relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: img("dining-01-luxury-dining-set.webp"),
				alt: "Carved luxury dining set in a styled Heaven Furniture Mart showroom interior",
				className: "absolute inset-0 size-full object-cover opacity-20",
				loading: "lazy"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/95 to-charcoal/90 absolute inset-0 bg-gradient-to-r" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PointerGradient, { className: "mix-blend-screen opacity-80" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-hfm relative py-20 text-center md:py-28",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: "Let's begin"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display-lg text-ivory mx-auto mt-4 max-w-3xl",
						children: closing.heading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ivory/75 mx-auto mt-6 max-w-2xl leading-relaxed",
						children: closing.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-10 flex flex-wrap justify-center items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
							to: "/contact",
							className: "inline-flex items-center justify-center bg-gold text-accent-foreground rounded-sm px-7 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90",
							children: "Request a Consultation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: company.phoneHref,
							className: "border-ivory/40 text-ivory hover:border-gold hover:text-gold inline-flex items-center gap-2 rounded-sm border px-7 py-4 text-sm font-semibold tracking-wide transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "size-4",
								"aria-hidden": true
							}), "Call Now"]
						})]
					})
				] })
			})
		]
	});
}
var structuredData = {
	"@context": "https://schema.org",
	"@type": "FurnitureStore",
	name: company.name,
	description,
	telephone: company.phone,
	email: company.email,
	foundingDate: "2020",
	founder: {
		"@type": "Person",
		name: company.founder
	},
	address: {
		"@type": "PostalAddress",
		streetAddress: "Opposite of RAK Ceramics, Agrabad Access Road",
		addressLocality: "Chattogram",
		postalCode: "4217",
		addressCountry: "BD"
	},
	sameAs: [
		company.social.facebook,
		company.social.instagram,
		company.social.youtube
	]
};
var tickerItems = [
	"Chattogram",
	"Bespoke Furniture",
	"Since 2020",
	"Free Consultation",
	"Custom Dimensions",
	"Delivery & Setup",
	"Living · Bedroom · Dining",
	"Office & Study",
	"Space-Saving Solutions",
	"Agrabad Showroom"
];
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("script", {
			type: "application/ld+json",
			dangerouslySetInnerHTML: { __html: JSON.stringify(structuredData) }
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "bg-gold group overflow-hidden py-3 select-none",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex w-max gap-0 group-hover:[animation-play-state:paused]",
				style: { animation: "hfm-ticker 28s linear infinite" },
				children: [...tickerItems, ...tickerItems].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-accent-foreground mx-5 shrink-0 font-serif text-sm font-semibold tracking-[0.18em] uppercase",
					children: [item, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mx-5 opacity-40",
						children: "·"
					})]
				}, i))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collections, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AwardsStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyHeaven, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gallery, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VideoShowcase, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Voices, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShowroomStrip, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingCta, {})
	] });
}
//#endregion
export { Index as component };
