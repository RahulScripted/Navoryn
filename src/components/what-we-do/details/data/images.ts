import type { ServiceId } from "../../types/service"
import web1 from "@/asset/webps/services/web/web-1.webp"
import web2 from "@/asset/webps/services/web/web-2.webp"
import web3 from "@/asset/webps/services/web/web-3.webp"
import web4 from "@/asset/webps/services/web/web-4.webp"
import saas1 from "@/asset/webps/services/saas/saas-1.webp"
import saas2 from "@/asset/webps/services/saas/saas-2.webp"
import saas3 from "@/asset/webps/services/saas/saas-3.webp"
import saas4 from "@/asset/webps/services/saas/saas-4.webp"
import mobile1 from "@/asset/webps/services/mobile/mobile-1.webp"
import mobile2 from "@/asset/webps/services/mobile/mobile-2.webp"
import mobile3 from "@/asset/webps/services/mobile/mobile-3.webp"
import mobile4 from "@/asset/webps/services/mobile/mobile-4.webp"
import ui1 from "@/asset/webps/services/ui-ux/ui-1.webp"
import ui2 from "@/asset/webps/services/ui-ux/ui-2.webp"

export interface DetailImage {
  src: string
  shift: { x: number; y: number }
}

export const DETAIL_IMAGES: Partial<Record<ServiceId, (DetailImage | null)[]>> = {
  "web-development": [
    { src: web1, shift: { x: -0.27, y: 0.49 } },
    { src: web2, shift: { x: -1.9, y: 0.6 } },
    { src: web3, shift: { x: -0.4, y: 1.71 } },
    { src: web4, shift: { x: 0.24, y: 2.2 } },
  ],
  "saas-mvp-development": [
    { src: saas1, shift: { x: -2.42, y: -0.33 } },
    { src: saas2, shift: { x: -3.33, y: 1.51 } },
    { src: saas3, shift: { x: -0.24, y: 0.59 } },
    { src: saas4, shift: { x: -3.02, y: -1.22 } },
  ],
  "mobile-app-development": [
    { src: mobile1, shift: { x: -2.75, y: 1.07 } },
    { src: mobile2, shift: { x: -0.58, y: -1.03 } },
    { src: mobile3, shift: { x: -0.89, y: 1.66 } },
    { src: mobile4, shift: { x: -0.67, y: 3.08 } },
  ],
  "ui-ux-product-design": [
    { src: ui1, shift: { x: -0.03, y: -1.76 } },
    { src: ui2, shift: { x: 0.67, y: -1.76 } },
  ],
}
