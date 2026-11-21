import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { Link } from "react-router-dom"
import { RollText } from "@/utilities/RollText"
import { NOTCH } from "../lib/notch"

interface ArrowButtonProps {
  label: string
  to?: string
}

const CLASS =
  "group/roll cursor-target absolute bottom-0 right-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
export function ArrowButton({ label, to }: ArrowButtonProps) {
  const style = { width: NOTCH.disc, height: NOTCH.disc }
  const icon = (
    <RollText>
      <ArrowTopRightIcon className="size-4" aria-hidden="true" />
    </RollText>
  )
  if (!to) {
    return (
      <button type="button" aria-label={label} className={CLASS} style={style}>
        {icon}
      </button>
    )
  }
  return (
    <Link to={to} aria-label={label} className={CLASS} style={style}>
      {icon}
    </Link>
  )
}
