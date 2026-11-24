import type { IconComponent } from "@/types/icon"
import type { IconAnim } from "@/utilities/Card/lib/iconAnim"
export type CaseStudyPoint = {
  number: string
  icon: IconComponent
  iconAnim: IconAnim
  image?: string
  title: string
  description: string
}
export type CaseStudy = {
  seo: { title: string; description: string }
  title: string
  description: string
  mobileDescription: string
  image: string
  intro: { title: string; paragraphs: string[] }
  points: CaseStudyPoint[]
}
