import { useEffect, type RefObject } from "react"
import { useMotionTemplate, useSpring, useTransform } from "motion/react"
import { clamp } from "../physics/geometry"
import { TILT_SPRING } from "../physics/sim"

interface TiltOptions {
  rootRef: RefObject<HTMLDivElement | null>
  enabled: boolean
  isGrabbing: () => boolean
  rotate: number
  perspective: number
  tiltMax: number
  tiltReach: number
  parallax: number
}

export function useTicketTilt({
  rootRef,
  enabled,
  isGrabbing,
  rotate,
  perspective,
  tiltMax,
  tiltReach,
  parallax,
}: TiltOptions) {
  const tiltX = useSpring(0, TILT_SPRING)
  const tiltY = useSpring(0, TILT_SPRING)
  const depth = tiltMax > 0 ? parallax / tiltMax : 0

  const plane = useMotionTemplate`perspective(${perspective}px) rotate(${rotate}deg) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`
  const artX = useTransform(tiltY, (v) => -v * depth)
  const artY = useTransform(tiltX, (v) => v * depth)
  const artShift = useMotionTemplate`translate(${artX}px, ${artY}px)`
  const inkX = useTransform(tiltY, (v) => v * depth * 0.22)
  const inkY = useTransform(tiltX, (v) => -v * depth * 0.22)
  const ink = useMotionTemplate`translate(${inkX}px, ${inkY}px)`

  useEffect(() => {
    if (!enabled) return
    const move = (e: PointerEvent) => {
      const el = rootRef.current
      if (!el || e.pointerType === "touch" || isGrabbing()) return
      const r = el.getBoundingClientRect()
      const nx = clamp((e.clientX - (r.left + r.width / 2)) / (r.width / 2 + tiltReach), -1, 1)
      const ny = clamp((e.clientY - (r.top + r.height / 2)) / (r.height / 2 + tiltReach), -1, 1)
      tiltY.set(nx * tiltMax)
      tiltX.set(-ny * tiltMax)
    }
    window.addEventListener("pointermove", move)
    return () => window.removeEventListener("pointermove", move)
  }, [enabled, isGrabbing, rootRef, tiltMax, tiltReach, tiltX, tiltY])

  const level = () => {
    tiltX.set(0)
    tiltY.set(0)
  }

  return { plane, artShift, ink, level }
}
