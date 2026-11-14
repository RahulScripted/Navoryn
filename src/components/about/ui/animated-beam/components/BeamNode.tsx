import { forwardRef } from "react"
import type { IconComponent } from "@/types/icon"
import { cn } from "@/lib/utils"

interface BeamNodeProps {
  icon: IconComponent
  name: string
  className?: string
  mirrored?: boolean
}

export const BeamNode = forwardRef<HTMLDivElement, BeamNodeProps>(
  ({ icon: Icon, name, className, mirrored }, ref) => (
    <div
      className={cn(
        "z-10 flex min-w-0 items-center gap-2 self-center @3xl:gap-3",
        mirrored && "@md:flex-row-reverse @md:text-right",
        className,
      )}
    >
      <div
        ref={ref}
        className="flex size-8 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm transition-transform duration-300 hover:scale-105 @3xl:size-10"
      >
        <Icon className="size-4 @3xl:size-5" aria-hidden="true" />
      </div>

      <span className="truncate text-[0.7rem] font-semibold leading-tight text-foreground @3xl:text-sm">
        {name}
      </span>
    </div>
  ),
)

BeamNode.displayName = "BeamNode"
