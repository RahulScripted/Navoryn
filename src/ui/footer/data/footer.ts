import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/ui/footer/components/brand/BrandIcons"

export interface FooterLink {
  label: string
  href: string
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
      { label: "About NAVORYN", href: "/about-navoryn" },
      { label: "Technologies", href: "/technologies" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Blogs", href: "#blogs" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Pricing", href: "/pricing" },
      { label: "Portfolio", href: "#", disabled: true },
      { label: "Let's Talk", href: "/contact" },
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
    ],
  },
]

export const FOOTER_SOCIALS = [
  { name: "Facebook", icon: FacebookIcon, color: "#1877F2" },
  { name: "X", icon: XIcon, color: "var(--foreground)" },
  { name: "LinkedIn", icon: LinkedInIcon, color: "#0A66C2" },
  { name: "YouTube", icon: YouTubeIcon, color: "#FF0000" },
]
