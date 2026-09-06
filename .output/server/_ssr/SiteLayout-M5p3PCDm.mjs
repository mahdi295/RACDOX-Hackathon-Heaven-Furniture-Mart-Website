import { n as __toESM } from "../_runtime.mjs";
import { a as useScroll, i as useMotionValue, n as useSpring, o as motion, r as useTransform, s as AnimatePresence } from "../_libs/framer-motion+[...].mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Instagram, h as Mail, l as Phone, m as MapPin, n as X, p as Menu, t as Youtube, x as Facebook } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteLayout-M5p3PCDm.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var modules = /* #__PURE__ */ Object.assign({
	"../assets/images/bedroom/bedroom-01-luxury-carved-bed.webp": "/assets/bedroom-01-luxury-carved-bed-Mn_JHb0E.webp",
	"../assets/images/bedroom/bedroom-02-emerald-modern-bed.webp": "/assets/bedroom-02-emerald-modern-bed--Ixa0HWo.webp",
	"../assets/images/bedroom/bedroom-03-carved-blue-bed.webp": "/assets/bedroom-03-carved-blue-bed-Dijs00XD.webp",
	"../assets/images/bedroom/bedroom-04-emerald-gold-bed.webp": "/assets/bedroom-04-emerald-gold-bed-jijXqMhr.webp",
	"../assets/images/bedroom/bedroom-05-white-modern-bedroom.webp": "/assets/bedroom-05-white-modern-bedroom-CwZeHqj9.webp",
	"../assets/images/bedroom/bedroom-06-teal-tufted-headboard.webp": "/assets/bedroom-06-teal-tufted-headboard-BekFmeBe.webp",
	"../assets/images/bedroom/bedroom-07-carved-wood-blue-linen.webp": "/assets/bedroom-07-carved-wood-blue-linen-BXtvgnDb.webp",
	"../assets/images/bedroom/bedroom-08-oval-tufted-headboard-detail.webp": "/assets/bedroom-08-oval-tufted-headboard-detail-Cb8R0Uss.webp",
	"../assets/images/bedroom/catalogue/Bed_001.webp": "/assets/Bed_001-VL3nF3Pz.webp",
	"../assets/images/bedroom/catalogue/Bed_002.webp": "/assets/Bed_002-CH8jYrIm.webp",
	"../assets/images/bedroom/catalogue/Bed_003.webp": "/assets/Bed_003-7WwVtk5X.webp",
	"../assets/images/bedroom/catalogue/Bed_004.webp": "/assets/Bed_004-C1mPBkw0.webp",
	"../assets/images/bedroom/catalogue/Bed_005.webp": "/assets/Bed_005-DyH8wwnA.webp",
	"../assets/images/bedroom/catalogue/Bed_006.webp": "/assets/Bed_006-BAvRJXJN.webp",
	"../assets/images/bedroom/catalogue/Bed_007.webp": "/assets/Bed_007-ACsC9J6R.webp",
	"../assets/images/bedroom/catalogue/Bed_008.webp": "/assets/Bed_008-DPl5Wb2n.webp",
	"../assets/images/bedroom/catalogue/Bed_009.webp": "/assets/Bed_009-BnQ7e1yp.webp",
	"../assets/images/bedroom/catalogue/Bed_010.webp": "/assets/Bed_010-2KPrD9bs.webp",
	"../assets/images/bedroom/catalogue/Bed_011.webp": "/assets/Bed_011-CR657bV2.webp",
	"../assets/images/bedroom/catalogue/Bed_012.webp": "/assets/Bed_012-eNlgb4ca.webp",
	"../assets/images/bedroom/catalogue/Bed_013.webp": "/assets/Bed_013-BDmrRRRy.webp",
	"../assets/images/bedroom/catalogue/Bed_014.webp": "/assets/Bed_014-C0j70a7j.webp",
	"../assets/images/bedroom/catalogue/Bed_015.webp": "/assets/Bed_015-CsKpDtsA.webp",
	"../assets/images/bedroom/catalogue/Bed_016.webp": "/assets/Bed_016-DyV4EHzg.webp",
	"../assets/images/bedroom/catalogue/Bed_017.webp": "/assets/Bed_017-D-OoBfHy.webp",
	"../assets/images/bedroom/catalogue/Bed_018.webp": "/assets/Bed_018-BvgAjKFh.webp",
	"../assets/images/bedroom/catalogue/Bed_019.webp": "/assets/Bed_019-CTDYvTgQ.webp",
	"../assets/images/bedroom/catalogue/Bed_020.webp": "/assets/Bed_017-D-OoBfHy.webp",
	"../assets/images/bedroom/catalogue/Bed_021.webp": "/assets/Bed_021-ep86Kgw6.webp",
	"../assets/images/bedroom/catalogue/Bed_022.webp": "/assets/Bed_022-BvM3QHF6.webp",
	"../assets/images/bedroom/catalogue/Bed_023.webp": "/assets/Bed_023-BjeMkbs_.webp",
	"../assets/images/bedroom/catalogue/Bed_024.webp": "/assets/Bed_024-C6Vjv0LE.webp",
	"../assets/images/bedroom/catalogue/Bed_025.webp": "/assets/Bed_025-DI6GOBTN.webp",
	"../assets/images/bedroom/catalogue/Bed_026.webp": "/assets/Bed_003-7WwVtk5X.webp",
	"../assets/images/bedroom/catalogue/Bed_027.webp": "/assets/Bed_027-DLzZ44O5.webp",
	"../assets/images/bedroom/catalogue/Bed_028.webp": "/assets/Bed_028-DiDOvhfA.webp",
	"../assets/images/bedroom/catalogue/Bed_029.webp": "/assets/Bed_029-CBx1vaMU.webp",
	"../assets/images/bedroom/catalogue/Bed_030.webp": "/assets/Bed_030-D4hde4Nb.webp",
	"../assets/images/bedroom/catalogue/Bed_031.webp": "/assets/Bed_003-7WwVtk5X.webp",
	"../assets/images/bedroom/catalogue/Bed_032.webp": "/assets/Bed_032-CaU9aEVC.webp",
	"../assets/images/bedroom/catalogue/Bed_033.webp": "/assets/Bed_003-7WwVtk5X.webp",
	"../assets/images/bedroom/catalogue/Bed_034.webp": "/assets/Bed_004-C1mPBkw0.webp",
	"../assets/images/bedroom/catalogue/Bed_035.webp": "/assets/Bed_035-DWztepm2.webp",
	"../assets/images/bedroom/catalogue/Bed_036.webp": "/assets/Bed_036-qoG2dCeQ.webp",
	"../assets/images/bedroom/catalogue/Bed_037.webp": "/assets/Bed_004-C1mPBkw0.webp",
	"../assets/images/bedroom/catalogue/Bed_038.webp": "/assets/Bed_038-DA4kACW-.webp",
	"../assets/images/bedroom/catalogue/Bed_039.webp": "/assets/Bed_039-CURmqxRi.webp",
	"../assets/images/bedroom/catalogue/Bed_040.webp": "/assets/Bed_040-C4wpP2Md.webp",
	"../assets/images/bedroom/catalogue/Bed_041.webp": "/assets/Bed_041-D23N5y4T.webp",
	"../assets/images/bedroom/catalogue/Bed_042.webp": "/assets/Bed_042-WFqXAI9c.webp",
	"../assets/images/bedroom/catalogue/Bed_043.webp": "/assets/Bed_043-DV5Pn69u.webp",
	"../assets/images/bedroom/catalogue/Bed_044.webp": "/assets/Bed_044-D5RZniA0.webp",
	"../assets/images/bedroom/catalogue/Bed_045.webp": "/assets/Bed_044-D5RZniA0.webp",
	"../assets/images/bedroom/catalogue/Bed_046.webp": "/assets/Bed_046-CEc0fqyn.webp",
	"../assets/images/bedroom/catalogue/Bed_047.webp": "/assets/Bed_047-DH1QpxDO.webp",
	"../assets/images/bedroom/catalogue/Bed_048.webp": "/assets/Bed_048-BfU7evu_.webp",
	"../assets/images/bedroom/catalogue/Bed_049.webp": "/assets/Bed_049-BkRSDbj4.webp",
	"../assets/images/bedroom/catalogue/Bed_050.webp": "/assets/Bed_050-COCcaYe1.webp",
	"../assets/images/bedroom/catalogue/Bed_051.webp": "/assets/Bed_051-BrLQy4H0.webp",
	"../assets/images/bedroom/catalogue/Bed_052.webp": "/assets/Bed_011-CR657bV2.webp",
	"../assets/images/bedroom/catalogue/Bed_053.webp": "/assets/Bed_053-VatUpcEi.webp",
	"../assets/images/bedroom/catalogue/Bed_054.webp": "/assets/Bed_054-CNWkJsof.webp",
	"../assets/images/bedroom/catalogue/Bed_055.webp": "/assets/Bed_051-BrLQy4H0.webp",
	"../assets/images/bedroom/catalogue/Bed_056.webp": "/assets/Bed_011-CR657bV2.webp",
	"../assets/images/bedroom/catalogue/Bed_057.webp": "/assets/Bed_014-C0j70a7j.webp",
	"../assets/images/bedroom/catalogue/Bed_058.webp": "/assets/Bed_058-r62qpF2i.webp",
	"../assets/images/bedroom/catalogue/Bed_059.webp": "/assets/Bed_059-CFREsQvN.webp",
	"../assets/images/bedroom/catalogue/Bed_060.webp": "/assets/Bed_050-COCcaYe1.webp",
	"../assets/images/bedroom/catalogue/Bed_061.webp": "/assets/Bed_061-CdzwC-ww.webp",
	"../assets/images/bedroom/catalogue/Bed_062.webp": "/assets/Bed_062-Cqabl9GJ.webp",
	"../assets/images/bedroom/catalogue/Bed_063.webp": "/assets/Bed_063-BkmFiOa8.webp",
	"../assets/images/bedroom/catalogue/Bed_064.webp": "/assets/Bed_064-DN55MU1l.webp",
	"../assets/images/bedroom/catalogue/Bed_065.webp": "/assets/Bed_065-pla7qaAj.webp",
	"../assets/images/bedroom/catalogue/Bed_066.webp": "/assets/Bed_066-B2Korboi.webp",
	"../assets/images/bedroom/catalogue/Bed_067.webp": "/assets/Bed_067-D4AbZZUW.webp",
	"../assets/images/bedroom/catalogue/Bed_068.webp": "/assets/Bed_068-DkuvdNVM.webp",
	"../assets/images/bedroom/catalogue/Bed_069.webp": "/assets/Bed_069-sG1060Lr.webp",
	"../assets/images/bedroom/catalogue/Bed_070.webp": "/assets/Bed_070-BSHn8ADK.webp",
	"../assets/images/bedroom/catalogue/Bed_071.webp": "/assets/Bed_071-CQtHxJMs.webp",
	"../assets/images/bedroom/catalogue/Bed_072.webp": "/assets/Bed_072-CASUrjnv.webp",
	"../assets/images/bedroom/catalogue/Bed_073.webp": "/assets/Bed_073-kVSB_Rpo.webp",
	"../assets/images/bedroom/catalogue/Bed_074.webp": "/assets/Bed_074-D41mGZyd.webp",
	"../assets/images/bedroom/catalogue/Bed_075.webp": "/assets/Bed_075-CKXpY7z9.webp",
	"../assets/images/bedroom/catalogue/Bed_076.webp": "/assets/Bed_076-D-GQ_wOM.webp",
	"../assets/images/bedroom/catalogue/Bed_077.webp": "/assets/Bed_077-tvL0rtco.webp",
	"../assets/images/bedroom/catalogue/Bed_078.webp": "/assets/Bed_078-BpiBoDO5.webp",
	"../assets/images/bedroom/catalogue/Bed_079.webp": "/assets/Bed_079-gUJXa1nh.webp",
	"../assets/images/bedroom/catalogue/Bed_080.webp": "/assets/Bed_080-Dw1cdGVQ.webp",
	"../assets/images/bedroom/catalogue/Bed_081.webp": "/assets/Bed_081-iUKZmI6J.webp",
	"../assets/images/bedroom/catalogue/Bed_082.webp": "/assets/Bed_082-27DdIfvX.webp",
	"../assets/images/bedroom/catalogue/Bed_083.webp": "/assets/Bed_083-Bd9oV4D0.webp",
	"../assets/images/bedroom/catalogue/Bed_084.webp": "/assets/Bed_084-CRd7dOUv.webp",
	"../assets/images/bedroom/catalogue/Bed_085.webp": "/assets/Bed_085-BPy_qptd.webp",
	"../assets/images/bedroom/catalogue/Bed_086.webp": "/assets/Bed_086-B94FyDPT.webp",
	"../assets/images/bedroom/catalogue/Bed_087.webp": "/assets/Bed_087-BeYFJlQe.webp",
	"../assets/images/bedroom/catalogue/Bed_088.webp": "/assets/Bed_088-b1Yuahyy.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_001.webp": "/assets/Dressing_Table_001-D4YNf8Fw.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_002.webp": "/assets/Dressing_Table_002-CfeIuKV3.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_003.webp": "/assets/Dressing_Table_003-CYv2RKH-.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_004.webp": "/assets/Dressing_Table_004-D5TT1T56.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_005.webp": "/assets/Dressing_Table_005-Dyr3XT97.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_006.webp": "/assets/Dressing_Table_006-mbvehnfb.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_007.webp": "/assets/Dressing_Table_007-DDRPCSEA.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_008.webp": "/assets/Dressing_Table_007-DDRPCSEA.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_009.webp": "/assets/Dressing_Table_009-CdE3sUlK.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_010.webp": "/assets/Dressing_Table_010-D4TrrNf5.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_011.webp": "/assets/Dressing_Table_002-CfeIuKV3.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_012.webp": "/assets/Dressing_Table_012-GDg_lFG_.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_013.webp": "/assets/Dressing_Table_013-B1IEhR3Q.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_014.webp": "/assets/Dressing_Table_014-B1QNqmDj.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_015.webp": "/assets/Dressing_Table_014-B1QNqmDj.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_016.webp": "/assets/Dressing_Table_016-D5KhDI0a.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_017.webp": "/assets/Dressing_Table_017-4WvaBaYW.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_018.webp": "/assets/Dressing_Table_018-gc6sck5C.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_019.webp": "/assets/Dressing_Table_019-DjkX-WnE.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_020.webp": "/assets/Dressing_Table_018-gc6sck5C.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_021.webp": "/assets/Dressing_Table_021-BqwbPMC-.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_022.webp": "/assets/Dressing_Table_021-BqwbPMC-.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_023.webp": "/assets/Dressing_Table_023-D1deJs1V.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_024.webp": "/assets/Dressing_Table_019-DjkX-WnE.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_025.webp": "/assets/Dressing_Table_025-DmL9o31v.webp",
	"../assets/images/bedroom/catalogue/Dressing_Table_026.webp": "/assets/Dressing_Table_026-czbhp_Xn.webp",
	"../assets/images/brand/Abul-Kalam-Bhuiyan-image.webp": "/assets/Abul-Kalam-Bhuiyan-image-DM749X_6.webp",
	"../assets/images/brand/MD-Abul-Kalam-Bhuiyan.webp": "/assets/MD-Abul-Kalam-Bhuiyan-CBnOw_fv.webp",
	"../assets/images/brand/cover-hero-moodboard-01.webp": "/assets/cover-hero-moodboard-01-DmwUEqKR.webp",
	"../assets/images/brand/cover-hero-moodboard-02.webp": "/assets/cover-hero-moodboard-02-Bw82bV4k.webp",
	"../assets/images/brand/cover-hero-moodboard-03.webp": "/assets/cover-hero-moodboard-03-BVEroznj.webp",
	"../assets/images/brand/craft-01-hand-carving-detail.webp": "/assets/craft-01-hand-carving-detail-BOckSqbc.webp",
	"../assets/images/brand/craft-02-chisel-shavings.webp": "/assets/craft-02-chisel-shavings-BOj7oBEw.webp",
	"../assets/images/brand/craft-03-hand-plane-workshop.webp": "/assets/craft-03-hand-plane-workshop-CuTyXC4h.webp",
	"../assets/images/brand/craft-04-drawknife-shaping.webp": "/assets/craft-04-drawknife-shaping-BO73OzTA.webp",
	"../assets/images/brand/event-award-recognition-ceremony.webp": "/assets/event-award-recognition-ceremony-VSUIU62S.webp",
	"../assets/images/brand/event-chattogram-furniture-fair-2024-01.webp": "/assets/event-chattogram-furniture-fair-2024-01-C0ckddik.webp",
	"../assets/images/brand/event-chattogram-furniture-fair-2024-02.webp": "/assets/event-chattogram-furniture-fair-2024-02-CnFoOOXK.webp",
	"../assets/images/brand/event-chattogram-furniture-fair-2024-04.webp": "/assets/event-chattogram-furniture-fair-2024-04-RWI8GB3t.webp",
	"../assets/images/brand/event-iiuc-cse-fest-sponsor-01.webp": "/assets/event-iiuc-cse-fest-sponsor-01-DaFFKGuO.webp",
	"../assets/images/brand/event-iiuc-cse-fest-sponsor-02.webp": "/assets/event-iiuc-cse-fest-sponsor-02-CyU7VChi.webp",
	"../assets/images/brand/event-iiuc-cse-fest-sponsor-03.webp": "/assets/event-iiuc-cse-fest-sponsor-03-DNYAuxh4.webp",
	"../assets/images/brand/fytobyte-00-overview.webp": "/assets/fytobyte-00-overview-BfIHpyKY.webp",
	"../assets/images/brand/fytobyte-01-director-office.webp": "/assets/Office_Furniture_012-3ZlsYQfT.webp",
	"../assets/images/brand/fytobyte-02-podcast-room.webp": "/assets/Office_Furniture_013-DZKY7S4s.webp",
	"../assets/images/brand/fytobyte-03-reception.webp": "/assets/Office_Furniture_011-D_YUsSnG.webp",
	"../assets/images/brand/fytobyte-04-workstation.webp": "/assets/Office_Furniture_010-FnzFzGkG.webp",
	"../assets/images/brand/logo-mark-light.webp": "/assets/logo-mark-light-C74GkGDm.webp",
	"../assets/images/brand/logo-transparent-official.webp": "/assets/logo-transparent-official-Bd5vnpwj.webp",
	"../assets/images/brand/profile-picture-square.webp": "/assets/profile-picture-square-BcCvn-bF.webp",
	"../assets/images/brand/review-rakibur-rahaman-5star-bengali.webp": "/assets/review-rakibur-rahaman-5star-bengali-BG-MQ9JU.webp",
	"../assets/images/brand/showroom-exterior-storefront-01.webp": "/assets/showroom-exterior-storefront-01-01UeyrtV.webp",
	"../assets/images/brand/showroom-exterior-storefront-current.webp": "/assets/showroom-exterior-storefront-current-DHavlWoi.webp",
	"../assets/images/brand/team-group-photo-exhibition-booth.webp": "/assets/team-group-photo-exhibition-booth-BEF5Biy7.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_001.webp": "/assets/Showcase_Cabinet_001-BVdrcEm4.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_002.webp": "/assets/Showcase_Cabinet_002-CCe-VVYx.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_003.webp": "/assets/Showcase_Cabinet_003-BQPoqEy4.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_004.webp": "/assets/Showcase_Cabinet_004-Buht7c3-.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_005.webp": "/assets/Showcase_Cabinet_005-CM79vm6P.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_006.webp": "/assets/Showcase_Cabinet_006-CLtSnllV.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_007.webp": "/assets/Showcase_Cabinet_007-BNi-aCsM.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_008.webp": "/assets/Showcase_Cabinet_008-BeIuRsE8.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_009.webp": "/assets/Showcase_Cabinet_009-DOWQUJbI.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_010.webp": "/assets/Showcase_Cabinet_010-CkKqpfX7.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_011.webp": "/assets/Showcase_Cabinet_011-BZqm7d1u.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_012.webp": "/assets/Showcase_Cabinet_012-C3__RLUs.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_013.webp": "/assets/Showcase_Cabinet_013-B38lW8Bt.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_014.webp": "/assets/Showcase_Cabinet_002-CCe-VVYx.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_015.webp": "/assets/Showcase_Cabinet_015-CqH5C7SC.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_016.webp": "/assets/Showcase_Cabinet_002-CCe-VVYx.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_017.webp": "/assets/Showcase_Cabinet_002-CCe-VVYx.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_018.webp": "/assets/Showcase_Cabinet_018-IAPBovIX.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_019.webp": "/assets/Showcase_Cabinet_019-BtZezG8k.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_020.webp": "/assets/Showcase_Cabinet_020-_cJFvz_H.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_021.webp": "/assets/Showcase_Cabinet_021-DXgE60Fs.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_022.webp": "/assets/Showcase_Cabinet_022-DzS8LnGm.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_023.webp": "/assets/Showcase_Cabinet_023-DJ76OgHe.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_024.webp": "/assets/Showcase_Cabinet_024-877KjuAh.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_025.webp": "/assets/Showcase_Cabinet_025-B5_iuOvO.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_026.webp": "/assets/Showcase_Cabinet_026-9AjSLd0X.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_027.webp": "/assets/Showcase_Cabinet_023-DJ76OgHe.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_028.webp": "/assets/Showcase_Cabinet_028-DGSGrm8z.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_029.webp": "/assets/Showcase_Cabinet_029-2U0IXX9K.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_030.webp": "/assets/Showcase_Cabinet_022-DzS8LnGm.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_031.webp": "/assets/Showcase_Cabinet_024-877KjuAh.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_032.webp": "/assets/Showcase_Cabinet_032-DVQ7PUnf.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_033.webp": "/assets/Showcase_Cabinet_033-D3JzZqvJ.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_034.webp": "/assets/Showcase_Cabinet_034-D0sEiT2T.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_035.webp": "/assets/Wardrobe_033-CoGp8xIN.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_036.webp": "/assets/Showcase_Cabinet_001-BVdrcEm4.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_037.webp": "/assets/Showcase_Cabinet_029-2U0IXX9K.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_038.webp": "/assets/Showcase_Cabinet_038-CPkUxH0U.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_039.webp": "/assets/Showcase_Cabinet_039-BQnJzMEn.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_040.webp": "/assets/Showcase_Cabinet_040-DaSbbiOr.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_041.webp": "/assets/Showcase_Cabinet_041-CRLLtBrU.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_042.webp": "/assets/Showcase_Cabinet_042-CrDEY8Qj.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_043.webp": "/assets/Showcase_Cabinet_043-EV3aJZcG.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_044.webp": "/assets/Showcase_Cabinet_044-C_xXSL10.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_045.webp": "/assets/Showcase_Cabinet_045-v_1BLXZl.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_046.webp": "/assets/Showcase_Cabinet_046-B60BU-tb.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_047.webp": "/assets/Showcase_Cabinet_047-wqCXYyi3.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_048.webp": "/assets/Showcase_Cabinet_048-NIYelBqG.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_049.webp": "/assets/Showcase_Cabinet_049-CHS-b9ai.webp",
	"../assets/images/custom/catalogue/Showcase_Cabinet_050.webp": "/assets/Showcase_Cabinet_050-B8BjLa0F.webp",
	"../assets/images/custom/catalogue/Table_001.webp": "/assets/Table_001-DUSKBFOO.webp",
	"../assets/images/custom/catalogue/Table_002.webp": "/assets/Table_002-FjuORPCu.webp",
	"../assets/images/custom/catalogue/Table_003.webp": "/assets/Table_003-tOn5hUUv.webp",
	"../assets/images/custom/catalogue/Table_004.webp": "/assets/Table_004-Ooxu5GRk.webp",
	"../assets/images/custom/catalogue/Table_005.webp": "/assets/Table_005-I_pRD9z9.webp",
	"../assets/images/custom/catalogue/Table_006.webp": "/assets/Table_006-C04Lx5NK.webp",
	"../assets/images/custom/catalogue/Table_007.webp": "/assets/Table_007-BJpcFwZY.webp",
	"../assets/images/custom/catalogue/Table_008.webp": "/assets/Table_008-BXZukKZw.webp",
	"../assets/images/custom/catalogue/Table_009.webp": "/assets/Table_009-CTj8Hc_1.webp",
	"../assets/images/custom/catalogue/Table_010.webp": "/assets/Table_010-C0u9leVV.webp",
	"../assets/images/custom/catalogue/Table_011.webp": "/assets/Table_011-BDdAqZar.webp",
	"../assets/images/custom/catalogue/Table_012.webp": "/assets/Table_012-BGxOmhXO.webp",
	"../assets/images/custom/catalogue/Table_013.webp": "/assets/Table_013-BCvSSR0g.webp",
	"../assets/images/custom/catalogue/Table_014.webp": "/assets/Table_014-CCt4jbbp.webp",
	"../assets/images/custom/catalogue/Table_015.webp": "/assets/Table_015-Bbyyvd9C.webp",
	"../assets/images/custom/catalogue/Table_016.webp": "/assets/Table_016-ViQhkGyH.webp",
	"../assets/images/custom/catalogue/Table_017.webp": "/assets/Table_017-UgIi7Gm-.webp",
	"../assets/images/custom/catalogue/Table_018.webp": "/assets/Table_018-CYWybgx8.webp",
	"../assets/images/custom/catalogue/Table_019.webp": "/assets/Table_019-keBxq9ZT.webp",
	"../assets/images/custom/catalogue/Table_020.webp": "/assets/Table_020-BM-a0KuC.webp",
	"../assets/images/custom/catalogue/Table_021.webp": "/assets/Table_021-RxoNH0tg.webp",
	"../assets/images/custom/catalogue/Table_022.webp": "/assets/Table_022-CDy1N3fS.webp",
	"../assets/images/custom/catalogue/Table_023.webp": "/assets/Table_023-CUxibFUC.webp",
	"../assets/images/custom/catalogue/Table_024.webp": "/assets/Table_024-g-7QWBw_.webp",
	"../assets/images/custom/catalogue/Table_025.webp": "/assets/Table_025-R_6sHnPd.webp",
	"../assets/images/custom/catalogue/Table_026.webp": "/assets/Table_026-xxg8qmg5.webp",
	"../assets/images/custom/catalogue/Table_027.webp": "/assets/Table_027-DEL8G7ng.webp",
	"../assets/images/custom/catalogue/Wardrobe_001.webp": "/assets/Wardrobe_001-vN56HQ8I.webp",
	"../assets/images/custom/catalogue/Wardrobe_002.webp": "/assets/Wardrobe_002-CQ6kDatk.webp",
	"../assets/images/custom/catalogue/Wardrobe_003.webp": "/assets/Wardrobe_003-DR1StpaZ.webp",
	"../assets/images/custom/catalogue/Wardrobe_004.webp": "/assets/Wardrobe_004-D8bSe-nM.webp",
	"../assets/images/custom/catalogue/Wardrobe_005.webp": "/assets/Wardrobe_005-WCmsV0IZ.webp",
	"../assets/images/custom/catalogue/Wardrobe_006.webp": "/assets/Wardrobe_006-D5lEqJES.webp",
	"../assets/images/custom/catalogue/Wardrobe_007.webp": "/assets/Wardrobe_007-CWkFrF1u.webp",
	"../assets/images/custom/catalogue/Wardrobe_008.webp": "/assets/Wardrobe_008-CFtLg6mJ.webp",
	"../assets/images/custom/catalogue/Wardrobe_009.webp": "/assets/Wardrobe_009-CnYTaePP.webp",
	"../assets/images/custom/catalogue/Wardrobe_010.webp": "/assets/Wardrobe_010-B7wAoH9h.webp",
	"../assets/images/custom/catalogue/Wardrobe_011.webp": "/assets/Wardrobe_004-D8bSe-nM.webp",
	"../assets/images/custom/catalogue/Wardrobe_012.webp": "/assets/Wardrobe_012-CjjTPWU1.webp",
	"../assets/images/custom/catalogue/Wardrobe_013.webp": "/assets/Wardrobe_012-CjjTPWU1.webp",
	"../assets/images/custom/catalogue/Wardrobe_014.webp": "/assets/Wardrobe_014-DmXL4XQG.webp",
	"../assets/images/custom/catalogue/Wardrobe_015.webp": "/assets/Wardrobe_015-DRBojHvX.webp",
	"../assets/images/custom/catalogue/Wardrobe_016.webp": "/assets/Wardrobe_016-AN25lgzJ.webp",
	"../assets/images/custom/catalogue/Wardrobe_017.webp": "/assets/Wardrobe_017-CIzGhqNv.webp",
	"../assets/images/custom/catalogue/Wardrobe_018.webp": "/assets/Wardrobe_018-BeM_a7kR.webp",
	"../assets/images/custom/catalogue/Wardrobe_019.webp": "/assets/Wardrobe_019-DDsndyyv.webp",
	"../assets/images/custom/catalogue/Wardrobe_020.webp": "/assets/Wardrobe_020-IcZFUekx.webp",
	"../assets/images/custom/catalogue/Wardrobe_021.webp": "/assets/Wardrobe_021-UrvNIa-c.webp",
	"../assets/images/custom/catalogue/Wardrobe_022.webp": "/assets/Wardrobe_022-Bs9XqSWR.webp",
	"../assets/images/custom/catalogue/Wardrobe_023.webp": "/assets/Wardrobe_023-B3PL3Ib4.webp",
	"../assets/images/custom/catalogue/Wardrobe_024.webp": "/assets/Wardrobe_024-BeW6wPRm.webp",
	"../assets/images/custom/catalogue/Wardrobe_025.webp": "/assets/Wardrobe_025-BDhbtXc4.webp",
	"../assets/images/custom/catalogue/Wardrobe_026.webp": "/assets/Wardrobe_026-CWgPeDOt.webp",
	"../assets/images/custom/catalogue/Wardrobe_027.webp": "/assets/Wardrobe_022-Bs9XqSWR.webp",
	"../assets/images/custom/catalogue/Wardrobe_028.webp": "/assets/Wardrobe_028-DxFYj3K4.webp",
	"../assets/images/custom/catalogue/Wardrobe_029.webp": "/assets/Wardrobe_029-CkBN48MF.webp",
	"../assets/images/custom/catalogue/Wardrobe_030.webp": "/assets/Wardrobe_030-B1fcnYWx.webp",
	"../assets/images/custom/catalogue/Wardrobe_031.webp": "/assets/Wardrobe_031-BMxKxYgE.webp",
	"../assets/images/custom/catalogue/Wardrobe_032.webp": "/assets/Wardrobe_032-DxHVztqo.webp",
	"../assets/images/custom/catalogue/Wardrobe_033.webp": "/assets/Wardrobe_033-CoGp8xIN.webp",
	"../assets/images/custom/catalogue/Wardrobe_034.webp": "/assets/Wardrobe_034-aCIjvHo3.webp",
	"../assets/images/custom/catalogue/Wardrobe_035.webp": "/assets/Wardrobe_001-vN56HQ8I.webp",
	"../assets/images/custom/catalogue/Wardrobe_036.webp": "/assets/Wardrobe_036-BOZA0pIi.webp",
	"../assets/images/custom/catalogue/Wardrobe_037.webp": "/assets/Wardrobe_037-V0CXE2GY.webp",
	"../assets/images/custom/catalogue/Wardrobe_038.webp": "/assets/Wardrobe_038-JGoKbHfp.webp",
	"../assets/images/custom/catalogue/Wardrobe_039.webp": "/assets/Wardrobe_030-B1fcnYWx.webp",
	"../assets/images/custom/catalogue/Wardrobe_040.webp": "/assets/Wardrobe_036-BOZA0pIi.webp",
	"../assets/images/custom/catalogue/Wardrobe_041.webp": "/assets/Wardrobe_041-D2UsPFsH.webp",
	"../assets/images/custom/catalogue/Wardrobe_042.webp": "/assets/Wardrobe_042-A4b2e0l4.webp",
	"../assets/images/custom/catalogue/Wardrobe_043.webp": "/assets/Wardrobe_043-BJRS9TVl.webp",
	"../assets/images/custom/catalogue/Wardrobe_044.webp": "/assets/Wardrobe_002-CQ6kDatk.webp",
	"../assets/images/custom/catalogue/Wardrobe_045.webp": "/assets/Wardrobe_045-CJYCFy0u.webp",
	"../assets/images/custom/catalogue/Wardrobe_046.webp": "/assets/Wardrobe_046-bL_OZrni.webp",
	"../assets/images/custom/catalogue/Wardrobe_047.webp": "/assets/Wardrobe_047-pMnElkS5.webp",
	"../assets/images/custom/catalogue/Wardrobe_048.webp": "/assets/Wardrobe_026-CWgPeDOt.webp",
	"../assets/images/custom/catalogue/Wardrobe_049.webp": "/assets/Wardrobe_049-CTccAn6b.webp",
	"../assets/images/custom/catalogue/Wardrobe_050.webp": "/assets/Wardrobe_050-DwMZTQjF.webp",
	"../assets/images/custom/catalogue/Wardrobe_051.webp": "/assets/Wardrobe_051-CTSqbv3U.webp",
	"../assets/images/custom/catalogue/Wardrobe_052.webp": "/assets/Wardrobe_052-Bw59RFeu.webp",
	"../assets/images/custom/catalogue/Wardrobe_053.webp": "/assets/Wardrobe_053-5-oOI79b.webp",
	"../assets/images/custom/catalogue/Wardrobe_054.webp": "/assets/Wardrobe_054-C5kvs0Q-.webp",
	"../assets/images/custom/catalogue/Wardrobe_055.webp": "/assets/Wardrobe_055-C25GxBB2.webp",
	"../assets/images/custom/catalogue/Wardrobe_056.webp": "/assets/Wardrobe_056-BvazmSq0.webp",
	"../assets/images/custom/catalogue/Wardrobe_057.webp": "/assets/Wardrobe_057-CBttpez0.webp",
	"../assets/images/custom/catalogue/Wardrobe_058.webp": "/assets/Wardrobe_058-DqsyWOZU.webp",
	"../assets/images/custom/catalogue/Wardrobe_059.webp": "/assets/Wardrobe_059-ChdkHxGH.webp",
	"../assets/images/custom/catalogue/Wardrobe_060.webp": "/assets/Wardrobe_060-BrbI6sT6.webp",
	"../assets/images/custom/catalogue/Wardrobe_061.webp": "/assets/Wardrobe_061-Dk2bqxs1.webp",
	"../assets/images/custom/custom-01-luxury-showcase-cabinet.webp": "/assets/custom-01-luxury-showcase-cabinet-CojwLRJ-.webp",
	"../assets/images/custom/custom-02-modern-black-gold-cabinet.webp": "/assets/custom-02-modern-black-gold-cabinet-A8ScG7ZB.webp",
	"../assets/images/custom/custom-03-shoe-cabinet-sideboard.webp": "/assets/custom-03-shoe-cabinet-sideboard-BE_dq9vz.webp",
	"../assets/images/custom/custom-04-gold-showcase.webp": "/assets/custom-04-gold-showcase-d8wDUoFt.webp",
	"../assets/images/custom/custom-05-collection-board.webp": "/assets/custom-05-collection-board-DJKA9pmM.webp",
	"../assets/images/custom/custom-06-gold-ornate-wardrobe.webp": "/assets/custom-06-gold-ornate-wardrobe-D7gsxnqF.webp",
	"../assets/images/custom/custom-07-mahogany-brass-inlay-wardrobe.webp": "/assets/custom-07-mahogany-brass-inlay-wardrobe-DKDzlSDi.webp",
	"../assets/images/custom/custom-08-white-lattice-showcase.webp": "/assets/custom-08-white-lattice-showcase-BvR24pwO.webp",
	"../assets/images/custom/custom-09-grand-glass-showcase.webp": "/assets/custom-09-grand-glass-showcase--yLAAFS6.webp",
	"../assets/images/dining/catalogue/Dining_Set_001.webp": "/assets/Dining_Set_001-DRh1dn9U.webp",
	"../assets/images/dining/catalogue/Dining_Set_002.webp": "/assets/Dining_Set_002-DGeaz258.webp",
	"../assets/images/dining/catalogue/Dining_Set_003.webp": "/assets/Dining_Set_003-B5TUqjZ0.webp",
	"../assets/images/dining/catalogue/Dining_Set_004.webp": "/assets/Dining_Set_004-C-K3ot4Y.webp",
	"../assets/images/dining/catalogue/Dining_Set_005.webp": "/assets/Dining_Set_005-BTeejB7c.webp",
	"../assets/images/dining/catalogue/Dining_Set_006.webp": "/assets/Dining_Set_006-BkzPyV9I.webp",
	"../assets/images/dining/catalogue/Dining_Set_007.webp": "/assets/Dining_Set_007-ByCkv8_C.webp",
	"../assets/images/dining/catalogue/Dining_Set_008.webp": "/assets/Dining_Set_008-DfJemo0D.webp",
	"../assets/images/dining/catalogue/Dining_Set_009.webp": "/assets/Dining_Set_009-UYPFPvXs.webp",
	"../assets/images/dining/catalogue/Dining_Set_010.webp": "/assets/Dining_Set_010-B5sF9toN.webp",
	"../assets/images/dining/catalogue/Dining_Set_011.webp": "/assets/Dining_Set_011-CvGAwtkR.webp",
	"../assets/images/dining/catalogue/Dining_Set_012.webp": "/assets/Dining_Set_012-aez5x-vS.webp",
	"../assets/images/dining/catalogue/Dining_Set_013.webp": "/assets/Dining_Set_013-BwiBIhd6.webp",
	"../assets/images/dining/catalogue/Dining_Set_014.webp": "/assets/Dining_Set_014-JbxOxHwb.webp",
	"../assets/images/dining/catalogue/Dining_Set_015.webp": "/assets/Dining_Set_015-CgzuLYlj.webp",
	"../assets/images/dining/catalogue/Dining_Set_016.webp": "/assets/Dining_Set_016-C9OZW_Ax.webp",
	"../assets/images/dining/catalogue/Dining_Set_017.webp": "/assets/Dining_Set_017-BlbBrcSb.webp",
	"../assets/images/dining/catalogue/Dining_Set_018.webp": "/assets/Dining_Set_018-o09k8B1D.webp",
	"../assets/images/dining/catalogue/Dining_Set_019.webp": "/assets/Dining_Set_019-DG_jLfOj.webp",
	"../assets/images/dining/catalogue/Dining_Set_020.webp": "/assets/Dining_Set_020-D97W6fSy.webp",
	"../assets/images/dining/catalogue/Dining_Set_021.webp": "/assets/Dining_Set_021-SHd8Eacp.webp",
	"../assets/images/dining/catalogue/Dining_Set_022.webp": "/assets/Dining_Set_022-DXWpl954.webp",
	"../assets/images/dining/catalogue/Dining_Set_023.webp": "/assets/Dining_Set_023-DLjRKcLA.webp",
	"../assets/images/dining/catalogue/Dining_Set_024.webp": "/assets/Dining_Set_024-CFJjwTLf.webp",
	"../assets/images/dining/catalogue/Dining_Set_025.webp": "/assets/Dining_Set_025-DroI_F1H.webp",
	"../assets/images/dining/catalogue/Dining_Set_026.webp": "/assets/Dining_Set_026-XQH6MDsV.webp",
	"../assets/images/dining/catalogue/Dining_Set_027.webp": "/assets/Dining_Set_027-Z6kdyp3j.webp",
	"../assets/images/dining/catalogue/Dining_Set_028.webp": "/assets/Dining_Set_028-jrmblfmL.webp",
	"../assets/images/dining/catalogue/Dining_Set_029.webp": "/assets/Dining_Set_029-BxxRlSeV.webp",
	"../assets/images/dining/catalogue/Dining_Set_030.webp": "/assets/Dining_Set_029-BxxRlSeV.webp",
	"../assets/images/dining/catalogue/Dining_Set_031.webp": "/assets/Dining_Set_028-jrmblfmL.webp",
	"../assets/images/dining/catalogue/Dining_Set_032.webp": "/assets/Dining_Set_032-BSsR7md-.webp",
	"../assets/images/dining/catalogue/Dining_Set_033.webp": "/assets/Dining_Set_033-nTrwcfN8.webp",
	"../assets/images/dining/catalogue/Dining_Set_034.webp": "/assets/Dining_Set_034-Av5GJHY4.webp",
	"../assets/images/dining/catalogue/Dining_Set_035.webp": "/assets/Dining_Set_035-BbY7CPrC.webp",
	"../assets/images/dining/catalogue/Dining_Set_036.webp": "/assets/Dining_Set_036-UEyoC0Ao.webp",
	"../assets/images/dining/catalogue/Dining_Set_037.webp": "/assets/Dining_Set_037-BvuIGAS3.webp",
	"../assets/images/dining/catalogue/Dining_Set_038.webp": "/assets/Dining_Set_038-BTYhySGs.webp",
	"../assets/images/dining/catalogue/Dining_Set_039.webp": "/assets/Dining_Set_039-DE6llnzx.webp",
	"../assets/images/dining/catalogue/Dining_Set_040.webp": "/assets/Dining_Set_033-nTrwcfN8.webp",
	"../assets/images/dining/catalogue/Dining_Set_041.webp": "/assets/Dining_Set_041-zyMyon0R.webp",
	"../assets/images/dining/catalogue/Dining_Set_042.webp": "/assets/Dining_Set_041-zyMyon0R.webp",
	"../assets/images/dining/catalogue/Dining_Set_043.webp": "/assets/Dining_Set_043-NnDTd1y2.webp",
	"../assets/images/dining/catalogue/Dining_Set_044.webp": "/assets/Dining_Set_044-mn-ANiFC.webp",
	"../assets/images/dining/catalogue/Dining_Set_045.webp": "/assets/Dining_Set_045-eD9hE0pK.webp",
	"../assets/images/dining/catalogue/Dining_Set_046.webp": "/assets/Dining_Set_046-ICfzHhGD.webp",
	"../assets/images/dining/catalogue/Dining_Set_047.webp": "/assets/Dining_Set_047-COD8cEOw.webp",
	"../assets/images/dining/catalogue/Dining_Set_048.webp": "/assets/Dining_Set_033-nTrwcfN8.webp",
	"../assets/images/dining/catalogue/Dining_Set_049.webp": "/assets/Dining_Set_049-CmwHfCt2.webp",
	"../assets/images/dining/catalogue/Dining_Set_050.webp": "/assets/Dining_Set_005-BTeejB7c.webp",
	"../assets/images/dining/catalogue/Dining_Set_051.webp": "/assets/Dining_Set_051-q62BgiDF.webp",
	"../assets/images/dining/catalogue/Dining_Set_052.webp": "/assets/Dining_Set_041-zyMyon0R.webp",
	"../assets/images/dining/catalogue/Dining_Set_053.webp": "/assets/Dining_Set_053-DP-HfPm_.webp",
	"../assets/images/dining/catalogue/Dining_Set_054.webp": "/assets/Dining_Set_054-CeWQ_CIy.webp",
	"../assets/images/dining/catalogue/Dining_Set_055.webp": "/assets/Dining_Set_033-nTrwcfN8.webp",
	"../assets/images/dining/catalogue/Dining_Set_056.webp": "/assets/Dining_Set_056-BeLoUdT9.webp",
	"../assets/images/dining/catalogue/Dining_Set_057.webp": "/assets/Dining_Set_057-DpomWcwc.webp",
	"../assets/images/dining/catalogue/Dining_Set_058.webp": "/assets/Dining_Set_058-De2PSRN-.webp",
	"../assets/images/dining/catalogue/Dining_Set_059.webp": "/assets/Dining_Set_059-B1mtn9Cd.webp",
	"../assets/images/dining/catalogue/Dining_Set_060.webp": "/assets/Dining_Set_060-BmJn5n8F.webp",
	"../assets/images/dining/catalogue/Dining_Set_061.webp": "/assets/Dining_Set_061-DuKqACqD.webp",
	"../assets/images/dining/catalogue/Dining_Set_062.webp": "/assets/Dining_Set_062-C90ljiBR.webp",
	"../assets/images/dining/catalogue/Dining_Set_063.webp": "/assets/Dining_Set_063-DZsSLteY.webp",
	"../assets/images/dining/catalogue/Dining_Set_064.webp": "/assets/Dining_Set_064-Be88PGDH.webp",
	"../assets/images/dining/catalogue/Dining_Set_065.webp": "/assets/Dining_Set_065-BBDHJ3xZ.webp",
	"../assets/images/dining/catalogue/Dining_Set_066.webp": "/assets/Dining_Set_066-4s0ambQv.webp",
	"../assets/images/dining/catalogue/Dining_Set_067.webp": "/assets/Dining_Set_067-CPHl9v9I.webp",
	"../assets/images/dining/catalogue/Dining_Set_068.webp": "/assets/Dining_Set_068-Dw44bQEE.webp",
	"../assets/images/dining/catalogue/Dining_Set_069.webp": "/assets/Dining_Set_069-BeU5pPyE.webp",
	"../assets/images/dining/catalogue/Dining_Set_070.webp": "/assets/Dining_Set_070-CnqiF_Hm.webp",
	"../assets/images/dining/catalogue/Dining_Set_071.webp": "/assets/Dining_Set_049-CmwHfCt2.webp",
	"../assets/images/dining/catalogue/Dining_Set_072.webp": "/assets/Dining_Set_006-BkzPyV9I.webp",
	"../assets/images/dining/catalogue/Dining_Set_073.webp": "/assets/Dining_Set_073-D6ZCt0WJ.webp",
	"../assets/images/dining/catalogue/Dining_Set_074.webp": "/assets/Dining_Set_074-wLQCMy-T.webp",
	"../assets/images/dining/catalogue/Dining_Set_075.webp": "/assets/Dining_Set_047-COD8cEOw.webp",
	"../assets/images/dining/catalogue/Dining_Set_076.webp": "/assets/Dining_Set_076-Cr_xAB8t.webp",
	"../assets/images/dining/catalogue/Dining_Set_077.webp": "/assets/Dining_Set_077-D0FwhrSF.webp",
	"../assets/images/dining/catalogue/Dining_Set_078.webp": "/assets/Dining_Set_078-C7H58u_h.webp",
	"../assets/images/dining/catalogue/Dining_Set_079.webp": "/assets/Dining_Set_079-WvDHcswJ.webp",
	"../assets/images/dining/catalogue/Dining_Set_080.webp": "/assets/Dining_Set_080-Dwxi4Hue.webp",
	"../assets/images/dining/catalogue/Dining_Set_081.webp": "/assets/Dining_Set_081-Ccew3K2F.webp",
	"../assets/images/dining/catalogue/Dining_Set_082.webp": "/assets/Dining_Set_082-Dw59hmeC.webp",
	"../assets/images/dining/catalogue/Dining_Set_083.webp": "/assets/Dining_Set_039-DE6llnzx.webp",
	"../assets/images/dining/catalogue/Dining_Set_084.webp": "/assets/Dining_Set_084-BZ1Ac7PA.webp",
	"../assets/images/dining/catalogue/Dining_Set_085.webp": "/assets/Dining_Set_085-DdWw2K7p.webp",
	"../assets/images/dining/catalogue/Dining_Set_086.webp": "/assets/Dining_Set_086-CsMzz-HF.webp",
	"../assets/images/dining/catalogue/Dining_Set_087.webp": "/assets/Dining_Set_087-BRx6bp_A.webp",
	"../assets/images/dining/catalogue/Dining_Set_088.webp": "/assets/Dining_Set_077-D0FwhrSF.webp",
	"../assets/images/dining/catalogue/Dining_Set_089.webp": "/assets/Dining_Set_089-Dl1S7OFB.webp",
	"../assets/images/dining/catalogue/Dining_Set_090.webp": "/assets/Dining_Set_090-5qUfXFvz.webp",
	"../assets/images/dining/catalogue/Dining_Set_091.webp": "/assets/Dining_Set_091-DYsQKhHN.webp",
	"../assets/images/dining/catalogue/Dining_Set_092.webp": "/assets/Dining_Set_092-aqDSUgph.webp",
	"../assets/images/dining/catalogue/Dining_Set_093.webp": "/assets/Dining_Set_093-BgX85--M.webp",
	"../assets/images/dining/catalogue/Dining_Set_094.webp": "/assets/Dining_Set_094-CxWszRUN.webp",
	"../assets/images/dining/catalogue/Dining_Set_095.webp": "/assets/Dining_Set_095-DP7myRJw.webp",
	"../assets/images/dining/catalogue/Dining_Set_096.webp": "/assets/Dining_Set_096-BxpBmIFk.webp",
	"../assets/images/dining/catalogue/Dining_Set_097.webp": "/assets/Dining_Set_097-DOuNPNKV.webp",
	"../assets/images/dining/catalogue/Dining_Set_098.webp": "/assets/Dining_Set_098-CKAn3f08.webp",
	"../assets/images/dining/catalogue/Dining_Set_099.webp": "/assets/Dining_Set_099-DeWJugzl.webp",
	"../assets/images/dining/catalogue/Dining_Set_100.webp": "/assets/Dining_Set_100-BcrUamMa.webp",
	"../assets/images/dining/catalogue/Dining_Set_101.webp": "/assets/Dining_Set_101-_lyXRnaH.webp",
	"../assets/images/dining/catalogue/Dining_Set_102.webp": "/assets/Dining_Set_102-Bx28sBTH.webp",
	"../assets/images/dining/catalogue/Dining_Set_103.webp": "/assets/Dining_Set_103--7yMIGe-.webp",
	"../assets/images/dining/catalogue/Dining_Set_104.webp": "/assets/Dining_Set_104-Cdm4cacf.webp",
	"../assets/images/dining/catalogue/Dining_Set_105.webp": "/assets/Dining_Set_105-Dk8gIazK.webp",
	"../assets/images/dining/catalogue/Dining_Set_106.webp": "/assets/Dining_Set_106-BY-3k9cz.webp",
	"../assets/images/dining/catalogue/Dining_Set_107.webp": "/assets/Dining_Set_107-ZJoArhOB.webp",
	"../assets/images/dining/catalogue/Dining_Set_108.webp": "/assets/Dining_Set_108-DVqNvYJ7.webp",
	"../assets/images/dining/catalogue/Dining_Set_109.webp": "/assets/Dining_Set_109-umgL_t74.webp",
	"../assets/images/dining/catalogue/Dining_Set_110.webp": "/assets/Dining_Set_110-BFIiyIHG.webp",
	"../assets/images/dining/catalogue/Dining_Set_111.webp": "/assets/Dining_Set_111-BjesVEwE.webp",
	"../assets/images/dining/catalogue/Dining_Set_112.webp": "/assets/Dining_Set_112-DcY1wWMj.webp",
	"../assets/images/dining/catalogue/Dining_Set_113.webp": "/assets/Dining_Set_113-Da5L4YEY.webp",
	"../assets/images/dining/catalogue/Dining_Set_114.webp": "/assets/Dining_Set_113-Da5L4YEY.webp",
	"../assets/images/dining/catalogue/Dining_Set_115.webp": "/assets/Dining_Set_112-DcY1wWMj.webp",
	"../assets/images/dining/catalogue/Dining_Set_116.webp": "/assets/Dining_Set_116-DQIzFPa4.webp",
	"../assets/images/dining/catalogue/Dining_Set_117.webp": "/assets/Dining_Set_117-1jXWHyzD.webp",
	"../assets/images/dining/catalogue/Dining_Set_118.webp": "/assets/Dining_Set_118-o4MT2bYJ.webp",
	"../assets/images/dining/dining-01-luxury-dining-set.webp": "/assets/dining-01-luxury-dining-set-Ct79rrxa.webp",
	"../assets/images/dining/dining-02-luxury-dining-table.webp": "/assets/dining-02-luxury-dining-table-BJiu4W4P.webp",
	"../assets/images/dining/dining-03-customized-marble-table.webp": "/assets/dining-03-customized-marble-table-BWsZnBUH.webp",
	"../assets/images/dining/dining-04-cream-gold-dining.webp": "/assets/dining-04-cream-gold-dining-BSyp0hpI.webp",
	"../assets/images/dining/dining-05-luxury-dining-post.webp": "/assets/dining-05-luxury-dining-post-BxxVI3hA.webp",
	"../assets/images/dining/dining-06-carved-wood-dining.webp": "/assets/dining-06-carved-wood-dining-qQ3jcFWX.webp",
	"../assets/images/dining/dining-07-navy-velvet-marble-set.webp": "/assets/dining-07-navy-velvet-marble-set-DcdLhyry.webp",
	"../assets/images/dining/dining-08-champagne-styled-set.webp": "/assets/dining-08-champagne-styled-set-DqWAXA5u.webp",
	"../assets/images/dining/dining-09-carved-wood-glass-top.webp": "/assets/dining-09-carved-wood-glass-top-DnzHQ21X.webp",
	"../assets/images/living/catalogue/Chair_001.webp": "/assets/Chair_001-D-1TSPjW.webp",
	"../assets/images/living/catalogue/Chair_002.webp": "/assets/Chair_002-BIFGZgpk.webp",
	"../assets/images/living/catalogue/Chair_003.webp": "/assets/Chair_003-7TdPBgIm.webp",
	"../assets/images/living/catalogue/Chair_004.webp": "/assets/Chair_004-CTMt5Afq.webp",
	"../assets/images/living/catalogue/Chair_005.webp": "/assets/Chair_005-BgHu4F53.webp",
	"../assets/images/living/catalogue/Chair_006.webp": "/assets/Chair_006-ZwGK7dC6.webp",
	"../assets/images/living/catalogue/Chair_007.webp": "/assets/Chair_007-AmeUlwKf.webp",
	"../assets/images/living/catalogue/Chair_008.webp": "/assets/Chair_008-wAaRx3OE.webp",
	"../assets/images/living/catalogue/Chair_009.webp": "/assets/Chair_009-vZI83fje.webp",
	"../assets/images/living/catalogue/Chair_010.webp": "/assets/Chair_010-DBwQ8jbO.webp",
	"../assets/images/living/catalogue/Chair_011.webp": "/assets/Chair_011-CKqJxEzY.webp",
	"../assets/images/living/catalogue/Chair_012.webp": "/assets/Chair_012-WD5V_QUk.webp",
	"../assets/images/living/catalogue/Chair_013.webp": "/assets/Chair_013-BKCfmdBP.webp",
	"../assets/images/living/catalogue/Chair_014.webp": "/assets/Chair_014-CRAeM5Rd.webp",
	"../assets/images/living/catalogue/Chair_015.webp": "/assets/Chair_015-DZT3Y6ZS.webp",
	"../assets/images/living/catalogue/Chair_016.webp": "/assets/Chair_016-DzyBqSzK.webp",
	"../assets/images/living/catalogue/Chair_017.webp": "/assets/Chair_017-BmKoB3c2.webp",
	"../assets/images/living/catalogue/Chair_018.webp": "/assets/Chair_018-BH7Lkx6f.webp",
	"../assets/images/living/catalogue/Chair_019.webp": "/assets/Chair_019-CrY-yKzD.webp",
	"../assets/images/living/catalogue/Chair_020.webp": "/assets/Chair_020-D2A9_qim.webp",
	"../assets/images/living/catalogue/Chair_021.webp": "/assets/Chair_021-BnXV69R6.webp",
	"../assets/images/living/catalogue/Chair_022.webp": "/assets/Chair_022-D0CSXN3Q.webp",
	"../assets/images/living/catalogue/Chair_023.webp": "/assets/Chair_023-CN_VksZ-.webp",
	"../assets/images/living/catalogue/Chair_024.webp": "/assets/Chair_024-bGngm5iw.webp",
	"../assets/images/living/catalogue/Chair_025.webp": "/assets/Chair_022-D0CSXN3Q.webp",
	"../assets/images/living/catalogue/Chair_026.webp": "/assets/Chair_026-BRMi-lzT.webp",
	"../assets/images/living/catalogue/Chair_027.webp": "/assets/Chair_027-BctQEAgk.webp",
	"../assets/images/living/catalogue/Chair_028.webp": "/assets/Chair_023-CN_VksZ-.webp",
	"../assets/images/living/catalogue/Chair_029.webp": "/assets/Chair_029-BdE0e2v7.webp",
	"../assets/images/living/catalogue/Chair_030.webp": "/assets/Chair_030-DWIlN4-i.webp",
	"../assets/images/living/catalogue/Chair_031.webp": "/assets/Chair_031-BotxDKzu.webp",
	"../assets/images/living/catalogue/Chair_032.webp": "/assets/Chair_032-BQhAIybj.webp",
	"../assets/images/living/catalogue/Chair_033.webp": "/assets/Chair_033-B1SeBcsG.webp",
	"../assets/images/living/catalogue/Chair_034.webp": "/assets/Chair_034-DOUZAddq.webp",
	"../assets/images/living/catalogue/Chair_035.webp": "/assets/Chair_035-CS00GmZ8.webp",
	"../assets/images/living/catalogue/Chair_036.webp": "/assets/Chair_036-CMAlFskR.webp",
	"../assets/images/living/catalogue/Chair_037.webp": "/assets/Chair_037-Dkodja7y.webp",
	"../assets/images/living/catalogue/Chair_038.webp": "/assets/Chair_038-DOdXCjaQ.webp",
	"../assets/images/living/catalogue/Chair_039.webp": "/assets/Chair_039-DTK3WwdG.webp",
	"../assets/images/living/catalogue/Chair_040.webp": "/assets/Chair_040-CUuB4X6R.webp",
	"../assets/images/living/catalogue/Chair_041.webp": "/assets/Chair_041-D9VQmw0r.webp",
	"../assets/images/living/catalogue/Chair_042.webp": "/assets/Chair_042-C2Kvb88B.webp",
	"../assets/images/living/catalogue/Chair_043.webp": "/assets/Chair_043-C9Gg24eR.webp",
	"../assets/images/living/catalogue/Chair_044.webp": "/assets/Chair_044-DFQN2YgN.webp",
	"../assets/images/living/catalogue/Chair_045.webp": "/assets/Chair_045-CCJ48w-_.webp",
	"../assets/images/living/catalogue/Chair_046.webp": "/assets/Chair_046-CbiTEzfK.webp",
	"../assets/images/living/catalogue/Chair_047.webp": "/assets/Chair_047-H8s6fQy2.webp",
	"../assets/images/living/catalogue/Chair_048.webp": "/assets/Chair_048-C0OLNiDS.webp",
	"../assets/images/living/catalogue/Chair_049.webp": "/assets/Chair_049-iba5mYaj.webp",
	"../assets/images/living/catalogue/Chair_050.webp": "/assets/Chair_050-C_f3IhwR.webp",
	"../assets/images/living/catalogue/Chair_051.webp": "/assets/Chair_051-DkL7MaE2.webp",
	"../assets/images/living/catalogue/Chair_052.webp": "/assets/Chair_052-lRrj9Vd9.webp",
	"../assets/images/living/catalogue/Chair_053.webp": "/assets/Chair_051-DkL7MaE2.webp",
	"../assets/images/living/catalogue/Chair_054.webp": "/assets/Chair_054-DdpGkJAm.webp",
	"../assets/images/living/catalogue/Chair_055.webp": "/assets/Chair_055-CCqLJHlL.webp",
	"../assets/images/living/catalogue/Chair_056.webp": "/assets/Chair_056-n2Mf2pxl.webp",
	"../assets/images/living/catalogue/Chair_057.webp": "/assets/Chair_057-B5KiJWMS.webp",
	"../assets/images/living/catalogue/Chair_058.webp": "/assets/Chair_058-D8b2Ivm_.webp",
	"../assets/images/living/catalogue/Chair_059.webp": "/assets/Chair_059-DANs-SZs.webp",
	"../assets/images/living/catalogue/Chair_060.webp": "/assets/Chair_060-Bur8Wdg7.webp",
	"../assets/images/living/catalogue/Chair_061.webp": "/assets/Chair_061-DzLoiu9L.webp",
	"../assets/images/living/catalogue/Chair_062.webp": "/assets/Chair_062-CgU4g9Bg.webp",
	"../assets/images/living/catalogue/Chair_063.webp": "/assets/Chair_063-Qk_HvuW_.webp",
	"../assets/images/living/catalogue/Chair_064.webp": "/assets/Chair_064-D7P9oFdY.webp",
	"../assets/images/living/catalogue/Chair_065.webp": "/assets/Chair_065-CNdaDvRG.webp",
	"../assets/images/living/catalogue/Chair_066.webp": "/assets/Chair_066-D9S_NmmY.webp",
	"../assets/images/living/catalogue/Chair_067.webp": "/assets/Chair_067-DVl96XJ9.webp",
	"../assets/images/living/catalogue/Chair_068.webp": "/assets/Chair_068-N37Vh-sA.webp",
	"../assets/images/living/catalogue/Chair_069.webp": "/assets/Chair_069-BOOTHSdp.webp",
	"../assets/images/living/catalogue/Chair_070.webp": "/assets/Chair_070-YIUBksiD.webp",
	"../assets/images/living/catalogue/Chair_071.webp": "/assets/Chair_071-MIR8fRro.webp",
	"../assets/images/living/catalogue/Chair_072.webp": "/assets/Chair_072-3IGuG_0L.webp",
	"../assets/images/living/catalogue/Chair_073.webp": "/assets/Chair_073-B0kqs6af.webp",
	"../assets/images/living/catalogue/Chair_074.webp": "/assets/Chair_073-B0kqs6af.webp",
	"../assets/images/living/catalogue/Chair_075.webp": "/assets/Chair_075-BEqC18fj.webp",
	"../assets/images/living/catalogue/Chair_076.webp": "/assets/Chair_076-Ba9uRLvL.webp",
	"../assets/images/living/catalogue/Chair_077.webp": "/assets/Chair_077-dPB094Ae.webp",
	"../assets/images/living/catalogue/Chair_078.webp": "/assets/Chair_078-CeTAal8E.webp",
	"../assets/images/living/catalogue/Chair_079.webp": "/assets/Chair_079-DCuWOkdC.webp",
	"../assets/images/living/catalogue/Chair_080.webp": "/assets/Chair_080-CxgQnKQD.webp",
	"../assets/images/living/catalogue/Chair_081.webp": "/assets/Chair_081-BbmMKHhz.webp",
	"../assets/images/living/catalogue/Chair_082.webp": "/assets/Chair_082-BiNG1vWs.webp",
	"../assets/images/living/catalogue/Chair_083.webp": "/assets/Chair_083-BTehrsXO.webp",
	"../assets/images/living/catalogue/Chair_084.webp": "/assets/Chair_084-CIHY6Brz.webp",
	"../assets/images/living/catalogue/Chair_085.webp": "/assets/Chair_085-mGaq7FXM.webp",
	"../assets/images/living/catalogue/Chair_086.webp": "/assets/Chair_086-9fea6rgC.webp",
	"../assets/images/living/catalogue/Chair_087.webp": "/assets/Chair_087-Bzy_d6WH.webp",
	"../assets/images/living/catalogue/Chair_088.webp": "/assets/Chair_088-DGXWjwlg.webp",
	"../assets/images/living/catalogue/Chair_089.webp": "/assets/Chair_089-ik-hi9fN.webp",
	"../assets/images/living/catalogue/Chair_090.webp": "/assets/Chair_090-BUPYK1QE.webp",
	"../assets/images/living/catalogue/Chair_091.webp": "/assets/Chair_091-C3nASe4s.webp",
	"../assets/images/living/catalogue/Chair_092.webp": "/assets/Chair_092-BLRyU6Gv.webp",
	"../assets/images/living/catalogue/Sofa_001.webp": "/assets/Sofa_001-BeE1BxN9.webp",
	"../assets/images/living/catalogue/Sofa_002.webp": "/assets/Sofa_002-Cnc4LNT0.webp",
	"../assets/images/living/catalogue/Sofa_003.webp": "/assets/Sofa_003-DJj8N42A.webp",
	"../assets/images/living/catalogue/Sofa_004.webp": "/assets/Sofa_004-C96aEa31.webp",
	"../assets/images/living/catalogue/Sofa_005.webp": "/assets/Sofa_005-DrjGrotm.webp",
	"../assets/images/living/catalogue/Sofa_006.webp": "/assets/Sofa_006-B2MlxGcw.webp",
	"../assets/images/living/catalogue/Sofa_007.webp": "/assets/Sofa_007-NEjboYKg.webp",
	"../assets/images/living/catalogue/Sofa_008.webp": "/assets/Sofa_008-y9MAKj7a.webp",
	"../assets/images/living/catalogue/Sofa_009.webp": "/assets/Sofa_009-DiA2wMfE.webp",
	"../assets/images/living/catalogue/Sofa_010.webp": "/assets/Sofa_010-BjHQoKwR.webp",
	"../assets/images/living/catalogue/Sofa_011.webp": "/assets/Sofa_011-BFhp2rs7.webp",
	"../assets/images/living/catalogue/Sofa_012.webp": "/assets/Sofa_012-Dh482AxK.webp",
	"../assets/images/living/catalogue/Sofa_013.webp": "/assets/Sofa_013-CzVrzEj-.webp",
	"../assets/images/living/catalogue/Sofa_014.webp": "/assets/Sofa_014-BPyt20pd.webp",
	"../assets/images/living/catalogue/Sofa_015.webp": "/assets/Sofa_015-BPQv2Aut.webp",
	"../assets/images/living/catalogue/Sofa_016.webp": "/assets/Sofa_016-CMEV45E3.webp",
	"../assets/images/living/catalogue/Sofa_017.webp": "/assets/Sofa_017-cy7Uz91e.webp",
	"../assets/images/living/catalogue/Sofa_018.webp": "/assets/Sofa_018-B1HYvdfR.webp",
	"../assets/images/living/catalogue/Sofa_019.webp": "/assets/Sofa_019-wBst0Tpd.webp",
	"../assets/images/living/catalogue/Sofa_020.webp": "/assets/Sofa_020-BqzJN9xi.webp",
	"../assets/images/living/catalogue/Sofa_021.webp": "/assets/Sofa_021-B9InVtlG.webp",
	"../assets/images/living/catalogue/Sofa_022.webp": "/assets/Sofa_022-Bqc4kSfG.webp",
	"../assets/images/living/catalogue/Sofa_023.webp": "/assets/Sofa_023-z6j0zDq9.webp",
	"../assets/images/living/catalogue/Sofa_024.webp": "/assets/Sofa_024-BuevnW67.webp",
	"../assets/images/living/catalogue/Sofa_025.webp": "/assets/Sofa_025-D-HWF3vW.webp",
	"../assets/images/living/catalogue/Sofa_026.webp": "/assets/Sofa_026-BIM-lFLT.webp",
	"../assets/images/living/catalogue/Sofa_027.webp": "/assets/Sofa_027-DH0ANT-X.webp",
	"../assets/images/living/catalogue/Sofa_028.webp": "/assets/Sofa_028-CPSKFfqf.webp",
	"../assets/images/living/catalogue/Sofa_029.webp": "/assets/Sofa_029-ha8SnlFr.webp",
	"../assets/images/living/catalogue/Sofa_030.webp": "/assets/Sofa_030-U9ERGRWy.webp",
	"../assets/images/living/catalogue/Sofa_031.webp": "/assets/Sofa_031-BvSEN8nO.webp",
	"../assets/images/living/catalogue/Sofa_032.webp": "/assets/Sofa_032-C9XRDrEl.webp",
	"../assets/images/living/catalogue/Sofa_033.webp": "/assets/Sofa_033-DgzeKHWB.webp",
	"../assets/images/living/catalogue/Sofa_034.webp": "/assets/Sofa_034-BYpHj7rh.webp",
	"../assets/images/living/catalogue/Sofa_035.webp": "/assets/Sofa_035-D4rPcnM8.webp",
	"../assets/images/living/catalogue/Sofa_036.webp": "/assets/Sofa_036-DN8Bs7uG.webp",
	"../assets/images/living/catalogue/Sofa_037.webp": "/assets/Sofa_037-BPEG7i4J.webp",
	"../assets/images/living/catalogue/Sofa_038.webp": "/assets/Sofa_038-sOVCgBam.webp",
	"../assets/images/living/catalogue/Sofa_039.webp": "/assets/Sofa_039-D2IFvEXC.webp",
	"../assets/images/living/catalogue/Sofa_040.webp": "/assets/Sofa_040-eOWEBo1h.webp",
	"../assets/images/living/catalogue/Sofa_041.webp": "/assets/Sofa_041-BfsmUmcF.webp",
	"../assets/images/living/catalogue/Sofa_042.webp": "/assets/Sofa_042-BC7n9-Od.webp",
	"../assets/images/living/catalogue/Sofa_043.webp": "/assets/Sofa_043-CJgTyKNR.webp",
	"../assets/images/living/catalogue/Sofa_044.webp": "/assets/Sofa_044-By9IwXGU.webp",
	"../assets/images/living/catalogue/Sofa_045.webp": "/assets/Sofa_045-DyC9vIXw.webp",
	"../assets/images/living/catalogue/Sofa_046.webp": "/assets/Sofa_046-NCevc7nr.webp",
	"../assets/images/living/catalogue/Sofa_047.webp": "/assets/Sofa_047-hz-hVSE0.webp",
	"../assets/images/living/catalogue/Sofa_048.webp": "/assets/Sofa_048-DUddKdQ9.webp",
	"../assets/images/living/catalogue/Sofa_049.webp": "/assets/Sofa_049-3cSXrxep.webp",
	"../assets/images/living/catalogue/Sofa_050.webp": "/assets/Sofa_050-ChpJuAPq.webp",
	"../assets/images/living/catalogue/Sofa_051.webp": "/assets/Sofa_051-B8bAOBKR.webp",
	"../assets/images/living/catalogue/Sofa_052.webp": "/assets/Sofa_052-BcihGrml.webp",
	"../assets/images/living/catalogue/Sofa_053.webp": "/assets/Sofa_053-B0fpEwty.webp",
	"../assets/images/living/catalogue/Sofa_054.webp": "/assets/Sofa_054-Dhjr5wBN.webp",
	"../assets/images/living/catalogue/Sofa_055.webp": "/assets/Sofa_055-D_lc6S1U.webp",
	"../assets/images/living/catalogue/Sofa_056.webp": "/assets/Sofa_006-B2MlxGcw.webp",
	"../assets/images/living/catalogue/Sofa_057.webp": "/assets/Sofa_057-Dh99maus.webp",
	"../assets/images/living/catalogue/Sofa_058.webp": "/assets/Sofa_058-UPCs6AFc.webp",
	"../assets/images/living/catalogue/Sofa_059.webp": "/assets/Sofa_059-Rq33-YKD.webp",
	"../assets/images/living/catalogue/Sofa_060.webp": "/assets/Sofa_060-BrmiAhjB.webp",
	"../assets/images/living/catalogue/Sofa_061.webp": "/assets/Sofa_057-Dh99maus.webp",
	"../assets/images/living/catalogue/Sofa_062.webp": "/assets/Sofa_052-BcihGrml.webp",
	"../assets/images/living/catalogue/Sofa_063.webp": "/assets/Sofa_054-Dhjr5wBN.webp",
	"../assets/images/living/catalogue/Sofa_064.webp": "/assets/Sofa_053-B0fpEwty.webp",
	"../assets/images/living/catalogue/Sofa_065.webp": "/assets/Sofa_065-DYSOKqjp.webp",
	"../assets/images/living/catalogue/Sofa_066.webp": "/assets/Sofa_006-B2MlxGcw.webp",
	"../assets/images/living/catalogue/Sofa_067.webp": "/assets/Sofa_067-D7mW2CHT.webp",
	"../assets/images/living/catalogue/Sofa_068.webp": "/assets/Sofa_068-CpdlxA-_.webp",
	"../assets/images/living/catalogue/Sofa_069.webp": "/assets/Sofa_069-DIMNCraO.webp",
	"../assets/images/living/catalogue/Sofa_070.webp": "/assets/Sofa_070-CT4IjFwJ.webp",
	"../assets/images/living/catalogue/Sofa_071.webp": "/assets/Sofa_071-Bsj5lile.webp",
	"../assets/images/living/catalogue/Sofa_072.webp": "/assets/Sofa_072--5PWnadp.webp",
	"../assets/images/living/catalogue/Sofa_073.webp": "/assets/Sofa_073-U-ItmpAI.webp",
	"../assets/images/living/catalogue/Sofa_074.webp": "/assets/Sofa_074-DmCH-rrv.webp",
	"../assets/images/living/catalogue/Sofa_075.webp": "/assets/Sofa_075-rCusZO5a.webp",
	"../assets/images/living/catalogue/Sofa_076.webp": "/assets/Sofa_076-BtTq49DB.webp",
	"../assets/images/living/catalogue/Sofa_077.webp": "/assets/Sofa_006-B2MlxGcw.webp",
	"../assets/images/living/catalogue/Sofa_078.webp": "/assets/Sofa_078-ihe5TXhl.webp",
	"../assets/images/living/catalogue/Sofa_079.webp": "/assets/Sofa_079-BZCEI8gK.webp",
	"../assets/images/living/catalogue/Sofa_080.webp": "/assets/Sofa_080-CvDQoOz8.webp",
	"../assets/images/living/catalogue/Sofa_081.webp": "/assets/Sofa_081-DLR8UtsC.webp",
	"../assets/images/living/catalogue/Sofa_082.webp": "/assets/Sofa_082-BqwXWrEa.webp",
	"../assets/images/living/catalogue/Sofa_083.webp": "/assets/Sofa_083-BmzNiFYv.webp",
	"../assets/images/living/catalogue/Sofa_084.webp": "/assets/Sofa_084-nERVwL0J.webp",
	"../assets/images/living/catalogue/Sofa_085.webp": "/assets/Sofa_085-Jj4MTnOY.webp",
	"../assets/images/living/catalogue/Sofa_086.webp": "/assets/Sofa_086-kcpNW73K.webp",
	"../assets/images/living/catalogue/Sofa_087.webp": "/assets/Sofa_087-NdcDmG0Q.webp",
	"../assets/images/living/catalogue/Sofa_088.webp": "/assets/Sofa_088-CD2S-015.webp",
	"../assets/images/living/catalogue/Sofa_089.webp": "/assets/Sofa_089-DHXSC7Py.webp",
	"../assets/images/living/catalogue/Sofa_090.webp": "/assets/Sofa_090-Bwrubn4i.webp",
	"../assets/images/living/catalogue/Sofa_091.webp": "/assets/Sofa_091-CeyK7IYw.webp",
	"../assets/images/living/catalogue/Sofa_092.webp": "/assets/Sofa_092-4eNd7-8E.webp",
	"../assets/images/living/catalogue/Sofa_093.webp": "/assets/Sofa_093-DzN9Fy2y.webp",
	"../assets/images/living/catalogue/Sofa_094.webp": "/assets/Sofa_094-B3mcZDec.webp",
	"../assets/images/living/catalogue/Sofa_095.webp": "/assets/Sofa_095-DCLByxMF.webp",
	"../assets/images/living/catalogue/Sofa_096.webp": "/assets/Sofa_065-DYSOKqjp.webp",
	"../assets/images/living/catalogue/Sofa_097.webp": "/assets/Sofa_078-ihe5TXhl.webp",
	"../assets/images/living/catalogue/Sofa_098.webp": "/assets/Sofa_098-BekPf5MU.webp",
	"../assets/images/living/catalogue/Sofa_099.webp": "/assets/Sofa_099-D1Mn1MJ0.webp",
	"../assets/images/living/catalogue/Sofa_100.webp": "/assets/Sofa_100-CVluMZAL.webp",
	"../assets/images/living/catalogue/Sofa_101.webp": "/assets/Sofa_101-ICk3fFky.webp",
	"../assets/images/living/catalogue/Sofa_102.webp": "/assets/Sofa_102-CFqNBI4x.webp",
	"../assets/images/living/catalogue/Sofa_103.webp": "/assets/Sofa_065-DYSOKqjp.webp",
	"../assets/images/living/catalogue/Sofa_104.webp": "/assets/Sofa_104-BfVuWn0X.webp",
	"../assets/images/living/catalogue/Sofa_105.webp": "/assets/Sofa_105-JdVA9qnV.webp",
	"../assets/images/living/catalogue/Sofa_106.webp": "/assets/Sofa_106-uoB56FOb.webp",
	"../assets/images/living/catalogue/Sofa_107.webp": "/assets/Sofa_107-3-MHWyAL.webp",
	"../assets/images/living/catalogue/Sofa_108.webp": "/assets/Sofa_108-Bxsk_N7R.webp",
	"../assets/images/living/catalogue/Sofa_109.webp": "/assets/Sofa_109-Q5rXkUow.webp",
	"../assets/images/living/catalogue/Sofa_110.webp": "/assets/Sofa_102-CFqNBI4x.webp",
	"../assets/images/living/catalogue/Sofa_111.webp": "/assets/Sofa_111-ClCzQ5Kp.webp",
	"../assets/images/living/catalogue/Sofa_112.webp": "/assets/Sofa_112-BCJnGHHr.webp",
	"../assets/images/living/catalogue/Sofa_113.webp": "/assets/Sofa_113-B9bHwAv9.webp",
	"../assets/images/living/catalogue/Sofa_114.webp": "/assets/Sofa_065-DYSOKqjp.webp",
	"../assets/images/living/catalogue/Sofa_115.webp": "/assets/Sofa_115-limacqGU.webp",
	"../assets/images/living/catalogue/Sofa_116.webp": "/assets/Sofa_116-DugkN9gz.webp",
	"../assets/images/living/catalogue/Sofa_117.webp": "/assets/Sofa_089-DHXSC7Py.webp",
	"../assets/images/living/catalogue/Sofa_118.webp": "/assets/Sofa_118-CGnxs-X1.webp",
	"../assets/images/living/catalogue/Sofa_119.webp": "/assets/Sofa_119-D70GyyEN.webp",
	"../assets/images/living/catalogue/Sofa_120.webp": "/assets/Sofa_120-CUus7akZ.webp",
	"../assets/images/living/catalogue/Sofa_121.webp": "/assets/Sofa_121-BybbBvKj.webp",
	"../assets/images/living/catalogue/Sofa_122.webp": "/assets/Sofa_122-Cs9hyIz4.webp",
	"../assets/images/living/catalogue/Sofa_123.webp": "/assets/Sofa_089-DHXSC7Py.webp",
	"../assets/images/living/catalogue/Sofa_124.webp": "/assets/Sofa_124-Dm3wT5YV.webp",
	"../assets/images/living/catalogue/Sofa_125.webp": "/assets/Sofa_125-T3iLAeVN.webp",
	"../assets/images/living/catalogue/Sofa_126.webp": "/assets/Sofa_126-Dp88R7AI.webp",
	"../assets/images/living/catalogue/Sofa_127.webp": "/assets/Sofa_127-D7htL-oK.webp",
	"../assets/images/living/catalogue/Sofa_128.webp": "/assets/Sofa_128-C5PUVoEQ.webp",
	"../assets/images/living/catalogue/Sofa_129.webp": "/assets/Sofa_129-BFs_0i-G.webp",
	"../assets/images/living/catalogue/Sofa_130.webp": "/assets/Sofa_130-BSh-BM5d.webp",
	"../assets/images/living/catalogue/Sofa_131.webp": "/assets/Sofa_131-CG3Vx5ou.webp",
	"../assets/images/living/catalogue/Sofa_132.webp": "/assets/Sofa_015-BPQv2Aut.webp",
	"../assets/images/living/catalogue/Sofa_133.webp": "/assets/Sofa_133-BZbWFIpG.webp",
	"../assets/images/living/catalogue/Sofa_134.webp": "/assets/Sofa_134-60lfF5Mi.webp",
	"../assets/images/living/catalogue/Sofa_135.webp": "/assets/Sofa_135-DC03nzMm.webp",
	"../assets/images/living/catalogue/Sofa_136.webp": "/assets/Sofa_136-CZSPJ_6y.webp",
	"../assets/images/living/catalogue/Sofa_137.webp": "/assets/Sofa_006-B2MlxGcw.webp",
	"../assets/images/living/catalogue/Sofa_138.webp": "/assets/Sofa_138-B3jOA1QC.webp",
	"../assets/images/living/catalogue/Sofa_139.webp": "/assets/Sofa_016-CMEV45E3.webp",
	"../assets/images/living/catalogue/Sofa_140.webp": "/assets/Sofa_140-0ka9WkkB.webp",
	"../assets/images/living/catalogue/Sofa_141.webp": "/assets/Sofa_141-CbeLwvPO.webp",
	"../assets/images/living/catalogue/Sofa_142.webp": "/assets/Sofa_142-BWWhwUNR.webp",
	"../assets/images/living/catalogue/Sofa_143.webp": "/assets/Sofa_143-DJg4y5s4.webp",
	"../assets/images/living/catalogue/Sofa_144.webp": "/assets/Sofa_144-DmiEw4WG.webp",
	"../assets/images/living/catalogue/Sofa_145.webp": "/assets/Sofa_145-dB2FgIVA.webp",
	"../assets/images/living/catalogue/Sofa_146.webp": "/assets/Sofa_146-CLhglYJO.webp",
	"../assets/images/living/catalogue/Sofa_147.webp": "/assets/Sofa_147-CskncjK9.webp",
	"../assets/images/living/catalogue/Sofa_148.webp": "/assets/Sofa_148-AJ8qhets.webp",
	"../assets/images/living/catalogue/Sofa_149.webp": "/assets/Sofa_149-Db1FuYl1.webp",
	"../assets/images/living/catalogue/Sofa_150.webp": "/assets/Sofa_150-nHP0nckv.webp",
	"../assets/images/living/catalogue/Sofa_151.webp": "/assets/Sofa_151-BkXM_s9p.webp",
	"../assets/images/living/catalogue/Sofa_152.webp": "/assets/Sofa_152-BBIgK3pn.webp",
	"../assets/images/living/catalogue/Sofa_153.webp": "/assets/Sofa_153-Bw16oc-n.webp",
	"../assets/images/living/catalogue/Sofa_154.webp": "/assets/Sofa_154-CvRWeuCX.webp",
	"../assets/images/living/catalogue/Sofa_155.webp": "/assets/Sofa_155-Wohbj6bS.webp",
	"../assets/images/living/catalogue/Sofa_156.webp": "/assets/Sofa_156-CrX1ZukK.webp",
	"../assets/images/living/catalogue/Sofa_157.webp": "/assets/Sofa_157-Dddo8D_p.webp",
	"../assets/images/living/catalogue/Sofa_158.webp": "/assets/Sofa_155-Wohbj6bS.webp",
	"../assets/images/living/catalogue/Sofa_159.webp": "/assets/Sofa_159-owRbUCfm.webp",
	"../assets/images/living/catalogue/Sofa_160.webp": "/assets/Sofa_160-DSTDf_ln.webp",
	"../assets/images/living/catalogue/Sofa_161.webp": "/assets/Sofa_161-bRt2Whxi.webp",
	"../assets/images/living/catalogue/Sofa_162.webp": "/assets/Sofa_162-CWAntnQ6.webp",
	"../assets/images/living/catalogue/Sofa_163.webp": "/assets/Sofa_163-CAylWdq2.webp",
	"../assets/images/living/catalogue/Sofa_164.webp": "/assets/Sofa_164-DFbs0Qdo.webp",
	"../assets/images/living/catalogue/Sofa_165.webp": "/assets/Sofa_165-Du3NDpmU.webp",
	"../assets/images/living/catalogue/Sofa_166.webp": "/assets/Sofa_166-Bxq7QoMn.webp",
	"../assets/images/living/catalogue/Sofa_167.webp": "/assets/Sofa_167-Bo_w-3JR.webp",
	"../assets/images/living/catalogue/Sofa_168.webp": "/assets/Sofa_168-BQprKvsH.webp",
	"../assets/images/living/catalogue/Sofa_169.webp": "/assets/Sofa_169-DRlAgNRM.webp",
	"../assets/images/living/catalogue/Sofa_170.webp": "/assets/Sofa_170-CL_TpAMp.webp",
	"../assets/images/living/catalogue/Sofa_171.webp": "/assets/Sofa_171-Cq0mngvL.webp",
	"../assets/images/living/catalogue/Sofa_172.webp": "/assets/Sofa_172-DjidOd0I.webp",
	"../assets/images/living/catalogue/Sofa_173.webp": "/assets/Sofa_173-CkfEMU-u.webp",
	"../assets/images/living/catalogue/Sofa_174.webp": "/assets/Sofa_174-Cz_713RY.webp",
	"../assets/images/living/catalogue/Sofa_175.webp": "/assets/Sofa_175-8aa0qz6Q.webp",
	"../assets/images/living/catalogue/Sofa_176.webp": "/assets/Sofa_176-BibnkJZI.webp",
	"../assets/images/living/catalogue/Sofa_177.webp": "/assets/Sofa_177-CVlhfiIf.webp",
	"../assets/images/living/catalogue/Sofa_178.webp": "/assets/Sofa_178-DXIdB1j8.webp",
	"../assets/images/living/catalogue/Sofa_179.webp": "/assets/Sofa_179-D0kZ0TdF.webp",
	"../assets/images/living/catalogue/Sofa_180.webp": "/assets/Sofa_180-CzTU76x-.webp",
	"../assets/images/living/catalogue/Sofa_181.webp": "/assets/Sofa_181-CwHhKRs8.webp",
	"../assets/images/living/catalogue/Sofa_182.webp": "/assets/Sofa_182-DU7vyhdi.webp",
	"../assets/images/living/catalogue/Sofa_183.webp": "/assets/Sofa_183-CkmPR6gK.webp",
	"../assets/images/living/catalogue/Sofa_184.webp": "/assets/Sofa_184-kx8VlMHd.webp",
	"../assets/images/living/catalogue/Sofa_185.webp": "/assets/Sofa_185-BokBwXnP.webp",
	"../assets/images/living/catalogue/Sofa_186.webp": "/assets/Sofa_186-D692vIlB.webp",
	"../assets/images/living/catalogue/Sofa_187.webp": "/assets/Sofa_187-BkmkXsd9.webp",
	"../assets/images/living/catalogue/Sofa_188.webp": "/assets/Sofa_188-CRUqSeu1.webp",
	"../assets/images/living/catalogue/Sofa_189.webp": "/assets/Sofa_189-Wtrreqsn.webp",
	"../assets/images/living/catalogue/Sofa_190.webp": "/assets/Sofa_190-DGk5MWKK.webp",
	"../assets/images/living/catalogue/Sofa_191.webp": "/assets/Sofa_191-C4K6DnyF.webp",
	"../assets/images/living/catalogue/Sofa_192.webp": "/assets/Sofa_192-DURkrIRf.webp",
	"../assets/images/living/catalogue/Sofa_193.webp": "/assets/Sofa_193-C64UbSc6.webp",
	"../assets/images/living/catalogue/Sofa_194.webp": "/assets/Sofa_194-4ZJr8jV6.webp",
	"../assets/images/living/catalogue/Sofa_195.webp": "/assets/Sofa_195-CgJpbsPd.webp",
	"../assets/images/living/catalogue/Sofa_196.webp": "/assets/Sofa_196-CAaHo7aD.webp",
	"../assets/images/living/catalogue/Sofa_197.webp": "/assets/Sofa_197-CUvoFYoX.webp",
	"../assets/images/living/catalogue/Sofa_198.webp": "/assets/Sofa_186-D692vIlB.webp",
	"../assets/images/living/catalogue/Sofa_199.webp": "/assets/Sofa_188-CRUqSeu1.webp",
	"../assets/images/living/catalogue/Sofa_200.webp": "/assets/Sofa_002-Cnc4LNT0.webp",
	"../assets/images/living/catalogue/Sofa_201.webp": "/assets/Sofa_201-BvO-9W7A.webp",
	"../assets/images/living/catalogue/Sofa_202.webp": "/assets/Sofa_187-BkmkXsd9.webp",
	"../assets/images/living/catalogue/Sofa_203.webp": "/assets/Sofa_005-DrjGrotm.webp",
	"../assets/images/living/catalogue/Sofa_204.webp": "/assets/Sofa_204-CHaQn0mx.webp",
	"../assets/images/living/catalogue/Sofa_205.webp": "/assets/Sofa_205-xt2HmVRW.webp",
	"../assets/images/living/catalogue/Sofa_206.webp": "/assets/Sofa_206-C23M8Mvm.webp",
	"../assets/images/living/catalogue/Sofa_207.webp": "/assets/Sofa_207-5XniWKjh.webp",
	"../assets/images/living/catalogue/Sofa_208.webp": "/assets/Sofa_208-DgSlF64Q.webp",
	"../assets/images/living/catalogue/Sofa_209.webp": "/assets/Sofa_209-BnCdichF.webp",
	"../assets/images/living/catalogue/Sofa_210.webp": "/assets/Sofa_210-B6Q_Cox0.webp",
	"../assets/images/living/catalogue/Sofa_211.webp": "/assets/Sofa_187-BkmkXsd9.webp",
	"../assets/images/living/catalogue/Sofa_212.webp": "/assets/Sofa_212-DXaT6ECK.webp",
	"../assets/images/living/catalogue/Sofa_213.webp": "/assets/Sofa_213-DH3lJlp9.webp",
	"../assets/images/living/catalogue/Sofa_214.webp": "/assets/Sofa_214-ccH2U9bZ.webp",
	"../assets/images/living/catalogue/Sofa_215.webp": "/assets/Sofa_215-C7pcEdO9.webp",
	"../assets/images/living/catalogue/Sofa_216.webp": "/assets/Sofa_216-C29SR_dU.webp",
	"../assets/images/living/catalogue/Sofa_217.webp": "/assets/Sofa_217-tG5FgZ6Q.webp",
	"../assets/images/living/catalogue/Sofa_218.webp": "/assets/Sofa_218-DSor9FCK.webp",
	"../assets/images/living/catalogue/Sofa_219.webp": "/assets/Sofa_219-2A3C5Rzw.webp",
	"../assets/images/living/catalogue/Sofa_220.webp": "/assets/Sofa_220--bf0JWp7.webp",
	"../assets/images/living/catalogue/Sofa_221.webp": "/assets/Sofa_221-Dyr8LiTD.webp",
	"../assets/images/living/catalogue/Sofa_222.webp": "/assets/Sofa_079-BZCEI8gK.webp",
	"../assets/images/living/catalogue/Sofa_223.webp": "/assets/Sofa_223-ByOysG-m.webp",
	"../assets/images/living/catalogue/Sofa_224.webp": "/assets/Sofa_224-nI5WSU-f.webp",
	"../assets/images/living/catalogue/Sofa_225.webp": "/assets/Sofa_225-CJ6vZOi1.webp",
	"../assets/images/living/catalogue/Sofa_226.webp": "/assets/Sofa_226-DD-ExWWX.webp",
	"../assets/images/living/catalogue/Sofa_227.webp": "/assets/Sofa_227-sKaFLYsI.webp",
	"../assets/images/living/catalogue/Sofa_228.webp": "/assets/Sofa_228-zQPGi7Zk.webp",
	"../assets/images/living/catalogue/Sofa_229.webp": "/assets/Sofa_229-WpqC7uPU.webp",
	"../assets/images/living/catalogue/Sofa_230.webp": "/assets/Sofa_230-CngGHTfM.webp",
	"../assets/images/living/catalogue/Sofa_231.webp": "/assets/Sofa_231-BuxsDhyv.webp",
	"../assets/images/living/catalogue/Sofa_232.webp": "/assets/Sofa_232-DjrykKqs.webp",
	"../assets/images/living/catalogue/Sofa_233.webp": "/assets/Sofa_233-B1eOX4LL.webp",
	"../assets/images/living/catalogue/Sofa_234.webp": "/assets/Sofa_234-DxM1x7v2.webp",
	"../assets/images/living/catalogue/Sofa_235.webp": "/assets/Sofa_235-DbCpKm1Q.webp",
	"../assets/images/living/catalogue/Sofa_236.webp": "/assets/Sofa_236-AMYBpg_G.webp",
	"../assets/images/living/catalogue/Sofa_237.webp": "/assets/Sofa_237-Doe8UneH.webp",
	"../assets/images/living/catalogue/Sofa_238.webp": "/assets/Sofa_238-Df3AWKb1.webp",
	"../assets/images/living/catalogue/Sofa_239.webp": "/assets/Sofa_239-BCnrA1YA.webp",
	"../assets/images/living/catalogue/Sofa_240.webp": "/assets/Sofa_240-BfNjf68k.webp",
	"../assets/images/living/catalogue/Sofa_241.webp": "/assets/Sofa_241-Cq_VQgvJ.webp",
	"../assets/images/living/catalogue/Sofa_242.webp": "/assets/Sofa_242-CDB87d7W.webp",
	"../assets/images/living/catalogue/Sofa_243.webp": "/assets/Sofa_243-DzkSYY_k.webp",
	"../assets/images/living/catalogue/Sofa_244.webp": "/assets/Sofa_244-CuzRqMDa.webp",
	"../assets/images/living/catalogue/Sofa_245.webp": "/assets/Sofa_245-84nna3PQ.webp",
	"../assets/images/living/catalogue/Sofa_246.webp": "/assets/Sofa_246-ClTV-mys.webp",
	"../assets/images/living/catalogue/Sofa_247.webp": "/assets/Sofa_247-DYfP7Z5Z.webp",
	"../assets/images/living/catalogue/Sofa_248.webp": "/assets/Sofa_248--pW5oWsp.webp",
	"../assets/images/living/catalogue/Sofa_249.webp": "/assets/Sofa_249-CWwfo8Gp.webp",
	"../assets/images/living/catalogue/Sofa_250.webp": "/assets/Sofa_250-C43YovmF.webp",
	"../assets/images/living/catalogue/Sofa_251.webp": "/assets/Sofa_251-jrFfyW7x.webp",
	"../assets/images/living/catalogue/Sofa_252.webp": "/assets/Sofa_252-BwIDQpr3.webp",
	"../assets/images/living/living-01-classic-gold-sofa-set.webp": "/assets/living-01-classic-gold-sofa-set-CF7k61xW.webp",
	"../assets/images/living/living-02-embroidery-sofa-set.webp": "/assets/living-02-embroidery-sofa-set-D7KZI8t2.webp",
	"../assets/images/living/living-03-blue-embroidery-sofa.webp": "/assets/living-03-blue-embroidery-sofa-HPhDqsk_.webp",
	"../assets/images/living/living-04-gold-navy-sofa.webp": "/assets/living-04-gold-navy-sofa-DZYEM0GQ.webp",
	"../assets/images/living/living-05-beige-tufted-sofa.webp": "/assets/living-05-beige-tufted-sofa-Dq3FcxYs.webp",
	"../assets/images/living/living-06-grey-embroidered-sofa.webp": "/assets/living-06-grey-embroidered-sofa-DjFocxvC.webp",
	"../assets/images/living/living-07-modern-teal-sofa.webp": "/assets/Sofa_028-CPSKFfqf.webp",
	"../assets/images/living/living-08-cozy-sectional-post.webp": "/assets/living-08-cozy-sectional-post-BcKYmZfj.webp",
	"../assets/images/living/living-09-premium-living-set.webp": "/assets/living-09-premium-living-set-2bHEsRP3.webp",
	"../assets/images/living/living-10-navy-tufted-carved-sofa.webp": "/assets/living-10-navy-tufted-carved-sofa-0uQ14BTw.webp",
	"../assets/images/living/living-10-vintage-coffee-table.webp": "/assets/living-10-vintage-coffee-table-B9E9L6IB.webp",
	"../assets/images/living/living-11-cozy-chair-post.webp": "/assets/living-11-cozy-chair-post-qfGP9ucg.webp",
	"../assets/images/living/living-11-olive-chaise-lounge.webp": "/assets/living-11-olive-chaise-lounge-BdZtNVBq.webp",
	"../assets/images/living/living-12-grey-floral-tufted-sofa.webp": "/assets/living-12-grey-floral-tufted-sofa-seI9Acgt.webp",
	"../assets/images/living/living-13-teal-modern-styled-set.webp": "/assets/living-13-teal-modern-styled-set-_02w_zaq.webp",
	"../assets/images/office/catalogue/Office_Furniture_001.webp": "/assets/Office_Furniture_001-BZFLgaLk.webp",
	"../assets/images/office/catalogue/Office_Furniture_002.webp": "/assets/Office_Furniture_002-B5iUkgQ_.webp",
	"../assets/images/office/catalogue/Office_Furniture_003.webp": "/assets/Office_Furniture_003-DaciCvQY.webp",
	"../assets/images/office/catalogue/Office_Furniture_004.webp": "/assets/Office_Furniture_004-CPFUGVpB.webp",
	"../assets/images/office/catalogue/Office_Furniture_005.webp": "/assets/Office_Furniture_005-k_LOs3IJ.webp",
	"../assets/images/office/catalogue/Office_Furniture_006.webp": "/assets/Office_Furniture_006-Dg_XEsqv.webp",
	"../assets/images/office/catalogue/Office_Furniture_007.webp": "/assets/Office_Furniture_007-Cuv6qUFG.webp",
	"../assets/images/office/catalogue/Office_Furniture_008.webp": "/assets/Office_Furniture_008-C-XKmY17.webp",
	"../assets/images/office/catalogue/Office_Furniture_009.webp": "/assets/Office_Furniture_009-CRKqP_BX.webp",
	"../assets/images/office/catalogue/Office_Furniture_010.webp": "/assets/Office_Furniture_010-FnzFzGkG.webp",
	"../assets/images/office/catalogue/Office_Furniture_011.webp": "/assets/Office_Furniture_011-D_YUsSnG.webp",
	"../assets/images/office/catalogue/Office_Furniture_012.webp": "/assets/Office_Furniture_012-3ZlsYQfT.webp",
	"../assets/images/office/catalogue/Office_Furniture_013.webp": "/assets/Office_Furniture_013-DZKY7S4s.webp",
	"../assets/images/office/catalogue/Office_Furniture_014.webp": "/assets/Office_Furniture_014-CrVh8YYn.webp",
	"../assets/images/office/catalogue/Office_Furniture_015.webp": "/assets/Office_Furniture_015-BMZVNa_P.webp",
	"../assets/images/office/catalogue/Office_Furniture_016.webp": "/assets/Office_Furniture_016-BotnUQxt.webp",
	"../assets/images/office/office-01-director-desk-CLEAN.webp": "/assets/Office_Furniture_007-Cuv6qUFG.webp",
	"../assets/images/office/office-02-conference-room-CLEAN.webp": "/assets/Office_Furniture_002-B5iUkgQ_.webp",
	"../assets/images/office/office-03-workspace-with-text-overlay.webp": "/assets/office-03-workspace-with-text-overlay-DtTHtrad.webp",
	"../assets/images/office/office-04-chair-with-text-overlay.webp": "/assets/Office_Furniture_005-k_LOs3IJ.webp",
	"../assets/images/office/office-05-workspace.webp": "/assets/Dining_Set_018-o09k8B1D.webp",
	"../assets/images/office/office-06-executive-desk-city-view.webp": "/assets/office-06-executive-desk-city-view-Ct6b3Spq.webp",
	"../assets/images/office/office-07-modern-led-workstation.webp": "/assets/office-07-modern-led-workstation-C48PyQg3.webp"
});
var byName = {};
var catalogueByCategory = {};
for (const [path, url] of Object.entries(modules)) {
	const file = path.split("/").pop();
	byName[file] = url;
	const match = path.match(/assets\/images\/([^/]+)\/catalogue\//);
	if (match?.[1]) {
		const category = match[1];
		(catalogueByCategory[category] ??= []).push({
			file,
			url
		});
	}
}
for (const list of Object.values(catalogueByCategory)) list.sort((a, b) => a.file.localeCompare(b.file));
/**
* Resolve a brand asset URL by its original filename (e.g. "logo-mark-light.png").
* All raster photography now ships as .webp only (converted for performance) —
* any legacy .jpg/.jpeg/.png reference transparently falls back to the .webp twin
* so existing data/component references never need to change.
*/
function img(filename) {
	let url = byName[filename];
	if (!url && /\.(jpe?g|png)$/i.test(filename)) url = byName[filename.replace(/\.(jpe?g|png)$/i, ".webp")];
	return url ?? "";
}
/** Full raw catalogue photo set for a collection category (e.g. "living"), in stable order. */
function catalogueImages(category) {
	return catalogueByCategory[category] ?? [];
}
Object.keys(byName);
var company = {
	name: "Heaven Furniture Mart",
	tagline: "Crafting Bespoke Luxury for Inspired Living",
	secondaryLine: "Furniture, crafted around your space, your taste, your life.",
	category: "Luxury / Bespoke Furniture & Interior Styling",
	founded: 2020,
	founder: "Abul Kalam Bhuiyan",
	founderRole: "Managing Director",
	phone: "+880 1960-481983",
	phoneHref: "tel:+8801960481983",
	whatsapp: "8801960481983",
	email: "heavenfurnituremart@gmail.com",
	emailHref: "mailto:heavenfurnituremart@gmail.com",
	addressShort: "Agrabad Access Road, Chattogram",
	addressFull: "Opposite of RAK Ceramics, Agrabad Access Road, Chattogram, 4217",
	mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Heaven Furniture Mart, Agrabad Access Road, Chattogram 4217, Bangladesh"),
	social: {
		facebook: "https://www.facebook.com/HeavenFurnitureMart",
		instagram: "https://www.instagram.com/heaven_furniture_ltd",
		youtube: "https://youtube.com/@heavenfurnituremart"
	}
};
var aboutBrand = {
	heading: "About the Brand",
	body: "Heaven Furniture Mart is one of the leading bespoke furniture brands in Chattogram, known for crafting premium-quality custom furniture that blends elegance, comfort, and durability."
};
var whyChooseUs = [
	"Bespoke Custom Furniture",
	"Skilled Craftsmanship",
	"Premium Wood & Materials",
	"Modern + Classic Design Fusion",
	"Customization Available",
	"Attention to Detail",
	"Long-lasting Durability"
];
var services = [
	{
		title: "Complete Interior Solutions",
		body: "Beyond individual furniture pieces, we help create beautiful, coordinated living and working spaces through furniture, styling, and interior solutions."
	},
	{
		title: "Bespoke Furniture",
		body: "Furniture designed around your space, style, and vision — from custom dimensions to personalized designs and finishes."
	},
	{
		title: "Luxury Craftsmanship",
		body: "Where premium materials, skilled craftsmanship, and attention to detail come together to create furniture made to impress and last."
	}
];
var ourServices = [
	"Free Design Consultation",
	"Delivery & Setup Available",
	"Easy Payment Options Available"
];
var scaleAndTrust = [
	"Trusted by hundreds of happy homeowners",
	"Complete home furnishing solutions",
	"In-house design consultation",
	"Large physical showroom in Chattogram",
	"Delivery & installation support"
];
var mdQuote = {
	quote: "At Heaven Furniture Mart, we believe furniture is more than just function; it is a reflection of lifestyle, taste, and comfort. Every piece we create is designed to bring lasting elegance into the homes of our clients.",
	author: "Abul Kalam Bhuiyan",
	role: "Managing Director"
};
var closing = {
	heading: "Let's Design Your Dream Space",
	body: "Heaven Furniture Mart delivers furniture that reflects success, taste, and comfort. We combine design, durability, and personalization — giving you furniture that truly feels yours."
};
var faqs = [
	{
		q: "Do you make custom furniture?",
		a: "Yes. Furniture can be designed around your space, measurements and preferences."
	},
	{
		q: "Where is your showroom?",
		a: "Agrabad Access Road, Chattogram."
	},
	{
		q: "Do you offer delivery and installation?",
		a: "Yes — delivery and setup are available."
	},
	{
		q: "Can I discuss a custom design before ordering?",
		a: "Yes — every project starts with a free design consultation."
	},
	{
		q: "Do you make office furniture too?",
		a: "Yes — executive tables, bookshelves and workstations, bespoke or standard."
	}
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function lockBodyScroll() {
	window.__hfmScrollLockCount = (window.__hfmScrollLockCount || 0) + 1;
	if (window.__hfmScrollLockCount === 1) {
		window.__hfmOriginalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
	}
}
function unlockBodyScroll() {
	if (window.__hfmScrollLockCount) window.__hfmScrollLockCount = Math.max(0, window.__hfmScrollLockCount - 1);
	if ((window.__hfmScrollLockCount || 0) === 0) {
		document.body.style.overflow = window.__hfmOriginalOverflow ?? "";
		window.__hfmOriginalOverflow = void 0;
	}
}
/**
* Pointer-follow spring physics shared by MagneticLink and MagneticButton.
* Element pulls slightly toward the cursor on hover, springs back on leave.
* Works on any element ref (anchor, button) — extracted so the effect isn't
* locked to <Link>.
*/
function useMagnetic() {
	const ref = (0, import_react.useRef)(null);
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, {
		stiffness: 200,
		damping: 18,
		mass: .4
	});
	const springY = useSpring(y, {
		stiffness: 200,
		damping: 18,
		mass: .4
	});
	const onMouseMove = (e) => {
		const el = ref.current;
		if (!el) return;
		const rect = el.getBoundingClientRect();
		const relX = e.clientX - rect.left - rect.width / 2;
		const relY = e.clientY - rect.top - rect.height / 2;
		x.set(relX * .28);
		y.set(relY * .35);
	};
	const onMouseLeave = () => {
		x.set(0);
		y.set(0);
	};
	return {
		ref,
		springX,
		springY,
		onMouseMove,
		onMouseLeave
	};
}
/**
* A Link that pulls itself slightly toward the pointer on hover, then springs
* back on leave — the "magnetic button" micro-interaction common on premium
* furniture/agency sites (Minotti, Poliform). Falls back to a plain static
* link for touch/reduced-motion, since the effect only makes sense with a mouse.
*/
function MagneticLink({ children, className, ...props }) {
	const { ref, springX, springY, onMouseMove, onMouseLeave } = useMagnetic();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
		style: {
			x: springX,
			y: springY,
			display: "inline-block"
		},
		onMouseMove,
		onMouseLeave,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			ref,
			className,
			...props,
			children
		})
	});
}
var nav = [
	{
		to: "/collections",
		label: "Collections"
	},
	{
		to: "/bespoke",
		label: "Bespoke"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/showroom",
		label: "Showroom"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Navbar() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 24);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) setOpen(false);
		};
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const handleKeyDown = (event) => {
			if (event.key === "Escape") setOpen(false);
		};
		lockBodyScroll();
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			unlockBodyScroll();
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled || open ? "bg-charcoal/95 backdrop-blur supports-[backdrop-filter]:bg-charcoal/85" : "bg-transparent"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm flex h-18 items-center justify-between py-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-3",
					"aria-label": "Heaven Furniture Mart — home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img("logo-mark-light.webp"),
						alt: "Heaven Furniture Mart logo",
						className: "h-8 w-auto",
						width: 120,
						height: 44
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: "Heaven Furniture Mart"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-7 lg:flex",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						className: "group relative py-2 text-sm font-medium tracking-wide text-ivory/80 transition-colors duration-200 hover:text-gold",
						activeProps: { className: "text-gold font-semibold" },
						children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute bottom-0 left-0 h-[2px] w-full rounded-full transition-all duration-300", isActive ? "bg-gold opacity-100 scale-x-100" : "bg-gold/0 opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:bg-gold/40 group-hover:opacity-100") })] })
					}, n.to))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden items-center gap-4 lg:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: company.phoneHref,
						className: "text-ivory/85 hover:text-gold inline-flex items-center gap-2 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": true
						}), company.phone]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticLink, {
						to: "/contact",
						className: "bg-gold text-accent-foreground rounded-sm px-5 py-2.5 text-sm font-semibold tracking-wide transition-opacity hover:opacity-90",
						children: "Request a Consultation"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen((v) => !v),
					"aria-expanded": open,
					"aria-controls": "mobile-menu",
					"aria-label": open ? "Close menu" : "Open menu",
					className: "lg:hidden rounded-md p-2 transition-colors duration-300 \n             bg-charcoal/60 backdrop-blur-sm \n             text-ivory hover:bg-gold hover:text-charcoal active:scale-90",
					children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-6" })
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			className: "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden",
			initial: { opacity: 0 },
			animate: { opacity: 1 },
			exit: { opacity: 0 },
			transition: {
				duration: .22,
				ease: "easeOut"
			},
			onClick: () => setOpen(false),
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.aside, {
			id: "mobile-menu",
			role: "dialog",
			"aria-modal": "true",
			"aria-label": "Mobile navigation",
			className: "fixed left-0 top-0 z-50 flex h-dvh w-[88vw] max-w-[400px] flex-col bg-charcoal text-ivory shadow-2xl lg:hidden",
			initial: { x: "-100%" },
			animate: { x: 0 },
			exit: { x: "-100%" },
			transition: {
				type: "spring",
				stiffness: 320,
				damping: 32,
				mass: .8
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-ivory/10 px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					onClick: () => setOpen(false),
					className: "flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img("logo-mark-light.webp"),
						alt: "Heaven Furniture Mart logo",
						className: "h-7 w-auto",
						width: 100,
						height: 32
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setOpen(false),
					"aria-label": "Close menu",
					className: "flex h-10 w-10 items-center justify-center rounded-full text-ivory/80 transition-colors duration-200 hover:bg-ivory/10 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
						className: "size-5",
						"aria-hidden": "true"
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "flex-1 overflow-y-auto px-5 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
					initial: "closed",
					animate: "open",
					variants: { open: { transition: {
						delayChildren: .08,
						staggerChildren: .06
					} } },
					className: "flex flex-col",
					children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						variants: {
							closed: {
								opacity: 0,
								x: -18
							},
							open: {
								opacity: 1,
								x: 0
							}
						},
						transition: {
							duration: .26,
							ease: "easeOut"
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: n.to,
							onClick: () => setOpen(false),
							className: "group flex items-center justify-between border-b border-ivory/10 py-4 text-[17px] font-medium tracking-wide transition-colors duration-200 hover:text-gold focus:outline-none focus:text-gold",
							activeProps: { className: "text-gold font-semibold" },
							children: ({ isActive }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(217,162,58,0.8)]",
									"aria-hidden": "true"
								}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.label })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: cn("text-sm transition-all duration-200", isActive ? "text-gold font-serif text-xs uppercase tracking-widest" : "text-ivory/30 group-hover:translate-x-1 group-hover:text-gold"),
								children: isActive ? "Current" : "→"
							})] })
						})
					}, n.to))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					initial: {
						opacity: 0,
						y: 10
					},
					animate: {
						opacity: 1,
						y: 0
					},
					transition: {
						delay: .34,
						duration: .25,
						ease: "easeOut"
					},
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: company.phoneHref,
						className: "flex items-center gap-3 py-3 text-base text-ivory/80 transition-colors hover:text-gold",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
							className: "size-4",
							"aria-hidden": "true"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: company.phone })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						onClick: () => setOpen(false),
						className: "mt-4 block w-full rounded-sm bg-gold px-5 py-3.5 text-center font-semibold text-accent-foreground transition-all duration-200 hover:brightness-95 active:scale-[0.98]",
						children: "Request a Consultation"
					})]
				})]
			})]
		})] }) })]
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "bg-charcoal text-ivory",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-hfm grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img("logo-mark-light.webp"),
						alt: "Heaven Furniture Mart logo",
						className: "h-14 w-auto",
						width: 196,
						height: 56,
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-ivory/70 mt-5 max-w-xs text-sm leading-relaxed",
						children: [
							company.tagline,
							". Bespoke furniture and interior styling from Agrabad, Chattogram since",
							" ",
							company.founded,
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.social.facebook,
								target: "_blank",
								rel: "noreferrer noopener",
								"aria-label": "Heaven Furniture Mart on Facebook",
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
								"aria-label": "Heaven Furniture Mart on Instagram",
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
								"aria-label": "Heaven Furniture Mart on YouTube",
								className: "border-ivory/20 hover:border-gold hover:text-gold rounded-sm border p-2.5 transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Youtube, {
									className: "size-4",
									"aria-hidden": true
								})
							})
						]
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-gold font-serif text-sm tracking-[0.22em] uppercase",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-5 space-y-3 text-sm",
					children: [
						{
							to: "/collections",
							label: "Collections"
						},
						{
							to: "/bespoke",
							label: "Bespoke Process"
						},
						{
							to: "/about",
							label: "About Us"
						},
						{
							to: "/showroom",
							label: "Showroom"
						},
						{
							to: "/contact",
							label: "Contact"
						}
					].map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-ivory/75 hover:text-gold transition-colors",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-gold font-serif text-sm tracking-[0.22em] uppercase",
					children: "Collections"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "text-ivory/75 mt-5 space-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Living Room Collection" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bedroom Collection" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Dining Collection" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Office & Study" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Custom & Space-Saving Furniture" })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-gold font-serif text-sm tracking-[0.22em] uppercase",
					children: "Visit & Talk"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-5 space-y-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
								className: "text-gold mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.mapsUrl,
								target: "_blank",
								rel: "noreferrer noopener",
								className: "text-ivory/75 hover:text-gold transition-colors",
								children: company.addressFull
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
								className: "text-gold mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.phoneHref,
								className: "text-ivory/75 hover:text-gold transition-colors",
								children: company.phone
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
								className: "text-gold mt-0.5 size-4 shrink-0",
								"aria-hidden": true
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: company.emailHref,
								className: "text-ivory/75 hover:text-gold transition-colors",
								children: company.email
							})]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-ivory/10 border-t",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm text-ivory/50 flex flex-col gap-2 py-6 text-xs sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					company.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"EST. ",
					company.founded,
					" · Agrabad, Chattogram, Bangladesh"
				] })]
			})
		})]
	});
}
/**
* Wraps children in a scroll-linked vertical translate. Used to give image
* layers depth against static text (image moves slower/faster than scroll),
* matching the parallax treatment used across premium furniture sites
* (Minotti, Poliform, Roche Bobois) instead of flat scroll-triggered fades.
*/
function Parallax({ children, className, strength = 60 }) {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const y = useTransform(scrollYProgress, [0, 1], [strength, -strength]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		className: cn("overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			style: { y },
			className: "size-full",
			children
		})
	});
}
function SiteLayout({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "focus:bg-gold focus:text-accent-foreground sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100 focus:rounded-sm focus:px-4 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				className: "flex-1",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function PageHero({ eyebrow, title, intro, image, imageAlt }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-charcoal relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Parallax, {
				strength: 40,
				className: "absolute inset-0 size-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: imageAlt,
					className: "size-full scale-110 object-cover opacity-30"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "from-charcoal/95 via-charcoal/70 to-charcoal/90 absolute inset-0 bg-gradient-to-b" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-hfm relative pt-36 pb-16 md:pt-44 md:pb-24",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow text-gold",
						children: eyebrow
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "display-lg text-ivory mt-4 max-w-3xl",
						children: title
					}),
					intro && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ivory/75 mt-5 max-w-2xl leading-relaxed",
						children: intro
					})
				]
			})
		]
	});
}
//#endregion
export { unlockBodyScroll as _, aboutBrand as a, cn as c, img as d, lockBodyScroll as f, services as g, scaleAndTrust as h, SiteLayout as i, company as l, ourServices as m, PageHero as n, catalogueImages as o, mdQuote as p, Parallax as r, closing as s, MagneticLink as t, faqs as u, useMagnetic as v, whyChooseUs as y };
