import { useEffect, useRef, useState } from "react"
import SidebarNavPreview from "@/components/ui/dashboard-sidebar"

// The dashboard is laid out 900px wide, then shrunk to the width of the tile. Its height is stretched to
// match, so it fills the whole box exactly, with no padding, margin or cropping.
const DESIGN_WIDTH = 900

export function DashboardPreview() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [box, setBox] = useState({ scale: 0.4, height: 560 })

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const update = () => {
      const scale = host.clientWidth / DESIGN_WIDTH
      setBox({ scale, height: host.clientHeight / scale })
    }
    update()
    const observer = new ResizeObserver(update)
    observer.observe(host)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={hostRef} className="absolute inset-0 overflow-hidden">
      <div style={{ width: DESIGN_WIDTH, height: box.height, transform: `scale(${box.scale})`, transformOrigin: "top left" }}>
        <SidebarNavPreview bare />
      </div>
    </div>
  )
}
