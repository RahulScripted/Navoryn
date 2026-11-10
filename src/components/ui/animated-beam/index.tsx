import { createRef, useMemo, useRef } from "react"
import { AnimatedBeam } from "./components/AnimatedBeam"
import { BeamHub } from "./components/BeamHub"
import { BeamNode } from "./components/BeamNode"
import { VISION_POINTS } from "./data/points"

/*
  Layout.
  Narrow card: hub on the left, the six points stacked on the right.
  Wide card (@md): a mirrored diagram. Five columns:
    [left points] [space] [hub] [space] [right points]
  Even-index points go left, odd-index points go right, and each pair shares
  the same row, so both sides sit at identical heights. The side columns are
  "auto" wide, so every icon on a side lines up in one vertical column.
*/
const PLACEMENT = [
  "col-start-2 row-start-1 @md:col-start-1 @md:row-start-1",
  "col-start-2 row-start-2 @md:col-start-5 @md:row-start-1",
  "col-start-2 row-start-3 @md:col-start-1 @md:row-start-2",
  "col-start-2 row-start-4 @md:col-start-5 @md:row-start-2",
  "col-start-2 row-start-5 @md:col-start-1 @md:row-start-3",
  "col-start-2 row-start-6 @md:col-start-5 @md:row-start-3",
]

// Left-side points put the icon on the hub side (label then icon).
const MIRRORED = VISION_POINTS.map((_, i) => i % 2 === 0)

// Row of each point on wide cards (0 = top). Mirrored pairs share values,
// so the beams on both sides are exact mirror images.
const ROW = VISION_POINTS.map((_, i) => Math.floor(i / 2))
const END_Y_OFFSET = [-8, 0, 8]
const CURVATURE = [-12, 0, 12]

/** "Our Vision": six qualities beaming into the NAVORYN hub. */
export default function VisionBeam() {
  const containerRef = useRef<HTMLDivElement>(null)
  const hubRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useMemo(() => VISION_POINTS.map(() => createRef<HTMLDivElement>()), [])

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

        {VISION_POINTS.map((point, i) => (
          <BeamNode
            key={point.name}
            ref={nodeRefs[i]}
            {...point}
            mirrored={MIRRORED[i]}
            className={PLACEMENT[i]}
          />
        ))}

        {VISION_POINTS.map((point, i) => (
          <AnimatedBeam
            key={point.name}
            containerRef={containerRef}
            fromRef={nodeRefs[i]}
            toRef={hubRef}
            curvature={CURVATURE[ROW[i]]}
            endYOffset={END_Y_OFFSET[ROW[i]]}
            // Each mirrored pair fires together.
            delay={ROW[i] * 0.6}
            duration={3}
          />
        ))}
      </div>
    </div>
  )
}
