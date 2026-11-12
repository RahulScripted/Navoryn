import { useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "motion/react"
import { MagnifyingLens } from "./components/lens/MagnifyingLens"
import { TagRow } from "./components/marquee/TagRow"
import { LENS_SIZE, TAG_ROWS } from "./data/tags"

export default function MagnifiedBento() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lensX = useMotionValue(0)
  const lensY = useMotionValue(0)

  const clipPath = useMotionTemplate`circle(30px at calc(50% + ${lensX}px - 10px) calc(50% + ${lensY}px - 10px))`
  const inverseMask = useMotionTemplate`radial-gradient(circle 30px at calc(50% + ${lensX}px - 10px) calc(50% + ${lensY}px - 10px), transparent 100%, black 100%)`

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[180px] w-full overflow-hidden rounded-[18px] bg-muted/40"
    >
      <motion.div
        style={{ WebkitMaskImage: inverseMask, maskImage: inverseMask }}
        className="flex h-full w-full flex-col justify-center gap-4"
      >
        {TAG_ROWS.map((row, index) => (
          <TagRow key={`row-${index}`} row={row} index={index} />
        ))}
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 flex select-none flex-col justify-center gap-4"
        style={{ clipPath }}
      >
        {TAG_ROWS.map((row, index) => (
          <TagRow key={`row-reveal-${index}`} row={row} index={index} magnified />
        ))}
      </motion.div>

      <motion.div
        role="img"
        aria-label="Magnifying lens. Drag it to read the tags."
        className="absolute left-1/2 top-1/2 z-40 -translate-x-1/2 -translate-y-1/2 cursor-grab drop-shadow-xl active:cursor-grabbing"
        drag
        dragMomentum={false}
        dragConstraints={containerRef}
        style={{ x: lensX, y: lensY }}
      >
        <div className="relative">
          <MagnifyingLens size={LENS_SIZE} />
          <div className="pointer-events-none absolute left-[6px] top-[6px] size-[60px] rounded-full bg-white/10" />
        </div>
      </motion.div>

      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/4 bg-linear-to-r from-card to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-1/4 bg-linear-to-l from-card to-transparent" />
    </div>
  )
}
