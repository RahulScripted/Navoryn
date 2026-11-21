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
import ui3 from "@/asset/webps/services/ui-ux/ui-3.webp"
import ui4 from "@/asset/webps/services/ui-ux/ui-4.webp"

import redesign1 from "@/asset/webps/services/redesign/redesign-1.webp"
import redesign2 from "@/asset/webps/services/redesign/redesign-2.webp"
import redesign3 from "@/asset/webps/services/redesign/redesign-3.webp"
import redesign4 from "@/asset/webps/services/redesign/redesign-4.webp"
import seo1 from "@/asset/webps/services/seo/seo-1.webp"
import seo2 from "@/asset/webps/services/seo/seo-2.webp"
import seo3 from "@/asset/webps/services/seo/seo-3.webp"
import seo4 from "@/asset/webps/services/seo/seo-4.webp"
import api1 from "@/asset/webps/services/api/api-1.webp"
import api2 from "@/asset/webps/services/api/api-2.webp"
import api3 from "@/asset/webps/services/api/api-3.webp"
import api4 from "@/asset/webps/services/api/api-4.webp"
import social1 from "@/asset/webps/services/social/social-1.webp"
import social2 from "@/asset/webps/services/social/social-2.webp"
import social3 from "@/asset/webps/services/social/social-3.webp"
import social4 from "@/asset/webps/services/social/social-4.webp"
import business1 from "@/asset/webps/services/business/business-1.webp"
import business2 from "@/asset/webps/services/business/business-2.webp"
import business3 from "@/asset/webps/services/business/business-3.webp"
import business4 from "@/asset/webps/services/business/business-4.webp"
import ecom1 from "@/asset/webps/services/e-commerce/e-commerce-1.webp"
import ecom2 from "@/asset/webps/services/e-commerce/e-commerce-2.webp"
import ecom3 from "@/asset/webps/services/e-commerce/e-commerce-3.webp"
import ecom4 from "@/asset/webps/services/e-commerce/e-commerce-4.webp"
import legacy1 from "@/asset/webps/services/legacy/legacy-1.webp"
import legacy2 from "@/asset/webps/services/legacy/legacy-2.webp"
import legacy3 from "@/asset/webps/services/legacy/legacy-3.webp"
import legacy4 from "@/asset/webps/services/legacy/legacy-4.webp"
import maint1 from "@/asset/webps/services/maintaince/maintenance-1.webp"
import maint2 from "@/asset/webps/services/maintaince/maintenance-2.webp"
import maint3 from "@/asset/webps/services/maintaince/maintenance-3.webp"
import maint4 from "@/asset/webps/services/maintaince/maintenance-4.webp"
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
    { src: ui3, shift: { x: -1.29, y: 3.08 } },
    { src: ui4, shift: { x: -3.08, y: 1.07 } },
  ],
  "website-app-redesign": [
    { src: redesign1, shift: { x: 0, y: 0 } },
    { src: redesign2, shift: { x: 0, y: 0 } },
    { src: redesign3, shift: { x: 0, y: 0 } },
    { src: redesign4, shift: { x: 0, y: 0 } },
  ],
  "seo-digital-growth": [
    { src: seo1, shift: { x: 0, y: 0 } },
    { src: seo2, shift: { x: 0, y: 0 } },
    { src: seo3, shift: { x: 0, y: 0 } },
    { src: seo4, shift: { x: 0, y: 0 } },
  ],
  "api-platform-integrations": [
    { src: api1, shift: { x: 0, y: 0 } },
    { src: api2, shift: { x: 0, y: 0 } },
    { src: api3, shift: { x: 0, y: 0 } },
    { src: api4, shift: { x: 0, y: 0 } },
  ],
  "social-media-integrations": [
    { src: social1, shift: { x: 0, y: 0 } },
    { src: social2, shift: { x: 0, y: 0 } },
    { src: social3, shift: { x: 0, y: 0 } },
    { src: social4, shift: { x: 0, y: 0 } },
  ],
  "business-automation": [
    { src: business1, shift: { x: 0, y: 0 } },
    { src: business2, shift: { x: 0, y: 0 } },
    { src: business3, shift: { x: 0, y: 0 } },
    { src: business4, shift: { x: 0, y: 0 } },
  ],
  "ecommerce-payments": [
    { src: ecom1, shift: { x: 0, y: 0 } },
    { src: ecom2, shift: { x: 0, y: 0 } },
    { src: ecom3, shift: { x: 0, y: 0 } },
    { src: ecom4, shift: { x: 0, y: 0 } },
  ],
  "legacy-modernization": [
    { src: legacy1, shift: { x: 0, y: 0 } },
    { src: legacy2, shift: { x: 0, y: 0 } },
    { src: legacy3, shift: { x: 0, y: 0 } },
    { src: legacy4, shift: { x: 0, y: 0 } },
  ],
  "maintenance-optimization": [
    { src: maint1, shift: { x: 0, y: 0 } },
    { src: maint2, shift: { x: 0, y: 0 } },
    { src: maint3, shift: { x: 0, y: 0 } },
    { src: maint4, shift: { x: 0, y: 0 } },
  ],
}
