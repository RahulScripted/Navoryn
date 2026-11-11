import type { ReactNode } from "react"

export type AboutCardTone =
  | "pink"
  | "mint"
  | "amber"
  | "sky"
  | "lilac"
  | "peach"
  | "neutral"

export interface AboutCard {
  id: string
  tone: AboutCardTone
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  stat?: string
  statLabel?: string
  image?: string
  imageAlt?: string
  media?: ReactNode
  bleedImage?: string
  bleedImageAlt?: string
}
