import { BadgeCheck, Blocks, Layers, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface VisionPoint {
  icon: LucideIcon
  name: string
}

export const VISION_POINTS: VisionPoint[] = [
  { icon: Blocks, name: "Component architecture" },
  { icon: BadgeCheck, name: "Code quality" },
  { icon: Zap, name: "Performance" },
  { icon: MonitorSmartphone, name: "Responsive systems" },
  { icon: Layers, name: "Scalable architecture" },
  { icon: ShieldCheck, name: "Security & Reliability" },
]
