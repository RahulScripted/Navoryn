export type LoopShape = "wave" | "circle" | "infinity" | "arch" | "line"

export const VIEW_W = 1200
export const VIEW_H = 520
export const CX = VIEW_W / 2
export const CY = VIEW_H / 2
const EDGE_PAD = 6
const FADE_STEPS = 8

const smootherstep = (t: number) => t * t * t * (t * (t * 6 - 15) + 10)

export const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v))
export const wrap = (v: number, length: number) => ((v % length) + length) % length

export function circleRadius(curviness: number, ribbonWidth: number) {
  return Math.min(
    90 + Math.max(0, curviness) * 0.95,
    Math.max(20, CY - Math.max(0, ribbonWidth) / 2 - EDGE_PAD),
  )
}

export function buildPath(shape: LoopShape, curviness: number, ribbonWidth: number, mirrored = false) {
  const c = Math.max(0, curviness)
  const room = Math.max(20, CY - Math.max(0, ribbonWidth) / 2 - EDGE_PAD)
  const flip = mirrored ? -1 : 1

  switch (shape) {
    case "circle": {
      const r = circleRadius(curviness, ribbonWidth)
      if (mirrored) {
        const rx = r * 1.22
        const ry = r * 0.42
        return `M ${CX - rx} ${CY} A ${rx} ${ry} 0 1 1 ${CX + rx} ${CY} A ${rx} ${ry} 0 1 1 ${CX - rx} ${CY} Z`
      }
      return `M ${CX - r} ${CY} A ${r} ${r} 0 1 1 ${CX + r} ${CY} A ${r} ${r} 0 1 1 ${CX - r} ${CY} Z`
    }
    case "infinity": {
      const r = 150 + c * 1.4
      const h = Math.min(60 + c * 0.95, room)
      return [
        `M ${CX} ${CY}`,
        `C ${CX + r * 0.55} ${CY - h} ${CX + r} ${CY - h} ${CX + r} ${CY}`,
        `C ${CX + r} ${CY + h} ${CX + r * 0.55} ${CY + h} ${CX} ${CY}`,
        `C ${CX - r * 0.55} ${CY - h} ${CX - r} ${CY - h} ${CX - r} ${CY}`,
        `C ${CX - r} ${CY + h} ${CX - r * 0.55} ${CY + h} ${CX} ${CY}`,
        "Z",
      ].join(" ")
    }
    case "arch": {
      const rise = Math.min(120 + c * 1.1, room * 2) * flip
      return `M 120 ${CY + rise / 2} Q ${CX} ${CY - rise * 1.5} ${VIEW_W - 120} ${CY + rise / 2}`
    }
    case "line":
      return `M -320 ${CY} L ${VIEW_W + 320} ${CY}`
    case "wave":
    default: {
      const a = Math.min(c * 2.2, room * 2) * flip
      return `M -320 ${CY} Q -160 ${CY - a} 0 ${CY} T 320 ${CY} T 640 ${CY} T 960 ${CY} T 1280 ${CY} T ${VIEW_W + 320} ${CY}`
    }
  }
}

export function buildFade(edgeFade: number) {
  const width = clamp(edgeFade, 0, 1) * 0.3
  if (width <= 0) return []
  const stops: { offset: number; opacity: number }[] = []
  for (let i = 0; i <= FADE_STEPS; i++) {
    const t = i / FADE_STEPS
    stops.push({ offset: t * width, opacity: smootherstep(t) })
  }
  for (let i = FADE_STEPS; i >= 0; i--) {
    const t = i / FADE_STEPS
    stops.push({ offset: 1 - t * width, opacity: smootherstep(t) })
  }
  return stops
}
