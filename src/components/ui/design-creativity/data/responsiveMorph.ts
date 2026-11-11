/*
  Keyframes for the responsive-layout morph (desktop → tablet → mobile).
  Every animated value is stored as its three states [desktop, tablet, mobile];
  the component expands them into the 9s hold/move timeline.
  Coordinates are in the SVG's "110 10 580 400" viewBox.
*/

export type Triple = [number, number, number]

export interface MorphRect {
  x: Triple
  y: Triple
  w: Triple
  h: Triple
  /** Static corner radius, or animated per state. */
  rx: number | Triple
  className: string
}

export interface StaticShape {
  kind: "rect" | "circle"
  x: number
  y: number
  w?: number
  h?: number
  r?: number
  rx?: number
  className: string
}

export interface StateGroup {
  /** Visible in [desktop, tablet, mobile]. */
  opacity: Triple
  shapes: StaticShape[]
}

const CARD = "fill-background stroke-border [stroke-width:1.5]"
const ICON = "fill-foreground"
const LINE_A = "fill-foreground/25"
const LINE_B = "fill-foreground/12"

/** Device frame + screen, drawn first. */
export const DEVICE: MorphRect[] = [
  {
    x: [120, 250, 310], y: [40, 20, 30], w: [560, 300, 180], h: [340, 380, 360],
    rx: [14, 24, 34], className: "fill-foreground",
  },
  {
    x: [130, 260, 320], y: [50, 30, 40], w: [540, 280, 160], h: [320, 360, 340],
    rx: [6, 14, 24], className: "fill-background",
  },
]

/** Page content that reflows between breakpoints. */
export const CONTENT: MorphRect[] = [
  // Nav bar + logo
  { x: [138, 268, 328], y: [82, 38, 62], w: [524, 264, 144], h: [28, 28, 24], rx: 6, className: "fill-muted" },
  { x: [146, 276, 336], y: [90, 46, 69], w: [60, 50, 40], h: [12, 12, 10], rx: 4, className: "fill-foreground" },

  // Hero, title, subtitle, button
  { x: [138, 268, 328], y: [118, 74, 96], w: [524, 264, 144], h: [90, 100, 90], rx: 10, className: "fill-foreground" },
  { x: [158, 286, 344], y: [138, 92, 112], w: [200, 150, 90], h: [14, 12, 10], rx: 5, className: "fill-background/95" },
  { x: [158, 286, 344], y: [162, 114, 132], w: [260, 200, 112], h: [8, 7, 6], rx: 4, className: "fill-background/70" },
  { x: [158, 286, 344], y: [180, 136, 152], w: [80, 64, 64], h: [16, 14, 14], rx: 7, className: "fill-background" },

  // Card 1
  { x: [138, 268, 328], y: [216, 182, 194], w: [166, 126, 144], h: [140, 90, 50], rx: 10, className: CARD },
  { x: [150, 278, 338], y: [228, 192, 204], w: [28, 22, 30], h: [28, 22, 30], rx: 8, className: ICON },
  { x: [150, 278, 378], y: [268, 224, 208], w: [142, 106, 82], h: [9, 8, 9], rx: 4, className: LINE_A },
  { x: [150, 278, 378], y: [286, 240, 224], w: [116, 76, 58], h: [7, 7, 7], rx: 4, className: LINE_B },

  // Card 2
  { x: [317, 406, 328], y: [216, 182, 252], w: [166, 126, 144], h: [140, 90, 50], rx: 10, className: CARD },
  { x: [329, 416, 338], y: [228, 192, 262], w: [28, 22, 30], h: [28, 22, 30], rx: 8, className: "fill-foreground/60" },
  { x: [329, 416, 378], y: [268, 224, 266], w: [142, 106, 82], h: [9, 8, 9], rx: 4, className: LINE_A },
  { x: [329, 416, 378], y: [286, 240, 282], w: [116, 76, 58], h: [7, 7, 7], rx: 4, className: LINE_B },

  // Card 3
  { x: [496, 268, 328], y: [216, 280, 310], w: [166, 264, 144], h: [140, 90, 50], rx: 10, className: CARD },
  { x: [508, 278, 338], y: [228, 290, 320], w: [28, 22, 30], h: [28, 22, 30], rx: 8, className: "fill-foreground/35" },
  { x: [508, 278, 378], y: [268, 322, 324], w: [142, 244, 82], h: [9, 8, 9], rx: 4, className: LINE_A },
  { x: [508, 278, 378], y: [286, 338, 340], w: [116, 214, 58], h: [7, 7, 7], rx: 4, className: LINE_B },
]

const hamburger = (x: number, y: number): StaticShape[] =>
  [0, 5, 10].map((dy) => ({
    kind: "rect", x, y: y + dy, w: 16, h: 2.5, rx: 1, className: "fill-foreground",
  }))

/** Pieces that only exist at one breakpoint. */
export const STATE_GROUPS: StateGroup[] = [
  // Desktop browser chrome
  {
    opacity: [1, 0, 0],
    shapes: [
      { kind: "rect", x: 130, y: 50, w: 540, h: 24, rx: 6, className: "fill-muted" },
      { kind: "circle", x: 144, y: 62, r: 4, className: "fill-foreground/30" },
      { kind: "circle", x: 158, y: 62, r: 4, className: "fill-foreground/30" },
      { kind: "circle", x: 172, y: 62, r: 4, className: "fill-foreground/30" },
      { kind: "rect", x: 200, y: 56, w: 300, h: 12, rx: 6, className: "fill-background" },
    ],
  },
  // Phone notch
  {
    opacity: [0, 0, 1],
    shapes: [{ kind: "rect", x: 375, y: 46, w: 50, h: 10, rx: 5, className: "fill-foreground" }],
  },
  // Desktop nav links
  {
    opacity: [1, 0, 0],
    shapes: [480, 538, 596].map((x) => ({
      kind: "rect" as const, x, y: 90, w: 44, h: 12, rx: 6, className: "fill-foreground/30",
    })),
  },
  // Tablet + mobile menu buttons
  { opacity: [0, 1, 0], shapes: hamburger(508, 50) },
  { opacity: [0, 0, 1], shapes: hamburger(448, 68) },
]
