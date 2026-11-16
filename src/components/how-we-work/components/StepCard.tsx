import { CardShell } from "@/components/what-we-do/components/card/CardShell"
import { cssVars, progress, reached } from "../lib/timeline"
import type { WorkStep } from "../types/step"

/**
 * One phase, drawn with the same folded-corner card as the services (image area, label, title,
 * description, notch). Below `lg` it also gets a node and a rail segment so the list reads as a
 * vertical timeline that fills as you scroll. The card itself never changes colour.
 */
export function StepCard({ step, last }: { step: WorkStep; last: boolean }) {
  return (
    <li
      data-step
      data-start={step.start}
      data-end={step.end}
      className="relative pl-10 lg:pl-0"
      style={cssVars({ "--on": reached(step.start - 0.15), "--p": progress(step.start, step.end) })}
    >
      <span
        aria-hidden="true"
        className="absolute top-7 left-0 z-10 size-[1.15rem] rounded-full border-2 bg-background lg:hidden"
        style={{
          borderColor: "color-mix(in oklab, var(--foreground) calc(var(--on) * 100%), var(--border))",
          transform: "scale(calc(0.85 + 0.15 * var(--on)))",
        }}
      >
        <span className="absolute inset-[2px] rounded-full bg-foreground" style={{ transform: "scale(var(--on))" }} />
      </span>
      {!last && (
        <span aria-hidden="true" className="absolute top-[2.35rem] bottom-[-1.9rem] left-[0.52rem] w-px bg-border lg:hidden">
          <span className="absolute inset-0 origin-top bg-foreground" style={{ transform: "scaleY(var(--p))" }} />
        </span>
      )}

      <CardShell
        title={step.title}
        description={step.description}
        eyebrow={`${step.number} / ${step.weeks}`}
        image={step.image}
        icon={step.icon}
        iconAnim={step.anim}
      />
    </li>
  )
}
