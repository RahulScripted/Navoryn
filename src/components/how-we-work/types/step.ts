import type { IconAnim } from "@/components/what-we-do/components/card/iconAnim"
import type { IconComponent } from "@/types/icon"

export interface WorkStep {
  id: string
  /** "01" ... "04" */
  number: string
  /** Shown next to the number, e.g. "Weeks 1–2". */
  weeks: string
  title: string
  description: string
  /** Where the phase starts and ends on the timeline, in weeks from the beginning (0 = start of week 1). */
  start: number
  end: number
  /** Illustration for the card. Empty for now: the card shows its blank image area. */
  image?: string
  icon: IconComponent
  /** Animation the icon plays when its card is hovered. */
  anim: IconAnim
}
