import { Children, createElement, useLayoutEffect, useMemo, useRef, useState, type ReactNode } from "react"
import { cn } from "@/lib/utils"
import {
  ALLOW_MOTION,
  clampScroll,
  docTop,
  enterPoint,
  gsap,
  onVisible,
  viewportHeight,
  watchLayout,
} from "./components/trigger/scroll"
import {
  RISE_MASK,
  SCRUB_SPAN,
  clamp01,
  paintPiece,
  type Effect,
  type Look,
  type Mode,
  type SplitBy,
} from "./components/text/paintPiece"
import { splitText } from "./components/text/splitText"

export interface ScrollRevealProps {
  children: ReactNode
  as?: "h1" | "h2" | "h3" | "p" | "div" | "span"
  mode?: Mode
  splitBy?: SplitBy
  effect?: Effect
  stagger?: number
  duration?: number
  smoothing?: number
  enableBlur?: boolean
  blurStrength?: number
  baseOpacity?: number
  baseRotation?: number
  baseOffset?: number
  highlightColor?: string
  containerClassName?: string
  textClassName?: string
}

export function ScrollReveal({
  children,
  as = "h2",
  mode = "enter",
  splitBy = "words",
  effect = "fade",
  stagger = 0.05,
  duration = 0.8,
  smoothing = 0,
  enableBlur = true,
  blurStrength = 4,
  baseOpacity = 0.1,
  baseRotation = 3,
  baseOffset = 0,
  highlightColor = "",
  containerClassName = "",
  textClassName = "",
}: ScrollRevealProps) {
  const [container, setContainer] = useState<HTMLElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)

  const text = useMemo(() => {
    const parts = Children.toArray(children)
    return parts.every((part) => typeof part === "string" || typeof part === "number")
      ? parts.join("")
      : null
  }, [children])

  const pieces = useMemo(() => (text === null ? null : splitText(text, splitBy)), [text, splitBy])

  useLayoutEffect(() => {
    const el = container
    const textEl = textRef.current
    if (!el || !textEl) return
    if (mode === "scrub") watchLayout()

    const wrappers = Array.from(el.querySelectorAll<HTMLElement>(".scroll-reveal-word"))
    const targets = wrappers.length
      ? Array.from(el.querySelectorAll<HTMLElement>(".scroll-reveal-piece"))
      : [textEl]

    const scrub = smoothing > 0 ? smoothing : true
    const playOnce = mode === "enter"
    const span = playOnce ? Math.max(0.05, duration) : SCRUB_SPAN
    const gap = Math.max(0, stagger)
    const look: Look = {
      effect,
      masked: effect === "rise" && wrappers.length > 0,
      baseOpacity,
      blur: enableBlur ? blurStrength : 0,
      offset: baseOffset,
      highlightColor,
    }

    const mm = gsap.matchMedia()
    mm.add(ALLOW_MOTION, () => {
      let stopVisible = () => {}
      const order = targets.map((_, index) => index)
      const last = targets.map(() => -1)
      const state = { p: 0 }
      let count = targets.length

      const measure = () => {
        if (splitBy !== "lines" || !wrappers.length) return
        let line = -1
        let top = -Infinity
        wrappers.forEach((wrapper, index) => {
          const next = wrapper.offsetTop
          if (Math.abs(next - top) > 2) {
            line += 1
            top = next
          }
          order[index] = line
        })
        count = line + 1
      }

      const total = () => span + Math.max(0, count - 1) * gap

      const render = () => {
        const at = state.p * total()
        targets.forEach((piece, index) => {
          const t = clamp01((at - order[index] * gap) / span)
          if (t === last[index]) return
          last[index] = t
          paintPiece(piece, t, look)
        })
      }

      measure()
      targets.forEach((piece) => {
        piece.style.willChange =
          targets.length > 80 ? "" : effect === "fade" && !baseOffset ? "opacity" : "opacity, transform"
        piece.style.transformOrigin = effect === "flip" ? "50% 100%" : ""
      })
      if (look.masked) wrappers.forEach((wrapper) => (wrapper.style.clipPath = RISE_MASK))
      render()

      if (playOnce) {
        let played = false
        const play = () => {
          if (played) return
          played = true
          gsap.to(state, { p: 1, duration: total(), ease: "none", onUpdate: render })
          if (baseRotation) gsap.to(el, { rotate: 0, duration: Math.min(total(), 1.4), ease: "power3.out" })
        }
        if (baseRotation) gsap.set(el, { transformOrigin: "0% 50%", rotate: baseRotation })
        stopVisible = onVisible(el, play)
      } else {
        const start = () => enterPoint(el)
        const end = () =>
          Math.max(start() + 1, clampScroll(docTop(el) + el.offsetHeight - viewportHeight()))

        if (baseRotation) {
          gsap.fromTo(
            el,
            { transformOrigin: "0% 50%", rotate: baseRotation },
            {
              ease: "none",
              rotate: 0,
              scrollTrigger: {
                start: () => clampScroll(docTop(el) - viewportHeight()),
                end,
                scrub,
              },
            },
          )
        }

        gsap.to(state, {
          p: 1,
          ease: "none",
          onUpdate: render,
          scrollTrigger: { start, end, scrub },
        })
      }

      const resizeObserver =
        splitBy === "lines" && typeof ResizeObserver !== "undefined"
          ? new ResizeObserver(() => {
              measure()
              last.fill(-1)
              render()
            })
          : null
      resizeObserver?.observe(textEl)

      return () => {
        stopVisible()
        resizeObserver?.disconnect()
        targets.forEach((piece) => {
          piece.style.opacity = ""
          piece.style.transform = ""
          piece.style.transformOrigin = ""
          piece.style.filter = ""
          piece.style.color = ""
          piece.style.willChange = ""
        })
        wrappers.forEach((wrapper) => (wrapper.style.clipPath = ""))
      }
    })

    return () => mm.revert()
  }, [
    container,
    text,
    splitBy,
    effect,
    mode,
    duration,
    highlightColor,
    enableBlur,
    baseOpacity,
    baseRotation,
    blurStrength,
    baseOffset,
    stagger,
    smoothing,
  ])

  return createElement(
    as,
    {
      ref: setContainer,
      className: cn("scroll-reveal", containerClassName),
    },
    text !== null && <span className="sr-only">{text}</span>,
    <span
      ref={textRef}
      className={cn("scroll-reveal-text", textClassName)}
      aria-hidden={text === null ? undefined : true}
    >
      {pieces ?? children}
    </span>,
  )
}

export default ScrollReveal
