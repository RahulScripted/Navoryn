import { useState } from "react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SERVICE_TITLES } from "../../data/services"
import { createProgressBus } from "../../hooks/progressBus"
import { usePinnedProgress } from "../../hooks/usePinnedProgress"
import { useStepSnap } from "../../hooks/useStepSnap"
import { ServiceStack } from "../stack/ServiceStack"

export function ServiceScroller() {
  const [bus] = useState(createProgressBus)
  const { trackRef, stageRef } = usePinnedProgress(bus, SERVICE_TITLES.length)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useStepSnap(trackRef, stageRef, SERVICE_TITLES.length)

  return (
    <div ref={trackRef} className="relative w-full">
      <div ref={stageRef} className="relative w-full will-change-transform">
        <div ref={revealRef}>
          <ServiceStack titles={SERVICE_TITLES} bus={bus} />
        </div>
      </div>
    </div>
  )
}
