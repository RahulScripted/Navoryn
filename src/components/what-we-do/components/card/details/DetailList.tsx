import { cn } from "@/lib/utils"
import { DetailLabel } from "./DetailLabel"

interface DetailListProps {
  label: string
  items: readonly string[]
  className?: string
  listClassName?: string
}

export function DetailList({ label, items, className, listClassName }: DetailListProps) {
  return (
    <div className={cn("flex min-w-0 flex-col gap-2.5", className)}>
      <DetailLabel>{label}</DetailLabel>
      <ul className={cn("grid gap-x-6 gap-y-1.5", listClassName)}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-card-foreground">
            <span aria-hidden="true" className="mt-[0.45rem] size-1.5 shrink-0 rounded-full bg-primary" />
            <span className="min-w-0">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
