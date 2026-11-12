import { ArrowUpRight } from "lucide-react"
import { RollText } from "@/utilities/RollText"
import { NOTCH } from "./notch"

interface ArrowButtonProps {
  label: string
}

export function ArrowButton({ label }: ArrowButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className="group/roll cursor-target absolute bottom-0 right-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{ width: NOTCH.disc, height: NOTCH.disc }}
    >
      <RollText>
        <ArrowUpRight className="size-5" aria-hidden="true" />
      </RollText>
    </button>
  )
}
