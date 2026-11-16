import { cssVars, progress } from "../lib/timeline"
import type { WorkStep } from "../types/step"
import { BarContent } from "./BarContent"

/**
 * One phase on the chart. A dashed outline marks where it will be; the solid bar is the same shape
 * revealed left to right as the playhead crosses it, so the text always sits on a readable surface.
 */
export function GanttBar({ step, row }: { step: WorkStep; row: number }) {
  return (
    <div
      className="relative"
      style={cssVars({ gridColumn: `${step.start + 1} / ${step.end + 1}`, gridRow: row, "--p": progress(step.start, step.end) })}
    >
      <div className="absolute inset-0 flex items-center gap-2.5 rounded-xl border border-dashed border-border bg-muted/40 px-2.5 text-muted-foreground">
        <BarContent step={step} tone="ghost" />
      </div>
      <div
        className="absolute inset-0 flex items-center gap-2.5 rounded-xl bg-primary px-2.5 text-primary-foreground shadow-sm"
        style={{ clipPath: "inset(0 calc((1 - var(--p)) * 100%) 0 0 round 0.75rem)" }}
      >
        <BarContent step={step} tone="solid" />
      </div>
    </div>
  )
}
