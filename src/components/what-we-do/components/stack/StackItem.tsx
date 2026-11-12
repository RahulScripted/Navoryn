import type { Ref } from "react"
import { ServiceCard } from "../card/ServiceCard"

interface StackItemProps {
  itemRef: Ref<HTMLDivElement>
  title: string
  zIndex: number
}

export function StackItem({ itemRef, title, zIndex }: StackItemProps) {
  return (
    <div
      ref={itemRef}
      className="service-stack-card absolute inset-x-0 top-0 rounded-[28px] bg-background pb-2"
      style={{ zIndex }}
    >
      <ServiceCard title={title} />
    </div>
  )
}
