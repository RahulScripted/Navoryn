import { cssVars, progress } from "../lib/timeline"
import type { WorkStep } from "../types/step"
import { BarContent } from "./BarContent"

export function GanttBar({ step, row }: { step: WorkStep; row: number }) {
  return (
    <div
      className="relative"
      style={cssVars({ gridColumn: `${step.start + 1} / ${step.end + 1}`, gridRow: row, "--p": progress(step.start, step.end) })}
    >
      <div className="absolute inset-0 flex items-center gap-2.5 rounded-sm border border-dashed border-border bg-muted/40 px-2.5 text-muted-foreground">
        <BarContent step={step} tone="ghost" />
      </div>
      <div
        className="absolute inset-0 flex items-center gap-2.5 rounded-sm bg-primary px-2.5 text-primary-foreground shadow-sm"
        style={{ clipPath: "inset(0 calc((1 - var(--p)) * 100%) 0 0 round calc(var(--radius) - 4px))" }}
      >
        <BarContent step={step} tone="solid" />
      </div>
    </div>
  )
}
