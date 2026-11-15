import { SERVICES } from "@/components/what-we-do/data/services"

export type LinkItem = {
  title: string
  href: string
  /** Not live yet: rendered as a non-clickable "Coming Soon" item. */
  disabled?: boolean
}

export const COMPANY_LINKS: LinkItem[] = [
  { title: "About Us", href: "/about" },
  { title: "Technologies", href: "/technologies" },
  { title: "How We Work", href: "#", disabled: true },
  { title: "Testimonials", href: "/testimonials" },
  { title: "Blogs", href: "#", disabled: true },
  { title: "FAQ", href: "/faq" },
]

/** Every service, each linking to its own page (/web-development, ...). */
export const SERVICE_LINKS: LinkItem[] = SERVICES.map((service) => ({
  title: service.title,
  href: `/${service.id}`,
}))
export const PORTFOLIO_LINK: LinkItem = { title: "Portfolio", href: "#", disabled: true }
export const PRICING_LINK: LinkItem = { title: "Pricing", href: "/pricing" }
