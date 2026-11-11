import { useLayoutEffect, useRef } from "react"
import { ALLOW_MOTION, gsap, onVisible } from "../trigger/scroll"

export interface RevealOptions {
  children?: boolean
  y?: number
  scale?: number
  blur?: number
  duration?: number
  stagger?: number
  delay?: number
}

const CLEAR = "opacity,transform,filter,transition,willChange"

export function useReveal<T extends HTMLElement>({
  children = false,
  y = 32,
  scale = 1,
  blur = 8,
  duration = 0.9,
  stagger = 0.08,
  delay = 0,
}: RevealOptions = {}) {
  const ref = useRef<T | null>(null)

  useLayoutEffect(() => {
    const root = ref.current
    if (!root) return

    const mm = gsap.matchMedia()
    mm.add(ALLOW_MOTION, () => {
      const targets = children ? (Array.from(root.children) as HTMLElement[]) : [root]
      if (!targets.length) return

      gsap.set(targets, {
        opacity: 0,
        y,
        scale,
        filter: blur ? `blur(${blur}px)` : "none",
        transition: "none",
        willChange: "opacity, transform, filter",
      })
      targets.forEach((el) => (el.dataset.reveal = "pending"))

      let queue: HTMLElement[] = []
      let frame = 0
      const flush = () => {
        frame = 0
        const batch = queue
        queue = []
        batch.forEach((el, index) => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration,
            delay: delay + index * stagger,
            ease: "power3.out",
            clearProps: CLEAR,
            onComplete: () => {
              el.dataset.reveal = "done"
            },
          })
        })
      }

      const stops = targets.map((el) =>
        onVisible(el, () => {
          queue.push(el)
          if (!frame) frame = requestAnimationFrame(flush)
        }),
      )

      return () => {
        stops.forEach((stop) => stop())
        cancelAnimationFrame(frame)
        gsap.set(targets, { clearProps: CLEAR })
        targets.forEach((el) => delete el.dataset.reveal)
      }
    })

    return () => mm.revert()
  }, [children, y, scale, blur, duration, stagger, delay])

  return ref
}
