import { useEffect, useRef, useState } from "react"
import SidebarNavPreview from "@/components/ui/dashboard-sidebar"

// The dashboard is laid out 900px wide, then shrunk to the width of the frame. Its height is stretched to
// match, so it fills the frame exactly. The frame sits inside the tile with p-3 on every side.
const DESIGN_WIDTH = 900

export function DashboardPreview() {
  const frameRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ scale: 0.4, height: 560 })

  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const update = () => {
      const scale = frame.clientWidth / DESIGN_WIDTH
      setBox({ scale, height: frame.clientHeight / scale })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(frame)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="absolute inset-0 p-3">
      <div ref={frameRef} className="relative h-full w-full overflow-hidden rounded-xl border border-border/60">
        <div style={{ width: DESIGN_WIDTH, height: box.height, transform: `scale(${box.scale})`, transformOrigin: "top left" }}>
          <SidebarNavPreview bare />
        </div>
      </div>
    </div>
  )
}
