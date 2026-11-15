import type { ServiceId } from "../../types/service"
import type { DetailCard } from "../types/detail"

/** Four highlights per service. `image` is left empty on purpose; add one per card later. */
export const SERVICE_DETAIL_CARDS: Record<ServiceId, DetailCard[]> = {
  "web-development": [
    { category: "Web Presence", title: "Business Websites", description: "Professional, responsive websites that communicate your brand, showcase your services, and help customers understand why your business matters." },
    { category: "Digital Products", title: "Web Applications", description: "Interactive platforms with custom functionality, dashboards, workflows, and data-driven experiences built around the way your business operates." },
    { category: "Customer Experience", title: "Customer Portals", description: "Secure spaces where customers can manage accounts, access information, track activity, and interact with your services in one place." },
    { category: "Business Operations", title: "Admin & Management Systems", description: "Centralized tools that help teams manage users, records, workflows, and operational activities with greater clarity and control." },
  ],
  "saas-mvp-development": [
    { category: "Product Foundations", title: "MVP Development", description: "Turn early-stage ideas into functional products with essential features, helping you validate concepts and gather real user feedback." },
    { category: "Cloud Software", title: "SaaS Platforms", description: "Scalable software platforms with subscription models, user management, and feature-rich experiences built for growing businesses." },
    { category: "Product Ecosystems", title: "Multi-Tenant Applications", description: "Flexible applications that serve multiple businesses or customer groups through secure, independent workspaces and shared infrastructure." },
    { category: "Product Evolution", title: "Product Scaling & Enhancement", description: "Expand your product with new features, improved architecture, and performance upgrades as your users and business requirements grow." },
  ],
  "mobile-app-development": [
    { category: "Mobile Experiences", title: "iOS Applications", description: "Purpose-built iPhone applications with intuitive interfaces, smooth interactions, and reliable functionality tailored to your audience." },
    { category: "Android Experiences", title: "Android Applications", description: "Feature-rich Android applications designed for performance, usability, and consistent experiences across different devices." },
    { category: "Cross-Platform", title: "Cross-Platform Apps", description: "Build for iOS and Android with a shared codebase, reducing development complexity while maintaining a consistent user experience." },
    { category: "Connected Experiences", title: "Mobile App Integrations", description: "Connect mobile applications with APIs, payment gateways, authentication systems, and third-party services to extend their capabilities." },
  ],
  "ui-ux-product-design": [
    { category: "Digital Identity", title: "Interface Design", description: "Distinctive, consistent interfaces that reflect your brand identity and create a clear visual language across digital products." },
    { category: "User Experience", title: "UX Research & Strategy", description: "Understand user needs, identify friction points, and shape product experiences around real customer behavior and business goals." },
    { category: "Interactive Design", title: "Wireframes & Prototypes", description: "Explore product ideas through structured wireframes and interactive prototypes before moving into development." },
    { category: "Design Systems", title: "Design Systems", description: "Reusable components, design standards, and documentation that keep interfaces consistent and make future product development more efficient." },
  ],
  "website-app-redesign": [
    { category: "Visual Transformation", title: "Website Redesign", description: "Give your website a modern visual identity with improved layouts, stronger branding, and a more engaging customer experience." },
    { category: "Product Experience", title: "Application Redesign", description: "Transform outdated application interfaces into intuitive, accessible experiences that simplify navigation and everyday interactions." },
    { category: "Performance Revamp", title: "Performance & UX Improvements", description: "Identify usability and performance issues, then improve loading speed, navigation, responsiveness, and overall product efficiency." },
    { category: "Platform Modernization", title: "Frontend Modernization", description: "Upgrade outdated frontend implementations with modern frameworks, maintainable components, and responsive development practices." },
  ],
  "seo-digital-growth": [
    { category: "Search Visibility", title: "Technical SEO", description: "Improve website structure, indexing, crawlability, metadata, and technical foundations to help search engines understand your content." },
    { category: "Content Strategy", title: "Content Optimization", description: "Create and optimize relevant website content that answers customer questions, communicates value, and supports organic discovery." },
    { category: "Website Performance", title: "Core Web Vitals Optimization", description: "Improve loading speed, responsiveness, and visual stability to create faster browsing experiences and stronger technical performance." },
    { category: "Digital Analytics", title: "Analytics & Conversion Tracking", description: "Track website activity, user journeys, and conversion events to understand performance and make informed growth decisions." },
  ],
  "api-platform-integrations": [
    { category: "System Connectivity", title: "Custom API Development", description: "Build secure and structured APIs that allow applications, services, and business systems to communicate reliably." },
    { category: "Third-Party Services", title: "Third-Party Integrations", description: "Connect external platforms, business tools, and cloud services to extend functionality and simplify everyday operations." },
    { category: "Data Exchange", title: "Database & Data Integrations", description: "Connect databases and data sources to enable consistent information sharing, synchronization, and reliable data management." },
    { category: "Secure Access", title: "Authentication & Identity Integration", description: "Implement secure login, role-based access, single sign-on, and identity services to protect applications and user information." },
  ],
  "social-media-integrations": [
    { category: "Social Connectivity", title: "Social Login Integration", description: "Enable convenient account access through supported social platforms while keeping authentication secure and straightforward." },
    { category: "Content Connection", title: "Social Media Feeds", description: "Bring social content into your website through embedded feeds and supported platform integrations that keep your digital presence connected." },
    { category: "Audience Engagement", title: "Social Sharing & Engagement", description: "Make it easier for visitors to share content, discover your brand, and interact with your business across social channels." },
    { category: "Lead Generation", title: "Social Lead Integrations", description: "Connect supported social lead forms and advertising platforms with your CRM or business systems to organize incoming enquiries." },
  ],
  "business-automation": [
    { category: "Workflow Management", title: "Workflow Automation", description: "Automate repetitive business processes with structured workflows that reduce manual tasks and keep operations moving efficiently." },
    { category: "Process Integration", title: "System-to-System Automation", description: "Connect business applications and automate information exchange to eliminate disconnected processes and duplicate data entry." },
    { category: "Smart Communication", title: "Notifications & Alerts", description: "Set up automated emails, messages, reminders, and alerts that keep customers and teams informed at the right time." },
    { category: "Business Intelligence", title: "Reporting & Data Automation", description: "Automate report generation, data collection, and recurring business summaries to support faster, more informed decisions." },
  ],
  "ecommerce-payments": [
    { category: "Online Storefronts", title: "E-commerce Development", description: "Build custom online stores with product catalogs, intuitive navigation, and streamlined shopping experiences designed around your business." },
    { category: "Commerce Management", title: "Product & Inventory Management", description: "Manage products, categories, stock levels, pricing, and orders through centralized tools that simplify store operations." },
    { category: "Payment Experiences", title: "Payment Gateway Integration", description: "Integrate secure payment solutions, checkout flows, and transaction handling to make online payments simple and reliable." },
    { category: "Order Operations", title: "Order & Subscription Management", description: "Manage order lifecycles, recurring billing, subscription plans, and customer transactions through organized commerce workflows." },
  ],
  "legacy-modernization": [
    { category: "Architecture Upgrade", title: "Application Modernization", description: "Upgrade outdated application architecture with modern frameworks and maintainable code structures built for long-term reliability." },
    { category: "Infrastructure Evolution", title: "Backend & Database Modernization", description: "Improve existing backend services, database structures, and application integrations to support evolving business requirements." },
    { category: "Platform Migration", title: "Technology Migration", description: "Move applications and services to modern technology stacks with a structured approach that minimizes disruption to existing operations." },
    { category: "System Interoperability", title: "Legacy System Integration", description: "Connect existing business systems with modern applications and APIs to extend functionality without replacing everything at once." },
  ],
  "maintenance-optimization": [
    { category: "Continuous Support", title: "Website & Application Maintenance", description: "Keep websites and applications dependable through regular updates, issue resolution, technical support, and ongoing improvements." },
    { category: "Speed & Efficiency", title: "Performance Optimization", description: "Improve loading times, runtime efficiency, and resource usage to deliver faster and smoother digital experiences." },
    { category: "Security & Reliability", title: "Security & Stability Updates", description: "Strengthen application security through dependency updates, vulnerability fixes, access reviews, and reliability improvements." },
    { category: "Product Improvement", title: "Feature Enhancements", description: "Evolve existing products with new functionality, interface refinements, and technical improvements that support changing business needs." },
  ],
}
