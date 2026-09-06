import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { h as Mail, l as Phone, m as MapPin } from "../_libs/lucide-react.mjs";
import { d as img, i as SiteLayout, l as company, n as PageHero, r as Parallax } from "./SiteLayout-M5p3PCDm.mjs";
import { t as Reveal } from "./Reveal-Bjnxl8w6.mjs";
import { r as collections } from "./collections-N2yjn05X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/showroom-CQTcnru3.js
var import_jsx_runtime = require_jsx_runtime();
var interiorShots = [
	collections[2].gallery[0],
	collections[0].gallery[1],
	collections[4].gallery[0],
	collections[1].gallery[0]
];
function ShowroomPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "The Showroom",
			title: "Agrabad Access Road, Chattogram",
			intro: "Opposite of RAK Ceramics. Sit on the sofas, open the wardrobes, check the joinery — then decide.",
			image: img("showroom-exterior-storefront-01.webp"),
			imageAlt: "Heaven Furniture Mart storefront on Agrabad Access Road, Chattogram"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-background",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
					strength: 24,
					className: "aspect-16/10 rounded-sm",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img("showroom-exterior-storefront-current.webp"),
						alt: "Heaven Furniture Mart's current Agrabad showroom storefront",
						className: "size-full scale-110 object-cover",
						loading: "lazy"
					})
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: 100,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Plan your visit"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "Come see the finish"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-8 space-y-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
										className: "text-gold mt-0.5 size-5 shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.mapsUrl,
										target: "_blank",
										rel: "noreferrer noopener",
										className: "text-muted-foreground hover:text-gold transition-colors",
										children: company.addressFull
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
										className: "text-gold mt-0.5 size-5 shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Phone"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.phoneHref,
										className: "text-muted-foreground hover:text-gold transition-colors",
										children: company.phone
									})] })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "text-gold mt-0.5 size-5 shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-semibold",
										children: "Email"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.emailHref,
										className: "text-muted-foreground hover:text-gold transition-colors",
										children: company.email
									})] })]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-9 flex flex-wrap gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.mapsUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "bg-gold text-accent-foreground rounded-sm px-6 py-3.5 text-sm font-semibold",
								children: "Open in Google Maps"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								className: "border-foreground/25 hover:border-gold hover:text-gold rounded-sm border px-6 py-3.5 text-sm font-semibold transition-colors",
								children: "Book a consultation"
							})]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-y bg-secondary/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow",
							children: "Inside"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display-lg mt-4",
							children: "On the floor right now"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "rule-gold mt-6" })
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: interiorShots.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						delay: i * 70,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
							className: "group overflow-hidden rounded-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: img(s.file),
								alt: s.alt,
								className: "hover-zoom-img aspect-3/4 w-full object-cover",
								loading: "lazy"
							})
						})
					}, s.file))
				})]
			})
		})
	] });
}
//#endregion
export { ShowroomPage as component };
