import { n as __toESM } from "../_runtime.mjs";
import { o as motion, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { E as ChevronLeft, T as ChevronRight, a as Search, n as X, v as Images } from "../_libs/lucide-react.mjs";
import { a as catalogueImages, d as lockBodyScroll, g as unlockBodyScroll, r as SiteLayout, t as PageHero, u as img } from "./SiteLayout-91KFfyvO.mjs";
import { r as collections } from "./collections-N2yjn05X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collections-DgnHhtW7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Lightbox({ isOpen, items, startIndex = 0, onClose }) {
	const [index, setIndex] = (0, import_react.useState)(startIndex);
	const closeRef = (0, import_react.useRef)(null);
	const prevActive = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (isOpen) {
			prevActive.current = document.activeElement;
			setIndex(startIndex);
			setTimeout(() => closeRef.current?.focus(), 0);
			lockBodyScroll();
		} else {
			unlockBodyScroll();
			prevActive.current?.focus();
		}
	}, [isOpen, startIndex]);
	(0, import_react.useEffect)(() => {
		return () => {
			unlockBodyScroll();
		};
	}, []);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const onKey = (e) => {
			if (e.key === "Escape") onClose();
			if (e.key === "ArrowLeft") setIndex((i) => Math.max(0, i - 1));
			if (e.key === "ArrowRight") setIndex((i) => Math.min((items?.length ?? 1) - 1, i + 1));
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [
		isOpen,
		items,
		onClose
	]);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const next = items?.[index + 1];
		const prev = items?.[index - 1];
		if (next) new Image().src = next.src;
		if (prev) new Image().src = prev.src;
	}, [
		index,
		isOpen,
		items
	]);
	(0, import_react.useEffect)(() => setIndex(startIndex), [startIndex]);
	const count = items?.length ?? 0;
	const go = (dir) => setIndex((i) => Math.min(Math.max(count - 1, 0), Math.max(0, i + dir)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: isOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
		className: "fixed inset-0 z-50 flex items-center justify-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				onClick: onClose,
				className: "absolute inset-0 bg-black/70",
				initial: { opacity: 0 },
				animate: { opacity: 1 },
				exit: { opacity: 0 }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
				"aria-label": "Close (Esc)",
				ref: closeRef,
				onClick: onClose,
				initial: {
					opacity: 0,
					scale: .9
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .9
				},
				className: "absolute right-4 top-4 z-50 rounded-full bg-charcoal/70 p-3 text-ivory backdrop-blur-sm hover:bg-gold hover:text-charcoal focus:outline-none focus:ring-2 focus:ring-gold",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Previous image",
				onClick: () => go(-1),
				disabled: index === 0,
				"aria-disabled": index === 0,
				className: "absolute left-3 top-1/2 z-50 -translate-y-1/2 rounded-full bg-gradient-to-r from-black/60 via-black/40 to-black/20 p-3 text-white hover:scale-105 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				"aria-label": "Next image",
				onClick: () => go(1),
				disabled: index === count - 1,
				"aria-disabled": index === count - 1,
				className: "absolute right-12 top-1/2 z-50 -translate-y-1/2 rounded-full bg-gradient-to-l from-black/60 via-black/40 to-black/20 p-3 text-white hover:scale-105 disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-white/30",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				role: "dialog",
				"aria-modal": "true",
				"aria-label": items?.[index]?.alt ?? "Image preview",
				onClick: (e) => e.stopPropagation(),
				initial: {
					opacity: 0,
					scale: .96
				},
				animate: {
					opacity: 1,
					scale: 1
				},
				exit: {
					opacity: 0,
					scale: .96
				},
				transition: {
					type: "spring",
					stiffness: 260,
					damping: 22
				},
				className: "relative z-40 max-h-[90vh] max-w-[90vw] p-4",
				drag: "x",
				dragConstraints: {
					left: 0,
					right: 0
				},
				onDragEnd: (_, info) => {
					if (info.offset.x > 100) go(-1);
					else if (info.offset.x < -100) go(1);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
					src: items?.[index]?.src,
					alt: items?.[index]?.alt ?? "",
					className: "max-h-[80vh] w-auto max-w-[90vw] rounded-sm object-contain shadow-2xl",
					initial: {
						opacity: 0,
						y: 6
					},
					animate: {
						opacity: 1,
						y: 0
					},
					exit: {
						opacity: 0,
						y: -6
					},
					transition: { duration: .28 }
				}, items?.[index]?.src), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					"aria-live": "polite",
					"aria-atomic": "true",
					className: "sr-only",
					children: items?.[index] ? `Image ${index + 1} of ${count}: ${String(items[index]?.alt ?? "").replace(/\.[a-z0-9]+$/i, "")}` : ""
				})]
			})
		]
	}, "lightbox") : null });
}
function CollectionsPage() {
	const [selectedSlug, setSelectedSlug] = (0, import_react.useState)("living");
	const [search, setSearch] = (0, import_react.useState)("");
	const selectedCollection = collections.find((collection) => collection.slug === selectedSlug) ?? collections[0];
	const filteredGallery = (0, import_react.useMemo)(() => {
		const query = search.trim().toLowerCase();
		if (!query) return selectedCollection.gallery;
		return selectedCollection.gallery.filter(({ alt }) => alt.toLowerCase().includes(query));
	}, [search, selectedCollection]);
	const collectionOptions = collections.map((collection) => ({
		...collection,
		isActive: collection.slug === selectedCollection.slug
	}));
	const CATALOGUE_PAGE_SIZE = 24;
	const [catalogueVisible, setCatalogueVisible] = (0, import_react.useState)(CATALOGUE_PAGE_SIZE);
	const fullCatalogue = (0, import_react.useMemo)(() => catalogueImages(selectedCollection.slug), [selectedCollection.slug]);
	const [lightbox, setLightbox] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		setCatalogueVisible(CATALOGUE_PAGE_SIZE);
	}, [selectedCollection.slug]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Furniture Categories",
			title: "Premium collections for inspired living",
			intro: "Curated silhouettes, tailored sizes, and enduring finishes — explore the collection that fits your space best.",
			image: img(selectedCollection.cover),
			imageAlt: selectedCollection.coverAlt
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background py-5 sm:py-8 lg:py-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-hfm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
						className: "mb-6 sm:mb-8 lg:mb-0 lg:pr-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-border bg-card sticky top-24 overflow-hidden rounded-md border shadow-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "border-border border-b p-3 sm:p-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Search furniture"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "text-muted-foreground pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "search",
											value: search,
											onChange: (event) => setSearch(event.target.value),
											placeholder: "Search furniture...",
											className: "border-input bg-background text-foreground placeholder:text-muted-foreground w-full rounded-sm border py-2.5 pl-9 pr-3 text-sm outline-none transition-colors focus:border-gold"
										})
									]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "p-3 sm:p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/70 mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] sm:text-xs",
									children: "Collections"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
									"aria-label": "Collection categories",
									className: "space-y-1",
									children: collectionOptions.map((collection) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setSelectedSlug(collection.slug);
											setSearch("");
										},
										className: ["w-full rounded-sm border px-3 py-2.5 text-left text-sm font-medium transition-all duration-200 sm:py-3", collection.isActive ? "border-gold bg-gold/10 text-gold shadow-sm" : "border-transparent bg-transparent text-foreground/80 hover:border-border hover:bg-secondary/60 hover:text-gold"].join(" "),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center justify-between gap-3",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: collection.name }), collection.isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "bg-gold size-2 rounded-full",
												"aria-hidden": "true"
											}) : null]
										})
									}, collection.slug))
								})]
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "border-border bg-card rounded-md border p-4 shadow-sm sm:p-5 lg:p-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex flex-col gap-3 border-b border-border pb-4 sm:pb-5 lg:flex-row lg:items-end lg:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "eyebrow text-[0.7rem] tracking-[0.18em] sm:text-[0.8rem]",
											children: "Curated collection"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "display-lg mt-2 text-[1.9rem] sm:text-[2.3rem] lg:text-[2.7rem]",
											children: selectedCollection.name
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/contact",
											className: "bg-gold text-accent-foreground inline-flex items-center justify-center rounded-sm px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-90",
											children: "Discuss This Design"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex flex-col gap-3 md:mt-5 md:flex-row md:items-center md:justify-between",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-rust font-serif text-base tracking-wide sm:text-lg",
											children: selectedCollection.items
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-muted-foreground text-sm",
											children: [
												filteredGallery.length,
												" ",
												filteredGallery.length === 1 ? "piece" : "pieces"
											]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground mt-4 max-w-3xl leading-relaxed text-sm sm:text-base",
										children: selectedCollection.blurb
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-5 sm:mt-6",
								children: filteredGallery.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4",
									children: filteredGallery.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "group overflow-hidden rounded-md border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "overflow-hidden",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: img(item.file),
												alt: item.alt,
												role: "button",
												tabIndex: 0,
												onKeyDown: (e) => {
													if (e.key === "Enter" || e.key === " ") {
														const items = filteredGallery.map((g) => ({
															src: img(g.file),
															alt: g.alt
														}));
														setLightbox({
															items,
															index
														});
													}
												},
												onClick: () => {
													const items = filteredGallery.map((g) => ({
														src: img(g.file),
														alt: g.alt
													}));
													setLightbox({
														items,
														index
													});
												},
												className: "hover-zoom-img aspect-[4/3] w-full object-cover cursor-pointer",
												loading: "lazy"
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "space-y-2 p-3 sm:p-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-foreground text-[11px] font-semibold uppercase tracking-[0.15em] sm:text-xs",
												children: selectedCollection.name
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-muted-foreground text-sm leading-relaxed",
												children: item.alt
											})]
										})]
									}, `${selectedCollection.slug}-${item.file}-${index}`))
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "border-border bg-card rounded-md border p-6 text-center shadow-sm sm:p-8",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground text-lg font-medium",
										children: "No pieces match your search."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setSearch(""),
										className: "text-gold mt-3 font-medium underline-offset-4 hover:underline",
										children: "Clear search"
									})]
								})
							}),
							fullCatalogue.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 border-t border-border pt-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Images, {
												className: "text-gold size-5",
												"aria-hidden": true
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-lg font-semibold",
												children: [
													"Full ",
													selectedCollection.name,
													" catalogue"
												]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-muted-foreground text-sm",
												children: [
													"(",
													fullCatalogue.length,
													" photos)"
												]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-muted-foreground mt-2 max-w-2xl text-sm leading-relaxed",
										children: "Every piece we've photographed in this category, straight from our own showroom floor — browse the full set below."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6",
										children: fullCatalogue.slice(0, catalogueVisible).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "group aspect-square overflow-hidden rounded-sm bg-secondary/40",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.url,
												alt: `${selectedCollection.name} design, Heaven Furniture Mart catalogue #${index + 1}`,
												onClick: () => setLightbox({
													items: fullCatalogue.map((f) => ({
														src: f.url,
														alt: selectedCollection.name
													})),
													index
												}),
												role: "button",
												tabIndex: 0,
												className: "hover-zoom-img size-full object-cover cursor-pointer",
												loading: "lazy"
											})
										}, item.file))
									}),
									catalogueVisible < fullCatalogue.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "mt-6 flex justify-center",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
											type: "button",
											onClick: () => setCatalogueVisible((v) => Math.min(v + CATALOGUE_PAGE_SIZE, fullCatalogue.length)),
											className: "border-border hover:border-gold hover:text-gold rounded-sm border px-6 py-3 text-sm font-semibold transition-colors",
											children: [
												"Load more (",
												fullCatalogue.length - catalogueVisible,
												" remaining)"
											]
										})
									}) : null
								]
							}) : null
						]
					})]
				})
			})
		}),
		lightbox ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbox, {
			isOpen: !!lightbox,
			items: lightbox.items,
			startIndex: lightbox.index,
			onClose: () => setLightbox(null)
		}) : null
	] });
}
//#endregion
export { CollectionsPage as component };
