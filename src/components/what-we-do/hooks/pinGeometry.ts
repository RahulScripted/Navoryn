import { SCROLL } from "../data/scroll"

export interface PinGeometry {
  view: number
  step: number
  offset: number
}

export const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v))

export function pinGeometry(stage: HTMLElement): PinGeometry {
  const view = stage.offsetHeight
  return {
    view,
    step: Math.max(1, view * SCROLL.stepShare),
    offset: Math.max(0, (window.innerHeight - view) / 2),
  }
}
