import { useEffect, useState } from "react"
import type { RefObject } from "react"
import { CIRCUIT_H, CIRCUIT_W } from "../data/circuit"
import type { DeviceAnchor } from "../types/hero"

const BODY = { left: 0.17, right: 0.17, top: 0.2, bottom: 0.14 }

function offsetWithin(el: HTMLElement, root: HTMLElement) {
  let x = 0
  let y = 0
  let node: HTMLElement | null = el
  while (node && node !== root) {
    x += node.offsetLeft
    y += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return { x, y }
}

export function useDeviceAnchor(
  frameRef: RefObject<HTMLDivElement | null>,
  deviceRef: RefObject<HTMLDivElement | null>,
) {
  const [anchor, setAnchor] = useState<DeviceAnchor | null>(null)
  useEffect(() => {
    const frame = frameRef.current
    const device = deviceRef.current
    if (!frame || !device) return
    const measure = () => {
      const w = frame.clientWidth
      const h = frame.clientHeight
      const scale = Math.max(w / CIRCUIT_W, h / CIRCUIT_H)
      const ox = (w - CIRCUIT_W * scale) / 2
      const oy = (h - CIRCUIT_H * scale) / 2
      const { x, y } = offsetWithin(device, frame)
      const size = device.offsetWidth
      const toX = (px: number) => Math.round((px - ox) / scale)
      const toY = (py: number) => Math.round((py - oy) / scale)
      setAnchor({
        left: toX(x + size * BODY.left),
        right: toX(x + size * (1 - BODY.right)),
        top: toY(y + size * BODY.top),
        bottom: toY(y + size * (1 - BODY.bottom)),
      })
    }
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(frame)
    observer.observe(device)
    return () => observer.disconnect()
  }, [frameRef, deviceRef])
  return anchor
}
