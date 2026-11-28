import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import { CardNotch } from "./components/CardNotch"
import { FoldCorner } from "./components/FoldCorner"
import { FOLD_CLIP } from "./lib/fold"
import type { IconComponent } from "@/types/icon"
import { ICON_ANIM, type IconAnim } from "./lib/iconAnim"
import { NOTCH } from "./lib/notch"
interface NotchedCardProps {
  children: ReactNode
  id?: string
  className?: string
  background?: ReactNode
  /** Shown in the notch instead of the Navoryn mark. */
  icon?: IconComponent
  /** How the icon moves when the card is hovered. */
  iconAnim?: IconAnim
  /** Stretches the card to the height of its cell, so cards in a row match. */
  fill?: boolean
}
export function NotchedCard({ children, id, className, background, icon: Icon, iconAnim = "pop", fill = false }: NotchedCardProps) {
  return (
    <div
      id={id}
      className={cn("group/card relative transition-transform duration-300 ease-out hover:-translate-y-1", className)}
    >
      <article
        className={cn(
          "cursor-target relative isolate overflow-hidden rounded-[24px] border border-border bg-card text-card-foreground",
          fill && "h-full",
        )}
        style={{ clipPath: FOLD_CLIP }}
      >
        <SpotlightLayer />
        {background}
        <div className={cn("relative z-10", fill && "h-full")}>{children}</div>
      </article>
      <FoldCorner />
      <CardNotch />
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
        style={{ width: NOTCH.disc, height: NOTCH.disc }}
      >
        {Icon ? (
          <span className={cn("card-icon flex", ICON_ANIM[iconAnim])}>
            <Icon className="size-[18px]" />
          </span>
        ) : (
          <NavorynMark className="size-5" />
        )}
      </span>
    </div>
  )
}
