import { WEEK_LABELS, STEPS } from "../data/steps"
import { TOTAL_WEEKS, cssVars, reached } from "../lib/timeline"
import { GanttBar } from "./GanttBar"

const COLUMNS = { gridTemplateColumns: `repeat(${TOTAL_WEEKS}, minmax(0, 1fr))` }

/** Desktop view: the four phases laid out on a week-by-week axis with a playhead sweeping across. */
export function GanttChart() {
  return (
    <div aria-hidden="true" className="hidden lg:block">
      <div className="relative">
        {/* Week gridlines */}
        <div className="absolute inset-0 grid" style={COLUMNS}>
          {WEEK_LABELS.map((label) => (
            <span key={label} className="border-l border-border/70 last:border-r" />
          ))}
        </div>

        {/* Bars, one row each, stepping to the right like a staircase */}
        <div className="relative grid gap-y-3 py-3" style={{ ...COLUMNS, gridTemplateRows: `repeat(${STEPS.length}, 3.25rem)` }}>
          {STEPS.map((step, index) => (
            <GanttBar key={step.id} step={step} row={index + 1} />
          ))}
        </div>

        {/* Playhead: fades out over the last stretch, so nothing is left sitting at the end */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-full"
          style={{ opacity: "clamp(0, calc((1 - var(--t)) * 25), 1)" }}
        >
          <div className="relative h-full w-full" style={{ transform: "translateX(calc(var(--t) * 100%))" }}>
            <span className="absolute inset-y-0 left-0 w-px bg-foreground/50" />
            <span className="absolute top-0 left-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-background bg-foreground shadow-sm" />
          </div>
        </div>
      </div>

      {/* Week labels: each one darkens as the playhead reaches it */}
      <div className="mt-3 grid" style={COLUMNS}>
        {WEEK_LABELS.map((label, week) => (
          <span
            key={label}
            className="pl-1.5 font-mono text-[0.7rem] tracking-wide"
            style={{
              ...cssVars({ "--on": reached(week, 0.25) }),
              color: "color-mix(in oklab, var(--foreground) calc(var(--on) * 100%), var(--muted-foreground))",
              opacity: "calc(0.55 + 0.45 * var(--on))",
            }}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  )
}
