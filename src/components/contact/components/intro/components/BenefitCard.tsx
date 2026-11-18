import { useRef } from "react"
import type { IconHandle } from "@/utilities/AnimatedIcons"
import type { Benefit } from "@/components/contact/data/contact"

export function BenefitCard({ title, description, icon: Icon }: Benefit) {
  const iconRef = useRef<IconHandle>(null)
  return (
    <li
      onMouseEnter={() => iconRef.current?.startAnimation()}
      onMouseLeave={() => iconRef.current?.stopAnimation()}
      onFocus={() => iconRef.current?.startAnimation()}
      onBlur={() => iconRef.current?.stopAnimation()}
      className="cursor-target flex items-center gap-3 rounded-xl border bg-card p-4 text-card-foreground"
    >
      <span className="flex size-10 shrink-0 items-center justify-center">
        <Icon ref={iconRef} size={20} />
      </span>
      <span className="min-w-0">
        <span className="block text-sm font-semibold">{title}</span>
        <span className="mt-0.5 block text-sm leading-snug text-muted-foreground">{description}</span>
      </span>
    </li>
  )
}
