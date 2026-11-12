import { clamp, type Point, type TicketGeometry } from "./geometry"
import type { Sim } from "./sim"

export function beginGrab(s: Sim, geo: TicketGeometry, pointerId: number, p: Point): string | null {
  let origin: string | null = null
  s.id = pointerId
  s.start = p
  s.point = p
  s.pt = performance.now()
  s.pvx = 0
  s.pvy = 0

  if (s.theta < 0.01) {
    const farSide = (geo.vertical ? p.x : p.y) < geo.cross / 2
    const end = geo.ends[farSide ? 1 : 0]
    s.sign = (farSide ? 1 : -1) * (geo.vertical ? -1 : 1)
    s.hinge = { x: end.x, y: end.y }
    s.hingeV = end.v
    origin = `${s.hinge.x}px ${s.hinge.y}px`
  }

  const cos = Math.cos(-s.theta * s.sign)
  const sin = Math.sin(-s.theta * s.sign)
  const ux = p.x - s.sx - s.hinge.x
  const uy = p.y - s.sy - s.hinge.y
  s.grab = { x: s.hinge.x + ux * cos - uy * sin, y: s.hinge.y + ux * sin + uy * cos }
  s.a0 = Math.atan2(s.grab.y - s.hinge.y, s.grab.x - s.hinge.x) - (s.theta * s.sign) / 0.92
  s.phase = "held"
  s.thetaV = 0
  return origin
}

export function trackPointer(s: Sim, p: Point) {
  const now = performance.now()
  const dt = Math.max(0.004, (now - s.pt) / 1000)
  s.pvx += ((p.x - s.point.x) / dt - s.pvx) * 0.35
  s.pvy += ((p.y - s.point.y) / dt - s.pvy) * 0.35
  s.pt = now
  s.point = p
}

export const draggedFar = (s: Sim, p: Point, threshold = 28) =>
  Math.hypot(p.x - s.start.x, p.y - s.start.y) > threshold

export function releaseGrab(s: Sim) {
  s.id = null
  if (s.phase === "free") {
    const still = performance.now() - s.pt > 80
    s.vx = still ? 0 : clamp(s.pvx, -1600, 1600)
    s.vy = still ? 0 : clamp(s.pvy, -1600, 1200)
    s.spin = clamp(s.vx * 0.004, -6, 6) + 1.2 * s.sign
    s.age = 0
    s.phase = "drop"
  } else if (s.phase === "held") {
    s.phase = "return"
  }
}
