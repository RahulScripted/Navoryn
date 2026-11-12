import { clamp01, easeInOutSine, easeOutCubic } from "./easing"

export const STACK = {
  offset: 8,
  itemScale: 0.05,
  baseScale: 0.8,
  dim: 0.16,
  visibleDepth: 4,
  enterScale: 0.9,
  enterTilt: 12,
  enterFade: 0.4,
  perspective: 1600,
}

export interface StackPose {
  transform: string
  dim: string
  opacity: string
}

function easedDepth(depth: number): number {
  const whole = Math.floor(depth)
  return whole + easeInOutSine(depth - whole)
}

export function stackPose(index: number, progress: number, areaHeight: number): StackPose {
  const ahead = index - progress
  const arrival = easeOutCubic(1 - ahead)
  const depth = easedDepth(Math.max(0, -ahead))
  const entering = ahead > 0

  const y = index * STACK.offset + (entering ? (1 - arrival) * areaHeight : 0)
  const scale = entering
    ? STACK.enterScale + (1 - STACK.enterScale) * arrival
    : Math.max(STACK.baseScale, 1 - depth * STACK.itemScale)
  const tilt = entering ? (1 - arrival) * STACK.enterTilt : 0
  const dim = 1 - Math.pow(1 - STACK.dim, depth)
  const enterOpacity = entering ? STACK.enterFade + (1 - STACK.enterFade) * arrival : 1
  const exitOpacity = clamp01(STACK.visibleDepth + 1 - depth)

  return {
    transform: `perspective(${STACK.perspective}px) translate3d(0, ${y.toFixed(2)}px, 0) rotateX(${tilt.toFixed(3)}deg) scale(${scale.toFixed(4)})`,
    dim: dim.toFixed(3),
    opacity: (enterOpacity * exitOpacity).toFixed(3),
  }
}
