import { Component1Icon, GearIcon, LayersIcon, LightningBoltIcon, LockClosedIcon, ShuffleIcon } from "@radix-ui/react-icons"
import image from "@/asset/webps/home/blog-service/blog-detail-3.webp"
import { CaseStudyLayout } from "../shared/CaseStudyLayout"
import type { CaseStudy } from "../shared/types"
const STUDY: CaseStudy = {
  seo: {
    title: "Building Scalable Digital Products",
    description:
      "Explore how thoughtful architecture, reusable components, performance optimisation, and reliable engineering create digital products ready to scale.",
  },
  title: "Building digital products ready to scale",
  description:
    "From the first component to the underlying architecture, we build digital products designed for performance, flexibility, and future growth. Every technical decision is made with maintainability, reliability, and evolving business needs in mind.",
  mobileDescription:
    "From the first component to the underlying architecture, we build digital products designed for performance, flexibility, and future growth.",
  image,
  intro: {
    title: "Built for today. Prepared for what comes next.",
    paragraphs: [
      "A digital product is never really finished. As businesses grow, their products evolve. More users arrive, new features become necessary, workflows become more complex, and expectations continue to change.",
      "What works for a small product today may become a limitation tomorrow. That's why building a digital product requires thinking beyond its first release, creating a foundation that supports current needs while leaving room for future possibilities.",
    ],
  },
  points: [
    {
      number: "01",
      icon: LayersIcon,
      iconAnim: "bounce",
      title: "Architecture before acceleration",
      description:
        "Moving quickly without direction creates problems that become expensive later. A considered architecture defines how parts of an application communicate, how data flows, and how new functionality can be introduced. We focus on clear separation of concerns, sensible structure, reusable patterns, and maintainable code.",
    },
    {
      number: "02",
      icon: Component1Icon,
      iconAnim: "spin",
      title: "Build reusable, not repetitive",
      description:
        "Reusable components and shared design patterns keep an interface consistent while reducing duplication. Instead of rebuilding the same functionality across screens, we create flexible building blocks. Products become easier to maintain, faster to extend, and more consistent as features are added.",
    },
    {
      number: "03",
      icon: LightningBoltIcon,
      iconAnim: "flash",
      title: "Performance is part of the experience",
      description:
        "Users notice when something takes too long or interrupts their workflow. We consider loading strategies, rendering efficiency, asset optimisation, data fetching, caching, and responsive interactions throughout development. Every optimisation should contribute to a better experience.",
    },
    {
      number: "04",
      icon: ShuffleIcon,
      iconAnim: "nudge",
      title: "Design for flexibility",
      description:
        "Growth brings unexpected requirements: new integrations, user roles, workflows, or entire modules. Flexible architecture lets functionality evolve without changing the whole application. Scalability isn't only about handling more traffic. It's also about handling more complexity without friction.",
    },
    {
      number: "05",
      icon: LockClosedIcon,
      iconAnim: "wiggle",
      title: "Reliability beyond the first release",
      description:
        "Launching is only one part of the journey. Testing, error handling, security, and ongoing maintenance keep a product dependable as it grows. We pay attention to edge cases and validate important user journeys, so the product handles unexpected situations gracefully.",
    },
    {
      number: "06",
      icon: GearIcon,
      iconAnim: "spin",
      title: "Technology should serve the product",
      description:
        "Popular doesn't automatically mean right. The stack should reflect the product's goals, complexity, performance requirements, and long-term direction. We select tools for their practical value, choosing what makes the product easier to build, operate, and improve.",
    },
  ],
}
export function EngineeringCaseStudy() {
  return <CaseStudyLayout study={STUDY} />
}
