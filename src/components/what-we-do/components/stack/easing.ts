export const clamp01 = (v: number) => Math.min(1, Math.max(0, v))

export const easeOutCubic = (t: number) => 1 - Math.pow(1 - clamp01(t), 3)

export const easeInOutSine = (t: number) => -(Math.cos(Math.PI * clamp01(t)) - 1) / 2
