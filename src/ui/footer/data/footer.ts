import {
  FacebookIcon,
  LinkedInIcon,
  XIcon,
  YouTubeIcon,
} from "@/ui/footer/components/brand/BrandIcons"

export interface FooterColumn {
  title: string
  links: string[]
}

export const FOOTER_COLUMNS: FooterColumn[] = [
  { title: "Services", links: ["Web Design", "Web Apps", "Mobile Apps", "UI/UX", "Maintenance"] },
  { title: "Company", links: ["About", "Process", "Projects", "Testimonials", "Contact"] },
  { title: "Resources", links: ["Pricing", "Technology", "Book a Call", "FAQ", "Blog"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
]

export const FOOTER_SOCIALS = [
  { name: "Facebook", icon: FacebookIcon },
  { name: "X", icon: XIcon },
  { name: "LinkedIn", icon: LinkedInIcon },
  { name: "YouTube", icon: YouTubeIcon },
]
