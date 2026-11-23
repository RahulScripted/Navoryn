import { SERVICES } from "@/components/what-we-do/data/services"

export type LinkItem = {
  title: string
  href: string
  disabled?: boolean
}

export const ABOUT_LINK: LinkItem = { title: "About", href: "/about-navoryn" }

export const SERVICE_LINKS: LinkItem[] = SERVICES.map((service) => ({
  title: service.title,
  href: `/${service.id}`,
}))
export const PORTFOLIO_LINK: LinkItem = { title: "Portfolio", href: "/portfolio" }
export const PRICING_LINK: LinkItem = { title: "Pricing", href: "/pricing" }
export const CONTACT_LINK: LinkItem = { title: "Let's Talk", href: "/contact" }
