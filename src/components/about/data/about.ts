import type { AboutCard } from "@/types/about"
import expertiseImage from "@/asset/webps/about/expertise.webp"
import buildForTomorrowImage from "@/asset/webps/about/buildForTommorow.webp"
import detailsImage from "@/asset/webps/about/details.webp"

/**
 * About board — flush bento grid of exactly 8 tiles.
 *
 * DOM order = tile 1..8 (see .about-grid areas in src/index.css).
 * Add images later via `image` + `imageAlt`; until then a placeholder shows.
 */
export const ABOUT_CARDS: AboutCard[] = [
  // 1 — tall, left (3 rows on desktop)
  {
    id: "expertise",
    tone: "lilac",
    eyebrow: "Who we are",
    title: "Expertise with Experience",
    description: "Years shipping across web, mobile, and design — fewer surprises, sharper calls.",
    image: expertiseImage,
    imageAlt: "Our team collaborating on a project",
  },
  // 2 — col 2 top (2 rows)
  {
    id: "clients",
    tone: "mint",
    stat: "200+",
    statLabel: "Trusted clients work with us",
    title: "Relationships that last",
  },
  // 3 — col 2 bottom (2 rows)
  {
    id: "craft",
    tone: "peach",
    title: "Details people feel",
    description: "Performance, accessibility, and polish built in from the first commit.",
    image: detailsImage,
    imageAlt: "Attention to craft and detail",
  },
  // 4 — col 3 top (1 row, short)
  {
    id: "process",
    tone: "pink",
    eyebrow: "How we work",
    title: "Clear process, no guesswork",
    description: "You always know what's happening, what's next, and why.",
  },
  // 5 — col 3 tall (3 rows)
  {
    id: "branding",
    tone: "amber",
    eyebrow: "What we make",
    title: "Branding that actually fits",
    description:
      "No templates, no recycled identities. Design systems shaped around your voice.",
  },
  // 6 — col 4 top (2 rows)
  {
    id: "results",
    tone: "sky",
    eyebrow: "Why it matters",
    title: "Results you can measure",
    description: "Faster loads, higher conversions, users who come back.",
  },
  // 7 — col 4 bottom (2 rows)
  {
    id: "future",
    tone: "sky",
    title: "Built for tomorrow",
    description: "Code and systems meant to grow — easy to extend, simple to maintain.",
    image: buildForTomorrowImage,
    imageAlt: "Scalable systems built to grow",
  },
  // 8 — col 1 bottom (1 row, short)
  {
    id: "team",
    tone: "neutral",
    stat: "12+",
    statLabel: "Core team members",
    title: "A tight, senior team",
  },
]
