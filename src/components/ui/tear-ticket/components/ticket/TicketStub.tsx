import type {
  KeyboardEventHandler,
  PointerEventHandler,
  ReactNode,
  Ref,
} from "react"
import type { TicketGeometry } from "../physics/geometry"

interface TicketStubProps {
  pieceRef: Ref<HTMLDivElement>
  geo: TicketGeometry
  width: number
  height: number
  border: boolean
  focusable: boolean
  used: boolean
  disabled: boolean
  ariaLabel: string
  onPointerDown: PointerEventHandler<HTMLDivElement>
  onPointerMove: PointerEventHandler<HTMLDivElement>
  onPointerUp: PointerEventHandler<HTMLDivElement>
  onKeyDown: KeyboardEventHandler<HTMLDivElement>
  children: ReactNode
}

export function TicketStub({
  pieceRef,
  geo,
  width,
  height,
  border,
  focusable,
  used,
  disabled,
  ariaLabel,
  onPointerDown,
  onPointerMove,
  onPointerUp,
  onKeyDown,
  children,
}: TicketStubProps) {
  return (
    <div
      ref={pieceRef}
      className="tear-ticket__piece tear-ticket__piece--stub"
      role="button"
      tabIndex={focusable ? 0 : -1}
      aria-label={ariaLabel}
      aria-hidden={used || undefined}
      aria-disabled={disabled || undefined}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onLostPointerCapture={onPointerUp}
      onKeyDown={onKeyDown}
      onDragStart={(e) => e.preventDefault()}
    >
      {border && (
        <svg className="tear-ticket__edge" viewBox={`0 0 ${width} ${height}`} aria-hidden="true">
          <path d={geo.stubOutline} />
        </svg>
      )}
      <div className="tear-ticket__paper tear-ticket__paper--stub" style={{ clipPath: `path('${geo.stub}')` }}>
        <div className="tear-ticket__stub">{children}</div>
      </div>
    </div>
  )
}
