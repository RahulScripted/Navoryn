import type { StickerWord } from "./StickerSwapHeadline"

const IMG_1 = "https://images.unsplash.com/photo-1592187270271-9a4b84faa228?w=320&h=320&fit=crop&crop=center&auto=format"
const IMG_2 = "https://images.unsplash.com/photo-1602848596140-33c2b48c6ade?w=320&h=320&fit=crop&crop=center&auto=format"
const IMG_3 = "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=320&h=320&fit=crop&crop=center&auto=format"

export const words: StickerWord[] = [
  { word: "Curious", alt: "A halved orange",       sticker: IMG_1 },
  { word: "Loud",    alt: "A vinyl record", spin: true, sticker: IMG_2 },
  { word: "Golden",  alt: "A sunflower",            sticker: IMG_3 },
]
