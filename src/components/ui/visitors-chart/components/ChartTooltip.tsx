import type { TooltipProps } from "recharts"
import { MONTH_NAMES, formatCount } from "../data/monthlyVisitors"

export function ChartTooltip({ active, payload, label }: TooltipProps<number, string>) {
  if (!active || !payload?.length) return null

  const value = payload[0].value
  const month = typeof label === "string" ? (MONTH_NAMES[label] ?? label) : label

  return (
    <div className="rounded-lg border border-border bg-popover px-3 py-2 shadow-sm">
      <p className="text-[0.7rem] font-medium text-muted-foreground">{month}</p>
      <p className="mt-0.5 text-sm font-semibold tabular-nums text-popover-foreground">
        {typeof value === "number" ? formatCount(value) : value}
        <span className="ml-1 font-normal text-muted-foreground">visitors</span>
      </p>
    </div>
  )
}
