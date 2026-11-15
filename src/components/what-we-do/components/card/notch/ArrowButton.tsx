import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { RollText } from "@/utilities/RollText"
import { NOTCH } from "./notch"

interface ArrowButtonProps {
  label: string
  to: string
}

export function ArrowButton({ label, to }: ArrowButtonProps) {
  return (
    <Link
      to={to}
      aria-label={label}
      className="group/roll cursor-target absolute bottom-0 right-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={{ width: NOTCH.disc, height: NOTCH.disc }}
    >
      <RollText>
        <ArrowTopRightIcon className="size-4" aria-hidden="true" />
      </RollText>
    </Link>
  )
}
