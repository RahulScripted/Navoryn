import * as React from "react"

function clamp01(v: number) {
  return v < 0 ? 0 : v > 1 ? 1 : v
}

function simulated(t: number) {
  const k    = clamp01(t)
  const ease = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2
  const stall = 0.035 * Math.sin(k * Math.PI * 3) * Math.sin(k * Math.PI)
  return Math.max(0, Math.min(100, (ease - stall) * 100))
}

function pad(pct: number) {
  const n = Math.max(0, Math.min(100, Math.floor(pct)))
  return (n < 10 ? "00" : n < 100 ? "0" : "") + n
}

interface Props {
  durationMs:   number
  label?:       string
  onPanelReady?: () => void
}

export default function WeightSweepCounter({
  durationMs,
  label     = "Navoryn",
  onPanelReady,
}: Props) {
  const [pct, setPct] = React.useState(0)
  const onReadyRef  = React.useRef(onPanelReady)
  onReadyRef.current = onPanelReady

  React.useEffect(() => {
    let raf   = 0
    let shown = 0
    const t0  = performance.now()

    const tick = (now: number) => {
      const t      = Math.min(1, (now - t0) / durationMs)
      const target = simulated(t)
      shown        = Math.max(shown, shown + (target - shown) * 0.18)
      if (t >= 1 && shown > 99.6) shown = 100
      setPct(shown)
      if (shown >= 100) {
        onReadyRef.current?.()
        return
      }
      raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [durationMs])

  return (
    <div className="wsc-root">
      <div className="wsc-hud">
        <span>{label}</span>
        <span>Brewing {pad(pct)}</span>
      </div>
      <div className="wsc-rule" />
    </div>
  )
}
