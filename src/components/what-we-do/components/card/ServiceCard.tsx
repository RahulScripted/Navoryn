import { SERVICE_IMAGES } from "../../data/serviceImages"
import type { Service } from "../../types/service"
import { CardShell } from "@/utilities/Card"

interface ServiceCardProps {
  service: Service
  className?: string
}

export function ServiceCard({ service, className }: ServiceCardProps) {
  return (
    <CardShell
      title={service.title}
      description={service.description}
      image={SERVICE_IMAGES[service.id]}
      to={`/${service.id}`}
      linkLabel={`Explore ${service.title}`}
      stretched
      clamp
      className={className}
    />
  )
}
