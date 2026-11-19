import { useMemo, useRef } from "react"
import { useInView, useReducedMotion } from "motion/react"
import { ArrowRightIcon, ArrowUpIcon } from "@radix-ui/react-icons"
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  type TooltipProps,
} from "recharts"
import { useRevealReady } from "@/utilities/ScrollReveal/components/block/useRevealReady"
import { GROWTH_AXES, GROWTH_DATA, formatGrowth, type GrowthPoint } from "../data/growth"

const AXIS_TICK = { fill: "var(--muted-foreground)", fontSize: 10 }
const AXIS_LINE = { stroke: "var(--foreground)", strokeWidth: 2 }
const LABEL_STYLE = { fill: "var(--foreground)", fontSize: 11, fontWeight: 700 }
type LabelBox = { viewBox?: { x?: number; y?: number; width?: number; height?: number } }

function XAxisLabel({ viewBox }: LabelBox) {
  const { x = 0, y = 0, width = 0, height = 0 } = viewBox ?? {}
  const cx = x + width / 2
  const cy = y + height + 12
  return (
    <g>
      <text x={cx - 8} y={cy} textAnchor="middle" dominantBaseline="middle" {...LABEL_STYLE}>
        {GROWTH_AXES.x}
      </text>
      <ArrowRightIcon x={cx + 16} y={cy - 6} width={12} height={12} color="var(--foreground)" />
    </g>
  )
}

function YAxisLabel({ viewBox }: LabelBox) {
  const { x = 0, y = 0, height = 0 } = viewBox ?? {}
  const cx = x + 6
  const cy = y + height / 2
  return (
    <g>
      <text x={cx} y={cy + 8} textAnchor="middle" dominantBaseline="middle" transform={`rotate(-90 ${cx} ${cy + 8})`} {...LABEL_STYLE}>
        {GROWTH_AXES.y}
      </text>
      <ArrowUpIcon x={cx - 6} y={cy - 32} width={12} height={12} color="var(--foreground)" />
    </g>
  )
}

function PlotPoint({ cx, cy }: { cx?: number; cy?: number }) {
  if (cx == null || cy == null) return null
  return (
    <g className="visitors-point" pointerEvents="none">
      <circle cx={cx} cy={cy} r={9} className="visitors-point__halo" />
      <circle cx={cx} cy={cy} r={4.5} className="visitors-point__dot" />
    </g>
  )
}

function GrowthTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null
  const row = payload[0].payload as GrowthPoint
  return (
    <div className="rounded-sm border border-border bg-popover px-3 py-2 shadow-sm">
      <p className="text-[0.7rem] font-medium text-muted-foreground">{label}</p>
      <p className="mt-0.5 text-sm font-semibold tabular-nums text-popover-foreground">
        {formatGrowth(row.total)}
        <span className="ml-1 font-normal text-muted-foreground">{GROWTH_AXES.y.toLowerCase()}</span>
      </p>
      <p className="text-xs tabular-nums text-muted-foreground">
        {row.change > 0 ? "+" : ""}
        {formatGrowth(row.change)}
      </p>
    </div>
  )
}

export function GrowthChart() {
  const reduce = useReducedMotion()
  const [plotRef, ready] = useRevealReady<HTMLDivElement>()
  const viewRef = useRef<HTMLDivElement>(null)
  const inView = useInView(viewRef, { once: true, amount: 0.6 })
  const show = ready && inView
  const [domain, ticks] = useMemo<[[number, number], number[]]>(() => {
    const values = GROWTH_DATA.map((d) => d.total)
    const min = Math.min(...values)
    const max = Math.max(...values)
    const pad = Math.max((max - min) * 0.12, 10)
    const low = Math.max(0, Math.floor((min - pad) / 100) * 100)
    const step = Math.ceil((max + pad - low) / 3 / 100) * 100
    return [[low, low + step * 3], [0, 1, 2, 3].map((k) => low + step * k)]
  }, [])
  const first = GROWTH_DATA[0]
  const last = GROWTH_DATA[GROWTH_DATA.length - 1]
  return (
    <div
      ref={plotRef}
      role="img"
      aria-label={`${GROWTH_AXES.y} by ${GROWTH_AXES.x.toLowerCase()}, rising from ${formatGrowth(first.total)} in ${first.month} to ${formatGrowth(last.total)} in ${last.month}.`}
      className="visitors-chart absolute inset-0 p-3 pt-4"
    >
      <div ref={viewRef} className="pointer-events-none absolute inset-0" aria-hidden="true" />
      {show && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={GROWTH_DATA} margin={{ top: 8, right: 12, bottom: 18, left: 4 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              interval={0}
              tickLine={false}
              axisLine={AXIS_LINE}
              tickMargin={6}
              tick={AXIS_TICK}
              label={<XAxisLabel />}
            />
            <YAxis
              domain={domain}
              ticks={ticks}
              tickFormatter={formatGrowth}
              tickLine={false}
              axisLine={AXIS_LINE}
              tickMargin={4}
              width={56}
              tick={AXIS_TICK}
              label={<YAxisLabel />}
            />
            <Tooltip content={<GrowthTooltip />} cursor={false} offset={16} isAnimationActive={false} />
            <Line
              type="monotone"
              dataKey="total"
              strokeWidth={2.2}
              dot={{ r: 2.5, fill: "var(--foreground)", strokeWidth: 0 }}
              activeDot={<PlotPoint />}
              isAnimationActive={!reduce}
              animationDuration={1200}
              animationEasing="ease-out"
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  )
}
