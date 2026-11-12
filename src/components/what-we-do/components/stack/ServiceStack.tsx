import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { ProgressBus } from "../../hooks/progressBus"
import type { Service } from "../../types/service"
import { StackItem } from "./StackItem"
import { STACK, stackPose } from "./stackPose"

interface ServiceStackProps {
  services: readonly Service[]
  bus: ProgressBus
  className?: string
}

export function ServiceStack({ services, bus, className }: ServiceStackProps) {
  const areaRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const area = areaRef.current
    if (!area) return
    itemRefs.current.length = services.length
    const items = () => itemRefs.current.filter((item): item is HTMLDivElement => item !== null)

    const fit = () => {
      const list = items()
      list.forEach((item) => (item.style.minHeight = ""))
      const tallest = list.reduce((max, item) => Math.max(max, item.offsetHeight), 0)
      list.forEach((item) => (item.style.minHeight = `${tallest}px`))
      area.style.height = `${tallest + (services.length - 1) * STACK.offset}px`
    }

    const paint = (progress: number) => {
      const travel = Math.max(area.offsetHeight, window.innerHeight - area.getBoundingClientRect().top)
      itemRefs.current.forEach((item, i) => {
        if (!item) return
        const pose = stackPose(i, progress, travel)
        item.style.transform = pose.transform
        item.style.opacity = pose.opacity
        item.style.setProperty("--stack-dim", pose.dim)
      })
    }

    const ro = new ResizeObserver(() => {
      fit()
      paint(bus.get())
    })
    ro.observe(area.parentElement ?? area)
    items().forEach((item) => ro.observe(item))
    fit()
    const unsubscribe = bus.subscribe(paint)

    return () => {
      ro.disconnect()
      unsubscribe()
    }
  }, [bus, services])

  return (
    <div ref={areaRef} className={cn("relative w-full", className)}>
      {services.map((service, index) => (
        <StackItem
          key={service.id}
          itemRef={(el) => {
            itemRefs.current[index] = el
          }}
          service={service}
          index={index}
          total={services.length}
        />
      ))}
    </div>
  )
}
