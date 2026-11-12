import type { ReactNode, Ref } from "react"
import { motion, type MotionValue } from "motion/react"
import type { TicketGeometry } from "../physics/geometry"

interface TicketBodyProps {
  pieceRef: Ref<HTMLDivElement>
  geo: TicketGeometry
  width: number
  height: number
  border: boolean
  art: ReactNode
  scrim: boolean
  still: boolean
  artShift: MotionValue<string>
  ink: MotionValue<string>
  children: ReactNode
}

export function TicketBody({
  pieceRef,
  geo,
  width,
  height,
  border,
  art,
  scrim,
  still,
  artShift,
  ink,
  children,
}: TicketBodyProps) {
  return (
    <div ref={pieceRef} className="tear-ticket__piece">
      {border && (
        <svg className="tear-ticket__edge" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
          <path d={geo.bodyOutline} />
        </svg>
      )}
      <div className="tear-ticket__paper" style={{ clipPath: `path('${geo.body}')` }}>
        {art && (
          <div className="tear-ticket__art">
            <motion.div className="tear-ticket__art-layer" style={still ? undefined : { transform: artShift }}>
              {art}
            </motion.div>
            {scrim && <div className="tear-ticket__scrim" />}
          </div>
        )}
        <motion.div className="tear-ticket__content" style={still ? undefined : { transform: ink }}>
          {children}
        </motion.div>
      </div>
    </div>
  )
}
