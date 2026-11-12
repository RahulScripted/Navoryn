import { forwardRef } from "react"
import { cn } from "@/lib/utils"

const LOGO = "url(/favicon-dark.svg)"

export const BeamHub = forwardRef<HTMLDivElement, { className?: string }>(({ className }, ref) => (
  <div
    ref={ref}
    role="img"
    aria-label="NAVORYN"
    className={cn(
      "z-10 flex size-12 shrink-0 items-center justify-center self-center justify-self-center rounded-2xl",
      "border border-border bg-card p-3 shadow-lg ring-8 ring-foreground/5 @3xl:size-16 @3xl:p-3.5",
      className,
    )}
  >
    <span
      aria-hidden="true"
      className="size-full bg-foreground"
      style={{
        maskImage: LOGO,
        WebkitMaskImage: LOGO,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  </div>
))

BeamHub.displayName = "BeamHub"
