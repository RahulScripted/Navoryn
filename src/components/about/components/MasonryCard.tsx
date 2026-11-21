import { cn } from "@/lib/utils"
import type { AboutCard } from "@/types/about"
import { SpotlightLayer } from "@/utilities/SpotlightCard"

interface MasonryCardProps {
  card: AboutCard
  className?: string
}

export function MasonryCard({ card, className }: MasonryCardProps) {
  const {
    eyebrow,
    title,
    description,
    stat,
    statLabel,
    image,
    imageAlt,
    media,
    bleedImage,
    bleedImageAlt,
  } = card

  return (
    <div
      data-tile={card.id}
      className={cn(
        "about-tile cursor-target group relative isolate overflow-hidden",
        "transition-transform duration-300 ease-out hover:-translate-y-1",
        "rounded-[28px] border border-border bg-card text-card-foreground",
        className,
      )}
    >
      <SpotlightLayer />

      <div className="relative z-10 flex h-full w-full flex-col gap-2 p-4 sm:p-5">
        <div className="flex flex-col gap-2">
        {eyebrow && (
          <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {eyebrow}
          </span>
        )}

        {stat && (
          <div className="flex flex-col">
            <span className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">
              {stat}
            </span>
            {statLabel && (
              <span className="mt-1 text-xs font-semibold leading-tight text-muted-foreground">
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
            <p className="text-xs font-medium leading-snug text-muted-foreground sm:text-[0.8rem]">
              {description}
            </p>
          )}
        </div>
        </div>

        {bleedImage && (
          <div className="pointer-events-none -mx-4 -mb-4 mt-auto flex min-h-0 flex-1 items-end overflow-hidden sm:-mx-5 sm:-mb-5">
            <div className="relative aspect-[1024/1110] w-full shrink-0">
              <img
                src={bleedImage}
                alt={bleedImageAlt ?? ""}
                loading="lazy"
                decoding="async"
                className="absolute inset-x-0 bottom-0 h-auto w-full"
              />
            </div>
          </div>
        )}

        {!bleedImage && (media || image) && (
          <div className="about-tile__media mt-auto min-h-0 w-full flex-1 overflow-hidden">
            {media ? (
              media
            ) : (
              <img
                src={image}
                alt={imageAlt ?? ""}
                loading="lazy"
                decoding="async"
                className="h-full w-full rounded-[18px] object-contain"
              />
            )}
          </div>
        )}
      </div>
    </div>
  )
}
