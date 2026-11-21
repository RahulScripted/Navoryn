import type { StickerWord } from "./StickerSwapHeadline"

const IMG_1 = "/preloader/sticker-1.webp"
const IMG_2 = "/preloader/sticker-2.webp"
const IMG_3 = "/preloader/sticker-3.webp"

export const words: StickerWord[] = [
  { word: "Curious", alt: "A halved orange",       sticker: IMG_1 },
  { word: "Loud",    alt: "A vinyl record", spin: true, sticker: IMG_2 },
  { word: "Golden",  alt: "A sunflower",            sticker: IMG_3 },
]
