import { BUDGET_RANGES } from "@/components/pricing/data/pricing"
import { SERVICES } from "@/components/what-we-do/data/services"
import { CircleCheckIcon, LayersIcon, UserIcon, ZapIcon, type AnimatedIconComponent } from "@/utilities/AnimatedIcons"

export const WHATSAPP_NUMBER = ((import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) ?? "").replace(/\D/g, "")

export const NOT_DECIDED = "Not decided yet"
export const OTHER_SERVICE = "other"

export const SERVICE_OPTIONS = [
  ...SERVICES.map((service) => ({ id: service.id as string, label: service.title })),
  { id: OTHER_SERVICE, label: "Something else" },
]

export const BUDGET_OPTIONS = [NOT_DECIDED, ...BUDGET_RANGES.map((range) => range.label)]

export interface Benefit {
  title: string
  description: string
  icon: AnimatedIconComponent
}

export const BENEFITS: Benefit[] = [
  { title: "Quick Response", description: "We'll get back to you about your enquiry.", icon: ZapIcon },
  { title: "Personalized Approach", description: "Recommendations based on your project goals.", icon: UserIcon },
  { title: "No Obligation", description: "Discuss your idea before making a commitment.", icon: CircleCheckIcon },
  { title: "Flexible Solutions", description: "From an MVP to a complete digital platform.", icon: LayersIcon },
]

export function whatsappUrl(serviceLabel?: string) {
  if (!WHATSAPP_NUMBER) console.error("VITE_WHATSAPP_NUMBER is not set. Add it to .env.local (see .env.example).")
  const text = serviceLabel
    ? `Hi Navoryn! 👋 I'm interested in your ${serviceLabel} services. I'd love to discuss a project I'm planning and explore how your team could help bring it to life. Could we connect?`
    : `Hi Navoryn! 👋 I'd love to discuss a project I'm planning and explore how your team could help bring my idea to life. Could we connect?`

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`
}
