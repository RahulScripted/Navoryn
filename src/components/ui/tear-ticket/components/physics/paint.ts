import { clamp, fmt } from "./geometry"
import { RETRACT, type Sim, type TicketConfig, type TicketParts } from "./sim"

export function paintTicket(s: Sim, c: TicketConfig, parts: TicketParts, now: number): boolean {
  if (parts.stub) {
    parts.stub.style.transform = `translate(${s.sx.toFixed(2)}px, ${s.sy.toFixed(2)}px) rotate(${((s.theta * s.sign * 180) / Math.PI).toFixed(3)}deg)`
    parts.stub.style.opacity = s.fade.toFixed(3)
  }
  const up = c.geo.vertical
  if (parts.body) parts.body.style.transform = `translate${up ? "Y" : "X"}(${s.bx.toFixed(2)}px)`

  const cos = Math.cos(s.theta * s.sign)
  const sin = Math.sin(s.theta * s.sign)
  const lx = up ? 1.6 : 0
  const ly = up ? 0 : 1.6
  const live = s.phase !== "idle" && !c.reduce
  let busy = false

  c.geo.bridges.forEach((b, i) => {
    const near = parts.fibres[i * 2]
    const far = parts.fibres[i * 2 + 1]
    if (!near || !far) return

    const dx = b.x - s.hinge.x
    const dy = b.y - s.hinge.y
    const tx = s.hinge.x + dx * cos - dy * sin + s.sx
    const ty = s.hinge.y + dx * sin + dy * cos + s.sy
    const ox = b.x + (up ? 0 : s.bx)
    const oy = b.y + (up ? s.bx : 0)
    const gx = tx - ox
    const gy = ty - oy
    const gap = Math.hypot(gx, gy)

    const hide = () => {
      near.style.opacity = "0"
      far.style.opacity = "0"
    }

    if (!s.snapped[i]) {
      if (!live || gap < 0.35) return hide()
      const k = clamp(gap / c.stretch, 0, 1)
      const sag = gap * 0.18
      const w = (1.7 - 1.15 * k).toFixed(2)
      const mx = (up ? sag : 0) + gx / 2
      const my = (up ? 0 : sag) + gy / 2
      near.setAttribute(
        "d",
        `M${fmt(ox - lx)},${fmt(oy - ly)}Q${fmt(ox - lx + mx)},${fmt(oy - ly + my)} ${fmt(tx - lx)},${fmt(ty - ly)}`,
      )
      far.setAttribute(
        "d",
        `M${fmt(ox + lx)},${fmt(oy + ly)}Q${fmt(ox + lx + gx - mx)},${fmt(oy + ly + gy - my)} ${fmt(tx + lx)},${fmt(ty + ly)}`,
      )
      near.style.strokeWidth = w
      far.style.strokeWidth = w
      near.style.opacity = "1"
      far.style.opacity = "1"
      s.span[i] = gap
      return
    }

    const t = (now - s.snapAt[i]) / 1000 / RETRACT
    if (!live || t >= 1 || !s.snapAt[i]) return hide()

    busy = true
    const left = (1 - t) * (1 - t)
    const len = (s.span[i] || c.stretch) * 0.5 * left
    const ux = gap > 0.01 ? gx / gap : 1
    const uy = gap > 0.01 ? gy / gap : 0
    near.setAttribute("d", `M${fmt(ox)},${fmt(oy)}L${fmt(ox + ux * len)},${fmt(oy + uy * len)}`)
    far.setAttribute("d", `M${fmt(tx)},${fmt(ty)}L${fmt(tx - ux * len)},${fmt(ty - uy * len)}`)
    near.style.strokeWidth = "0.9"
    far.style.strokeWidth = "0.9"
    near.style.opacity = left.toFixed(2)
    far.style.opacity = left.toFixed(2)
  })

  return busy
}
