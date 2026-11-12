import {
  useCallback,
  useEffect,
  useEffectEvent,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react"
import { motion, useReducedMotion } from "motion/react"
import { advanceTicket, settled } from "../physics/advance"
import { buildGeometry, type Point } from "../physics/geometry"
import { paintTicket } from "../physics/paint"
import { beginGrab, draggedFar, releaseGrab, trackPointer } from "../physics/pointer"
import { freshSim, type Sim, type TicketConfig } from "../physics/sim"
import { TicketBody } from "./TicketBody"
import { TicketFibres } from "./TicketFibres"
import { TicketStub } from "./TicketStub"
import { ticketStyle } from "./ticketStyle"
import { useTicketTilt } from "./useTicketTilt"

export interface TearTicketProps {
  children?: ReactNode
  stub?: ReactNode
  art?: ReactNode
  scrim?: boolean
  imageRadius?: number
  orientation?: "horizontal" | "vertical"
  torn?: boolean
  defaultTorn?: boolean
  onTear?: () => void
  width?: number
  height?: number
  stubSize?: number
  radius?: number
  holes?: number
  holeSize?: number
  notch?: number
  roughness?: number
  tearAngle?: number
  stretch?: number
  resistance?: number
  rotate?: number
  tilt?: boolean
  tiltMax?: number
  tiltReach?: number
  parallax?: number
  perspective?: number
  background?: string
  color?: string
  border?: boolean
  borderColor?: string
  borderWidth?: number
  stubBackground?: string
  recenter?: boolean
  disabled?: boolean
  ariaLabel?: string
  className?: string
}

export function TearTicket({
  children = null,
  stub = null,
  art = null,
  scrim = true,
  imageRadius = 8,
  orientation = "horizontal",
  torn,
  defaultTorn = false,
  onTear,
  width = 460,
  height = 250,
  stubSize = 150,
  radius = 16,
  holes = 12,
  holeSize = 6,
  notch = 3,
  roughness = 0,
  tearAngle = 30,
  stretch = 30,
  resistance = 0.45,
  rotate = 0,
  tilt = true,
  tiltMax = 9,
  tiltReach = 260,
  parallax = 6,
  perspective = 1000,
  background = "#27272a",
  color = "#f5f5f5",
  border = true,
  borderColor = "",
  borderWidth = 1,
  stubBackground = "",
  recenter = true,
  disabled = false,
  ariaLabel = "Tear off the stub",
  className = "",
}: TearTicketProps) {
  const reduce = useReducedMotion() ?? false
  const controlled = torn !== undefined
  const [inner, setInner] = useState(defaultTorn)
  const used = controlled ? torn : inner
  const [grabbing, setGrabbing] = useState(false)
  const [instant, setInstant] = useState(used)
  const [prevUsed, setPrevUsed] = useState(used)
  const [fit, setFit] = useState(1)

  if (prevUsed !== used) {
    setPrevUsed(used)
    if (!used) setInstant(false)
  }

  const rootRef = useRef<HTMLDivElement | null>(null)
  const stageRef = useRef<HTMLDivElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const stubRef = useRef<HTMLDivElement | null>(null)
  const fibres = useRef<(SVGPathElement | null)[]>([])
  const sim = useRef<Sim>(freshSim())
  const vertical = orientation === "vertical"

  const geo = useMemo(
    () => buildGeometry(width, height, stubSize, radius, holes, holeSize, notch, roughness, vertical),
    [width, height, stubSize, radius, holes, holeSize, notch, roughness, vertical],
  )

  const cfg = useRef<TicketConfig>({ geo, tearAngle, stretch, resistance, reduce, onTear, controlled })
  useLayoutEffect(() => {
    cfg.current = { geo, tearAngle, stretch, resistance, reduce, onTear, controlled }
  })

  const isGrabbing = useCallback(() => sim.current.id !== null, [])
  const { plane, artShift, ink, level } = useTicketTilt({
    rootRef,
    enabled: tilt && !reduce && !disabled,
    isGrabbing,
    rotate,
    perspective,
    tiltMax,
    tiltReach,
    parallax,
  })

  useLayoutEffect(() => {
    const el = rootRef.current
    if (!el) return
    const ro = new ResizeObserver(() => setFit(Math.min(1, el.clientWidth / width) || 1))
    ro.observe(el)
    return () => ro.disconnect()
  }, [width])

  const paint = (now: number) =>
    paintTicket(sim.current, cfg.current, { stub: stubRef.current, body: bodyRef.current, fibres: fibres.current }, now)

  const finish = () => {
    const c = cfg.current
    if (stubRef.current) stubRef.current.style.visibility = "hidden"
    if (!c.controlled) setInner(true)
    c.onTear?.()
  }

  const step = (now: number) => {
    const s = sim.current
    if (advanceTicket(s, cfg.current, now)) finish()
    const busy = paint(now)
    if (!settled(s) || busy) {
      s.raf = requestAnimationFrame(step)
      return
    }
    s.bx = 0
    s.bv = 0
    paint(now)
    s.raf = 0
  }

  const run = () => {
    const s = sim.current
    if (s.raf) return
    s.last = performance.now()
    s.raf = requestAnimationFrame(step)
  }

  const reset = () => {
    cancelAnimationFrame(sim.current.raf)
    sim.current = freshSim()
    if (stubRef.current) stubRef.current.style.visibility = ""
    paint(performance.now())
  }

  const onUsedChange = useEffectEvent((isUsed: boolean) => {
    if (!isUsed) return reset()
    if (sim.current.phase === "idle" && stubRef.current) stubRef.current.style.visibility = "hidden"
  })
  const onGeometryChange = useEffectEvent(() => reset())

  useEffect(() => {
    onUsedChange(used)
  }, [used])

  useEffect(() => {
    onGeometryChange()
  }, [geo])

  useEffect(() => {
    const s = sim
    return () => cancelAnimationFrame(s.current.raf)
  }, [])

  const local = (e: ReactPointerEvent<HTMLDivElement>): Point => {
    const stage = stageRef.current
    if (!stage) return { x: 0, y: 0 }
    const r = stage.getBoundingClientRect()
    const k = r.width / width || 1
    return { x: (e.clientX - r.left) / k, y: (e.clientY - r.top) / k }
  }

  const tearNow = () => {
    const s = sim.current
    cancelAnimationFrame(s.raf)
    s.raf = 0
    s.phase = "idle"
    setInstant(true)
    finish()
  }

  const onStubDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = sim.current
    if (disabled || used || e.button !== 0 || s.id !== null || s.phase === "drop") return
    e.currentTarget.setPointerCapture(e.pointerId)
    const origin = beginGrab(s, geo, e.pointerId, local(e))
    if (origin && stubRef.current) stubRef.current.style.transformOrigin = origin
    level()
    setGrabbing(true)
    run()
  }

  const onStubMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = sim.current
    if (s.id !== e.pointerId) return
    const p = local(e)
    trackPointer(s, p)
    if (cfg.current.reduce && draggedFar(s, p)) {
      s.id = null
      setGrabbing(false)
      tearNow()
    }
  }

  const onStubUp = (e: ReactPointerEvent<HTMLDivElement>) => {
    const s = sim.current
    if (s.id !== e.pointerId) return
    if (e.currentTarget.hasPointerCapture(e.pointerId)) e.currentTarget.releasePointerCapture(e.pointerId)
    releaseGrab(s)
    setGrabbing(false)
    run()
  }

  const onStubKey = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled || used || (e.key !== "Enter" && e.key !== " ")) return
    e.preventDefault()
    if (!e.repeat) tearNow()
  }

  return (
    <div
      ref={rootRef}
      className={`tear-ticket${className ? ` ${className}` : ""}`}
      data-used={used ? "" : undefined}
      data-orientation={orientation}
      data-shift={used && recenter ? (vertical ? "y" : "x") : undefined}
      data-instant={instant ? "" : undefined}
      data-grabbing={grabbing ? "" : undefined}
      data-disabled={disabled ? "" : undefined}
      style={ticketStyle({
        width,
        height,
        stubSize,
        background,
        stubBackground,
        color,
        borderColor,
        borderWidth,
        parallax,
        imageRadius,
        vertical,
        fit,
      })}
    >
      <div ref={stageRef} className="tear-ticket__stage">
        <motion.div className="tear-ticket__plane" style={{ transform: plane }}>
          <TicketBody
            pieceRef={bodyRef}
            geo={geo}
            width={width}
            height={height}
            border={border}
            art={art}
            scrim={scrim}
            still={reduce}
            artShift={artShift}
            ink={ink}
          >
            {children}
          </TicketBody>

          <TicketFibres geo={geo} fibresRef={fibres} />

          <TicketStub
            pieceRef={stubRef}
            geo={geo}
            width={width}
            height={height}
            border={border}
            focusable={!disabled && !used}
            used={used}
            disabled={disabled}
            ariaLabel={ariaLabel}
            onPointerDown={onStubDown}
            onPointerMove={onStubMove}
            onPointerUp={onStubUp}
            onKeyDown={onStubKey}
          >
            {stub}
          </TicketStub>
        </motion.div>
      </div>

      <span className="sr-only" role="status">
        {used ? "Used" : ""}
      </span>
    </div>
  )
}
