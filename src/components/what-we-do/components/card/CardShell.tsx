import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { ArrowButton } from "./notch/ArrowButton"
import { CardNotch } from "./notch/CardNotch"

const FOLD = 36
const FOLD_CLIP = `polygon(0 0, calc(100% - ${FOLD}px) 0, 100% ${FOLD}px, 100% 100%, 0 100%)`

interface CardShellProps {
  title: string
  description: string
  /** Illustration. Leave empty to show the blank media area. */
  image?: string
  /** Small label above the title, e.g. "01 / 04 · Web Presence". */
  eyebrow?: string
  /** Where the arrow button (and, when `stretched`, the whole card) goes. */
  to: string
  linkLabel: string
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
  eyebrow,
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
        <div className="relative z-10 m-2.5 aspect-[16/10] shrink-0 overflow-hidden rounded-[16px] bg-muted/50">
          {image && (
            <img
              src={image}
              alt=""
              loading="lazy"
              decoding="async"
              draggable={false}
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
      {stretched && (
        <Link
          to={to}
          aria-label={linkLabel}
          tabIndex={-1}
          className="cursor-target absolute inset-0 z-20 rounded-[24px]"
        />
      )}
      <CardNotch />
      <ArrowButton to={to} label={linkLabel} />
    </div>
  )
}
