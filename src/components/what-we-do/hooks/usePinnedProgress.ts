import { useEffect, useRef } from "react"
import { SCROLL } from "../data/scroll"
import { clamp, pinGeometry } from "./pinGeometry"
import type { ProgressBus } from "./progressBus"

const SETTLED = 0.0005

export function usePinnedProgress(bus: ProgressBus, count: number) {
  const trackRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const track = trackRef.current
    const stage = stageRef.current
    if (!track || !stage) return

    const steps = Math.max(count - 1, 0)
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let running = false
    let lastPin = -1
    let lastTime = 0
    let target = 0
    let current = -1

    const layout = () => {
      const { view, step } = pinGeometry(stage)
      track.style.height = `${view + steps * step + view * SCROLL.holdShare}px`
    }

    const pinStage = () => {
      const { view, step, offset } = pinGeometry(stage)
      const travel = Math.max(0, track.offsetHeight - view)
      const pin = clamp(offset - track.getBoundingClientRect().top, 0, travel)
      if (pin !== lastPin) {
        lastPin = pin
        stage.style.transform = `translate3d(0, ${pin.toFixed(2)}px, 0)`
      }
      target = clamp(pin / step, 0, steps)
    }

    const ease = (time: number) => {
      const dt = lastTime ? Math.min(0.1, (time - lastTime) / 1000) : 0
      lastTime = time
      if (current < 0 || reduced) current = target
      else current += (target - current) * (1 - Math.exp(-dt / SCROLL.smoothing))
      if (Math.abs(target - current) < SETTLED) current = target
      bus.set(current)
    }

    const loop = (time: number) => {
      pinStage()
      ease(time)
      const busy = running || current !== target
      raf = busy ? requestAnimationFrame(loop) : 0
      if (!busy) lastTime = 0
    }

    const wake = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(([entry]) => {
      running = entry.isIntersecting
      if (running) wake()
    })

    const ro = new ResizeObserver(() => {
      layout()
      pinStage()
      wake()
    })

    layout()
    pinStage()
    current = target
    bus.set(current)
    io.observe(track)
    ro.observe(stage)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
    }
  }, [bus, count])

  return { trackRef, stageRef }
}
