import type {
  AddOn,
  AdditionalService,
  BudgetRange,
  PricingPackage,
} from "@/types/pricing"

export const PACKAGES: PricingPackage[] = [
  {
    id: "starter",
    badge: "Starter",
    pages: "2–3 pages",
    price: "₹8,000–₹15,000",
    timeline: "7 days",
    features: [
      "Up to 3 pages",
      "4 sections per page included",
      "Responsive on all devices",
      "Setup, design foundation & configuration",
      "1 round of revisions",
    ],
  },
  {
    id: "pro",
    badge: "Pro",
    pages: "6–10 pages",
    price: "₹20,000–₹35,000",
    timeline: "10–14 days",
    featured: true,
    features: [
      "6 to 10 pages",
      "4 sections per page included",
      "Priority delivery",
      "Basic integrations included",
      "2 rounds of revisions",
    ],
  },
  {
    id: "promax",
    badge: "Pro Max",
    pages: "10+ pages",
    price: "Custom quote",
    timeline: "a timeline based on scope",
    features: [
      "10+ pages, unlimited sections",
      "Advanced integrations & dashboards",
      "Dedicated project support",
      "Custom functionality",
      "Flexible revision cycles",
    ],
  },
]

export interface AddOnGroup {
  title: string
  items: AddOn[]
}

export const ADD_ON_GROUPS: AddOnGroup[] = [
  {
    title: "Core integrations",
    items: [
      { id: "whatsapp-biz", label: "WhatsApp Business integration", price: "+₹5,000", priceValue: 5000 },
      { id: "email", label: "Automated email integration", price: "+₹2,000", priceValue: 2000 },
      { id: "contact", label: "Contact form", price: "+₹1,500", priceValue: 1500 },
      { id: "maps", label: "Google Maps integration", price: "+₹1,000", priceValue: 1000 },
      { id: "payment", label: "Payment gateway", price: "+₹5,000–₹8,000", priceValue: 5000, estimate: true },
      { id: "booking", label: "Booking system", price: "+₹4,000–₹8,000", priceValue: 4000, estimate: true },
      { id: "dashboard", label: "Admin dashboard", price: "+₹8,000–₹15,000", priceValue: 8000, estimate: true },
      { id: "animations", label: "Advanced animations", price: "+₹3,000–₹6,000", priceValue: 3000, estimate: true },
      { id: "click-call", label: "Click-to-call & WhatsApp floating button", price: "+₹500", priceValue: 500 },
      { id: "live-chat", label: "Live chat widget", price: "+₹1,500", priceValue: 1500 },
      { id: "appointment", label: "Online appointment form with SMS/email", price: "+₹3,500", priceValue: 3500 },
      { id: "invoice-pay", label: "Fee / invoice payment link page", price: "+₹3,000–₹5,000", priceValue: 3000, estimate: true },
      { id: "lead-popup", label: "Lead capture popup with Google Sheets", price: "+₹2,000", priceValue: 2000 },
      { id: "crm", label: "CRM integration (Zoho, HubSpot)", price: "+₹4,000–₹8,000", priceValue: 4000, estimate: true },
      { id: "wa-chatbot", label: "WhatsApp chatbot with auto replies", price: "+₹6,000–₹12,000", priceValue: 6000, estimate: true },
      { id: "newsletter", label: "Newsletter signup with email list", price: "+₹2,500", priceValue: 2500 },
    ],
  },
  {
    title: "Pages & content",
    items: [
      { id: "extra-page", label: "Extra page (About, Services, Team)", price: "+₹1,000 / page", priceValue: 1000 },
      { id: "blog", label: "Blog / news section", price: "+₹4,000–₹7,000", priceValue: 4000, estimate: true },
      { id: "cms", label: "Blog / content CMS (owner-editable)", price: "+₹5,000–₹9,000", priceValue: 5000, estimate: true },
      { id: "gallery", label: "Image gallery / portfolio", price: "+₹1,500–₹3,000", priceValue: 1500, estimate: true },
      { id: "testimonials", label: "Testimonials / reviews section", price: "+₹1,000", priceValue: 1000 },
      { id: "faq", label: "FAQ section with search", price: "+₹1,000–₹1,500", priceValue: 1000, estimate: true },
      { id: "pricing-table", label: "Pricing / packages table", price: "+₹1,000", priceValue: 1000 },
      { id: "before-after", label: "Before/after slider", price: "+₹1,500", priceValue: 1500 },
      { id: "video-bg", label: "Video background / gallery", price: "+₹1,500–₹2,500", priceValue: 1500, estimate: true },
      { id: "team-profiles", label: "Team / doctor profiles with pages", price: "+₹3,000–₹5,000", priceValue: 3000, estimate: true },
      { id: "multi-location", label: "Branch / multi-location pages", price: "+₹2,000 / location", priceValue: 2000 },
      { id: "brochure", label: "Downloadable brochure / PDF catalog", price: "+₹1,000", priceValue: 1000 },
      { id: "career", label: "Career page with resume upload", price: "+₹3,000", priceValue: 3000 },
      { id: "multi-lang", label: "Multi-language support", price: "+₹4,000–₹7,000", priceValue: 4000, estimate: true },
      { id: "menu", label: "Online menu (restaurants)", price: "+₹3,000–₹5,000", priceValue: 3000, estimate: true },
      { id: "qr-menu", label: "QR code menu / QR landing page", price: "+₹1,000–₹2,000", priceValue: 1000, estimate: true },
      { id: "reviews-collect", label: "Reviews collection page (Google QR)", price: "+₹1,000", priceValue: 1000 },
      { id: "coupon", label: "Coupon / discount code popup", price: "+₹1,500", priceValue: 1500 },
      { id: "countdown", label: "Event / offer countdown banner", price: "+₹1,000", priceValue: 1000 },
    ],
  },
  {
    title: "Stores & logins",
    items: [
      { id: "mini-store", label: "Product catalog / mini store (no payments)", price: "+₹6,000–₹10,000", priceValue: 6000, estimate: true },
      { id: "ecommerce", label: "Full e-commerce store", price: "+₹15,000–₹30,000", priceValue: 15000, estimate: true },
      { id: "customer-login", label: "Customer login & order history", price: "+₹8,000–₹15,000", priceValue: 8000, estimate: true },
      { id: "course-portal", label: "Student login / course portal", price: "+₹10,000–₹20,000", priceValue: 10000, estimate: true },
      { id: "gst-invoice", label: "GST invoice generator", price: "+₹5,000–₹8,000", priceValue: 5000, estimate: true },
    ],
  },
  {
    title: "SEO, speed & quality",
    items: [
      { id: "seo-basic", label: "Basic SEO setup (meta, sitemap, indexing)", price: "+₹3,000", priceValue: 3000 },
      { id: "gbp", label: "Google Business Profile setup", price: "+₹1,500", priceValue: 1500 },
      { id: "analytics", label: "Analytics setup (GA, Search Console)", price: "+₹1,500", priceValue: 1500 },
      { id: "speed", label: "SSL, speed & Lighthouse tuning", price: "+₹2,500", priceValue: 2500 },
      { id: "pwa", label: "Progressive web app (installable)", price: "+₹4,000–₹7,000", priceValue: 4000, estimate: true },
      { id: "a11y", label: "Accessibility improvements (ARIA, keyboard)", price: "+₹3,000", priceValue: 3000 },
      { id: "404", label: "Custom 404 page & loading animation", price: "+₹1,000", priceValue: 1000 },
      { id: "logo", label: "Custom logo & favicon", price: "+₹3,000–₹6,000", priceValue: 3000, estimate: true },
      { id: "dark-mode", label: "Dark mode", price: "+₹1,500", priceValue: 1500 },
      { id: "qr", label: "Website QR code", price: "+₹100", priceValue: 100 },
    ],
  },
  {
    title: "Social media (per platform)",
    items: [
      { id: "ig-feed", label: "Instagram feed embed", price: "+₹1,500", priceValue: 1500 },
      { id: "fb-feed", label: "Facebook page feed / plugin", price: "+₹1,200", priceValue: 1200 },
      { id: "fb-messenger", label: "Facebook Messenger chat button", price: "+₹800", priceValue: 800 },
      { id: "yt-embed", label: "YouTube channel / video gallery embed", price: "+₹1,000", priceValue: 1000 },
      { id: "li-feed", label: "LinkedIn company feed & follow button", price: "+₹1,000", priceValue: 1000 },
      { id: "x-feed", label: "X (Twitter) feed embed", price: "+₹1,000", priceValue: 1000 },
      { id: "wa-channel", label: "WhatsApp Channel / catalog link", price: "+₹1,000", priceValue: 1000 },
      { id: "tg-button", label: "Telegram channel button", price: "+₹800", priceValue: 800 },
      { id: "pinterest", label: "Pinterest board embed", price: "+₹1,000", priceValue: 1000 },
      { id: "social-share", label: "Social share buttons (all platforms)", price: "+₹800", priceValue: 800 },
      { id: "social-login", label: "Social login (Google, Facebook)", price: "+₹3,000", priceValue: 3000 },
      { id: "og-cards", label: "Social preview cards (Open Graph)", price: "+₹1,000", priceValue: 1000 },
      { id: "meta-pixel", label: "Meta Pixel with conversion tracking", price: "+₹2,500", priceValue: 2500 },
      { id: "google-reviews", label: "Google Reviews feed", price: "+₹2,000", priceValue: 2000 },
    ],
  },
]

export const ALL_ADD_ONS: AddOn[] = ADD_ON_GROUPS.flatMap((g) => g.items)

export interface ServiceGroup {
  title: string
  items: AdditionalService[]
}

export const ADDITIONAL_SERVICE_GROUPS: ServiceGroup[] = [
  {
    title: "Ongoing",
    items: [
      { label: "Website maintenance", price: "₹3,500/month" },
      { label: "Backup & security monitoring", price: "₹1,000/month" },
      { label: "Performance & uptime report", price: "₹1,500/month" },
      { label: "Monthly SEO reports", price: "₹2,500/month" },
      { label: "Priority support (24h replies)", price: "₹1,500/month" },
      { label: "Annual maintenance plan", price: "₹35,000/year" },
      { label: "Post designs, per platform", price: "₹1,500–₹3,000/month" },
      { label: "Content calendar, per platform", price: "₹1,000–₹2,000/month" },
    ],
  },
  {
    title: "One-time",
    items: [
      { label: "New feature development", price: "₹1,500–₹4,500+" },
      { label: "Custom functionality", price: "Let's discuss" },
      { label: "Website redesign", price: "from ₹8,000" },
      { label: "Migration from old site/platform", price: "₹4,000–₹10,000" },
      { label: "Domain & hosting setup", price: "₹1,500" },
      { label: "Business email setup (Workspace)", price: "₹1,500" },
      { label: "Content writing", price: "₹500–₹1,000/page" },
      { label: "Content updates", price: "₹500–₹1,000/update" },
      { label: "Bug fixes (out of warranty)", price: "₹500–₹2,000/fix" },
      { label: "Emergency fixes (same-day)", price: "₹2,500/request" },
      { label: "Extra revision round", price: "₹1,000/round" },
      { label: "Owner training session", price: "₹1,500" },
      { label: "Handover docs & walkthrough video", price: "₹2,000" },
      { label: "Google Ads / Meta Ads setup", price: "₹3,000–₹5,000" },
      { label: "Photography / product shoot coord.", price: "₹2,000–₹5,000" },
      { label: "Email signature & business card", price: "₹1,500–₹3,000" },
    ],
  },
  {
    title: "Social media (per platform)",
    items: [
      { label: "Instagram page setup & branding", price: "₹1,500–₹2,500" },
      { label: "Facebook page setup & branding", price: "₹1,500–₹2,500" },
      { label: "YouTube channel setup", price: "₹2,000–₹3,500" },
      { label: "LinkedIn company page setup", price: "₹1,500–₹2,500" },
      { label: "All-platform setup bundle", price: "₹4,000–₹7,000" },
    ],
  },
]

export const BUDGET_RANGES: BudgetRange[] = [
  { id: "b1", label: "Under ₹15,000" },
  { id: "b2", label: "₹15,000–₹35,000" },
  { id: "b3", label: "₹35,000–₹60,000" },
  { id: "b4", label: "₹60,000+" },
]

export const MAINTENANCE_OPTIONS: BudgetRange[] = [
  { id: "none", label: "No maintenance" },
  { id: "monthly", label: "Monthly (₹3,500/mo)" },
]

export const PAGE_OPTIONS = [
  { id: "p1", label: "1 page", pages: 1 },
  { id: "p2", label: "2–3 pages", pages: 3 },
  { id: "p3", label: "4–5 pages", pages: 5 },
  { id: "p4", label: "6–10 pages", pages: 6 },
  { id: "p5", label: "10+ pages", pages: 11 },
]
