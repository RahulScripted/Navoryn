import Counter from "@/components/ui/counter/Counter"
import { DonutChart, type DonutSlice } from "@/components/ui/chart-donut"

// Sample figures to show what monitoring looks like. Values are in thousands of rupees.
const GROWTH = 38
const CHANNELS: DonutSlice[] = [
  { label: "Organic", value: 180 },
  { label: "Direct", value: 120 },
  { label: "Referral", value: 60 },
  { label: "Social", value: 40 },
  { label: "Email", value: 20 },
]

const rupees = (thousands: number) => (thousands >= 100 ? `₹${(thousands / 100).toFixed(1)}L` : `₹${thousands}k`)

/** Sales growth and where the revenue comes from: the numbers a business watches. Sample data. */
export function RevenueGrowth() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <div className="flex items-baseline gap-2 text-foreground">
        <Counter value={GROWTH} prefix="+" suffix="%" fontSize={28} fontWeight={700} />
        <span className="text-xs font-medium text-muted-foreground">sales this quarter</span>
      </div>
      <DonutChart
        title="Revenue by channel (sample data)"
        data={CHANNELS}
        size={140}
        legend={false}
        totalLabel="Revenue"
        formatValue={rupees}
      />
    </div>
  )
}
