import { useEffect, useRef, useState } from "react"
import OptionWheel from "@/utilities/OptionWheel"
import { CRAFT_ITEMS } from "./data/items"

const LONGEST = Math.max(...CRAFT_ITEMS.map((item) => item.length))
const INSET = 20

export default function CraftWheel() {
  const ref = useRef<HTMLDivElement | null>(null)
  const [fontSize, setFontSize] = useState(1.4)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined
    const fit = () => {
      const usable = el.clientWidth - INSET - 12
      setFontSize(Math.min(2.25, Math.max(1, usable / (LONGEST * 0.56 * 16))))
    }
    fit()
    const observer = new ResizeObserver(fit)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="size-full">
      <OptionWheel
        items={CRAFT_ITEMS}
        defaultSelected={0}
        textColor="var(--muted-foreground)"
        activeColor="var(--foreground)"
        side="left"
        fontSize={fontSize}
        spacing={1.5}
        curve={1}
        tilt={6}
        blur={1}
        fade={0.16}
        minOpacity={0.08}
        smoothing={200}
        inset={INSET}
        loop
        autoPlay={2200}
        draggable={false}
        wheel={false}
      />
    </div>
  )
}
