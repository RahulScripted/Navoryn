import type { IconComponent } from "@/types/icon"

export interface HeroLink {
  label: string
  href: string
}

export interface HeroLine {
  text: string
  muted?: boolean
}

export interface CircuitChip {
  x: number
  y: number
  icons: [IconComponent, IconComponent]
}

export interface ChipPoint {
  x: number
  y: number
}

export interface CircuitTrace {
  d: string
  end?: ChipPoint
  port?: number
  gap?: number
}

export interface DeviceAnchor {
  left: number
  right: number
  top: number
  bottom: number
}
