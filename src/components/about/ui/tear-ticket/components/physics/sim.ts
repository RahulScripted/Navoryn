import type { Point, TicketGeometry } from "./geometry"

export const TILT_SPRING = { stiffness: 220, damping: 24, mass: 0.6 }
export const GRAVITY = 2400
export const ART_INSET = 8
export const ART_SPAN = 0.78
export const RETRACT = 0.17

export type Phase = "idle" | "held" | "free" | "drop" | "return"

export interface Sim {
  raf: number
  last: number
  phase: Phase
  id: number | null
  sign: number
  hinge: Point
  hingeV: number
  grab: Point
  start: Point
  point: Point
  a0: number
  theta: number
  thetaV: number
  sx: number
  sy: number
  vx: number
  vy: number
  spin: number
  pvx: number
  pvy: number
  pt: number
  fade: number
  age: number
  bx: number
  bv: number
  snapped: boolean[]
  snapAt: number[]
  span: number[]
}

export interface TicketConfig {
  geo: TicketGeometry
  tearAngle: number
  stretch: number
  resistance: number
  reduce: boolean
  onTear?: () => void
  controlled: boolean
}

export interface TicketParts {
  stub: HTMLDivElement | null
  body: HTMLDivElement | null
  fibres: (SVGPathElement | null)[]
}

export const freshSim = (): Sim => ({
  raf: 0,
  last: 0,
  phase: "idle",
  id: null,
  sign: 1,
  hinge: { x: 0, y: 0 },
  hingeV: 0,
  grab: { x: 0, y: 0 },
  start: { x: 0, y: 0 },
  point: { x: 0, y: 0 },
  a0: 0,
  theta: 0,
  thetaV: 0,
  sx: 0,
  sy: 0,
  vx: 0,
  vy: 0,
  spin: 0,
  pvx: 0,
  pvy: 0,
  pt: 0,
  fade: 1,
  age: 0,
  bx: 0,
  bv: 0,
  snapped: [],
  snapAt: [],
  span: [],
})
