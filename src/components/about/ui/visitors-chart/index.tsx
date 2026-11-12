import { useReducedMotion } from "motion/react"
import { cn } from "@/lib/utils"
import { useRevealReady } from "@/utilities/ScrollReveal/components/block/useRevealReady"
import { VisitorsPlot } from "./components/VisitorsPlot"
import { formatThousands, monthlyVisitors, type MonthlyVisitorsPoint } from "./data/monthlyVisitors"

interface MonthlyVisitorsChartProps {
  title?: string
  subtitle?: string
  showHeader?: boolean
  data?: MonthlyVisitorsPoint[]
  className?: string
}

export default function MonthlyVisitorsChart({
  title = "Monthly Visitors",
  subtitle = "Unique visitors to acme.com over the last year",
  showHeader = true,
  data = monthlyVisitors,
  className,
}: MonthlyVisitorsChartProps) {
  const reduce = useReducedMotion()
  const [plotRef, ready] = useRevealReady<HTMLDivElement>()
  const peak = data.reduce((max, point) => Math.max(max, point.visitors), 0)
  const first = data[0]

  return (
    <figure
      className={cn(
        "visitors-chart flex h-full w-full flex-col",
        showHeader && "rounded-2xl border border-border bg-card p-4 sm:p-6",
        className,
      )}
    >
      {showHeader && (
        <figcaption className="mb-4 flex flex-col gap-1">
          <h3 className="text-base font-semibold text-card-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </figcaption>
      )}

      <div
        ref={plotRef}
        role="img"
        aria-label={`Line chart of monthly visitors, rising from ${formatThousands(first?.visitors ?? 0)} in ${first?.month ?? ""} to a peak of ${formatThousands(peak)}.`}
        className="relative min-h-[200px] w-full flex-1"
      >
        {ready && <VisitorsPlot data={data} animate={!reduce} />}
      </div>
    </figure>
  )
}
