import { clamp, rad, wrap } from "./geometry"
import { GRAVITY, type Sim, type TicketConfig } from "./sim"

const ease = (dt: number, tau: number) => 1 - Math.exp(-dt / tau)

function advanceHeld(s: Sim, c: TicketConfig, now: number, dt: number, limit: number) {
  const count = c.geo.bridges.length
  let intact = 0
  for (let i = 0; i < count; i += 1) if (!s.snapped[i]) intact += 1
  const hold = count ? intact / count : 0
  const follow = 0.92 * (1 - clamp(c.resistance, 0, 0.95) * hold)
  const a = Math.atan2(s.point.y - s.hinge.y, s.point.x - s.hinge.x)
  const want = clamp(wrap(a - s.a0) * s.sign * follow, 0, limit + 0.1)
  s.theta += (want - s.theta) * ease(dt, 0.035)

  const up = c.geo.vertical
  const away = clamp(((up ? s.point.y - s.start.y : s.point.x - s.start.x) || 0) * 0.05, -2, 4)
  const side = clamp(((up ? s.point.x - s.start.x : s.point.y - s.start.y) || 0) * 0.05, -3, 3)
  s.sx += ((up ? side : away) - s.sx) * ease(dt, 0.05)
  s.sy += ((up ? away : side) - s.sy) * ease(dt, 0.05)

  const slack = Math.hypot(s.sx, s.sy)
  let left = 0
  c.geo.bridges.forEach((b, i) => {
    if (s.snapped[i]) return
    const d = Math.abs(b.mid - s.hingeV)
    if (2 * d * Math.sin(s.theta / 2) + slack > c.stretch || s.theta >= limit) {
      s.snapped[i] = true
      s.snapAt[i] = now
      s.bv -= 560 / count
    } else left += 1
  })
  if (left === 0) {
    s.phase = "free"
    s.bv -= 150
  }
}

function advanceFree(s: Sim, dt: number, limit: number) {
  const cos = Math.cos(s.theta * s.sign)
  const sin = Math.sin(s.theta * s.sign)
  const gx = s.grab.x - s.hinge.x
  const gy = s.grab.y - s.hinge.y
  const wx = s.point.x - s.hinge.x - (gx * cos - gy * sin)
  const wy = s.point.y - s.hinge.y - (gx * sin + gy * cos)
  s.sx += (wx - s.sx) * ease(dt, 0.045)
  s.sy += (wy - s.sy) * ease(dt, 0.045)
  const hang = limit * 0.55 + clamp(s.pvx * 0.0009 * s.sign, -0.3, 0.3)
  s.theta += (hang - s.theta) * ease(dt, 0.12)
}

function advanceDrop(s: Sim, dt: number): boolean {
  s.age += dt
  s.vy += GRAVITY * dt
  s.sx += s.vx * dt
  s.sy += s.vy * dt
  s.theta += s.spin * dt
  if (s.age > 0.16) s.fade = clamp(1 - (s.age - 0.16) / 0.42, 0, 1)
  if (s.fade > 0) return false
  s.phase = "idle"
  return true
}

function advanceReturn(s: Sim, dt: number) {
  s.thetaV += (-300 * s.theta - 24 * s.thetaV) * dt
  s.theta += s.thetaV * dt
  s.sx += (0 - s.sx) * ease(dt, 0.07)
  s.sy += (0 - s.sy) * ease(dt, 0.07)
  if (Math.abs(s.theta) < 0.0008 && Math.abs(s.thetaV) < 0.01 && Math.hypot(s.sx, s.sy) < 0.05) {
    s.theta = 0
    s.thetaV = 0
    s.sx = 0
    s.sy = 0
    s.phase = "idle"
  }
}

export function advanceTicket(s: Sim, c: TicketConfig, now: number): boolean {
  const dt = clamp((now - s.last) / 1000, 0.001, 0.034)
  s.last = now
  const limit = rad(c.tearAngle)
  let torn = false

  if (s.phase === "held") advanceHeld(s, c, now, dt, limit)
  else if (s.phase === "free") advanceFree(s, dt, limit)
  else if (s.phase === "drop") torn = advanceDrop(s, dt)
  else if (s.phase === "return") advanceReturn(s, dt)

  s.bv += (-520 * s.bx - 30 * s.bv) * dt
  s.bx += s.bv * dt
  return torn
}

export const settled = (s: Sim) => s.phase === "idle" && Math.abs(s.bx) <= 0.02 && Math.abs(s.bv) <= 0.5
