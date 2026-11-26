import type { ComponentType } from "react"
import {
  CodeIcon,
  DashboardIcon,
  GearIcon,
  LayersIcon,
  LightningBoltIcon,
  MixerHorizontalIcon,
  MobileIcon,
  Pencil2Icon,
  PersonIcon,
  RocketIcon,
  Link2Icon,
} from "@radix-ui/react-icons"

export interface PlanFeature {
  id: string
  title: string
  description: string
  icon: ComponentType<{ className?: string }>
  /** Add an image or illustration later. Until then the tile shows a placeholder. */
  image?: string
  imageAlt?: string
}

export interface PlanDetails {
  title: string
  description: string
  tabletDescription: string
  mobileDescription: string
  features: PlanFeature[]
}

// Every plan shows exactly six features, matching the six-tile layout. Placeholder titles and descriptions. Replace the copy and add `image` per feature when ready.
const STARTER: PlanFeature[] = [
  { id: "pages", icon: LayersIcon, title: "Up to 3 pages", description: "Home, About and Contact, or any three pages that fit your business." },
  { id: "sections", icon: MixerHorizontalIcon, title: "4 sections per page", description: "Each page is built with four well-structured sections." },
  { id: "responsive", icon: MobileIcon, title: "Responsive on all devices", description: "Layouts that look right on phones, tablets and desktops." },
  { id: "foundation", icon: GearIcon, title: "Setup and design foundation", description: "Project setup, colours, typography and configuration done properly." },
  { id: "revision", icon: Pencil2Icon, title: "1 round of revisions", description: "One focused round of changes before final delivery." },
  { id: "delivery", icon: RocketIcon, title: "Delivered in 7 days", description: "A clear timeline so your site goes live quickly." },
]

const PRO: PlanFeature[] = [
  { id: "pages", icon: LayersIcon, title: "6 to 10 pages", description: "Room for services, portfolio, blog and more." },
  { id: "priority", icon: LightningBoltIcon, title: "Priority delivery", description: "Your project moves to the front of the queue." },
  { id: "integrations", icon: Link2Icon, title: "Basic integrations", description: "Contact forms, maps and other essential connections included." },
  { id: "responsive", icon: MobileIcon, title: "Responsive on all devices", description: "Layouts that look right on phones, tablets and desktops." },
  { id: "revision", icon: Pencil2Icon, title: "2 rounds of revisions", description: "Two focused rounds of changes before final delivery." },
  { id: "delivery", icon: RocketIcon, title: "Delivered in 10 to 14 days", description: "A clear timeline from kickoff to launch." },
]

const PROMAX: PlanFeature[] = [
  { id: "pages", icon: LayersIcon, title: "10+ pages", description: "Unlimited sections across as many pages as your project needs." },
  { id: "custom", icon: CodeIcon, title: "Custom functionality", description: "Features built around your workflow instead of off-the-shelf parts." },
  { id: "integrations", icon: Link2Icon, title: "Advanced integrations", description: "Payments, CRM, bookings and third-party APIs connected end to end." },
  { id: "dashboards", icon: DashboardIcon, title: "Dashboards", description: "Admin views to manage content, users and reports." },
  { id: "support", icon: PersonIcon, title: "Dedicated project support", description: "One point of contact from kickoff through launch." },
  { id: "timeline", icon: RocketIcon, title: "Timeline based on scope", description: "A delivery plan agreed together once the scope is final." },
]

export const PLAN_DETAILS: Record<string, PlanDetails> = {
  starter: {
    title: "What's Included in Starter",
    description:
      "Everything you need to establish your online presence with a clean, responsive website. A focused foundation designed to get your business online quickly and professionally.",
    tabletDescription:
      "A clean, responsive website with everything you need to establish your online presence and get your business online.",
    mobileDescription:
      "Everything you need to launch a clean, professional online presence.",
    features: STARTER,
  },
  pro: {
    title: "What's Included in Pro",
    description:
      "Everything you need to build a stronger digital presence with advanced functionality, thoughtful design, and a more engaging user experience. Designed to help your business grow with confidence.",
    tabletDescription:
      "Advanced functionality, thoughtful design, and engaging experiences to strengthen your digital presence and support business growth.",
    mobileDescription:
      "Advanced features and thoughtful design to take your digital presence further.",
    features: PRO,
  },
  promax: {
    title: "What's Included in Pro Max",
    description:
      "A complete digital experience built without compromise. From custom functionality to advanced integrations and refined interactions, everything is designed to support ambitious goals and long-term growth.",
    tabletDescription:
      "A complete digital experience with custom functionality, advanced integrations, and refined interactions for ambitious business goals.",
    mobileDescription:
      "A complete, custom-built digital experience designed for ambitious growth.",
    features: PROMAX,
  },
}
