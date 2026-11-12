import { SCROLL } from "../data/services"
import { clamp } from "./pinGeometry"

export function snapTarget(progress: number, rest: number, steps: number): number {
  const moved = progress - rest
  if (moved > 0) {
    const base = Math.floor(progress)
    return clamp(progress - base >= SCROLL.snapThreshold ? base + 1 : base, 0, steps)
  }
  if (moved < 0) {
    const base = Math.ceil(progress)
    return clamp(base - progress >= SCROLL.snapThreshold ? base - 1 : base, 0, steps)
  }
  return clamp(Math.round(progress), 0, steps)
}
