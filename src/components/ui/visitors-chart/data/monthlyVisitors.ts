export interface MonthlyVisitorsPoint {
  month: string
  visitors: number
}

export const monthlyVisitors: MonthlyVisitorsPoint[] = [
  { month: "Jan", visitors: 4200 },
  { month: "Feb", visitors: 5100 },
  { month: "Mar", visitors: 4800 },
  { month: "Apr", visitors: 6200 },
  { month: "May", visitors: 7200 },
  { month: "Jun", visitors: 6900 },
  { month: "Jul", visitors: 8500 },
  { month: "Aug", visitors: 9200 },
  { month: "Sep", visitors: 8800 },
  { month: "Oct", visitors: 10400 },
  { month: "Nov", visitors: 11600 },
  { month: "Dec", visitors: 12800 },
]

export const MONTH_NAMES: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
}

export const VISITOR_TICKS = [0, 3500, 7000, 10500, 14000]

export const formatThousands = (value: number) => `${value / 1000}K`

export const formatCount = (value: number) => value.toLocaleString("en-US")
