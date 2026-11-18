import type { ServiceId } from "../../types/service"

export interface ServiceDetail {
  id: ServiceId
  number: string
  title: string
  description: string
  tabletDescription: string
  mobileDescription: string
}

export interface DetailCard {
  category: string
  title: string
  description: string
  image?: string
}
