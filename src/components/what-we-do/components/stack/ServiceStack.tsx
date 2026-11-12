import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import type { ProgressBus } from "../../hooks/progressBus"
import { StackItem } from "./StackItem"
import { STACK, stackPose } from "./stackPose"

interface ServiceStackProps {
  titles: string[]
  bus: ProgressBus
  className?: string
}

export function ServiceStack({ titles, bus, className }: ServiceStackProps) {
  const areaRef = useRef<HTMLDivElement | null>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const area = areaRef.current
    if (!area) return
    itemRefs.current.length = titles.length

    const fit = () => {
      const tallest = itemRefs.current.reduce((max, item) => Math.max(max, item?.offsetHeight ?? 0), 0)
      area.style.height = `${tallest + (titles.length - 1) * STACK.offset}px`
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
    itemRefs.current.forEach((item) => item && ro.observe(item))
    fit()
    const unsubscribe = bus.subscribe(paint)

    return () => {
      ro.disconnect()
      unsubscribe()
    }
  }, [bus, titles])

  return (
    <div ref={areaRef} className={cn("relative w-full", className)}>
      {titles.map((title, index) => (
        <StackItem
          key={title}
          itemRef={(el) => {
            itemRefs.current[index] = el
          }}
          title={title}
          zIndex={index + 1}
        />
      ))}
    </div>
  )
}
