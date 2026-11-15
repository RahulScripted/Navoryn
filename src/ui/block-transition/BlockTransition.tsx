import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import gsap from "gsap"

const COLUMNS = 5
const STAGGER_DELAY = 0.12
const COVER_DURATION = 0.72
const REVEAL_DURATION = 0.68
const BLOCK_OFFSET_PERCENT = 101
const SHIFT_SCALE_OUT = 0.98
const SHIFT_SCALE_IN = 1.02
const SHIFT_BLUR = "4px"
const SHIFT_DURATION_OUT = 0.7
const SHIFT_DURATION_IN = 0.8
const REDUCED_MOTION_FADE = 0.2

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

function prefersReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false
}

function clampNumber(value: unknown, min: number, max: number, fallback: number): number {
  const next = Number(value)
  if (!Number.isFinite(next)) return fallback
  return Math.min(max, Math.max(min, next))
}

export interface BlockTransitionProps {
  transitionKey: string | number
  children?: ReactNode
  enableContentShift?: boolean
  columns?: number
  color?: string
  duration?: number
  onComplete?: () => void
  className?: string
}

export default function BlockTransition({
  transitionKey,
  children,
  enableContentShift = false,
  columns = COLUMNS,
  color,
  duration = 1,
  onComplete,
  className = "",
}: BlockTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const colRefs = useRef<(HTMLDivElement | null)[]>([])
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const coveringRef = useRef(false)
  const revealedRevisionRef = useRef(0)
  const shownChildrenRef = useRef<ReactNode>(children)

  const latestRef = useRef({ transitionKey, onComplete })
  latestRef.current = { transitionKey, onComplete }

  const [view, setView] = useState({ key: transitionKey, revision: 0 })

  const safeColumns = Math.round(clampNumber(columns, 2, 12, COLUMNS))
  const safeDuration = clampNumber(duration, 0.25, 3, 1)

  const isLeaving = transitionKey !== view.key
  if (!isLeaving) shownChildrenRef.current = children

  const getCols = () =>
    colRefs.current.slice(0, safeColumns).filter(Boolean) as HTMLDivElement[]

  const buildColsAnimation = (
    timeline: gsap.core.Timeline,
    direction: "cover" | "reveal",
  ) => {
    const blockCols = getCols()
    const orderedCols = direction === "cover" ? blockCols : [...blockCols].reverse()

    orderedCols.forEach((col, index) => {
      const [topBlock, bottomBlock] = Array.from(col.children)
      const delay = index * STAGGER_DELAY

      if (direction === "cover") {
        timeline.set([topBlock, bottomBlock], { autoAlpha: 1 }, delay)
        timeline.to(
          [topBlock, bottomBlock],
          {
            yPercent: 0,
            duration: COVER_DURATION * safeDuration,
            ease: "power3.inOut",
          },
          delay,
        )
      } else {
        timeline.to(
          topBlock,
          {
            yPercent: -BLOCK_OFFSET_PERCENT,
            duration: REVEAL_DURATION * safeDuration,
            ease: "power3.inOut",
          },
          delay,
        )
        timeline.set(topBlock, { autoAlpha: 0 }, delay + REVEAL_DURATION * safeDuration)
        timeline.to(
          bottomBlock,
          {
            yPercent: BLOCK_OFFSET_PERCENT,
            duration: REVEAL_DURATION * safeDuration,
            ease: "power3.inOut",
          },
          delay,
        )
        timeline.set(bottomBlock, { autoAlpha: 0 }, delay + REVEAL_DURATION * safeDuration)
      }
    })
  }

  useIsomorphicLayoutEffect(() => {
    colRefs.current = colRefs.current.slice(0, safeColumns)
    getCols().forEach((col) => {
      const [topBlock, bottomBlock] = Array.from(col.children)
      if (!topBlock || !bottomBlock) return
      gsap.set(topBlock, { yPercent: -BLOCK_OFFSET_PERCENT, autoAlpha: 0 })
      gsap.set(bottomBlock, { yPercent: BLOCK_OFFSET_PERCENT, autoAlpha: 0 })
    })
  }, [safeColumns])

  useEffect(() => {
    if (transitionKey === view.key || coveringRef.current) return
    coveringRef.current = true
    timelineRef.current?.kill()

    const timeline = gsap.timeline({
      onComplete: () => {
        coveringRef.current = false
        setView((current) => ({
          key: latestRef.current.transitionKey,
          revision: current.revision + 1,
        }))
      },
    })
    timelineRef.current = timeline

    if (prefersReducedMotion()) {
      timeline.to(
        wrapperRef.current,
        { opacity: 0, duration: REDUCED_MOTION_FADE, ease: "power1.out" },
        0,
      )
      return
    }

    if (enableContentShift) {
      timeline.fromTo(
        wrapperRef.current,
        { scale: 1, filter: "blur(0px)", opacity: 1 },
        {
          scale: SHIFT_SCALE_OUT,
          filter: `blur(${SHIFT_BLUR})`,
          opacity: 0.85,
          duration: SHIFT_DURATION_OUT * safeDuration,
          ease: "power2.inOut",
        },
        0,
      )
    }

    buildColsAnimation(timeline, "cover")
  }, [transitionKey, view.key])

  useIsomorphicLayoutEffect(() => {
    if (view.revision === revealedRevisionRef.current) return
    revealedRevisionRef.current = view.revision
    timelineRef.current?.kill()

    const wrapper = wrapperRef.current
    if (wrapper && (!document.activeElement || document.activeElement === document.body)) {
      wrapper.focus({ preventScroll: true })
    }

    const timeline = gsap.timeline({
      onComplete: () => latestRef.current.onComplete?.(),
    })
    timelineRef.current = timeline

    if (prefersReducedMotion()) {
      timeline.to(
        wrapper,
        {
          opacity: 1,
          duration: REDUCED_MOTION_FADE,
          ease: "power1.out",
          clearProps: "opacity",
        },
        0,
      )
      return
    }

    if (enableContentShift) {
      timeline.fromTo(
        wrapper,
        { scale: SHIFT_SCALE_IN, filter: `blur(${SHIFT_BLUR})`, opacity: 0.85 },
        {
          scale: 1,
          filter: "blur(0px)",
          opacity: 1,
          duration: SHIFT_DURATION_IN * safeDuration,
          ease: "power2.out",
          clearProps: "transform,filter,opacity",
        },
        0.08,
      )
    }

    buildColsAnimation(timeline, "reveal")
  }, [view.revision])

  useEffect(
    () => () => {
      timelineRef.current?.kill()
    },
    [],
  )

  const blockClassName = `absolute left-0 w-full h-[51%] will-change-transform ${color ? "" : "bg-foreground"}`
  const blockStyle = { backgroundColor: color, opacity: 0, visibility: "hidden" as const }

  return (
    <div className={`relative h-full w-full overflow-clip ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[999] overflow-hidden"
      >
        {Array.from({ length: safeColumns }, (_, index) => (
          <div
            key={index}
            ref={(node) => {
              colRefs.current[index] = node
            }}
            className="absolute top-0 h-full overflow-hidden"
            style={{
              left: `${(index * 100) / safeColumns}%`,
              width: `calc(${100 / safeColumns}% + 2px)`,
            }}
          >
            <span className={`${blockClassName} top-0`} style={blockStyle} />
            <span className={`${blockClassName} bottom-0`} style={blockStyle} />
          </div>
        ))}
      </div>

      <div
        ref={wrapperRef}
        tabIndex={-1}
        aria-busy={isLeaving || undefined}
        className="relative h-full w-full overflow-x-clip outline-none"
      >
        {isLeaving ? shownChildrenRef.current : children}
      </div>
    </div>
  )
}
