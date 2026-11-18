export type Effect = "fade" | "rise" | "flip" | "scale"
export type SplitBy = "words" | "chars" | "lines"
export type Mode = "scrub" | "enter"

export interface Look {
  effect: Effect
  masked: boolean
  baseOpacity: number
  blur: number
  offset: number
  highlightColor: string
}

export const SCRUB_SPAN = 0.5
export const RISE_MASK = "inset(-1em -1em -0.15em -1em)"

export const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1)
const smooth = (value: number) => value * value * (3 - 2 * value)
const easeOut = (value: number) => 1 - Math.pow(1 - value, 3)
const easeBack = (value: number, overshoot: number) => {
  const shifted = value - 1
  return 1 + (overshoot + 1) * shifted ** 3 + overshoot * shifted ** 2
}
const glowAt = (t: number) =>
  t <= 0 || t >= 1 ? 0 : t < 0.35 ? smooth(t / 0.35) : 1 - smooth((t - 0.35) / 0.65)

export function paintPiece(piece: HTMLElement, t: number, look: Look) {
  let reveal = t
  let fadeIn = t
  let motion = ""

  if (look.effect === "rise") {
    reveal = easeOut(t)
    fadeIn = clamp01(reveal * 1.25)
    if (reveal < 1) {
      motion = look.masked
        ? `translateY(${((1 - reveal) * 100).toFixed(2)}%) translateY(${((1 - reveal) * 0.2).toFixed(3)}em)`
        : `translateY(${((1 - reveal) * 0.8).toFixed(3)}em)`
    }
  } else if (look.effect === "flip") {
    reveal = easeBack(t, 1.2)
    fadeIn = clamp01(t * 2)
    if (t < 1) motion = `perspective(6em) rotateX(${((1 - reveal) * 90).toFixed(2)}deg)`
  } else if (look.effect === "scale") {
    reveal = easeBack(t, 1.6)
    fadeIn = clamp01(t * 1.6)
    if (t < 1) motion = `scale(${(0.35 + 0.65 * reveal).toFixed(4)})`
  }

  if (look.highlightColor) fadeIn = Math.max(fadeIn, clamp01(t / 0.35))

  const settle = clamp01(reveal)
  const lift = look.offset * (1 - settle)

  piece.style.opacity =
    t >= 1 ? "" : (look.baseOpacity + (1 - look.baseOpacity) * fadeIn).toFixed(3)
  piece.style.transform = [lift ? `translateY(${lift.toFixed(2)}px)` : "", motion]
    .filter(Boolean)
    .join(" ")
  piece.style.filter =
    look.blur && settle < 1 ? `blur(${(look.blur * (1 - settle)).toFixed(2)}px)` : ""

  if (look.highlightColor) {
    const glow = glowAt(t)
    piece.style.color =
      glow > 0.002
        ? `color-mix(in srgb, ${look.highlightColor} ${(glow * 100).toFixed(1)}%, currentColor)`
        : ""
  }
}
