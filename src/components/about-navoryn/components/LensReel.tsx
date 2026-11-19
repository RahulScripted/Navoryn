import { useEffect, useRef, useState } from "react"
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "motion/react"
import { LENS_PATH, SCREENS, SCREEN_H, SCREEN_SECONDS, SCREEN_W, SKETCH, type SketchKind } from "../data/screens"

const PRIMARY = "var(--primary)"
const MONO = "ui-monospace,monospace"

function Sketch({ kind, wire }: { kind: SketchKind; wire: boolean }) {
  const gridId = `lens-grid-${kind}`
  return (
    <svg viewBox={`0 0 ${SCREEN_W} ${SCREEN_H}`} className="absolute inset-0 size-full" aria-hidden="true" preserveAspectRatio="none">
      <rect width={SCREEN_W} height={SCREEN_H} style={{ fill: wire ? "var(--card)" : "var(--muted)" }} />
      {wire && (
        <>
          <defs>
            <pattern id={gridId} width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M10 0H0V10" fill="none" strokeWidth="0.5" style={{ stroke: PRIMARY, opacity: 0.16 }} />
            </pattern>
          </defs>
          <rect width={SCREEN_W} height={SCREEN_H} fill={`url(#${gridId})`} />
        </>
      )}
      {SKETCH[kind].map(([x, y, w, h, t], i) => {
        if (wire) {
          return (
            <g key={i}>
              {t === "o" ? (
                <circle cx={x} cy={y} r={w} fill="none" strokeDasharray="3 2" strokeWidth="0.8" style={{ stroke: PRIMARY }} />
              ) : (
                <rect x={x} y={y} width={w} height={h} rx={t === "t" ? 1 : 3} fill="none" strokeDasharray="3 2" strokeWidth="0.8" style={{ stroke: PRIMARY }} />
              )}
              {w >= 26 && h >= 9 && t !== "o" && (
                <text x={x + 3} y={y + 8} fontSize="6" fontFamily={MONO} style={{ fill: PRIMARY }}>
                  {w}x{h}
                </text>
              )}
              {t === "o" && (
                <text x={x - 10} y={y + 2} fontSize="6" fontFamily={MONO} style={{ fill: PRIMARY }}>
                  r{w}
                </text>
              )}
            </g>
          )
        }
        if (t === "o") {
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={w} fill="none" strokeWidth="14" style={{ stroke: "var(--border)" }} />
              <circle cx={x} cy={y} r={w} fill="none" strokeWidth="14" strokeDasharray="170 400" transform={`rotate(-90 ${x} ${y})`} style={{ stroke: PRIMARY }} />
            </g>
          )
        }
        const fill =
          t === "p"
            ? "var(--card)"
            : t === "b" || t === "c"
              ? PRIMARY
              : t === "t"
                ? "var(--muted-foreground)"
                : "color-mix(in oklab,var(--primary) 22%,var(--card))"
        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={w}
            height={h}
            rx={t === "t" ? 3 : t === "b" ? 2 : 6}
            strokeWidth="1"
            style={{ fill, opacity: t === "t" ? 0.4 : 1, stroke: t === "p" ? "var(--border)" : "none" }}
          />
        )
      })}
    </svg>
  )
}

interface SlideProps {
  kind: SketchKind
  i: number
  pos: MotionValue<number>
  w: number
  active: boolean
  reduce: boolean
}

function Slide({ kind, i, pos, w, active, reduce }: SlideProps) {
  const h = (w * SCREEN_H) / SCREEN_W
  const n = SCREENS.length
  const d = useTransform(pos, (p) => {
    const raw = (((i - p) % n) + n) % n
    return raw >= n / 2 ? raw - n : raw
  })
  const x = useTransform(d, (v) =>
    reduce ? v * (w + 16) : Math.sign(v) * Math.min(Math.abs(v), 1) * w * 0.66 + Math.max(0, Math.abs(v) - 1) * w * 0.22 * Math.sign(v),
  )
  const rotateY = useTransform(d, (v) => (reduce ? 0 : Math.max(-1.3, Math.min(1.3, v)) * -42))
  const scale = useTransform(d, (v) => (reduce ? 1 : 1 - Math.min(Math.abs(v), 2) * 0.13))
  const z = useTransform(d, (v) => (reduce ? 0 : -Math.min(Math.abs(v), 2) * 140))
  const opacity = useTransform(d, (v) => Math.max(0, 1 - Math.abs(v) * (reduce ? 1 : 0.4)))
  const zIndex = useTransform(d, (v) => 100 - Math.round(Math.abs(v) * 10))
  const lx = useMotionValue(LENS_PATH.x[0] * w)
  const ly = useMotionValue(LENS_PATH.y[0] * h)
  const lr = useMotionValue(0)
  useEffect(() => {
    if (!active || reduce) {
      const shrink = animate(lr, 0, { duration: 0.3 })
      return () => shrink.stop()
    }
    const options = {
      duration: SCREEN_SECONDS,
      ease: "easeInOut" as const,
      times: LENS_PATH.x.map((_, k) => k / (LENS_PATH.x.length - 1)),
    }
    lx.set(LENS_PATH.x[0] * w)
    ly.set(LENS_PATH.y[0] * h)
    const runs = [
      animate(lr, LENS_PATH.r, { type: "spring", stiffness: 300, damping: 18, delay: 0.5 }),
      animate(lx, LENS_PATH.x.map((v) => v * w), options),
      animate(ly, LENS_PATH.y.map((v) => v * h), options),
    ]
    return () => runs.forEach((run) => run.stop())
  }, [active, reduce, w, h, lx, ly, lr])
  const clip = useMotionTemplate`circle(${lr}px at ${lx}px ${ly}px)`
  const ringX = useTransform([lx, lr] as MotionValue<number>[], ([a, r]: number[]) => a - r)
  const ringY = useTransform([ly, lr] as MotionValue<number>[], ([a, r]: number[]) => a - r)
  const ringS = useTransform(lr, (r) => r * 2)
  const ringO = useTransform(lr, (r) => (r < 4 ? 0 : 1))
  return (
    <motion.li
      aria-hidden={!active}
      className="absolute top-1/2 left-1/2 list-none"
      style={{ width: w, height: h, marginLeft: -w / 2, marginTop: -h / 2, x, rotateY, scale, z, opacity, zIndex, transformStyle: "preserve-3d" }}
    >
      <div
        className="relative size-full overflow-hidden rounded-xl border border-border bg-card shadow-[0_28px_50px_-26px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
      >
        <Sketch kind={kind} wire={false} />
        <motion.div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ clipPath: clip, WebkitClipPath: clip }}>
          <Sketch kind={kind} wire />
        </motion.div>
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 rounded-full border-2 border-primary"
          style={{
            x: ringX,
            y: ringY,
            width: ringS,
            height: ringS,
            opacity: ringO,
            boxShadow: "0 0 18px 1px color-mix(in oklab,var(--primary) 45%,transparent), inset 0 0 10px color-mix(in oklab,var(--primary) 30%,transparent)",
          }}
        />
      </div>
    </motion.li>
  )
}

export function LensReel() {
  const reduce = !!useReducedMotion()
  const wrap = useRef<HTMLDivElement>(null)
  const [w, setW] = useState(240)
  const [index, setIndex] = useState(0)
  const pos = useMotionValue(0)
  useEffect(() => {
    const el = wrap.current
    if (!el) return
    const fit = () => setW(Math.min(el.offsetWidth * 0.58, ((el.offsetHeight - 24) * SCREEN_W) / SCREEN_H))
    const ro = new ResizeObserver(fit)
    ro.observe(el)
    fit()
    return () => ro.disconnect()
  }, [])
  useEffect(() => {
    const id = window.setInterval(() => setIndex((n) => n + 1), SCREEN_SECONDS * 1000)
    return () => window.clearInterval(id)
  }, [])
  useEffect(() => {
    const run = animate(pos, index, reduce ? { duration: 0.2 } : { type: "spring", stiffness: 150, damping: 18 })
    return () => run.stop()
  }, [index, pos, reduce])
  return (
    <div ref={wrap} aria-hidden="true" className="absolute inset-0 overflow-hidden" style={{ perspective: 1000 }}>
      <ul className="relative size-full" style={{ transformStyle: "preserve-3d" }}>
        {SCREENS.map((kind, i) => (
          <Slide key={kind} kind={kind} i={i} pos={pos} w={w} active={i === index % SCREENS.length} reduce={reduce} />
        ))}
      </ul>
    </div>
  )
}
