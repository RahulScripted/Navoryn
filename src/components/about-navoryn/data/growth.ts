export interface GrowthPoint {
  month: string
  total: number
  change: number
}

export const GROWTH_DATA: GrowthPoint[] = [
  { month: "Jan", total: 120, change: 0 },
  { month: "Feb", total: 180, change: 60 },
  { month: "Mar", total: 260, change: 80 },
  { month: "Apr", total: 340, change: 80 },
  { month: "May", total: 470, change: 130 },
  { month: "Jun", total: 610, change: 140 },
  { month: "Jul", total: 780, change: 170 },
  { month: "Aug", total: 900, change: 120 },
  { month: "Sep", total: 1040, change: 140 },
  { month: "Oct", total: 1180, change: 140 },
  { month: "Nov", total: 1350, change: 170 },
  { month: "Dec", total: 1520, change: 170 },
]

export const GROWTH_AXES = { x: "Month", y: "Leads" }

export const formatGrowth = (value: number) => Math.round(value).toLocaleString()
