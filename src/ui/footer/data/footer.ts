import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/ui/footer/components/brand/BrandIcons"

export interface FooterLink {
  label: string
  href: string
  /** Page does not exist yet: shown dimmed with a "Soon" tag and not clickable. */
  disabled?: boolean
}

export interface FooterColumn {
  title: string
  links: FooterLink[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Technologies", href: "/technologies" },
      { label: "How We Work", href: "#", disabled: true },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blogs", href: "#", disabled: true },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/web-development" },
      { label: "Mobile Apps", href: "/mobile-app-development" },
      { label: "UI/UX Design", href: "/ui-ux-product-design" },
      { label: "E-commerce", href: "/ecommerce-payments" },
      { label: "Maintenance", href: "/maintenance-optimization" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Portfolio", href: "#", disabled: true },
      { label: "Contact Us", href: "/contact" },
      { label: "Book a Call", href: "/book-call" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "#", disabled: true },
      { label: "Terms", href: "#", disabled: true },
      { label: "Security", href: "#", disabled: true },
      { label: "Cookies", href: "#", disabled: true },
    ],
  },
]

export const FOOTER_SOCIALS = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "X", icon: XIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "YouTube", icon: YouTubeIcon },
]
