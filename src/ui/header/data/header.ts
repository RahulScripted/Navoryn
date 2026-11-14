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

export const SERVICES_LINK: LinkItem = { title: "Services", href: "/services" }
export const PORTFOLIO_LINK: LinkItem = { title: "Portfolio", href: "#", disabled: true }
export const PRICING_LINK: LinkItem = { title: "Pricing", href: "/pricing" }
