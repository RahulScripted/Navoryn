import {
  CardStackIcon,
  CodeIcon,
  GearIcon,
  LayersIcon,
  Link2Icon,
  LightningBoltIcon,
  MagnifyingGlassIcon,
  MobileIcon,
  Pencil2Icon,
  RocketIcon,
  RotateCounterClockwiseIcon,
  Share2Icon,
} from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"

export interface ServiceItem {
  /** The service page it opens, which is the service id. */
  id: string
  label: string
  icon: IconComponent
}

export interface ServiceGroup {
  heading: string
  items: ServiceItem[]
}

export const SERVICES_INTRO = {
  title: "Services We Provide",
  description:
    "From the first design to long-term care, explore the services we bring together to build, launch, and grow your digital presence. Select a service to discover our approach and what you can expect.",
  tabletDescription:
    "From design to long-term care, explore our services and how we bring ideas to life. Select one to see our approach and what to expect.",
  mobileDescription: "Explore our services, discover how we work, and see what to expect.",
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  {
    heading: "Build",
    items: [
      { id: "web-development", label: "Web Development", icon: CodeIcon },
      { id: "saas-mvp-development", label: "SaaS & MVP Development", icon: RocketIcon },
      { id: "mobile-app-development", label: "Mobile App Development", icon: MobileIcon },
    ],
  },
  {
    heading: "Design",
    items: [
      { id: "ui-ux-product-design", label: "UI/UX & Product Design", icon: Pencil2Icon },
      { id: "website-app-redesign", label: "Website & App Redesign", icon: LayersIcon },
      { id: "legacy-modernization", label: "Legacy System Modernization", icon: RotateCounterClockwiseIcon },
    ],
  },
  {
    heading: "Grow",
    items: [
      { id: "seo-digital-growth", label: "SEO & Digital Growth", icon: MagnifyingGlassIcon },
      { id: "social-media-integrations", label: "Social Media Integrations", icon: Share2Icon },
      { id: "ecommerce-payments", label: "E-commerce & Payments", icon: CardStackIcon },
    ],
  },
  {
    heading: "Connect and care",
    items: [
      { id: "api-platform-integrations", label: "API & Platform Integrations", icon: Link2Icon },
      { id: "business-automation", label: "Business Automation", icon: LightningBoltIcon },
      { id: "maintenance-optimization", label: "Maintenance & Optimization", icon: GearIcon },
    ],
  },
]

