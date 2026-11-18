import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { VISITOR_TICKS, formatThousands, type MonthlyVisitorsPoint } from "../data/monthlyVisitors"
import { ChartTooltip } from "./ChartTooltip"

interface VisitorsPlotProps {
  data: MonthlyVisitorsPoint[]
  animate: boolean
}

const AXIS_TICK = { fill: "#8290A3", fontSize: 11 }

function PlotPoint({ cx, cy }: { cx?: number; cy?: number }) {
  if (cx == null || cy == null) return null
  return (
    <g className="visitors-point" pointerEvents="none">
      <circle cx={cx} cy={cy} r={10} className="visitors-point__halo" />
      <circle cx={cx} cy={cy} r={5} className="visitors-point__dot" />
    </g>
  )
}

export function VisitorsPlot({ data, animate }: VisitorsPlotProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} stroke="#292929" strokeWidth={1} />
        <XAxis dataKey="month" interval={0} tickLine={false} axisLine={false} tickMargin={10} tick={AXIS_TICK} />
        <YAxis
          ticks={VISITOR_TICKS}
          domain={[0, 14000]}
          tickFormatter={formatThousands}
          tickLine={false}
          axisLine={false}
          tickMargin={6}
          width={48}
          tick={AXIS_TICK}
        />
        <Tooltip content={<ChartTooltip />} cursor={false} offset={18} isAnimationActive={false} />
        <Line
          type="monotone"
          dataKey="visitors"
          stroke="#D6D6D6"
          strokeWidth={2.2}
          dot={false}
          activeDot={<PlotPoint />}
          isAnimationActive={animate}
          animationDuration={1200}
          animationEasing="ease-out"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}
