import { Link } from "react-router-dom"
import type { IconComponent } from "@/types/icon"
import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { ArrowButton } from "./notch/ArrowButton"
import { CardNotch } from "./notch/CardNotch"
import { ICON_ANIM, type IconAnim } from "./iconAnim"
import { NOTCH } from "./notch/notch"

const FOLD = 36
const FOLD_CLIP = `polygon(0 0, calc(100% - ${FOLD}px) 0, 100% ${FOLD}px, 100% 100%, 0 100%)`

interface CardShellProps {
  title: string
  description: string
  /** Illustration. Leave empty to show the blank media area. */
  image?: string
  /** Percent offset of the picture inside the media box (centers uneven artwork). */
  imageShift?: { x: number; y: number }
  /** Extra classes for the media box, e.g. a background that matches the picture's own. */
  mediaClassName?: string
  /** Small label above the title, e.g. "01 / 04 · Web Presence". */
  eyebrow?: string
  /** Shows this icon in the corner disc instead of the arrow; the disc is then decoration, not a link. */
  icon?: IconComponent
  /** Animation for that icon, played when the card is hovered. */
  iconAnim?: IconAnim
  /** Where the arrow button (and, when `stretched`, the whole card) goes. Leave out for a card with no link. */
  to?: string
  linkLabel?: string
  /** Make the whole card a link, not just the arrow button. */
  stretched?: boolean
  /** Cut long descriptions to three lines. */
  clamp?: boolean
  className?: string
}

/** The folded-corner card with the arrow notch, shared by the service list and the service pages. */
export function CardShell({
  title,
  description,
  image,
  imageShift,
  mediaClassName,
  eyebrow,
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
        <div className={cn("relative z-10 m-2.5 aspect-[16/10] shrink-0 overflow-hidden rounded-[16px] bg-muted/50", mediaClassName)}>
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
      <svg
        aria-hidden="true"
        focusable="false"
        width={FOLD}
        height={FOLD}
        viewBox={`0 0 ${FOLD} ${FOLD}`}
        className="pointer-events-none absolute right-0 top-0 z-20"
      >
        <path
          d={`M0.5 0 V${FOLD - 0.5} H${FOLD} Z`}
          fill="var(--muted)"
          stroke="var(--border)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
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
        to && <ArrowButton to={to} label={linkLabel ?? title} />
      )}
    </div>
  )
}
