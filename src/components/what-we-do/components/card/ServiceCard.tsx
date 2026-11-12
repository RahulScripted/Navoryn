import { cn } from "@/lib/utils"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { SERVICE_IMAGES } from "../../data/serviceImages"
import type { Service } from "../../types/service"
import { ServiceDetails } from "./details/ServiceDetails"
import { ArrowButton } from "./notch/ArrowButton"
import { CardNotch } from "./notch/CardNotch"
import { ServiceMedia } from "./ServiceMedia"

interface ServiceCardProps {
  service: Service
  index: number
  total: number
  className?: string
}

export function ServiceCard({ service, index, total, className }: ServiceCardProps) {
  return (
    <div
      className={cn(
        "group/card relative h-full transition-transform duration-300 ease-out hover:-translate-y-1",
        className,
      )}
    >
      <article className="cursor-target relative isolate h-full overflow-hidden rounded-[28px] border border-border bg-card text-card-foreground">
        <SpotlightLayer />

        <div className="relative z-10 grid h-full gap-5 p-3 sm:p-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          <ServiceMedia
            image={SERVICE_IMAGES[service.id]}
            className="aspect-[16/10] md:aspect-[5/2] lg:aspect-auto lg:h-full lg:min-h-[24rem]"
          />
          <ServiceDetails service={service} index={index} total={total} />
        </div>
      </article>

      <CardNotch />
      <ArrowButton label={`Explore ${service.title}`} />
    </div>
  )
}
