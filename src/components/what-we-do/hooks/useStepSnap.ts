import { useEffect, type RefObject } from "react"
import { ALLOW_MOTION, docTop } from "@/utilities/ScrollReveal/components/trigger/scroll"
import { SCROLL } from "../data/scroll"
import { clamp, pinGeometry } from "./pinGeometry"
import { snapTarget } from "./snapTarget"

export function useStepSnap(
  trackRef: RefObject<HTMLDivElement | null>,
  stageRef: RefObject<HTMLDivElement | null>,
  count: number,
) {
  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    const steps = Math.max(count - 1, 0)
    if (!track || !stage || steps === 0) return

    let timer = 0
    let touching = false
    let rest = 0

    const measure = () => {
      const { step, offset } = pinGeometry(stage)
      const start = docTop(track) - offset
      return { step, start, progress: (window.scrollY - start) / step }
    }

    const settle = () => {
      if (touching) return
      const { step, start, progress } = measure()
      if (progress <= 0 || progress >= steps) {
        rest = clamp(Math.round(progress), 0, steps)
        return
      }
      const target = snapTarget(progress, rest, steps)
      const top = start + target * step
      if (Math.abs(top - window.scrollY) < 1) {
        rest = target
        return
      }
      const smooth = window.matchMedia(ALLOW_MOTION).matches
      window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" })
    }

    const schedule = () => {
      window.clearTimeout(timer)
      timer = window.setTimeout(settle, SCROLL.snapIdle)
    }

    const onTouchStart = () => {
      touching = true
      window.clearTimeout(timer)
    }

    const onTouchEnd = () => {
      touching = false
      schedule()
    }

    rest = clamp(Math.round(measure().progress), 0, steps)

    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("touchstart", onTouchStart, { passive: true })
    window.addEventListener("touchend", onTouchEnd, { passive: true })
    window.addEventListener("touchcancel", onTouchEnd, { passive: true })

    return () => {
      window.clearTimeout(timer)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("touchcancel", onTouchEnd)
    }
  }, [trackRef, stageRef, count])
}
