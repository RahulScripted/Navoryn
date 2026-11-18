import { useCallback, useEffect, useRef } from "react"
import { useIsDark } from "@/components/technology/hooks/useIsDark"

const DURATION_MS = 15_000

export function useConfetti() {
  const isDark = useIsDark()
  const stopRef = useRef<(() => void) | null>(null)

  useEffect(() => () => stopRef.current?.(), [])

  return useCallback(async () => {
    stopRef.current?.()
    const { default: confetti } = await import("canvas-confetti")
    const colors = isDark ? ["#fafafa", "#a3a3a3", "#525252"] : ["#0a0a0a", "#737373", "#d4d4d4"]
    const end = Date.now() + DURATION_MS
    let raf = 0
    let stopped = false

    const burst = (angle: number, x: number) =>
      confetti({
        particleCount: 3,
        angle,
        spread: 75,
        origin: { x },
        colors,
        zIndex: 1001,
        disableForReducedMotion: true,
      })

    const frame = () => {
      if (stopped) return
      burst(60, 0)
      burst(120, 1)
      if (Date.now() < end) raf = requestAnimationFrame(frame)
    }
    frame()

    stopRef.current = () => {
      stopped = true
      cancelAnimationFrame(raf)
      confetti.reset()
    }
  }, [isDark])
}
