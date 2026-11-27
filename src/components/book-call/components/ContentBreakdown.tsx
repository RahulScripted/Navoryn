import { DonutChart, type DonutSlice } from "@/components/ui/chart-donut"

// Sample figures to show what a managed site holds. Values are numbers of items.
const CONTENT: DonutSlice[] = [
  { label: "Media", value: 30 },
  { label: "Blog", value: 18 },
  { label: "Pages", value: 12 },
  { label: "FAQs", value: 10 },
  { label: "Services", value: 8 },
]

/** What a content-managed site is made of, as a pie. Each slice is something the owner can edit. Sample data. */
export function ContentBreakdown() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-2">
      <p className="text-xs font-medium text-muted-foreground">Everything you can edit, in one place</p>
      <DonutChart
        title="Content by type (sample data)"
        data={CONTENT}
        size={140}
        legend={false}
        totalLabel="Content"
      />
    </div>
  )
}
