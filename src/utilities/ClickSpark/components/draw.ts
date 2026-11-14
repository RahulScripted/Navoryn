export type SparkShape = "line" | "streak" | "dot" | "star"

export const EASINGS = {
  linear: (t: number) => t,
  "ease-in": (t: number) => t * t,
  "ease-out": (t: number) => 1 - Math.pow(1 - t, 3),
  "ease-in-out": (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  spring: (t: number) => 1 + 2.4 * Math.pow(t - 1, 3) + 1.4 * Math.pow(t - 1, 2),
}

export const MAX_BURSTS = 32
export const GRAVITY = 500
export const REDUCED_MS = 320

export const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a), 0, 1)
  return t * t * (3 - 2 * t)
}

export const toColors = (value: string | string[]) => {
  const list = (Array.isArray(value) ? value : [value]).filter(Boolean)
  return list.length ? list : ["#ffffff"]
}

export function starPath(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, rotation: number) {
  const pinch = radius * 0.16
  ctx.beginPath()
  ctx.moveTo(x + Math.cos(rotation) * radius, y + Math.sin(rotation) * radius)
  for (let i = 1; i <= 4; i++) {
    const a = rotation + (i * Math.PI) / 2
    const mid = a - Math.PI / 4
    ctx.quadraticCurveTo(
      x + Math.cos(mid) * pinch,
      y + Math.sin(mid) * pinch,
      x + Math.cos(a) * radius,
      y + Math.sin(a) * radius,
    )
  }
  ctx.closePath()
}

/** Resolves any CSS color the canvas understands into [r, g, b]. */
export function channels(ctx: CanvasRenderingContext2D, color: string): number[] {
  ctx.fillStyle = color
  const normal = String(ctx.fillStyle)
  const hex = /^#([0-9a-f]{6})$/i.exec(normal)
  if (hex) {
    const value = parseInt(hex[1], 16)
    return [(value >> 16) & 255, (value >> 8) & 255, value & 255]
  }
  const rgb = /^rgba?\(([^)]+)\)$/i.exec(normal)
  if (rgb) return rgb[1].split(",").slice(0, 3).map((part) => parseFloat(part))
  return [0, 0, 0]
}
