import type { ReactNode } from "react"

export interface FolderIcon {
  src?: string
  srcDark?: string
  node?: ReactNode
  background?: string
  label?: string
}

export type FolderTheme = "dark" | "light"

export interface IconFolderProps {
  title?: string
  tags?: string[]
  icons?: FolderIcon[]
  theme?: FolderTheme
  defaultOpen?: boolean
  spread?: number
  showPill?: boolean
  className?: string
}

export interface TechCategory {
  no: string
  title: string
  tools: string[]
}
