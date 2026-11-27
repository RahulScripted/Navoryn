import { createElement, type ReactNode } from "react"
import { DashboardPreview } from "@/components/book-call/components/DashboardPreview"
import { IntegrationsCluster, IntegrationsMarquee } from "@/components/ui/integrations-component"
import { TruckLoader } from "@/components/ui/truck-loader"
import { PagesFolder } from "@/components/book-call/components/PagesFolder"
import VisionBeam from "@/components/about/ui/animated-beam"
import type { VisionPoint } from "@/components/about/ui/animated-beam/data/points"
import MagnifiedBento from "@/components/about/ui/magnified-bento"
import type { TagItem } from "@/components/about/ui/magnified-bento/data/tags"
import { ResponsiveMorph } from "@/components/about/ui/design-creativity/components/responsiveness/ResponsiveMorph"
import {
  GearIcon,
  LayersIcon,
  LightningBoltIcon,
  MixerHorizontalIcon,
  MobileIcon,
  Pencil2Icon,
  PersonIcon,
  RocketIcon,
  Link2Icon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  GlobeIcon,
  CheckCircledIcon,
  CubeIcon,
  BarChartIcon,
  TimerIcon,
  ReaderIcon,
} from "@radix-ui/react-icons"

// Six points around the hub: what the setup and design foundation covers.
const FOUNDATION_POINTS: VisionPoint[] = [
  { icon: GearIcon, name: "Project setup" },
  { icon: Pencil2Icon, name: "Colour palette" },
  { icon: LayersIcon, name: "Typography" },
  { icon: MixerHorizontalIcon, name: "Configuration" },
  { icon: MobileIcon, name: "Spacing and grid" },
  { icon: RocketIcon, name: "Ready to build" },
]

// Basic plans show four logos, advanced plans show twelve.
const BASIC_INTEGRATIONS = ["Google Analytics 4", "WhatsApp", "Mailchimp", "Razorpay"]
const ADVANCED_INTEGRATIONS = [
  "Stripe", "Razorpay", "PayPal", "Shopify",
  "HubSpot", "Salesforce", "Zapier", "Twilio",
  "WhatsApp", "Mailchimp", "Google Analytics 4", "WordPress",
]

// What the search-ready foundation covers, for the Pro plan.
const SEO_POINTS: VisionPoint[] = [
  { icon: ReaderIcon, name: "Clean markup" },
  { icon: MagnifyingGlassIcon, name: "Page titles" },
  { icon: GlobeIcon, name: "Meta tags" },
  { icon: TimerIcon, name: "Fast loading" },
  { icon: MobileIcon, name: "Mobile friendly" },
  { icon: BarChartIcon, name: "Search ready" },
]

// Tags for the security and reliability tile, for the Pro Max plan.
const SECURITY_ROWS: TagItem[][] = [
  [
    { id: "auth", icon: LockClosedIcon, label: "Authentication" },
    { id: "roles", icon: PersonIcon, label: "User roles" },
    { id: "validation", icon: CheckCircledIcon, label: "Input validation" },
    { id: "https", icon: GlobeIcon, label: "Secure connections" },
    { id: "secrets", icon: LockClosedIcon, label: "Protected keys" },
  ],
  [
    { id: "testing", icon: CheckCircledIcon, label: "Testing" },
    { id: "errors", icon: MixerHorizontalIcon, label: "Error handling" },
    { id: "backups", icon: CubeIcon, label: "Backups" },
    { id: "monitoring", icon: BarChartIcon, label: "Monitoring" },
    { id: "uptime", icon: TimerIcon, label: "Uptime checks" },
  ],
  [
    { id: "audit", icon: ReaderIcon, label: "Code review" },
    { id: "updates", icon: GearIcon, label: "Safe updates" },
    { id: "limits", icon: LightningBoltIcon, label: "Rate limits" },
    { id: "privacy", icon: LockClosedIcon, label: "Data privacy" },
    { id: "recovery", icon: RocketIcon, label: "Recovery plan" },
  ],
]

const WORDS = ["", "One", "Two", "Three", "Four", "Five"]

/** The tags for the revisions tile. The round count is written into several tags, so it follows the plan. */
const revisionRows = (n: number): TagItem[][] => {
  const label = `${n} round${n === 1 ? "" : "s"} of revisions`
  return [
    [
      { id: "count", icon: Pencil2Icon, label },
      { id: "review", icon: PersonIcon, label: "Your feedback" },
      { id: "tweaks", icon: MixerHorizontalIcon, label: "Design tweaks" },
      { id: "copy", icon: Link2Icon, label: "Content updates" },
      { id: "final", icon: RocketIcon, label: "Final delivery" },
    ],
    [
      { id: "words", icon: LayersIcon, label: `${WORDS[n] ?? n} focused ${n === 1 ? "round" : "rounds"}` },
      { id: "polish", icon: LightningBoltIcon, label: "Fine-tuning" },
      { id: "layout", icon: MobileIcon, label: "Layout fixes" },
      { id: "colour", icon: GearIcon, label: "Colour and type" },
      { id: "approve", icon: PersonIcon, label: "Your approval" },
    ],
    [
      { id: "plan", icon: Pencil2Icon, label: `${n}x revisions included` },
      { id: "notes", icon: Link2Icon, label: "Review notes" },
      { id: "edits", icon: MixerHorizontalIcon, label: "Quick edits" },
      { id: "sign", icon: RocketIcon, label: "Sign-off" },
      { id: "launch", icon: LightningBoltIcon, label: "Ready to launch" },
    ],
  ]
}

export interface PlanFeature {
  id: string
  title: string
  description: string
  /** Add an image or illustration later. Until then the tile shows a placeholder. */
  image?: string
  imageAlt?: string
  /** An animated illustration. Takes priority over `image`. */
  media?: ReactNode
}

export interface PlanDetails {
  title: string
  description: string
  tabletDescription: string
  mobileDescription: string
  features: PlanFeature[]
}

const STARTER: PlanFeature[] = [
  { id: "foundation", title: "Setup and design foundation", description: "Project setup, colours, typography and configuration done properly.", media: createElement(VisionBeam, { points: FOUNDATION_POINTS }) },
  { id: "pages", title: "Up to 3 pages", description: "Home, About and Contact, or any three pages that fit your business.", media: createElement(PagesFolder, { pages: 3 }) },
  { id: "sections", title: "4 sections per page", description: "Each page is built with four well-structured sections." },
  { id: "responsive", title: "Responsive", description: "Layouts that look right on phones, tablets and desktops.", media: createElement(ResponsiveMorph) },
  { id: "revision", title: "1 round of revisions", description: "One focused round of changes before final delivery.", media: createElement(MagnifiedBento, { rows: revisionRows(1) }) },
  { id: "delivery", title: "Delivered in 7 days", description: "A clear timeline so your site goes live quickly." },
]

const PRO: PlanFeature[] = [
  { id: "pages", title: "6 to 10 pages", description: "Room for services, portfolio, blog and more.", media: createElement(PagesFolder, { pages: 6 }) },
  { id: "seo", title: "Search-ready foundation", description: "Clean markup, page titles and fast loading so search engines can find you.", media: createElement(VisionBeam, { points: SEO_POINTS }) },
  { id: "priority", title: "Priority delivery", description: "Your project moves to the front of the queue.", media: createElement(TruckLoader, { className: "h-full w-full" }) },
  { id: "responsive", title: "Responsive", description: "Layouts that look right on phones, tablets and desktops.", media: createElement(ResponsiveMorph) },
  { id: "integrations", title: "Basic integrations", description: "Contact forms, maps and other essential connections included.", media: createElement(IntegrationsCluster, { names: BASIC_INTEGRATIONS }) },
  { id: "revision", title: "2 rounds of revisions", description: "Two focused rounds of changes before final delivery.", media: createElement(MagnifiedBento, { rows: revisionRows(2) }) },
  { id: "delivery", title: "Delivered in 10 to 14 days", description: "A clear timeline from kickoff to launch." },
]

const PROMAX: PlanFeature[] = [
  { id: "pages", title: "10+ pages", description: "Unlimited sections across as many pages as your project needs.", media: createElement(PagesFolder, { pages: 6 }) },
  { id: "security", title: "Security and reliability", description: "Authentication, validation and testing so the site holds up in production.", media: createElement(MagnifiedBento, { rows: SECURITY_ROWS }) },
  { id: "custom", title: "Custom functionality", description: "Features built around your workflow instead of off-the-shelf parts." },
  { id: "support", title: "Dedicated project support", description: "One point of contact from kickoff through launch." },
  { id: "dashboards", title: "Dashboards", description: "Admin views to manage content, users and reports.", media: createElement(DashboardPreview) },
  { id: "integrations", title: "Advanced integrations", description: "Payments, CRM, bookings and third-party APIs connected end to end.", media: createElement(IntegrationsMarquee, { names: ADVANCED_INTEGRATIONS }) },
  { id: "timeline", title: "Timeline based on scope", description: "A delivery plan agreed together once the scope is final." },
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
