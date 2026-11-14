import type { IconComponent } from "@/types/icon"
import { cn } from "@/lib/utils"

export interface NotificationItem {
  name: string
  description: string
  icon: IconComponent
}

export function Notification({ name, description, icon: Icon }: NotificationItem) {
  return (
    <figure
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-2xl p-2.5",
        "border border-border bg-background text-foreground shadow-sm",
        "transform-gpu transition-transform duration-200 ease-in-out hover:scale-[1.03]",
      )}
    >
      <div className="flex items-center gap-2.5">
        <div className="flex size-8 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
          <Icon className="size-4" aria-hidden="true" />
        </div>

        <div className="flex min-w-0 flex-1 flex-col">
          <figcaption className="truncate text-xs font-semibold sm:text-sm">{name}</figcaption>
          <p className="truncate text-[0.7rem] text-muted-foreground">{description}</p>
        </div>

        <span className="shrink-0 self-start text-[0.65rem] text-muted-foreground">
          Just now
        </span>
      </div>
    </figure>
  )
}
