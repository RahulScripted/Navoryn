import type { HeroLine, HeroLink } from "../types/hero"

export const HERO_EYEBROW = "Design | Development | Intelligent technology"
export const HERO_EYEBROW_MOBILE = "Create | Innovate | Scale"

export const HERO_TITLE: HeroLine[] = [
  { text: "Technology that moves" },
  { text: "your business forward.", muted: true },
]

export const HERO_TITLE_MOBILE: HeroLine[] = [
  { text: "Your vision." },
  { text: "Our engineering.", muted: true },
]
export const HERO_DESCRIPTION_MOBILE =
  "We unite design, development and AI to build digital solutions for tomorrow."
export const HERO_DESCRIPTION =
  "We bring design, development and intelligent technology together to create digital solutions built for what's next."

export const HERO_PRIMARY: HeroLink = { label: "Start a project", href: "/contact" }

export const HERO_SECONDARY: HeroLink = { label: "Explore services", href: "/services" }


export const HERO_TAGLINES = [
  "Made for What's Next.",
  "The Future, Engineered.",
  "Ideas Into Impact.",
  "Building Beyond Limits.",
]

export const TAGLINE_MS = 4000

export const SHINE_COLORS = {
  light: { base: "#8a8a8a", shine: "#0a0a0a" },
  dark: { base: "#8f8f8f", shine: "#ffffff" },
}

export const HERO_PILLARS = [
  ["Think", "Design", "Build"],
  ["Design", "Develop", "Deliver"],
  ["Create", "Innovate", "Scale"],
  ["Ideas", "Technology", "Impact"],
]

export const PILLAR_MS = 3200
