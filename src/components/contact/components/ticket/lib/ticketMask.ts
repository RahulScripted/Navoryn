import type { CSSProperties } from "react"

const NOTCH = 12

const SIDES = `radial-gradient(circle ${NOTCH}px at 0 var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px), radial-gradient(circle ${NOTCH}px at 100% var(--cut), transparent ${NOTCH - 0.5}px, #000 ${NOTCH}px)`

export const TICKET_MASK: CSSProperties = {
  maskImage: SIDES,
  maskComposite: "intersect",
  WebkitMaskImage: SIDES,
  WebkitMaskComposite: "source-in",
}
