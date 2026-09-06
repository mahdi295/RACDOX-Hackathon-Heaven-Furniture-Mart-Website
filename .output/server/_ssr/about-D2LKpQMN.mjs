import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as Quote } from "../_libs/lucide-react.mjs";
import { _ as whyChooseUs, c as company, f as mdQuote, i as aboutBrand, m as scaleAndTrust, r as SiteLayout, t as PageHero, u as img } from "./SiteLayout-91KFfyvO.mjs";
import { t as Reveal } from "./Reveal-CkjjARpL.mjs";
import { a as milestones, i as eventPhotos } from "./collections-N2yjn05X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D2LKpQMN.js
var import_jsx_runtime = require_jsx_runtime();
function Milestones() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y",
		style: { backgroundColor: "#F5F5F5" },
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm grid gap-14 lg:grid-cols-[0.4fr_0.6fr] lg:gap-20 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow text-accent",
					children: "HIGHLIGHTS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display-lg mt-4",
					children: "Milestones"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-9",
					children: milestones.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 200,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "milestones-item flex gap-6 border-b py-5 last:border-b-0 relative",
							style: { "--delay": `${i * 200}ms` },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "milestones-year text-accent w-28 shrink-0 font-serif text-lg",
									style: { color: "#D4A843" },
									children: m.year
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-foreground/90",
									children: m.text
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "milestones-item-line",
									"aria-hidden": true
								})
							]
						})
					}, m.year))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-6 lg:gap-6",
				children: eventPhotos.slice(0, 4).map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
					delay: 110 + i * 200,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
						className: "milestones-figure group overflow-hidden rounded-md shadow-sm relative",
						style: { "--delay": `${110 + i * 200}ms` },
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: img(e.file),
							alt: e.alt,
							className: "hover-zoom-img aspect-4/3 w-full object-cover",
							loading: "lazy"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/30 to-transparent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-sm m-0",
								children: e.caption
							})
						})]
					})
				}, e.file))
			}) })]
		})
	});
}
function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About the Brand",
			title: "A Chattogram workshop with a taste for lasting elegance",
			intro: aboutBrand.body,
			image: img("team-group-photo-exhibition-booth.webp"),
			imageAlt: "The Heaven Furniture Mart team at their exhibition booth"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm grid items-center gap-14 lg:grid-cols-2 lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: img("Abul-Kalam-Bhuiyan-image.webp"),
					alt: "Abul Kalam Bhuiyan, Managing Director of Heaven Furniture Mart",
					className: "aspect-4/5 w-full rounded-sm object-cover",
					loading: "lazy"
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "eyebrow",
							children: ["Founded ", company.founded]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "display-lg mt-4",
							children: ["Built by ", company.founder]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground mt-6 leading-relaxed",
							children: "Heaven Furniture Mart opened its Agrabad showroom in 2021 and has grown into a full home and office furnishing partner — design consultation, craftsmanship, delivery and installation under one roof."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-8 grid gap-3 sm:grid-cols-2",
							children: [...scaleAndTrust, ...whyChooseUs].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-[0.95rem]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "bg-gold mt-2 size-1.5 shrink-0 rounded-full",
									"aria-hidden": true
								}), s]
							}, s))
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-charcoal text-ivory section-y",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-hfm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, {
							className: "text-gold mx-auto size-9",
							"aria-hidden": true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("blockquote", {
							className: "text-ivory/90 mt-6 font-serif text-xl leading-relaxed sm:text-2xl",
							children: mdQuote.quote
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex items-center justify-center gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img("MD-Abul-Kalam-Bhuiyan.webp"),
								alt: "Abul Kalam Bhuiyan, Managing Director",
								className: "ring-gold/40 size-14 shrink-0 rounded-full object-cover ring-2",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-left",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-ivory font-semibold",
									children: mdQuote.author
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-gold font-serif text-sm tracking-widest uppercase",
									children: mdQuote.role
								})]
							})]
						})
					]
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Milestones, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-secondary/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Fairs, awards & community"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "Where you've seen us"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: eventPhotos.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 60,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "group overflow-hidden rounded-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(e.file),
								alt: e.alt,
								className: "hover-zoom-img aspect-4/3 w-full object-cover",
								loading: "lazy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
								className: "text-muted-foreground mt-2 text-sm",
								children: e.caption
							})]
						})
					}, e.file))
				})]
			})
		})
	] });
}
//#endregion
export { AboutPage as component };
