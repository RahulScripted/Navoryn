import { useId } from "react"
import { cn } from "@/lib/utils"
import { CHIPS, CIRCUIT_H, CIRCUIT_W, TRACES } from "../data/circuit"
import { linkPath } from "../lib/links"
import type { DeviceAnchor } from "../types/hero"

interface CircuitBoardProps {
  hot: number
  reduced: boolean
  anchor: DeviceAnchor | null
}

interface TracesProps {
  gradient: string
  mirrored: boolean
  reduced: boolean
  anchor: DeviceAnchor | null
}

function Traces({ gradient, mirrored, reduced, anchor }: TracesProps) {
  const side = mirrored ? 1 : 0
  const paths = TRACES.map((trace) => linkPath(trace, anchor, mirrored))
  return (
    <g transform={mirrored ? `translate(${CIRCUIT_W} 0) scale(-1 1)` : undefined}>
      {paths.map((d, i) => (
        <path key={i} d={d} className="hero-trace" />
      ))}
      {!reduced &&
        paths.map((d, i) => (
          <path
            key={`pulse-${i}`}
            d={d}
            pathLength={1000}
            className="hero-pulse"
            stroke={`url(#${gradient})`}
            style={{
              animationDelay: `${-((i * 1.7 + side * 2.3) % 6)}s`,
              animationDuration: `${5 + ((i + side) % 3)}s`,
            }}
          />
        ))}
    </g>
  )
}

export function CircuitBoard({ hot, reduced, anchor }: CircuitBoardProps) {
  const gradient = `hero-pulse-${useId().replace(/:/g, "")}`
  return (
    <svg
      viewBox={`0 0 ${CIRCUIT_W} ${CIRCUIT_H}`}
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 size-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradient} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="var(--hero-live)" stopOpacity="0" />
          <stop offset="0.7" stopColor="var(--hero-live)" stopOpacity="0.55" />
          <stop offset="1" stopColor="var(--hero-live)" stopOpacity="1" />
        </linearGradient>
      </defs>
      <Traces gradient={gradient} mirrored={false} reduced={reduced} anchor={anchor} />
      <Traces gradient={gradient} mirrored reduced={reduced} anchor={anchor} />
      {[0, 1].map((side) =>
        CHIPS.map((chip, i) => {
          const Icon = chip.icons[side]
          const x = side ? CIRCUIT_W - chip.x : chip.x
          return (
            <g
              key={`${side}-${chip.x}-${chip.y}`}
              className={cn("hero-chip", hot === i + side * CHIPS.length && "is-hot")}
              transform={`translate(${x} ${chip.y})`}
            >
              <g className="hero-chip-body">
                <rect x={-28} y={-16} width={56} height={32} rx={8} />
                <Icon x={-7} y={-7} width={14} height={14} className="hero-chip-icon" />
              </g>
            </g>
          )
        }),
      )}
    </svg>
  )
}
