import { cn } from "@/lib/utils"
import type { AboutCard } from "@/types/about"

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
      className={cn(
        "about-tile cursor-target group relative overflow-hidden",
        "transition-transform duration-300 ease-out hover:-translate-y-1",
        // Theme surface: card + border tokens from index.css.
        "rounded-[28px] border border-border bg-card text-card-foreground",
        className,
      )}
    >
      {/*
        Full-width image below the text: no padding or margin, not zoomed, pinned
        to the bottom edge. The artwork's blank top 29% is cropped away (aspect
        box + bottom-anchored image) so the whole crowd shows edge to edge.
      */}
      {bleedImage && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 aspect-[1024/1110] w-full overflow-hidden">
          <img
            src={bleedImage}
            alt={bleedImageAlt ?? ""}
            loading="lazy"
            decoding="async"
            className="absolute inset-x-0 bottom-0 h-auto w-full"
          />
        </div>
      )}

      {/* Inner wrapper fills the tile (container-type:size ignores content height) */}
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

        {/* Media: fills leftover height; auto-hidden on short (1-row) tiles */}
        {!bleedImage && (
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
                className="flex h-full w-full items-center justify-center rounded-[18px] bg-muted"
              >
                <span className="text-[0.55rem] font-bold uppercase tracking-widest text-muted-foreground">
                  Image
                </span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
