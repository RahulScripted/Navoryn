import type { AddOn, QuoteResult } from "@/types/pricing"

const SETUP_FEE = 3500
const PAGE_RATE = 1500
const SECTION_BLOCK_PRICE = 500

export function calculateBasePrice(pages: number): number | null {
  if (pages === 1) return 5000
  if (pages >= 2 && pages <= 3) return Math.max(8000, SETUP_FEE + pages * PAGE_RATE)
  if (pages >= 4 && pages <= 5) return Math.max(15000, SETUP_FEE + pages * PAGE_RATE)
  if (pages >= 6 && pages <= 10) return 20000 + (pages - 6) * 3750
  return null
}

export function calculateExtraSections(sectionCounts: number[]): number {
  return sectionCounts.reduce((total, sections) => {
    const extra = Math.max(0, sections - 4)
    const blocks = Math.ceil(extra / 4)
    return total + blocks * SECTION_BLOCK_PRICE
  }, 0)
}

export function calculateQuote(
  pages: number,
  sectionCounts: number[],
  addons: AddOn[],
  maintenance: boolean,
): QuoteResult {
  const base = calculateBasePrice(pages)
  if (base === null) {
    return {
      total: null,
      advance: 0,
      remaining: 0,
      base: 0,
      extraSections: 0,
      addonTotal: 0,
      maintenance: maintenance ? 3500 : 0,
    }
  }
  const extraSections = calculateExtraSections(sectionCounts)
  const addonTotal = addons.reduce((sum, a) => sum + a.priceValue, 0)
  const maint = maintenance ? 3500 : 0
  const total = base + extraSections + addonTotal
  return {
    total,
    advance: total * 0.5,
    remaining: total * 0.5,
    base,
    extraSections,
    addonTotal,
    maintenance: maint,
  }
}

export const formatINR = (n: number) => "₹" + Math.round(n).toLocaleString("en-IN")
