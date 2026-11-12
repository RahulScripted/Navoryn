import type { SERVICES } from "../data/services"

export type Service = (typeof SERVICES)[number]

export type ServiceId = Service["id"]
