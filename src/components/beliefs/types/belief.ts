import type { IconAnim } from "@/utilities/Card/lib/iconAnim"
import type { IconComponent } from "@/types/icon"

export interface Belief {
  id: string
  number: string
  title: string
  description: string
  image?: string
  imageShift?: { x: number; y: number }
  icon: IconComponent
  anim: IconAnim
}
