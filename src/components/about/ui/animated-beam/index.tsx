import { createRef, useMemo, useRef } from "react"
import { AnimatedBeam } from "./components/AnimatedBeam"
import { BeamHub } from "./components/BeamHub"
import { BeamNode } from "./components/BeamNode"
import { VISION_POINTS, type VisionPoint } from "./data/points"

const PLACEMENT = [
  "col-start-2 row-start-1 @md:col-start-1 @md:row-start-1",
  "col-start-2 row-start-2 @md:col-start-5 @md:row-start-1",
  "col-start-2 row-start-3 @md:col-start-1 @md:row-start-2",
  "col-start-2 row-start-4 @md:col-start-5 @md:row-start-2",
  "col-start-2 row-start-5 @md:col-start-1 @md:row-start-3",
  "col-start-2 row-start-6 @md:col-start-5 @md:row-start-3",
]


const END_Y_OFFSET = [-8, 0, 8]
const CURVATURE = [-12, 0, 12]

export default function VisionBeam({ points = VISION_POINTS }: { points?: VisionPoint[] }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useMemo(() => points.map(() => createRef<HTMLDivElement>()), [points])

  return (
    <div className="@container h-full w-full">
      <div
        ref={containerRef}
        className="relative grid h-full w-full grid-cols-[auto_minmax(0,1fr)] grid-rows-6 gap-x-6 gap-y-1.5 py-1 text-foreground @md:grid-cols-[auto_minmax(0,1fr)_auto_minmax(0,1fr)_auto] @md:grid-rows-3 @md:gap-x-0 @md:gap-y-3 @md:px-2 @3xl:px-6"
      >
        <BeamHub
          ref={hubRef}
          className="col-start-1 row-span-6 row-start-1 @md:col-start-3 @md:row-span-3"
        />

        {points.map((point, i) => (
          <BeamNode
            key={point.name}
            ref={nodeRefs[i]}
            {...point}
            mirrored={i % 2 === 0}
            className={PLACEMENT[i]}
          />
        ))}

        {points.map((point, i) => (
          <AnimatedBeam
            key={point.name}
            containerRef={containerRef}
            fromRef={nodeRefs[i]}
            toRef={hubRef}
            curvature={CURVATURE[Math.floor(i / 2)]}
            endYOffset={END_Y_OFFSET[Math.floor(i / 2)]}
            delay={Math.floor(i / 2) * 0.6}
            duration={3}
          />
        ))}
      </div>
    </div>
  )
}
