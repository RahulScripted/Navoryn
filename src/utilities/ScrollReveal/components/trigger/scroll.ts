import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const ALLOW_MOTION = "(prefers-reduced-motion: no-preference)"

export function docTop(el: HTMLElement): number {
  let top = 0
  let node: HTMLElement | null = el
  while (node) {
    if (!node.classList.contains("footer-parallax-main")) top += node.offsetTop
    node = node.offsetParent as HTMLElement | null
  }
  return top
}

export const viewportHeight = () => window.innerHeight

export function clampScroll(value: number): number {
  const max = Math.max(1, ScrollTrigger.maxScroll(window))
  return Math.min(Math.max(value, 0), max)
}

export function enterPoint(el: HTMLElement, share = 0.2): number {
  const view = viewportHeight()
  return clampScroll(docTop(el) - view + share * Math.min(el.offsetHeight, view))
}

export function onVisible(el: HTMLElement, callback: () => void, bottomInset = 8): () => void {
  if (typeof IntersectionObserver === "undefined") {
    callback()
    return () => {}
  }
  const observer = new IntersectionObserver(
    (entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return
      observer.disconnect()
      callback()
    },
    { rootMargin: `0px 0px -${bottomInset}% 0px`, threshold: 0 },
  )
  observer.observe(el)
  return () => observer.disconnect()
}

let watching = false

export function watchLayout() {
  if (watching || typeof ResizeObserver === "undefined") return
  watching = true
  let timer = 0
  const observer = new ResizeObserver(() => {
    window.clearTimeout(timer)
    timer = window.setTimeout(() => ScrollTrigger.refresh(), 150)
  })
  observer.observe(document.body)
}

// Pinned and scrubbed sections measure the page once. Anything that changes the layout afterwards (a web
// font arriving, a picture loading) would leave them positioned for the old layout, so a pinned row
// could appear on top of the content above it. Re-measure after every layout change, on every page.
if (typeof window !== "undefined") {
  watchLayout()
  document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {})
}
