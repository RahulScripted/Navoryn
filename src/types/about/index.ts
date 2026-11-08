import type { ReactNode } from "react"

/** Visual tone of a tile — maps to a pastel surface. */
export type AboutCardTone =
  | "pink"
  | "mint"
  | "amber"
  | "sky"
  | "lilac"
  | "peach"
  | "neutral"

/**
 * A single bento tile.
 *
 * Images are optional so the layout can be built now and populated later —
 * just set `image` (and optional `imageAlt`) when the asset is ready.
 */
export interface AboutCard {
  id: string
  tone: AboutCardTone
  /** Short eyebrow/label shown above the title (optional). */
  eyebrow?: string
  title: ReactNode
  description?: ReactNode
  /** Highlighted stat, e.g. "200+". Rendered large when present. */
  stat?: string
  statLabel?: string
  /** Image source — leave undefined to render a placeholder slot. */
  image?: string
  imageAlt?: string
}
