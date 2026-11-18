import type { FaqItem } from "@/types/faq"
import type { ServiceId } from "../../types/service"

export const SERVICE_FAQS: Record<ServiceId, FaqItem[]> = {
  "web-development": [
    {
      question: "What types of websites and web applications do you develop?",
      answer:
        "We develop business websites, landing pages, CMS-driven websites, customer portals, admin dashboards, booking platforms, and custom web applications tailored to your business requirements.",
    },
    {
      question: "Can you build a website from scratch?",
      answer:
        "Yes. We handle the complete development process, from understanding your requirements and planning the structure to designing, developing, testing, and launching your website.",
    },
    {
      question: "Will my website work across mobile, tablet, and desktop?",
      answer:
        "Absolutely. We build responsive interfaces that adapt to different screen sizes and provide a consistent experience across devices.",
    },
    {
      question: "Can I manage and update my website content myself?",
      answer:
        "Yes. We can integrate a content management system (CMS) that allows you to update pages, images, blogs, and other website content without changing the code.",
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer:
        "Yes. We offer ongoing maintenance, security updates, performance improvements, bug fixes, and technical support to keep your website reliable.",
    },
  ],
  "saas-mvp-development": [
    {
      question: "What is included in your SaaS development service?",
      answer:
        "We develop complete software products with user authentication, dashboards, subscription management, databases, APIs, admin controls, and other features based on your product requirements.",
    },
    {
      question: "Can you turn my business idea into an MVP?",
      answer:
        "Yes. We help transform your idea into a functional Minimum Viable Product (MVP), focusing on essential features that allow you to validate your concept and gather early user feedback.",
    },
    {
      question: "Can you build a subscription-based SaaS platform?",
      answer:
        "Yes. We can implement subscription plans, recurring payments, user roles, access restrictions, billing workflows, and account management.",
    },
    {
      question: "Can my SaaS product scale as the number of users grows?",
      answer:
        "We design applications with maintainable architecture, efficient databases, and scalable infrastructure to support increasing users, data, and product requirements.",
    },
    {
      question: "Can you improve or add features to an existing SaaS product?",
      answer:
        "Yes. We can extend existing platforms, introduce new functionality, improve performance, integrate third-party services, and modernize existing systems.",
    },
  ],
  "mobile-app-development": [
    {
      question: "Do you develop applications for both Android and iOS?",
      answer:
        "Yes. We build cross-platform mobile applications that can run on Android and iOS, using technologies such as React Native and Flutter where appropriate.",
    },
    {
      question: "Can you develop a mobile app from an existing website or business platform?",
      answer:
        "Yes. We can turn your existing website or business platform into a mobile application with interfaces and functionality designed specifically for mobile users.",
    },
    {
      question: "Can mobile applications integrate with existing APIs and databases?",
      answer:
        "Absolutely. We connect mobile applications with backend services, REST or GraphQL APIs, databases, authentication systems, and third-party platforms.",
    },
    {
      question: "Can you integrate features such as push notifications, location, and payments?",
      answer:
        "Yes. We can implement push notifications, GPS-based features, camera access, payment gateways, file uploads, and other device-specific capabilities.",
    },
    {
      question: "Do you help with app testing and publishing?",
      answer:
        "Yes. We support application testing, build preparation, deployment configuration, and submission processes for the Google Play Store and Apple App Store.",
    },
  ],
  "ui-ux-product-design": [
    {
      question: "What is included in your UI/UX design service?",
      answer:
        "Our process includes user research, information architecture, user flows, wireframes, interface design, interactive prototypes, and design systems tailored to your product.",
    },
    {
      question: "Do you design both websites and mobile applications?",
      answer:
        "Yes. We design interfaces for websites, web applications, SaaS platforms, dashboards, and mobile applications across different screen sizes.",
    },
    {
      question: "Can you create an interactive prototype before development?",
      answer:
        "Yes. We create clickable prototypes that demonstrate navigation, user interactions, and important product workflows before development begins.",
    },
    {
      question: "Do you create reusable design systems?",
      answer:
        "Yes. We establish reusable components, typography, color systems, spacing rules, and interface guidelines to maintain consistency across your digital products.",
    },
    {
      question: "Can you redesign an existing product's user experience?",
      answer:
        "Absolutely. We evaluate existing interfaces, identify usability issues, simplify user journeys, and create improved experiences aligned with your business objectives.",
    },
  ],
  "website-app-redesign": [
    {
      question: "Can you redesign my existing website without changing its core functionality?",
      answer:
        "Yes. We can modernize the visual experience while preserving existing functionality, integrations, content, and business workflows wherever possible.",
    },
    {
      question: "Will a redesign improve my website's performance?",
      answer:
        "A redesign can include performance improvements such as optimized assets, reduced JavaScript, efficient rendering, and improved loading strategies. Actual results depend on the existing platform and implementation.",
    },
    {
      question: "Can you migrate my website to a modern technology stack?",
      answer:
        "Yes. We can migrate legacy websites and applications to modern frameworks and technologies while planning for data, functionality, and integration continuity.",
    },
    {
      question: "Will my existing SEO rankings and website URLs be preserved?",
      answer:
        "We plan migrations carefully, including URL mapping, redirects, metadata, structured data, and technical SEO considerations to minimize the risk of losing search visibility.",
    },
    {
      question: "Can you redesign only specific pages or features?",
      answer:
        "Yes. We can improve individual pages, dashboards, navigation systems, checkout flows, or specific application features without requiring a complete redesign.",
    },
  ],
  "seo-digital-growth": [
    {
      question: "What does your SEO service include?",
      answer:
        "Our SEO services include keyword research, on-page optimization, technical SEO, content recommendations, website performance improvements, and search visibility monitoring.",
    },
    {
      question: "Can you improve my website's Google search rankings?",
      answer:
        "We improve the technical and content foundations that influence organic search performance. Rankings depend on competition, website authority, content quality, and Google's evolving algorithms, so specific positions cannot be guaranteed.",
    },
    {
      question: "Do you provide technical SEO audits?",
      answer:
        "Yes. We assess indexing, crawling, site structure, metadata, broken links, mobile usability, page speed, and other technical factors affecting search performance.",
    },
    {
      question: "Can you help generate more website traffic and leads?",
      answer:
        "Yes. We combine SEO, conversion optimization, analytics, and digital growth strategies to help attract relevant visitors and improve opportunities for customer conversion.",
    },
    {
      question: "How do you measure SEO and marketing performance?",
      answer:
        "We use analytics and reporting tools to monitor organic traffic, keyword performance, engagement, conversion rates, and other relevant business metrics.",
    },
  ],
  "api-platform-integrations": [
    {
      question: "What types of APIs and third-party platforms can you integrate?",
      answer:
        "We integrate payment gateways, CRM systems, communication services, analytics platforms, cloud services, business applications, and custom APIs based on project requirements.",
    },
    {
      question: "Can you connect two existing systems that do not communicate with each other?",
      answer:
        "Yes. We can build custom API integrations, data synchronization workflows, and middleware that allow different platforms to exchange information.",
    },
    {
      question: "Do you work with REST and GraphQL APIs?",
      answer:
        "Yes. We work with REST, GraphQL, webhooks, and other integration approaches depending on the systems and data requirements.",
    },
    {
      question: "How do you protect API integrations?",
      answer:
        "We implement appropriate authentication, authorization, secure credential handling, input validation, encryption, and error handling to protect data and communication.",
    },
    {
      question: "Can you maintain and monitor existing integrations?",
      answer:
        "Yes. We can troubleshoot integration failures, update API connections, improve reliability, and maintain integrations as third-party platforms evolve.",
    },
  ],
  "social-media-integrations": [
    {
      question: "Which social media platforms can you integrate with?",
      answer:
        "Depending on API access and platform permissions, we can integrate services such as Instagram, Facebook, LinkedIn, YouTube, and other supported social platforms.",
    },
    {
      question: "Can you integrate WhatsApp into my website or application?",
      answer:
        "Yes. We can integrate the WhatsApp Business Platform for supported messaging workflows, notifications, customer communication, and business interactions.",
    },
    {
      question: "Can users log in using their social media accounts?",
      answer:
        "Yes. We can implement supported social login options using OAuth-based authentication and the relevant platform identity services.",
    },
    {
      question: "Can my application automatically publish or retrieve social media content?",
      answer:
        "Where platform APIs and permissions allow, we can build workflows for publishing, retrieving, synchronizing, and managing supported social media content.",
    },
    {
      question: "Can you create a centralized dashboard for social media interactions?",
      answer:
        "Yes. We can build dashboards that bring supported social account data, engagement metrics, messages, and content workflows into a centralized interface.",
    },
  ],
  "business-automation": [
    {
      question: "What business processes can you automate?",
      answer:
        "We can automate repetitive workflows such as lead management, data entry, notifications, approvals, reporting, document processing, and communication between business systems.",
    },
    {
      question: "Can you automate workflows across multiple applications?",
      answer:
        "Yes. We connect different applications through APIs, webhooks, and automation platforms to create workflows that reduce manual coordination.",
    },
    {
      question: "Can you build custom automation instead of using ready-made tools?",
      answer:
        "Absolutely. When existing automation platforms do not meet your requirements, we can develop custom scripts, backend services, and workflow systems.",
    },
    {
      question: "Can AI be integrated into business automation?",
      answer:
        "Yes. AI capabilities can support document processing, information extraction, classification, conversational assistants, and other workflows where they provide practical value.",
    },
    {
      question: "Will automated workflows require ongoing monitoring?",
      answer:
        "Some workflows need monitoring to handle failures, API changes, and unexpected data. We can implement logging, alerts, error handling, and maintenance to keep them reliable.",
    },
  ],
  "ecommerce-payments": [
    {
      question: "Can you build a custom e-commerce website for my business?",
      answer:
        "Yes. We develop online storefronts with product catalogues, product pages, shopping carts, checkout experiences, order management, and customer account functionality.",
    },
    {
      question: "Which payment gateways can you integrate?",
      answer:
        "Depending on your location and business requirements, we can integrate payment providers such as Razorpay, Stripe, PayPal, and PayU.",
    },
    {
      question: "Can customers track their orders after purchasing?",
      answer:
        "Yes. We can implement order tracking, delivery status updates, customer notifications, and integrations with supported shipping providers.",
    },
    {
      question: "Can you integrate inventory and order management systems?",
      answer:
        "Yes. We can connect your storefront with inventory systems, warehouse workflows, order management platforms, and other business tools.",
    },
    {
      question: "Can you improve an existing online store's checkout experience?",
      answer:
        "Yes. We can optimize checkout flows, simplify payment steps, improve mobile usability, and reduce unnecessary friction during the purchasing process.",
    },
  ],
  "legacy-modernization": [
    {
      question: "What does legacy system modernization involve?",
      answer:
        "It involves upgrading outdated applications, frameworks, databases, and infrastructure to improve maintainability, security, performance, and compatibility with modern technologies.",
    },
    {
      question: "Can you modernize an existing application without rebuilding everything?",
      answer:
        "Yes. Depending on the architecture, we can modernize individual modules, replace outdated components, improve APIs, and gradually migrate functionality.",
    },
    {
      question: "Can you migrate an old application to a modern technology stack?",
      answer:
        "Yes. We assess the existing application and plan a migration to suitable modern frameworks, backend technologies, databases, and infrastructure.",
    },
    {
      question: "How do you protect existing business data during modernization?",
      answer:
        "We plan data migration carefully using backups, validation, testing, and controlled migration procedures to maintain data integrity and reduce disruption.",
    },
    {
      question: "Can legacy systems be integrated with modern applications?",
      answer:
        "Yes. We can build APIs, middleware, and integration layers that allow older systems to communicate with modern applications and services.",
    },
  ],
  "maintenance-optimization": [
    {
      question: "What is included in your website and application maintenance service?",
      answer:
        "Maintenance can include bug fixes, security updates, dependency upgrades, performance improvements, compatibility checks, backups, and technical support.",
    },
    {
      question: "Can you maintain a website or application developed by another team?",
      answer:
        "Yes. We first review the existing codebase, architecture, dependencies, and infrastructure to understand the system before taking on maintenance work.",
    },
    {
      question: "How do you identify and resolve performance issues?",
      answer:
        "We use performance audits, browser profiling, monitoring tools, and code analysis to identify bottlenecks and implement targeted optimizations.",
    },
    {
      question: "Do you provide security updates and vulnerability fixes?",
      answer:
        "Yes. We can review dependencies, address known vulnerabilities, update outdated packages, and improve application security practices.",
    },
    {
      question: "Can you provide ongoing support as my business grows?",
      answer:
        "Yes. We can provide continued technical assistance, feature improvements, infrastructure updates, and optimization as your application and business requirements evolve.",
    },
  ],
}
