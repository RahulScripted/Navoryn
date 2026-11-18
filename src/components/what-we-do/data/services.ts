export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "We build responsive websites, customer portals, and web applications tailored to your business. Every solution is designed for performance, usability, and scalability.",
  },
  {
    id: "saas-mvp-development",
    title: "SaaS & MVP Development",
    description:
      "Turn your product idea into a market-ready digital solution. We build scalable SaaS platforms and MVPs with essential features and flexible architecture.",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    description:
      "We create intuitive iOS and Android applications that connect your business with its customers. Expect smooth interactions, reliable integrations, and consistent performance.",
  },
  {
    id: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    description:
      "We transform complex ideas into intuitive digital experiences through thoughtful interface design and user-focused workflows. Every detail has a purpose.",
  },
  {
    id: "website-app-redesign",
    title: "Website & App Redesign",
    description:
      "We modernize outdated websites and applications with cleaner interfaces, improved usability, and better performance. Give your digital product a fresh, consistent experience.",
  },
  {
    id: "seo-digital-growth",
    title: "SEO & Digital Growth",
    description:
      "Improve your online visibility with search-friendly websites and technical SEO. We optimize performance, search indexing, and analytics to support sustainable growth.",
  },
  {
    id: "api-platform-integrations",
    title: "API & Platform Integrations",
    description:
      "Connect your applications and business platforms through reliable API integrations. Streamline data exchange and keep your systems working together.",
  },
  {
    id: "social-media-integrations",
    title: "Social Media Integrations",
    description:
      "Connect your digital products with social platforms and messaging services. Simplify customer communication, automate lead workflows, and improve engagement.",
  },
  {
    id: "business-automation",
    title: "Business Automation",
    description:
      "Simplify repetitive operations with custom automation and connected business workflows. Reduce manual effort, minimize errors, and improve team productivity.",
  },
  {
    id: "ecommerce-payments",
    title: "E-commerce & Payments",
    description:
      "Build seamless online shopping experiences with product catalogs, secure checkout, and integrated payments. Simplify order management through connected commerce solutions.",
  },
  {
    id: "legacy-modernization",
    title: "Legacy System Modernization",
    description:
      "Transform outdated applications into modern, maintainable digital systems. Upgrade existing codebases and improve architecture with minimal business disruption.",
  },
  {
    id: "maintenance-optimization",
    title: "Maintenance & Optimization",
    description:
      "Keep your websites and applications secure, stable, and running efficiently. We handle ongoing improvements, performance tuning, and technical support.",
  },
] as const

export const SERVICE_TITLES = SERVICES.map((service) => service.title)
