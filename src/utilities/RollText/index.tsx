import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface RollTextProps {
  children: ReactNode
  className?: string
}

const FACE =
  "inline-flex items-center justify-center gap-[inherit] transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none"

export function RollText({ children, className }: RollTextProps) {
  return (
    <span className={cn("relative inline-flex overflow-hidden gap-[inherit] py-0.5 -my-0.5", className)}>
      <span
        className={cn(
          FACE,
          "group-hover/roll:-translate-y-[130%] group-focus-visible/roll:-translate-y-[130%]",
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          FACE,
          "absolute inset-0 translate-y-[130%] group-hover/roll:translate-y-0 group-focus-visible/roll:translate-y-0",
        )}
      >
        {children}
      </span>
    </span>
  )
}

export default RollText
