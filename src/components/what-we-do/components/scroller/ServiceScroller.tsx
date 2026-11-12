import { useState } from "react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SERVICES } from "../../data/services"
import { createProgressBus } from "../../hooks/progressBus"
import { usePinnedProgress } from "../../hooks/usePinnedProgress"
import { useStepSnap } from "../../hooks/useStepSnap"
import { ServiceStack } from "../stack/ServiceStack"

export function ServiceScroller() {
  const [bus] = useState(createProgressBus)
  const { trackRef, stageRef } = usePinnedProgress(bus, SERVICES.length)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useStepSnap(trackRef, stageRef, SERVICES.length)

  return (
    <div ref={trackRef} className="relative w-full overflow-clip">
      <div ref={stageRef} className="relative w-full will-change-transform">
        <div ref={revealRef}>
          <ServiceStack services={SERVICES} bus={bus} />
        </div>
      </div>
    </div>
  )
}
