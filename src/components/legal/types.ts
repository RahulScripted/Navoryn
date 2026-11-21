export type LegalBlock = string | { list: string[] } | { label: string }
export interface LegalSection {
  title: string
  blocks: LegalBlock[]
}
export interface LegalDocument {
  slug: string
  title: string
  metaDescription: string
  intro: string[]
  sections: LegalSection[]
  closing?: string
}
