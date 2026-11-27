import { useEffect, useRef, useState } from "react"
import SidebarNavPreview from "@/components/ui/dashboard-sidebar"

// The dashboard preview is laid out at 960px wide. This shrinks it to fit the tile, top-aligned,
// and fades out the bottom edge where it is cropped.
const DESIGN_WIDTH = 960

export function DashboardPreview() {
  const hostRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(0.4)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const update = () => setScale(host.clientWidth / DESIGN_WIDTH)
    update()
    const observer = new ResizeObserver(update)
    observer.observe(host)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={hostRef} className="relative h-full w-full overflow-hidden rounded-[18px] bg-background">
      <div style={{ width: DESIGN_WIDTH, transform: `scale(${scale})`, transformOrigin: "top left" }}>
        <SidebarNavPreview />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-linear-to-t from-card to-transparent" />
    </div>
  )
}
