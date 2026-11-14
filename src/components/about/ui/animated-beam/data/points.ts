import { BadgeIcon, CheckCircledIcon, CubeIcon, DesktopIcon, LayersIcon, LightningBoltIcon } from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"

export interface VisionPoint {
  icon: IconComponent
  name: string
}

export const VISION_POINTS: VisionPoint[] = [
  { icon: CubeIcon, name: "Component architecture" },
  { icon: BadgeIcon, name: "Code quality" },
  { icon: LightningBoltIcon, name: "Performance" },
  { icon: DesktopIcon, name: "Responsive systems" },
  { icon: LayersIcon, name: "Scalable architecture" },
  { icon: CheckCircledIcon, name: "Security & Reliability" },
]
