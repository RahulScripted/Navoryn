import type { Ref } from "react"
import type { Service } from "../../types/service"
import { ServiceCard } from "../card/ServiceCard"

interface StackItemProps {
  itemRef: Ref<HTMLDivElement>
  service: Service
  index: number
  total: number
}

export function StackItem({ itemRef, service, index, total }: StackItemProps) {
  return (
    <div
      ref={itemRef}
      className="service-stack-card absolute inset-x-0 top-0 flex flex-col rounded-[28px]"
      style={{ zIndex: index + 1 }}
    >
      <ServiceCard service={service} index={index} total={total} className="flex-1" />
    </div>
  )
}
