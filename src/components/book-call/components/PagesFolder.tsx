import { useEffect, useRef, useState } from "react"
import Folder from "@/components/ui/folder/Folder"
import { useIsDark } from "@/utilities/useIsDark"

// The folder is 224px wide and 196px tall (tab included) at size 1.
const FOLDER_WIDTH = 224
const FOLDER_HEIGHT = 196

/**
 * A closed folder with the pages peeking out. Hovering still tilts it and lifts the pages, but it never
 * opens: clicking, dragging and zooming are off.
 */
export function PagesFolder({ pages }: { pages: number }) {
  const dark = useIsDark()
  const hostRef = useRef<HTMLDivElement>(null)
  const [size, setSize] = useState(1)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const update = () =>
      setSize(Math.min(host.clientWidth * 0.72 / FOLDER_WIDTH, host.clientHeight * 0.8 / FOLDER_HEIGHT))
    update()
    const observer = new ResizeObserver(update)
    observer.observe(host)
    return () => observer.disconnect()
  }, [])

  const items = Array.from({ length: Math.min(pages, 6) }, (_, index) => ({ title: `Page ${index + 1}` }))
  return (
    <div ref={hostRef} className="flex h-full w-full items-center justify-center">
      <Folder
        items={items}
        size={size}
        open={false}
        draggable={false}
        zoomOnClick={false}
        closeOnOutsideClick={false}
        color={dark ? "#a1a1aa" : "#27272a"}
        theme={dark ? "dark" : "light"}
        tabPosition="left"
        label="Pages"
      />
    </div>
  )
}
