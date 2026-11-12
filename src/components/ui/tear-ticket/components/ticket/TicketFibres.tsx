import type { RefObject } from "react"
import type { TicketGeometry } from "../physics/geometry"

interface TicketFibresProps {
  geo: TicketGeometry
  fibresRef: RefObject<(SVGPathElement | null)[]>
}

export function TicketFibres({ geo, fibresRef }: TicketFibresProps) {
  return (
    <svg className="tear-ticket__fibres" aria-hidden="true">
      {geo.bridges.map((_, i) => (
        <g key={i}>
          <path
            ref={(el) => {
              fibresRef.current[i * 2] = el
            }}
          />
          <path
            ref={(el) => {
              fibresRef.current[i * 2 + 1] = el
            }}
          />
        </g>
      ))}
    </svg>
  )
}
