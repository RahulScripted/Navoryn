import { CIRCUIT_W, LINK_RADIUS } from "../data/circuit"
import type { CircuitTrace, DeviceAnchor } from "../types/hero"

export function linkPath(trace: CircuitTrace, anchor: DeviceAnchor | null, mirrored: boolean) {
  if (!anchor || !trace.end || trace.port == null) return trace.d
  const { x, y } = trace.end
  const side = mirrored ? CIRCUIT_W - anchor.right : anchor.left
  const ty = anchor.top + (anchor.bottom - anchor.top) * trace.port
  const mid = side - (trace.gap ?? 36)
  const dy = ty - y
  if (mid - x < LINK_RADIUS * 2 || Math.abs(dy) < 1) return `${trace.d}H${side}`
  const dir = Math.sign(dy)
  const r = Math.min(LINK_RADIUS, Math.abs(dy) / 2)
  return (
    `${trace.d}H${mid - r}Q${mid} ${y} ${mid} ${y + dir * r}` +
    `V${ty - dir * r}Q${mid} ${ty} ${mid + r} ${ty}H${side}`
  )
}
