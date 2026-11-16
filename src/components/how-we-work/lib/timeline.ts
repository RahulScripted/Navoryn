import type { CSSProperties } from "react"

/** Length of the timeline in weeks: W01 to W12. */
export const TOTAL_WEEKS = 12

/**
 * The playhead is one CSS variable, `--t` (0 to 1), written on the section root once per frame.
 * Everything else is derived from it in CSS, so nothing re-renders while the timeline plays.
 *
 * `progress`: 0 to 1 while the playhead crosses [start, end] weeks.
 */
export const progress = (start: number, end: number) =>
  `clamp(0, calc((var(--t) * ${TOTAL_WEEKS} - ${start}) / ${end - start}), 1)`

/** `reached`: eases from 0 to 1 just after the playhead passes `at` weeks. */
export const reached = (at: number, ramp = 0.35) =>
  `clamp(0, calc((var(--t) * ${TOTAL_WEEKS} - ${at}) / ${ramp}), 1)`

/** Typed helper for inline custom properties. */
export const cssVars = (vars: Record<string, string | number>) => vars as CSSProperties
