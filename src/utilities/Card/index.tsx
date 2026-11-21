import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import type { IconComponent } from "@/types/icon"
import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { ArrowButton } from "./components/ArrowButton"
import { CardNotch } from "./components/CardNotch"
import { FoldCorner } from "./components/FoldCorner"
import { FOLD_CLIP } from "./lib/fold"
import { ICON_ANIM, type IconAnim } from "./lib/iconAnim"
import { NOTCH } from "./lib/notch"


interface CardShellProps {
  title: string
  description: string
  image?: string
  media?: ReactNode
  imageShift?: { x: number; y: number }
  mediaClassName?: string
  eyebrow?: string
  badges?: ReactNode
  background?: ReactNode
  arrow?: boolean
  icon?: IconComponent
  iconAnim?: IconAnim
  to?: string
  linkLabel?: string
  stretched?: boolean
  clamp?: boolean
  className?: string
}

export function CardShell({
  title,
  description,
  image,
  media,
  imageShift,
  mediaClassName,
  eyebrow,
  badges,
  background,
  arrow = false,
  icon: Icon,
  iconAnim = "pop",
  to,
  linkLabel,
  stretched = false,
  clamp = false,
  className,
}: CardShellProps) {
  return (
    <div
      className={cn(
        "group/card relative h-full transition-transform duration-300 ease-out hover:-translate-y-1",
        className,
      )}
    >
      <article
        className={cn(
          "relative isolate flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-card text-card-foreground",
          !stretched && "cursor-target",
        )}
        style={{ clipPath: FOLD_CLIP }}
      >
        <SpotlightLayer />
        {background}
        <div className={cn("relative z-10 m-2.5 aspect-[16/10] shrink-0 overflow-hidden rounded-[16px] bg-muted/50", mediaClassName)}>
          {media}
          {image && (
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
              style={imageShift ? { translate: `${imageShift.x}% ${imageShift.y}%` } : undefined}
              className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
            />
          )}
        </div>
        <div className="relative z-10 flex flex-1 flex-col gap-2 px-4 pb-5 pt-2">
          {badges && <div className="flex flex-wrap gap-2">{badges}</div>}
          {eyebrow && (
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
          <h3 className="text-lg font-bold leading-tight tracking-tight">{title}</h3>
          <p
            className={cn(
              "pr-12 text-sm leading-relaxed text-muted-foreground",
              clamp && "line-clamp-3",
            )}
          >
            {description}
          </p>
        </div>
      </article>
      <FoldCorner />
      {stretched && to && (
        <Link
          to={to}
          aria-label={linkLabel}
          tabIndex={-1}
          className="cursor-target absolute inset-0 z-20 rounded-[24px]"
        />
      )}
      <CardNotch />
      {Icon ? (
        <span
          aria-hidden="true"
          className="absolute right-0 bottom-0 z-30 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
          style={{ width: NOTCH.disc, height: NOTCH.disc }}
        >
          <span className={cn("card-icon flex", ICON_ANIM[iconAnim])}>
            <Icon className="size-[18px]" />
          </span>
        </span>
      ) : (
        (to || arrow) && <ArrowButton to={to} label={linkLabel ?? title} />
      )}
    </div>
  )
}
