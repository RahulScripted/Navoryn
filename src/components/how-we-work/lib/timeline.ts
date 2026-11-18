import type { CSSProperties } from "react"

export const TOTAL_WEEKS = 12

export const progress = (start: number, end: number) =>
  `clamp(0, calc((var(--t) * ${TOTAL_WEEKS} - ${start}) / ${end - start}), 1)`

export const reached = (at: number, ramp = 0.35) =>
  `clamp(0, calc((var(--t) * ${TOTAL_WEEKS} - ${at}) / ${ramp}), 1)`

export const cssVars = (vars: Record<string, string | number>) => vars as CSSProperties
