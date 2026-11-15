import type { ServiceDetail } from "../types/detail"

export const SERVICE_DETAILS: ServiceDetail[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    description:
      "We create high-performance websites, customer portals, and web applications that combine intuitive design with reliable engineering. From business websites to complex digital platforms, we turn your ideas into useful, scalable online experiences.",
    tabletDescription:
      "We build high-performance websites, customer portals, and web applications with intuitive design and reliable engineering, helping businesses create scalable digital experiences.",
    mobileDescription:
      "We build fast, intuitive websites and web applications that help businesses grow and connect with their customers.",
  },
  {
    id: "saas-mvp-development",
    number: "02",
    title: "SaaS & MVP Development",
    description:
      "We turn ideas into market-ready digital products through custom SaaS platforms and minimum viable products. From early-stage prototypes to scalable applications, we build solutions that validate concepts, solve real problems, and support long-term growth.",
    tabletDescription:
      "We develop SaaS platforms and MVPs that transform business ideas into functional products, helping you validate concepts and scale with confidence.",
    mobileDescription:
      "We turn ideas into scalable digital products, from first prototypes to fully functional SaaS platforms.",
  },
  {
    id: "mobile-app-development",
    number: "03",
    title: "Mobile App Development",
    description:
      "We develop powerful mobile applications that combine seamless functionality with intuitive user experiences. From customer-facing apps to enterprise solutions, we create reliable iOS and Android applications designed to keep your business connected with its users.",
    tabletDescription:
      "We build intuitive, high-performance mobile applications for iOS and Android, helping businesses deliver seamless experiences across devices.",
    mobileDescription:
      "We create smooth, user-friendly mobile apps that keep your business connected on iOS and Android.",
  },
  {
    id: "ui-ux-product-design",
    number: "04",
    title: "UI/UX & Product Design",
    description:
      "We design meaningful digital experiences that bring together usability, accessibility, and visual clarity. Through user research, thoughtful interface design, and interactive prototypes, we transform complex requirements into products that feel simple and natural to use.",
    tabletDescription:
      "We create user-focused interfaces and interactive prototypes that balance usability, accessibility, and visual consistency.",
    mobileDescription:
      "We design intuitive interfaces that make digital products easier and more enjoyable to use.",
  },
  {
    id: "website-app-redesign",
    number: "05",
    title: "Website & App Redesign",
    description:
      "We transform outdated websites and applications into modern digital experiences built for today's users. By improving visual identity, navigation, accessibility, and performance, we help existing products become more engaging, effective, and easier to use.",
    tabletDescription:
      "We modernize websites and applications with improved design, smoother navigation, better accessibility, and stronger performance.",
    mobileDescription:
      "We refresh outdated websites and apps with modern design and better user experiences.",
  },
  {
    id: "seo-digital-growth",
    number: "06",
    title: "SEO & Digital Growth",
    description:
      "We improve your digital visibility through technical SEO, strategic content, and performance-focused optimization. From strengthening search rankings to attracting relevant audiences, we build sustainable growth strategies that help turn online discovery into meaningful business opportunities.",
    tabletDescription:
      "We improve search visibility and digital reach through technical SEO, content optimization, and strategies focused on attracting relevant audiences.",
    mobileDescription:
      "We help your business get discovered online through SEO and focused digital growth strategies.",
  },
  {
    id: "api-platform-integrations",
    number: "07",
    title: "API & Platform Integrations",
    description:
      "We connect your digital products with the platforms, services, and tools your business relies on. From custom API development to third-party integrations, we create secure and reliable connections that streamline data exchange and make your systems work together.",
    tabletDescription:
      "We integrate APIs, third-party services, and business platforms to create secure connections and smoother data flows across your systems.",
    mobileDescription:
      "We connect your platforms and tools through reliable API integrations that make everything work together.",
  },
  {
    id: "social-media-integrations",
    number: "08",
    title: "Social Media Integrations",
    description:
      "We connect your digital platforms with social networks to create more engaging and connected customer experiences. From social authentication and content sharing to embedded feeds and lead integrations, we help businesses build stronger connections across digital channels.",
    tabletDescription:
      "We integrate social login, content sharing, feeds, and lead-generation features to connect your business with audiences across platforms.",
    mobileDescription:
      "We connect your website and apps with social platforms to make sharing and engagement easier.",
  },
  {
    id: "business-automation",
    number: "09",
    title: "Business Automation",
    description:
      "We simplify repetitive business operations through custom automation and intelligent workflows. From process management and data synchronization to notifications and reporting, we reduce manual effort, improve operational efficiency, and give your team more time to focus on growth.",
    tabletDescription:
      "We automate repetitive workflows, data processes, notifications, and reporting to reduce manual work and improve business efficiency.",
    mobileDescription:
      "We automate repetitive tasks so your team can save time and focus on what matters.",
  },
  {
    id: "ecommerce-payments",
    number: "10",
    title: "E-commerce & Payments",
    description:
      "We build seamless e-commerce platforms that make product discovery, shopping, and payments effortless. From custom storefronts and inventory management to secure payment gateway integrations, we create reliable online shopping experiences designed to improve customer confidence and conversions.",
    tabletDescription:
      "We develop e-commerce platforms with intuitive storefronts, product management, and secure payment integrations for smoother shopping experiences.",
    mobileDescription:
      "We create seamless online stores with simple shopping experiences and secure payment options.",
  },
  {
    id: "legacy-modernization",
    number: "11",
    title: "Legacy System Modernization",
    description:
      "We transform outdated applications and infrastructure into modern, secure, and maintainable digital systems. By upgrading architecture, improving interfaces, and adopting scalable technologies, we help businesses evolve their existing platforms without losing the value of what already works.",
    tabletDescription:
      "We modernize legacy applications through architecture upgrades, improved interfaces, and scalable technologies while preserving existing business value.",
    mobileDescription:
      "We upgrade outdated systems into modern, secure, and scalable digital platforms.",
  },
  {
    id: "maintenance-optimization",
    number: "12",
    title: "Maintenance & Optimization",
    description:
      "We keep your digital products secure, reliable, and performing at their best through continuous maintenance and improvement. From bug fixes and performance optimization to security updates and feature enhancements, we ensure your platforms remain ready for changing business needs.",
    tabletDescription:
      "We maintain and optimize digital platforms through performance improvements, bug fixes, security updates, and ongoing enhancements.",
    mobileDescription:
      "We keep your websites and apps secure, fast, reliable, and ready to grow.",
  },
]

export function getServiceDetail(slug: string | undefined) {
  return SERVICE_DETAILS.find((detail) => detail.id === slug)
}
