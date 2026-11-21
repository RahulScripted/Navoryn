import type { IconAnim } from "@/utilities/Card/lib/iconAnim"
import type { IconComponent } from "@/types/icon"

export interface WorkStep {
  id: string
  number: string
  weeks: string
  title: string
  description: string
  start: number
  end: number
  image?: string
  imageShift?: { x: number; y: number }
  imageDark?: boolean
  icon: IconComponent
  anim: IconAnim
}
