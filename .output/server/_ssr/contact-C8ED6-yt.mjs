import { n as __toESM } from "../_runtime.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Instagram, f as MessageCircle, h as Mail, l as Phone, m as MapPin, t as Youtube, w as CircleCheck, x as Facebook } from "../_libs/lucide-react.mjs";
import { c as company, p as ourServices, r as SiteLayout, t as PageHero, u as img } from "./SiteLayout-91KFfyvO.mjs";
import { t as Reveal } from "./Reveal-CkjjARpL.mjs";
import { n as objectType, r as stringType, t as enumType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-C8ED6-yt.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function whatsappLink(payload = {}) {
	const lines = ["Hello Heaven Furniture Mart,", "I would like to discuss a custom furniture project."];
	if (payload.name) lines.push(`Name: ${payload.name}`);
	if (payload.category) lines.push(`Requirement: ${payload.category}`);
	if (payload.method) lines.push(`Preferred contact: ${payload.method}`);
	if (payload.message) lines.push(`Details: ${payload.message}`);
	return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
}
var projectTypes = [
	"New",
	"Custom",
	"Home Interior",
	"Office",
	"Consultation",
	"Other"
];
var categories = [
	"Living",
	"Bedroom",
	"Dining",
	"Office & Study",
	"Custom & Space-Saving"
];
var schema = objectType({
	name: stringType().trim().min(2, "Please enter your name"),
	phone: stringType().trim().min(6, "Please enter a valid phone number").regex(/^[0-9+()\-\s]+$/, "Only digits, spaces and + ( ) - are allowed"),
	projectType: enumType(projectTypes),
	category: enumType(categories),
	message: stringType().trim().max(1e3).optional(),
	method: enumType(["WhatsApp", "Call"])
});
function submitConsultation(values) {
	if (values.method === "WhatsApp") window.open(whatsappLink({
		name: values.name,
		category: values.category,
		method: values.method,
		message: values.message
	}), "_blank", "noopener,noreferrer");
}
var fieldClass = "mt-2 w-full rounded-sm border border-input bg-card px-4 py-3 text-[0.95rem] outline-none transition-colors focus:border-gold";
function ConsultationForm() {
	const [submitted, setSubmitted] = (0, import_react.useState)(null);
	const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
		resolver: u(schema),
		defaultValues: {
			projectType: "Custom",
			category: "Living",
			method: "WhatsApp"
		}
	});
	if (submitted) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-border bg-card rounded-sm border p-9 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, {
				className: "text-gold mx-auto size-10",
				"aria-hidden": true
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-5 text-2xl font-semibold",
				children: "Thank you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-3",
				children: "Your consultation details are ready to send to Heaven Furniture Mart."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mx-auto mt-4 max-w-md text-sm",
				children: submitted.method === "WhatsApp" ? "WhatsApp has opened with your project details already written for you." : "Call us directly and keep your project details nearby so we can help quickly."
			}),
			submitted.method === "WhatsApp" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: whatsappLink({
					name: submitted.name,
					category: submitted.category,
					method: submitted.method,
					message: submitted.message
				}),
				target: "_blank",
				rel: "noreferrer noopener",
				className: "bg-gold text-accent-foreground mt-7 inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
					className: "size-4",
					"aria-hidden": true
				}), "Open WhatsApp again"]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: company.phoneHref,
				className: "bg-gold text-accent-foreground mt-7 inline-flex items-center gap-2 rounded-sm px-6 py-3.5 text-sm font-semibold",
				children: ["Call ", company.phone]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setSubmitted(null),
					className: "text-muted-foreground hover:text-gold text-sm underline underline-offset-4",
					children: "Send another request"
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit: handleSubmit((values) => {
			submitConsultation(values);
			setSubmitted(values);
		}),
		className: "border-border bg-card rounded-sm border p-7 md:p-9",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "name",
							className: "text-sm font-semibold",
							children: ["Name ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-rust",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "name",
							autoComplete: "name",
							className: fieldClass,
							"aria-invalid": !!errors.name,
							"aria-describedby": errors.name ? "name-error" : void 0,
							...register("name")
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "name-error",
							className: "text-destructive mt-1.5 text-xs",
							children: errors.name.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							htmlFor: "phone",
							className: "text-sm font-semibold",
							children: ["Phone ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-rust",
								children: "*"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "phone",
							inputMode: "tel",
							autoComplete: "tel",
							placeholder: "+880 1XXX-XXXXXX",
							className: fieldClass,
							"aria-invalid": !!errors.phone,
							"aria-describedby": errors.phone ? "phone-error" : void 0,
							...register("phone")
						}),
						errors.phone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							id: "phone-error",
							className: "text-destructive mt-1.5 text-xs",
							children: errors.phone.message
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "projectType",
						className: "text-sm font-semibold",
						children: "Project type"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "projectType",
						className: fieldClass,
						...register("projectType"),
						children: projectTypes.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: p }, p))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						htmlFor: "category",
						className: "text-sm font-semibold",
						children: "Furniture category"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
						id: "category",
						className: fieldClass,
						...register("category"),
						children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", { children: c }, c))
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							htmlFor: "message",
							className: "text-sm font-semibold",
							children: "Your idea or requirement"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "message",
							rows: 5,
							className: fieldClass,
							placeholder: "Room size, style you like, timeline…",
							...register("message")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "sm:col-span-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-semibold",
							children: "Preferred contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-3 flex gap-6",
							children: ["WhatsApp", "Call"].map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: "flex items-center gap-2 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: m,
									className: "accent-gold size-4",
									...register("method")
								}), m]
							}, m))
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: isSubmitting,
				className: "bg-gold text-accent-foreground mt-8 w-full rounded-sm px-6 py-4 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90 disabled:opacity-60 sm:w-auto sm:px-10",
				children: "Request a Consultation"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mt-4 text-xs",
				children: "Your details are used only to contact you about this enquiry."
			})
		]
	});
}
function ContactPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Contact",
		title: "Request a Consultation",
		intro: "Tell us about the room and we'll come back with ideas, materials and a plan. Consultations are free.",
		image: img("living-05-beige-tufted-sofa.webp"),
		imageAlt: "Beige tufted sofa crafted by Heaven Furniture Mart"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-y bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultationForm, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
				delay: 100,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-charcoal text-ivory rounded-sm p-8 md:p-10",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-ivory text-xl font-semibold",
							children: "Talk to us directly"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "mt-7 space-y-5 text-sm",
							children: [
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
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, {
										className: "text-gold mt-0.5 size-5 shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: whatsappLink(),
										target: "_blank",
										rel: "noreferrer noopener",
										className: "hover:text-gold transition-colors",
										children: "Message us on WhatsApp"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex gap-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "text-gold mt-0.5 size-5 shrink-0",
										"aria-hidden": true
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: company.emailHref,
										className: "hover:text-gold transition-colors",
										children: company.email
									})]
								}),
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
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border-ivory/15 mt-8 border-t pt-7",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-gold font-serif text-sm tracking-[0.2em] uppercase",
								children: "What's included"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "text-ivory/75 mt-4 space-y-2 text-sm",
								children: ourServices.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["· ", s] }, s))
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
							delay: 200,
							className: "mt-8 flex gap-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.social.facebook,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "Facebook",
									className: "border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Facebook, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.social.instagram,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "Instagram",
									className: "border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Instagram, {
										className: "size-4",
										"aria-hidden": true
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: company.social.youtube,
									target: "_blank",
									rel: "noreferrer noopener",
									"aria-label": "YouTube",
									className: "border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {
										className: "size-4",
										"aria-hidden": true
									})
								})
							]
						})
					]
				})
			})]
		})
	})] });
}
//#endregion
export { ContactPage as component };
