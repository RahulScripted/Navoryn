import { CubeIcon, DashboardIcon, Link2Icon, MagnifyingGlassIcon, RocketIcon, TimerIcon } from "@radix-ui/react-icons"
import image from "@/asset/webps/home/blog-service/blog-detail-4.webp"
import { CaseStudyLayout } from "../shared/CaseStudyLayout"
import type { CaseStudy } from "../shared/types"
const STUDY: CaseStudy = {
  seo: {
    title: "Bringing Complex Ideas to Life Through Technology",
    description:
      "Discover how thoughtful engineering, modern technology, and practical problem-solving transform complex business challenges into intuitive digital solutions.",
  },
  title: "Bringing complex ideas to life through technology",
  description:
    "The right technology can turn complicated challenges into simple experiences. We connect thoughtful engineering with practical solutions built around real business needs, creating reliable digital systems that simplify processes and open up new possibilities for growth.",
  mobileDescription:
    "The right technology can turn complicated challenges into simple experiences. We connect thoughtful engineering with practical solutions built around real business needs.",
  image,
  intro: {
    title: "Technology matters most when it makes things simpler.",
    paragraphs: [
      "Behind every useful digital product is a collection of decisions, systems, and interactions working together. Some of the most complicated challenges are invisible to the people using the final product.",
      "They simply expect things to work: information to be available, processes to feel effortless, and interactions to happen without unnecessary friction. That's what good technology should enable.",
    ],
  },
  points: [
    {
      number: "01",
      icon: MagnifyingGlassIcon,
      iconAnim: "wiggle",
      title: "Understand the problem before choosing the tools",
      description:
        "A business may need to automate a workflow, connect disconnected systems, improve a platform, or introduce a new product. The solution should begin with the problem, not a predetermined stack. We look at the existing process, identify bottlenecks, and define what the solution needs to achieve.",
    },
    {
      number: "02",
      icon: Link2Icon,
      iconAnim: "wiggle",
      title: "Connect the pieces that make it work",
      description:
        "Frontend interfaces, backend services, databases, APIs, and third-party platforms all need to communicate effectively. We create clear integrations, structured data flows, and reliable communication between systems, so businesses spend less time on disconnected processes.",
    },
    {
      number: "03",
      icon: DashboardIcon,
      iconAnim: "pop",
      title: "Turn complex workflows into simple experiences",
      description:
        "Complexity behind the scenes shouldn't become the user's problem. Thoughtful interface design, sensible information architecture, and clear feedback guide people naturally, whether it's a multi-step process, a management dashboard, or a customer-facing application.",
    },
    {
      number: "04",
      icon: CubeIcon,
      iconAnim: "spin-y",
      title: "Choose technology with a purpose",
      description:
        "The latest technology doesn't automatically create a better solution. We weigh performance, maintainability, integration requirements, complexity, and long-term flexibility. Technology should solve a problem, improve an experience, or create a meaningful opportunity.",
    },
    {
      number: "05",
      icon: TimerIcon,
      iconAnim: "spin",
      title: "Build with performance and reliability in mind",
      description:
        "Slow interfaces, unreliable integrations, and fragile systems can undermine the strongest ideas. We consider performance, security, responsiveness, testing, and maintainability throughout development, thinking about real-world conditions, not just demonstrations.",
    },
    {
      number: "06",
      icon: RocketIcon,
      iconAnim: "rise",
      title: "Leave room for what's next",
      description:
        "Requirements evolve, new integrations become necessary, and expectations increase. A thoughtful technical foundation makes it easier to introduce improvements without rebuilding from scratch, creating solutions that adapt as the business grows.",
    },
  ],
}
export function TechnologyCaseStudy() {
  return <CaseStudyLayout study={STUDY} />
}
