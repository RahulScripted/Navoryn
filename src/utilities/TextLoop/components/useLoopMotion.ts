import { useEffect, useLayoutEffect, type RefObject } from "react"
import { gsap } from "gsap"
import { VIEW_W, circleRadius, clamp, wrap } from "./geometry"

const MAX_FLING = 2600
const MAX_BOOST = 1600

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export interface LoopMetrics {
  length: number
  reps: number
  crossLength: number
  crossReps: number
}

interface Options {
  metrics: LoopMetrics
  rootRef: RefObject<HTMLDivElement | null>
  svgRef: RefObject<SVGSVGElement | null>
  headRef: RefObject<SVGTextPathElement | null>
  tailRef: RefObject<SVGTextPathElement | null>
  crossHeadRef: RefObject<SVGTextPathElement | null>
  crossTailRef: RefObject<SVGTextPathElement | null>
  progressRef: RefObject<number>
  speed: number
  direction: "forward" | "reverse"
  pauseOnHover: boolean
  draggable: boolean
  scrollBoost: number
  cross: boolean
  circular: boolean
  mainAngle: number
  curviness: number
  ribbonWidth: number
}

/** Drives the text along the path: auto-travel, hover pause, drag/fling and scroll boost. */
export function useLoopMotion(o: Options) {
  const {
    metrics, rootRef, svgRef, headRef, tailRef, crossHeadRef, crossTailRef, progressRef,
    speed, direction, pauseOnHover, draggable, scrollBoost, cross, circular, mainAngle,
    curviness, ribbonWidth,
  } = o

  useIsomorphicLayoutEffect(() => {
    const { length, crossLength } = metrics
    const head = headRef.current
    const tail = tailRef.current
    const root = rootRef.current
    const svg = svgRef.current
    if (!head || !tail || !root || !svg || !length) return undefined

    const crossHead = crossHeadRef.current
    const crossTail = crossTailRef.current
    const crossPaths = cross && crossHead && crossTail && crossLength > 0 ? [crossHead, crossTail] : null

    let travel = progressRef.current * length

    const apply = () => {
      const offset = wrap(travel, length)
      progressRef.current = offset / length
      head.setAttribute("startOffset", String(offset))
      tail.setAttribute("startOffset", String(offset - length))
      if (crossPaths) {
        const crossOffset = wrap(-travel, crossLength)
        crossPaths[0].setAttribute("startOffset", String(crossOffset))
        crossPaths[1].setAttribute("startOffset", String(crossOffset - crossLength))
      }
    }
    apply()

    const reduced = Boolean(window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches)
    const sign = direction === "reverse" ? -1 : 1
    const base = reduced ? 0 : Math.max(0, speed) * sign
    const hover = { scale: 1 }
    const angle = (mainAngle * Math.PI) / 180
    const radius = circleRadius(curviness, ribbonWidth)
    const boosting = scrollBoost > 0 && !reduced

    let fling = 0
    let boost = 0
    let scrollVelocity = 0
    let scrollAt = 0
    let scrollPos = 0
    let scrollSource: EventTarget | null = null
    let dragging = false
    let pointerId: number | null = null
    let lastX = 0
    let lastY = 0
    let lastT = 0
    let velocity = 0
    let center = { x: 0, y: 0 }
    let running = false

    const tick = (_: number, deltaMs: number) => {
      if (dragging) return
      const dt = Math.min(0.05, deltaMs / 1000)
      fling *= Math.exp(-dt / 0.55)
      if (boosting) {
        if (performance.now() - scrollAt > 90) scrollVelocity *= Math.exp(-dt / 0.12)
        const target = clamp(scrollVelocity * scrollBoost * 0.35 * sign, -MAX_BOOST, MAX_BOOST)
        boost += (target - boost) * (1 - Math.exp(-dt / 0.18))
      }
      const v = base * hover.scale + fling + boost
      if (Math.abs(v) < 0.01) return
      travel += v * dt
      apply()
    }

    const start = () => {
      if (running || reduced) return
      running = true
      gsap.ticker.add(tick)
    }
    const stop = () => {
      if (!running) return
      running = false
      gsap.ticker.remove(tick)
    }

    const glide = (hovered: boolean) =>
      gsap.to(hover, {
        scale: hovered ? 0 : 1,
        duration: hovered ? 0.6 : 0.9,
        ease: hovered ? "power2.out" : "power2.inOut",
        overwrite: true,
      })

    const onEnter = (e: PointerEvent) => {
      if (e.pointerType !== "touch") glide(true)
    }
    const onLeave = () => glide(false)

    const onDown = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button !== 0) return
      dragging = true
      pointerId = e.pointerId
      root.setPointerCapture?.(e.pointerId)
      lastX = e.clientX
      lastY = e.clientY
      lastT = performance.now()
      velocity = base * hover.scale + fling + boost
      const rect = svg.getBoundingClientRect()
      center = { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 }
      root.style.cursor = "grabbing"
    }

    const onMove = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return
      const now = performance.now()
      let delta: number
      if (circular) {
        let turn =
          Math.atan2(e.clientY - center.y, e.clientX - center.x) -
          Math.atan2(lastY - center.y, lastX - center.x)
        if (turn > Math.PI) turn -= Math.PI * 2
        if (turn < -Math.PI) turn += Math.PI * 2
        delta = turn * radius
      } else {
        const scale = VIEW_W / (svg.getBoundingClientRect().width || VIEW_W)
        delta = ((e.clientX - lastX) * Math.cos(angle) + (e.clientY - lastY) * Math.sin(angle)) * scale
      }
      travel += delta
      apply()
      const dt = Math.max(1, now - lastT) / 1000
      velocity = velocity * 0.6 + (delta / dt) * 0.4
      lastX = e.clientX
      lastY = e.clientY
      lastT = now
    }

    const onUp = (e: PointerEvent) => {
      if (!dragging || e.pointerId !== pointerId) return
      dragging = false
      pointerId = null
      root.style.cursor = ""
      if (reduced) return
      const release = performance.now() - lastT > 90 ? 0 : clamp(velocity, -MAX_FLING, MAX_FLING)
      fling = release - (base * hover.scale + boost)
    }

    const onScroll = (e: Event) => {
      const source = e.target
      const isPage =
        source === document || source === document.documentElement || source === document.body
      if (!isPage && !(source instanceof Node && source.contains(root))) return
      const pos = isPage ? window.scrollY : (source as Element).scrollTop
      const now = performance.now()
      if (source !== scrollSource || now - scrollAt > 200) {
        scrollSource = source
        scrollPos = pos
        scrollAt = now
        return
      }
      const instant = (pos - scrollPos) / (Math.max(8, now - scrollAt) / 1000)
      scrollVelocity = scrollVelocity * 0.5 + instant * 0.5
      scrollPos = pos
      scrollAt = now
    }

    if (pauseOnHover) {
      root.addEventListener("pointerenter", onEnter)
      root.addEventListener("pointerleave", onLeave)
    }
    if (draggable) {
      root.addEventListener("pointerdown", onDown)
      root.addEventListener("pointermove", onMove)
      root.addEventListener("pointerup", onUp)
      root.addEventListener("pointercancel", onUp)
    }
    if (boosting) window.addEventListener("scroll", onScroll, { capture: true, passive: true })

    const observer =
      typeof IntersectionObserver !== "undefined"
        ? new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
        : null
    if (observer) observer.observe(root)
    else start()

    return () => {
      observer?.disconnect()
      stop()
      gsap.killTweensOf(hover)
      root.style.cursor = ""
      root.removeEventListener("pointerenter", onEnter)
      root.removeEventListener("pointerleave", onLeave)
      root.removeEventListener("pointerdown", onDown)
      root.removeEventListener("pointermove", onMove)
      root.removeEventListener("pointerup", onUp)
      root.removeEventListener("pointercancel", onUp)
      window.removeEventListener("scroll", onScroll, { capture: true })
    }
  }, [metrics, speed, direction, pauseOnHover, draggable, scrollBoost, cross, circular, mainAngle, curviness, ribbonWidth])
}
