import { cn } from "@/lib/utils"
import type { WorkStep } from "../types/step"

export function BarContent({ step, tone }: { step: WorkStep; tone: "ghost" | "solid" }) {
  const Icon = step.icon
  return (
    <>
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-sm border",
          tone === "solid" ? "border-primary-foreground/25 bg-primary-foreground/10" : "border-border bg-background/60",
        )}
      >
        <Icon className="size-3.5" />
      </span>
      <span className="min-w-0 truncate text-sm font-semibold tracking-tight">{step.title}</span>
      <span className="ml-auto hidden shrink-0 pr-1 text-[0.7rem] opacity-70 xl:block">{step.weeks}</span>
    </>
  )
}
