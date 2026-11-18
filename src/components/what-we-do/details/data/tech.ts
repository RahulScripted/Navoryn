import type { TechCategory } from "@/types/technology"
import type { ServiceId } from "../../types/service"

export const WEB_DEVELOPMENT_TECH: TechCategory[] = [
  { no: "01", title: "Frontend & Interface Engineering", tools: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"] },
  { no: "02", title: "Backend & API Development", tools: ["Node.js", "Express.js", "Java", "Ruby on Rails"] },
  { no: "03", title: "Database & Storage", tools: ["PostgreSQL", "MongoDB", "MySQL", "Supabase"] },
  { no: "04", title: "UI & Interactive Experiences", tools: ["Framer Motion", "GSAP", "Three.js", "Adobe Illustrator"] },
  { no: "05", title: "Testing & Quality Assurance", tools: ["Jest", "Vitest", "Playwright", "Postman"] },
  { no: "06", title: "Deployment & Infrastructure", tools: ["AWS", "Vercel", "Docker", "GitHub Actions"] },
]

export const SAAS_MVP_TECH: TechCategory[] = [
  { no: "01", title: "Frontend & Product Engineering", tools: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"] },
  { no: "02", title: "Backend & API Architecture", tools: ["Node.js", "Express.js", "GraphQL", "REST APIs"] },
  { no: "03", title: "Database & Data Management", tools: ["PostgreSQL", "MongoDB", "Redis", "Supabase"] },
  { no: "04", title: "Authentication & Security", tools: ["Auth.js", "Clerk", "JWT"] },
  { no: "05", title: "Payments & Subscriptions", tools: ["Stripe", "Razorpay", "PayPal"] },
  { no: "06", title: "Cloud & Deployment", tools: ["AWS", "Vercel", "Docker", "Render"] },
]

export const MOBILE_APP_TECH: TechCategory[] = [
  { no: "01", title: "Mobile Frameworks & Languages", tools: ["React Native", "Expo", "Flutter", "TypeScript"] },
  { no: "02", title: "Navigation & UI", tools: ["React Navigation", "Expo Router", "NativeWind", "React Native Paper"] },
  { no: "03", title: "State & Data Management", tools: ["Redux Toolkit", "TanStack Query"] },
  { no: "04", title: "Backend & API Integration", tools: ["Node.js", "Firebase", "Supabase", "REST APIs"] },
  { no: "05", title: "Device Features & Notifications", tools: ["Firebase Cloud Messaging", "Expo Notifications"] },
]

export const UI_UX_PRODUCT_DESIGN_TECH: TechCategory[] = [
  { no: "01", title: "UI & Visual Design", tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Sketch"] },
  { no: "02", title: "Wireframing & Prototyping", tools: ["Figma", "Framer"] },
  { no: "03", title: "Design Systems & Components", tools: ["Storybook", "Zeroheight", "Figma", "Radix UI"] },
  { no: "05", title: "AI & Creative Design Tools", tools: ["Adobe Firefly", "Framer Motion", "Claude"] },
]

export const WEBSITE_APP_REDESIGN_TECH: TechCategory[] = [
  { no: "01", title: "Frontend Modernization", tools: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"] },
  { no: "02", title: "UI & Design Systems", tools: ["Figma", "Storybook", "Radix UI", "shadcn/ui"] },
  { no: "03", title: "Animation & Interaction", tools: ["Framer Motion", "GSAP", "Three.js"] },
  { no: "04", title: "Performance & Accessibility", tools: ["Lighthouse", "PageSpeed Insights"] },
  { no: "05", title: "Testing & Quality", tools: ["Jest", "Vitest", "Playwright", "Postman"] },
  { no: "06", title: "Version Control & Deployment", tools: ["Git", "GitHub", "Vercel", "Netlify"] },
]

export const SEO_DIGITAL_GROWTH_TECH: TechCategory[] = [
  { no: "01", title: "SEO Research & Keywords", tools: ["Ahrefs", "Semrush"] },
  { no: "02", title: "Analytics & Conversion Tracking", tools: ["Google Analytics 4", "Google Tag Manager", "Hotjar"] },
  { no: "03", title: "Technical SEO & Performance", tools: ["Google Search Console", "Lighthouse", "PageSpeed Insights"] },
  { no: "04", title: "Content & Marketing Platforms", tools: ["WordPress", "HubSpot", "Webflow", "Contentful"] },
  { no: "05", title: "Email Marketing & Automation", tools: ["Mailchimp", "Brevo"] },
  { no: "06", title: "AI & Content Optimization", tools: ["ChatGPT", "Claude", "Grammarly"] },
]

export const API_PLATFORM_INTEGRATIONS_TECH: TechCategory[] = [
  { no: "01", title: "Backend & API Development", tools: ["Node.js", "Express.js", "Java", "Ruby on Rails"] },
  { no: "02", title: "API Protocols & Communication", tools: ["GraphQL", "WebSockets", "REST APIs"] },
  { no: "03", title: "Authentication & Security", tools: ["Auth.js", "Clerk", "JWT"] },
  { no: "04", title: "Third-party Integrations", tools: ["Stripe", "Razorpay", "Twilio", "Firebase"] },
  { no: "05", title: "API Testing & Documentation", tools: ["Postman", "Swagger", "Insomnia", "Jest"] },
  { no: "06", title: "Webhooks & Integration Automation", tools: ["Zapier", "Make", "n8n"] },
]

export const SOCIAL_MEDIA_INTEGRATIONS_TECH: TechCategory[] = [
  { no: "01", title: "Social Media Platform APIs", tools: ["Meta", "Instagram", "LinkedIn", "YouTube"] },
  { no: "02", title: "Messaging & Communication", tools: ["WhatsApp Business", "Twilio", "Telegram", "SendGrid"] },
  { no: "03", title: "Authentication & Connectivity", tools: ["Meta", "Google", "JWT"] },
  { no: "04", title: "Backend & Webhook Management", tools: ["Node.js", "Express.js", "Redis", "REST APIs"] },
  { no: "05", title: "Social Scheduling & Automation", tools: ["Buffer", "Hootsuite", "Zapier", "Make"] },
  { no: "06", title: "Analytics & Engagement", tools: ["Meta", "LinkedIn", "Google"] },
]

export const BUSINESS_AUTOMATION_TECH: TechCategory[] = [
  { no: "01", title: "Workflow & Process Automation", tools: ["n8n", "Zapier", "Make"] },
  { no: "02", title: "Custom Development & Scripting", tools: ["Node.js", "Python", "TypeScript", "Bash"] },
  { no: "03", title: "Database & Business Integrations", tools: ["PostgreSQL", "MongoDB", "Supabase", "Airtable"] },
  { no: "04", title: "CRM & Communication", tools: ["HubSpot", "Salesforce", "Twilio", "SendGrid"] },
  { no: "06", title: "AI & Intelligent Automation", tools: ["LangChain", "Hugging Face", "OpenAI", "Claude"] },
]

export const ECOMMERCE_PAYMENTS_TECH: TechCategory[] = [
  { no: "01", title: "E-commerce Platforms & Storefronts", tools: ["Shopify", "WooCommerce", "Magento", "BigCommerce"] },
  { no: "02", title: "Frontend & Store Experience", tools: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"] },
  { no: "03", title: "Commerce Backend & Management", tools: ["Node.js", "Express.js", "Java", "Ruby on Rails"] },
  { no: "04", title: "Payments & Checkout", tools: ["Stripe", "Razorpay", "PayPal", "Visa"] },
  { no: "05", title: "Analytics & Marketing", tools: ["Google", "Meta", "Google Tag Manager"] },
]

export const LEGACY_MODERNIZATION_TECH: TechCategory[] = [
  { no: "01", title: "Modern Frontend Frameworks", tools: ["React.js", "Next.js", "TypeScript", "JavaScript"] },
  { no: "02", title: "Backend & Enterprise Frameworks", tools: ["Node.js", "Spring Boot", "Java", "Ruby on Rails"] },
  { no: "03", title: "Database & Migration", tools: ["PostgreSQL", "MySQL", "MongoDB", "Supabase"] },
  { no: "04", title: "DevOps & Cloud Infrastructure", tools: ["Docker", "Kubernetes", "AWS", "Terraform"] },
  { no: "05", title: "Testing & Code Quality", tools: ["Jest", "Postman", "Playwright", "GitHub"] },
]

export const MAINTENANCE_OPTIMIZATION_TECH: TechCategory[] = [
  { no: "01", title: "Testing & Quality Assurance", tools: ["Jest", "Vitest", "Playwright", "Postman"] },
  { no: "02", title: "Performance & Monitoring", tools: ["Lighthouse", "Sentry", "Datadog", "New Relic"] },
  { no: "03", title: "Deployment & Infrastructure", tools: ["Docker", "AWS", "Vercel", "GitHub"] },
  { no: "04", title: "Code Quality & Version Control", tools: ["ESLint", "Prettier", "TypeScript", "Git"] },
  { no: "05", title: "AI & Developer Productivity", tools: ["GitHub", "Cursor", "ChatGPT", "CodeRabbit"] },
]

export const SERVICE_TECH_CATEGORIES: Record<ServiceId, TechCategory[]> = {
  "web-development": WEB_DEVELOPMENT_TECH,
  "saas-mvp-development": SAAS_MVP_TECH,
  "mobile-app-development": MOBILE_APP_TECH,
  "ui-ux-product-design": UI_UX_PRODUCT_DESIGN_TECH,
  "website-app-redesign": WEBSITE_APP_REDESIGN_TECH,
  "seo-digital-growth": SEO_DIGITAL_GROWTH_TECH,
  "api-platform-integrations": API_PLATFORM_INTEGRATIONS_TECH,
  "social-media-integrations": SOCIAL_MEDIA_INTEGRATIONS_TECH,
  "business-automation": BUSINESS_AUTOMATION_TECH,
  "ecommerce-payments": ECOMMERCE_PAYMENTS_TECH,
  "legacy-modernization": LEGACY_MODERNIZATION_TECH,
  "maintenance-optimization": MAINTENANCE_OPTIMIZATION_TECH,
}
