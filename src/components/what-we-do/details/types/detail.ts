import type { ServiceId } from "../../types/service"

export interface ServiceDetail {
  /** Same id as the service, and the URL slug (e.g. /web-development). */
  id: ServiceId
  /** "01" ... "12" */
  number: string
  title: string
  /** Shown on desktop (lg and up). */
  description: string
  /** Shown on tablets (sm to lg). */
  tabletDescription: string
  /** Shown on phones. */
  mobileDescription: string
}

export interface DetailCard {
  /** Short category, shown in the label above the title (e.g. "Web Presence"). */
  category: string
  title: string
  description: string
  /** Illustration; empty for now. */
  image?: string
}
