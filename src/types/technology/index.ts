import type { ReactNode } from "react"

/** A single icon tile inside a folder. */
export interface FolderIcon {
  /** Image URL of an app icon — shown in light theme (or always if no variant). */
  src?: string
  /** Optional dark-theme variant. When set, used while the app is in dark mode. */
  srcDark?: string
  /** Or any custom node (SVG, emoji, component). */
  node?: ReactNode
  /** Tile background behind `node` (or the shaded placeholder). */
  background?: string
  label?: string
}

export type FolderTheme = "dark" | "light"

/** Props for the IconFolder component. */
export interface IconFolderProps {
  title?: string
  tags?: string[]
  icons?: FolderIcon[]
  theme?: FolderTheme
  /** Start spread open (no hover needed). */
  defaultOpen?: boolean
  /** Horizontal distance between fanned icons, px. */
  spread?: number
  /** Small icon pill in the corner of the folder. */
  showPill?: boolean
  className?: string
}

/** One technology category — a folder's worth of tools. */
export interface TechCategory {
  /** Two-digit order label, e.g. "01". */
  no: string
  title: string
  tools: string[]
}
