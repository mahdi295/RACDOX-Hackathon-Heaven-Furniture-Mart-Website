import { o as motion } from "../_libs/framer-motion+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { s as cn } from "./SiteLayout-91KFfyvO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Reveal-CkjjARpL.js
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className, delay = 0, as = "div" }) {
	const MotionTag = motion[as];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionTag, {
		className: cn(className),
		initial: {
			opacity: 0,
			y: 28
		},
		whileInView: {
			opacity: 1,
			y: 0
		},
		viewport: {
			once: true,
			margin: "-80px"
		},
		transition: {
			duration: .6,
			delay: delay / 1e3,
			ease: [
				.21,
				.47,
				.32,
				.98
			]
		},
		children
	});
}
//#endregion
export { Reveal as t };
