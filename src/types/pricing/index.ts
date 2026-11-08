export interface PricingPackage {
  id: string
  badge: string
  pages: string
  price: string
  timeline: string
  features: string[]
  featured?: boolean
}

export interface AddOn {
  id: string
  label: string
  price: string
  /** Fixed starting amount used by the estimator (0 if range/custom). */
  priceValue: number
  /** True when the real cost is a range or needs a custom quote. */
  estimate?: boolean
}

export interface AdditionalService {
  label: string
  price: string
}

export interface BudgetRange {
  id: string
  label: string
}

export interface QuoteResult {
  total: number | null
  advance: number
  remaining: number
  base: number
  extraSections: number
  addonTotal: number
  maintenance: number
}
