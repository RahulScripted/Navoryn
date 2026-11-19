import { useCallback, useRef, useState } from "react"
import type { PointerEvent } from "react"
import { CHIP_HOT_RADIUS, CHIP_POINTS, CIRCUIT_H, CIRCUIT_W } from "../data/circuit"

export function useHeroPointer(reduced: boolean) {
  const frameRef = useRef<HTMLDivElement | null>(null)
  const circuitRef = useRef<HTMLDivElement | null>(null)
  const deviceRef = useRef<HTMLDivElement | null>(null)
  const [hot, setHot] = useState(-1)

  const tilt = (rx: number, ry: number) => {
    const device = deviceRef.current
    if (!device) return
    device.style.setProperty("--hero-rx", `${rx.toFixed(2)}deg`)
    device.style.setProperty("--hero-ry", `${ry.toFixed(2)}deg`)
  }

  const onPointerMove = useCallback(
    (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType === "touch") return
      const frame = frameRef.current
      if (frame && !reduced) {
        const r = frame.getBoundingClientRect()
        const nx = (e.clientX - r.left) / r.width - 0.5
        const ny = (e.clientY - r.top) / r.height - 0.5
        tilt(-ny * 18, nx * 24)
      }
      const box = circuitRef.current
      if (!box) return
      const b = box.getBoundingClientRect()
      const scale = Math.max(b.width / CIRCUIT_W, b.height / CIRCUIT_H)
      const vx = (e.clientX - b.left - (b.width - CIRCUIT_W * scale) / 2) / scale
      const vy = (e.clientY - b.top - (b.height - CIRCUIT_H * scale) / 2) / scale
      let best = -1
      let bestDistance = CHIP_HOT_RADIUS
      CHIP_POINTS.forEach((point, index) => {
        const distance = Math.hypot(point.x - vx, point.y - vy)
        if (distance < bestDistance) {
          bestDistance = distance
          best = index
        }
      })
      setHot(best)
    },
    [reduced],
  )

  const onPointerLeave = useCallback(() => {
    setHot(-1)
    tilt(0, 0)
  }, [])

  return {
    frameRef,
    circuitRef,
    deviceRef,
    hot,
    onPointerMove,
    onPointerLeave,
  }
}
