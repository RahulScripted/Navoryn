import type { Service } from "../../../types/service"
import { DetailList } from "./DetailList"
import { TechStack } from "./TechStack"

interface ServiceDetailsProps {
  service: Service
  index: number
  total: number
}

const pad = (n: number) => String(n).padStart(2, "0")

export function ServiceDetails({ service, index, total }: ServiceDetailsProps) {
  const { title, description, capabilities, deliverables, techStack } = service

  return (
    <div className="flex min-w-0 flex-col gap-5 px-1 pb-1 sm:px-2 lg:gap-6 lg:py-2 lg:pr-3 xl:pr-4">
      <div className="flex flex-col gap-2">
        <span className="text-xs font-semibold tabular-nums tracking-wide text-muted-foreground">
          {pad(index + 1)} <span className="text-border">/</span> {pad(total)}
        </span>
        <h3 className="text-xl font-extrabold leading-tight tracking-tight text-card-foreground sm:text-2xl xl:text-3xl">
          {title}
        </h3>
        <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:line-clamp-none">
          {description}
        </p>
      </div>

      <div className="hidden gap-6 md:grid xl:grid-cols-2">
        <DetailList label="Capabilities" items={capabilities} listClassName="md:grid-cols-2 xl:grid-cols-1" />
        <DetailList label="Deliverables" items={deliverables} className="hidden xl:flex" />
      </div>

      <TechStack items={techStack} className="pr-16 lg:mt-auto" />
    </div>
  )
}
