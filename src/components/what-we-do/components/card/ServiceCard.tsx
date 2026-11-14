import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { SERVICE_IMAGES } from "../../data/serviceImages"
import type { Service } from "../../types/service"
import { ArrowButton } from "./notch/ArrowButton"
import { CardNotch } from "./notch/CardNotch"

const FOLD = 36
const FOLD_CLIP = `polygon(0 0, calc(100% - ${FOLD}px) 0, 100% ${FOLD}px, 100% 100%, 0 100%)`

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  const image = SERVICE_IMAGES[service.id]
  return (
    <div
      className={cn(
        "group/card relative h-full transition-transform duration-300 ease-out hover:-translate-y-1",
        className,
      )}
    >
      <article className="cursor-target relative isolate flex h-full flex-col overflow-hidden rounded-[24px] border border-border bg-card text-card-foreground"
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
          <h3 className="text-lg font-bold leading-tight tracking-tight">{service.title}</h3>
          <p className="line-clamp-3 pr-12 text-sm leading-relaxed text-muted-foreground">
            {service.description}
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
      <CardNotch />
      <ArrowButton label={`Explore ${service.title}`} />
    </div>
  )
}
