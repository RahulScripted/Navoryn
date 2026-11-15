import type { ServiceId } from "../../types/service"
import web1 from "@/asset/webps/web-1.webp"
import web2 from "@/asset/webps/web-2.webp"
import web3 from "@/asset/webps/web-3.webp"
import web4 from "@/asset/webps/web-4.webp"
import saas1 from "@/asset/webps/saas-1.webp"
import saas2 from "@/asset/webps/saas-2.webp"

export interface DetailImage {
  src: string
  /**
   * Percent of the media box to move the picture so its visible artwork (not the file, which has
   * uneven transparent margins) is centered. Measured from each image's alpha channel.
   */
  shift: { x: number; y: number }
}

/** Illustrations for the highlight cards, in card order. Services not listed here show blank cards. */
export const DETAIL_IMAGES: Partial<Record<ServiceId, DetailImage[]>> = {
  "web-development": [
    { src: web1, shift: { x: -0.27, y: 0.49 } },
    { src: web2, shift: { x: -1.9, y: 0.6 } },
    { src: web3, shift: { x: -0.4, y: 1.71 } },
    { src: web4, shift: { x: 0.24, y: 2.2 } },
  ],
  "saas-mvp-development": [
    { src: saas1, shift: { x: -2.42, y: -0.33 } },
    { src: saas2, shift: { x: -3.33, y: 1.51 } },
  ],
}
