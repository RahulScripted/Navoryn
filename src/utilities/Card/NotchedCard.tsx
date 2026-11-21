import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import { CardNotch } from "./components/CardNotch"
import { FoldCorner } from "./components/FoldCorner"
import { FOLD_CLIP } from "./lib/fold"
import { NOTCH } from "./lib/notch"
interface NotchedCardProps {
  children: ReactNode
  id?: string
  className?: string
  background?: ReactNode
}
export function NotchedCard({ children, id, className, background }: NotchedCardProps) {
  return (
    <div
      id={id}
      className={cn("group/card relative transition-transform duration-300 ease-out hover:-translate-y-1", className)}
    >
      <article
        className="cursor-target relative isolate overflow-hidden rounded-[24px] border border-border bg-card text-card-foreground"
        style={{ clipPath: FOLD_CLIP }}
      >
        <SpotlightLayer />
        {background}
        <div className="relative z-10">{children}</div>
      </article>
      <FoldCorner />
      <CardNotch />
      <span
        aria-hidden="true"
        className="absolute right-0 bottom-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
        style={{ width: NOTCH.disc, height: NOTCH.disc }}
      >
        <NavorynMark className="size-5" />
      </span>
    </div>
  )
}
