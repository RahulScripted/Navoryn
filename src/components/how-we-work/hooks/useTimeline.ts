import { useLayoutEffect, useRef } from "react"
import { docTop } from "@/utilities/ScrollReveal/components/trigger/scroll"
import { TOTAL_WEEKS } from "../lib/timeline"

interface Options {
  /** Desktop: milliseconds the playhead takes to cross the whole timeline. */
  duration?: number
  /** Desktop: wait after the section comes into view before it starts, in milliseconds. */
  delay?: number
  /** At this width and up the timeline plays by itself; below it the scroll position drives it. */
  autoplayFrom?: number
}

const clamp = (v: number, lo: number, hi: number) => (v < lo ? lo : v > hi ? hi : v)

/** Desktop: play once, on their own, the first time the section is on screen. Pauses while off screen. */
function startAutoplay(el: HTMLElement, duration: number, delay: number) {
  el.style.setProperty("--t", "0")
  let raf = 0
  let last = 0
  let elapsed = 0
  let visible = false

  const tick = (now: number) => {
    raf = 0
    elapsed += Math.min(now - (last || now), 100) // clamp the jump after a hidden tab
    last = now
    const t = clamp((elapsed - delay) / duration, 0, 1)
    el.style.setProperty("--t", t.toFixed(4))
    if (t < 1 && visible) raf = requestAnimationFrame(tick)
  }

  // Watch the top 70% of the screen, so tall layouts start as soon as their top is in view.
  const observer = new IntersectionObserver(
    ([entry]) => {
      visible = entry?.isIntersecting ?? false
      if (visible && !raf && elapsed - delay < duration) {
        last = 0
        raf = requestAnimationFrame(tick)
      }
    },
    { threshold: 0, rootMargin: "0px 0px -30% 0px" },
  )
  observer.observe(el)

  return () => {
    observer.disconnect()
    cancelAnimationFrame(raf)
  }
}

/**
 * Tablet and phone: the playhead follows the scroll. A line 62% of the way down the screen sweeps
 * the steps (`[data-step]`, with `data-start` / `data-end` in weeks), so each step lights up as you
 * reach it and the rail fills between steps. Scrolling back up rewinds it.
 */
function startScrub(el: HTMLElement) {
  const steps = Array.from(el.querySelectorAll<HTMLElement>("[data-step]")).map((node) => ({
    node,
    start: Number(node.dataset.start),
    end: Number(node.dataset.end),
  }))
  if (!steps.length) return () => {}

  let raf = 0
  const update = () => {
    raf = 0
    // Layout offsets, not getBoundingClientRect: the page sits in a fixed layer (for the footer reveal)
    // whose position trails the scroll by a frame, which made the rail lag one step behind.
    const line = window.scrollY + window.innerHeight * 0.62
    const tops = steps.map((s) => docTop(s.node))
    let weeks = steps[0].start
    if (line > tops[0]) {
      let i = steps.length - 1
      while (i > 0 && line < tops[i]) i--
      const lastStep = i === steps.length - 1
      const nextTop = lastStep ? tops[i] + steps[i].node.offsetHeight : tops[i + 1]
      const nextWeek = lastStep ? steps[i].end : steps[i + 1].start
      const f = clamp((line - tops[i]) / Math.max(1, nextTop - tops[i]), 0, 1)
      weeks = steps[i].start + f * (nextWeek - steps[i].start)
    }
    el.style.setProperty("--t", clamp(weeks / TOTAL_WEEKS, 0, 1).toFixed(4))
  }
  const schedule = () => {
    if (!raf) raf = requestAnimationFrame(update)
  }

  update()
  window.addEventListener("scroll", schedule, { passive: true })
  window.addEventListener("resize", schedule)
  return () => {
    window.removeEventListener("scroll", schedule)
    window.removeEventListener("resize", schedule)
    cancelAnimationFrame(raf)
  }
}

/**
 * Drives the section's `--t` (0 to 1) playhead. Wide screens autoplay once; narrow screens scrub with
 * the scroll. With reduced motion the finished timeline is shown. Put the returned ref on the element
 * that carries `--t`.
 */
export function useTimeline<T extends HTMLElement>({ duration = 7000, delay = 1400, autoplayFrom = 1024 }: Options = {}) {
  const ref = useRef<T>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return undefined

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--t", "1")
      return undefined
    }

    const wide = window.matchMedia(`(min-width: ${autoplayFrom}px)`)
    let stop = () => {}
    const setup = () => {
      stop()
      stop = wide.matches ? startAutoplay(el, duration, delay) : startScrub(el)
    }
    setup()
    wide.addEventListener("change", setup)
    return () => {
      wide.removeEventListener("change", setup)
      stop()
    }
  }, [duration, delay, autoplayFrom])

  return ref
}
