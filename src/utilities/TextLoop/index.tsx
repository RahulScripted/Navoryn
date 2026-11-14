import {
  useEffect,
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react"
import { cn } from "@/lib/utils"
import { inkOn, tint } from "./components/color"
import {
  CX,
  CY,
  VIEW_H,
  VIEW_W,
  buildFade,
  buildPath,
  type LoopShape,
} from "./components/geometry"
import { useLoopMotion, type LoopMetrics } from "./components/useLoopMotion"

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect

export interface TextLoopProps {
  text?: string
  shape?: LoopShape
  /** Custom SVG path data in a 1200x520 viewBox. Overrides `shape`. */
  path?: string
  speed?: number
  direction?: "forward" | "reverse"
  separator?: string
  curviness?: number
  tilt?: number
  fontSize?: number
  fontWeight?: number
  letterSpacing?: number
  uppercase?: boolean
  color?: string
  ribbon?: boolean
  ribbonColor?: string
  ribbonWidth?: number
  edgeFade?: number
  pauseOnHover?: boolean
  cross?: boolean
  crossColor?: string
  crossAngle?: number
  draggable?: boolean
  scrollBoost?: number
  outline?: boolean
  outlineWidth?: number
  className?: string
  /** Extra classes for the inner <svg> (e.g. to crop the empty space above and below the band). */
  svgClassName?: string
  style?: CSSProperties
}

export default function TextLoop({
  text = "React ✦ Bits",
  shape = "wave",
  path,
  speed = 90,
  direction = "forward",
  separator = "✦",
  curviness = 90,
  tilt = 0,
  fontSize = 46,
  fontWeight = 800,
  letterSpacing = 2,
  uppercase = true,
  color,
  ribbon = true,
  ribbonColor = "#5227FF",
  ribbonWidth = 86,
  edgeFade = 0,
  pauseOnHover = true,
  cross = false,
  crossColor,
  crossAngle = 16,
  draggable = false,
  scrollBoost = 0,
  outline = false,
  outlineWidth = 1.5,
  className,
  svgClassName,
  style,
}: TextLoopProps) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const pathRef = useRef<SVGPathElement | null>(null)
  const crossPathRef = useRef<SVGPathElement | null>(null)
  const measureRef = useRef<SVGTextElement | null>(null)
  const headRef = useRef<SVGTextPathElement | null>(null)
  const tailRef = useRef<SVGTextPathElement | null>(null)
  const crossHeadRef = useRef<SVGTextPathElement | null>(null)
  const crossTailRef = useRef<SVGTextPathElement | null>(null)
  const progressRef = useRef(0)
  const [metrics, setMetrics] = useState<LoopMetrics>({ length: 0, reps: 1, crossLength: 0, crossReps: 1 })

  const id = `text-loop-${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`
  const crossId = `${id}-cross`
  const fadeId = `${id}-fade`
  const maskId = `${id}-mask`
  const shadowId = `${id}-shadow`
  const underId = `${id}-under`

  const custom = Boolean(path)
  const d = useMemo(() => path || buildPath(shape, curviness, ribbonWidth), [path, shape, curviness, ribbonWidth])
  const crossD = useMemo(() => {
    if (!cross) return ""
    if (path) return path
    return buildPath(shape, curviness, ribbonWidth, shape === "wave" || shape === "arch" || shape === "circle")
  }, [cross, path, shape, curviness, ribbonWidth])
  const fade = useMemo(() => buildFade(edgeFade), [edgeFade])

  const fill = color || (ribbon ? "#ffffff" : "currentColor")
  const half = cross ? crossAngle / 2 : 0
  const mainAngle = tilt + half
  const crossAngleDeg = tilt - half
  const mainTransform = mainAngle ? `rotate(${mainAngle} ${CX} ${CY})` : undefined
  const crossTransform = crossAngleDeg ? `rotate(${crossAngleDeg} ${CX} ${CY})` : undefined
  const crossTape = crossColor || tint(ribbonColor, 0.62)
  const crossFill = ribbon ? inkOn(crossTape) : crossColor || "currentColor"
  const crossDim = !ribbon && !crossColor ? 0.45 : 1

  const unit = useMemo(() => {
    const base = uppercase ? String(text).toUpperCase() : String(text)
    return `${base}${separator ? `\u00A0${separator}\u00A0` : "\u00A0\u00A0\u00A0"}`
  }, [text, separator, uppercase])

  const textStyle = useMemo<CSSProperties>(
    () => ({ fontSize: `${fontSize}px`, fontWeight, letterSpacing: `${letterSpacing}px` }),
    [fontSize, fontWeight, letterSpacing],
  )

  // Measure the path and one repetition of the phrase to know how many repeats fill the loop.
  useIsomorphicLayoutEffect(() => {
    const pathEl = pathRef.current
    const measureEl = measureRef.current
    if (!pathEl || !measureEl) return undefined
    let cancelled = false

    const measure = () => {
      if (cancelled) return
      let length: number
      let unitWidth: number
      let crossLength: number
      try {
        length = pathEl.getTotalLength()
        unitWidth = measureEl.getComputedTextLength()
        crossLength = crossPathRef.current ? crossPathRef.current.getTotalLength() : 0
      } catch {
        return
      }
      if (!length) return
      const repsFor = (total: number) => (unitWidth > 0 ? Math.max(1, Math.round(total / unitWidth)) : 1)
      const next = { length, reps: repsFor(length), crossLength, crossReps: repsFor(crossLength) }
      setMetrics((prev) =>
        prev.length === next.length &&
        prev.reps === next.reps &&
        prev.crossLength === next.crossLength &&
        prev.crossReps === next.crossReps
          ? prev
          : next,
      )
    }

    measure()
    document.fonts?.ready.then(measure).catch(() => {})
    return () => {
      cancelled = true
    }
  }, [d, crossD, unit, fontSize, fontWeight, letterSpacing])

  useLoopMotion({
    metrics, rootRef, svgRef, headRef, tailRef, crossHeadRef, crossTailRef, progressRef,
    speed, direction, pauseOnHover, draggable, scrollBoost, cross,
    circular: !custom && shape === "circle",
    mainAngle, curviness, ribbonWidth,
  })

  const loopText = unit.repeat(metrics.reps)
  const crossText = unit.repeat(metrics.crossReps)
  const fitLength = metrics.length || undefined
  const crossFit = metrics.crossLength || undefined

  const paint = (ink: string, opacity: number) =>
    outline
      ? { fill: "none", stroke: ink, strokeOpacity: opacity, strokeWidth: outlineWidth, strokeLinejoin: "round" as const }
      : { fill: ink, fillOpacity: opacity }
  const mainPaint = paint(fill, 1)
  const crossPaint = paint(crossFill, crossDim)

  const textClass = "select-none"

  return (
    <div
      ref={rootRef}
      className={cn("relative w-full overflow-hidden", draggable && "cursor-grab touch-pan-y", className)}
      style={style}
    >
      <svg
        ref={svgRef}
        className={cn("block h-auto w-full", svgClassName)}
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMidYMid meet"
        role="img"
        aria-label={text}
      >
        <defs>
          {fade.length > 0 && (
            <linearGradient id={fadeId} x1="0" y1="0" x2="1" y2="0">
              {fade.map((stop, i) => (
                <stop key={i} offset={stop.offset} stopColor="#ffffff" stopOpacity={stop.opacity} />
              ))}
            </linearGradient>
          )}
          {fade.length > 0 && (
            <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width={VIEW_W} height={VIEW_H}>
              <rect width={VIEW_W} height={VIEW_H} fill={`url(#${fadeId})`} />
            </mask>
          )}
          {cross && ribbon && (
            <filter id={shadowId} filterUnits="userSpaceOnUse" x={-VIEW_W} y={-VIEW_H} width={VIEW_W * 3} height={VIEW_H * 3}>
              <feGaussianBlur stdDeviation={Math.max(4, ribbonWidth * 0.11)} />
            </filter>
          )}
          {cross && ribbon && (
            <mask id={underId} maskUnits="userSpaceOnUse" x={-VIEW_W} y={-VIEW_H} width={VIEW_W * 3} height={VIEW_H * 3}>
              <g transform={crossTransform}>
                <path d={crossD} fill="none" stroke="#ffffff" strokeWidth={ribbonWidth} strokeLinecap="round" strokeLinejoin="round" />
              </g>
            </mask>
          )}
        </defs>

        <text ref={measureRef} className="pointer-events-none invisible" style={textStyle} aria-hidden="true">
          {unit}
        </text>

        <g mask={fade.length > 0 ? `url(#${maskId})` : undefined}>
          {cross && (
            <g transform={crossTransform}>
              <path
                ref={crossPathRef}
                id={crossId}
                d={crossD}
                fill="none"
                stroke={ribbon ? crossTape : "none"}
                strokeWidth={ribbon ? ribbonWidth : 0}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text className={textClass} style={textStyle} {...crossPaint} dominantBaseline="central" aria-hidden="true" textLength={crossFit} lengthAdjust="spacing">
                <textPath ref={crossHeadRef} href={`#${crossId}`} startOffset={0}>{crossText}</textPath>
              </text>
              <text className={textClass} style={textStyle} {...crossPaint} dominantBaseline="central" aria-hidden="true" textLength={crossFit} lengthAdjust="spacing">
                <textPath ref={crossTailRef} href={`#${crossId}`} startOffset={0}>{crossText}</textPath>
              </text>
            </g>
          )}

          {cross && ribbon && (
            <g mask={`url(#${underId})`}>
              <g filter={`url(#${shadowId})`} transform={`translate(0 ${Math.max(4, ribbonWidth * 0.08)})`}>
                <g transform={mainTransform}>
                  <path d={d} fill="none" stroke="#000000" strokeOpacity={0.42} strokeWidth={ribbonWidth} strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </g>
            </g>
          )}

          <g transform={mainTransform}>
            <path
              ref={pathRef}
              id={id}
              d={d}
              fill="none"
              stroke={ribbon ? ribbonColor : "none"}
              strokeWidth={ribbon ? ribbonWidth : 0}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text className={textClass} style={textStyle} {...mainPaint} dominantBaseline="central" aria-hidden="true" textLength={fitLength} lengthAdjust="spacing">
              <textPath ref={headRef} href={`#${id}`} startOffset={0}>{loopText}</textPath>
            </text>
            <text className={textClass} style={textStyle} {...mainPaint} dominantBaseline="central" aria-hidden="true" textLength={fitLength} lengthAdjust="spacing">
              <textPath ref={tailRef} href={`#${id}`} startOffset={0}>{loopText}</textPath>
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}
