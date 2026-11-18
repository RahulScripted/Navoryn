import type { IconAnim } from "@/components/what-we-do/components/card/iconAnim"
import type { IconComponent } from "@/types/icon"

export interface Belief {
  id: string
  /** "#01" ... "#04" */
  number: string
  title: string
  description: string
  /** Illustration for the card. Empty for now: the card shows its blank image area. */
  image?: string
  /** Shown in the card's corner disc (the same notch as every other card). */
  icon: IconComponent
  /** Animation the icon plays when its card is hovered. */
  anim: IconAnim
}
