import { cn } from "@/lib/utils"
import type { AboutCard, AboutCardTone } from "@/types/about"

const TONE_SURFACE: Record<AboutCardTone, string> = {
  pink: "bg-pink-200 dark:bg-pink-300",
  mint: "bg-emerald-300 dark:bg-emerald-300",
  amber: "bg-amber-200 dark:bg-amber-200",
  sky: "bg-sky-200 dark:bg-sky-300",
  lilac: "bg-violet-200 dark:bg-violet-300",
  peach: "bg-orange-200 dark:bg-orange-200",
  neutral: "bg-neutral-100 dark:bg-neutral-200",
}

const TONE_PLACEHOLDER: Record<AboutCardTone, string> = {
  pink: "bg-pink-300/60",
  mint: "bg-emerald-400/50",
  amber: "bg-amber-300/60",
  sky: "bg-sky-300/60",
  lilac: "bg-violet-300/60",
  peach: "bg-orange-300/60",
  neutral: "bg-neutral-200/80",
}

interface MasonryCardProps {
  card: AboutCard
  className?: string
}

export function MasonryCard({ card, className }: MasonryCardProps) {
  const { tone, eyebrow, title, description, stat, statLabel, image, imageAlt, media } = card

  return (
    <div
      className={cn(
        "about-tile cursor-target group relative overflow-hidden",
        "transition-transform duration-300 ease-out hover:-translate-y-1",
        "rounded-[28px] text-neutral-900",
        TONE_SURFACE[tone],
        className,
      )}
    >
      {/* Inner wrapper fills the tile (container-type:size ignores content height) */}
      <div className="flex h-full w-full flex-col gap-2 p-4 sm:p-5">
        {eyebrow && (
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-neutral-900/70">
            {eyebrow}
          </span>
        )}

        {stat && (
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">
              {stat}
            </span>
            {statLabel && (
              <span className="mt-1 text-xs font-semibold leading-tight text-neutral-900/80">
                {statLabel}
              </span>
            )}
          </div>
        )}

        <div className="flex flex-col gap-1">
          <h3 className="text-base font-extrabold leading-tight tracking-tight sm:text-lg">
            {title}
          </h3>
          {description && (
            <p className="text-xs font-medium leading-snug text-neutral-900/80 sm:text-[0.8rem]">
              {description}
            </p>
          )}
        </div>

        {/* Media: fills leftover height; auto-hidden on short (1-row) tiles */}
        <div className="about-tile__media mt-auto min-h-0 w-full flex-1 overflow-hidden">
          {media ? (
            media
          ) : image ? (
            <img
              src={image}
              alt={imageAlt ?? ""}
              loading="lazy"
              decoding="async"
              className="h-full w-full rounded-[18px] object-contain"
            />
          ) : (
            <div
              aria-hidden
              className={cn(
                "flex h-full w-full items-center justify-center rounded-[18px]",
                TONE_PLACEHOLDER[tone],
              )}
            >
              <span className="text-[0.55rem] font-bold uppercase tracking-widest text-neutral-900/40">
                Image
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
