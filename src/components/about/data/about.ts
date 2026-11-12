
import type { AboutCard } from "@/types/about"
import { createElement } from "react"

import expertiseImage from "@/asset/webps/experts.webp"
import teamImage from "@/asset/webps/team-members.webp"

import Pattern from "@/components/ui/message-chat"
import TerminalWindow from "@/components/ui/terminal"
import CraftFeed from "@/components/ui/animated-list"
import VisionBeam from "@/components/ui/animated-beam"
import DesignCreativity from "@/components/ui/design-creativity"
import MagnifiedBento from "@/components/ui/magnified-bento"
import MonthlyVisitorsChart from "@/components/ui/visitors-chart"
import NavorynTicket from "@/components/ui/tear-ticket"

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "expertise",
    tone: "lilac",
    eyebrow: "Our Expertise",
    title: "Expertise That Turns Ideas Into Reality",
    description:
      "We bring together web development, mobile engineering, and digital design to transform complex ideas into intuitive, high-performing digital experiences.",
    image: expertiseImage,
    imageAlt:
      "Illustration of developers and designers collaborating on code, mobile applications, and digital design",
  },
  {
    id: "clients",
    tone: "mint",
    eyebrow: "Our Partnerships",
    title: "Built on Trust. Driven by Collaboration.",
    description:
      "We believe great outcomes come from meaningful partnerships, open communication, and a shared commitment to getting every detail right.",
    media: createElement(Pattern),
  },
  {
    id: "craft",
    tone: "peach",
    eyebrow: "Our Standards",
    title: "Excellence Lives in the Details",
    description:
      "From performance and accessibility to responsive design and refined interactions, we make every detail count toward a better user experience.",
    media: createElement(DesignCreativity),
  },
  {
    id: "process",
    tone: "pink",
    eyebrow: "Our Approach",
    title: "A Smarter Process. A Clearer Direction.",
    description:
      "We turn ideas into actionable plans through thoughtful planning, structured execution, continuous feedback, and transparent communication.",
    media: createElement(TerminalWindow),
  },
  {
    id: "results",
    tone: "sky",
    eyebrow: "Our Vision",
    title: "Built for Today. Engineered for Tomorrow.",
    description:
      "We create adaptable digital foundations that scale with your ambitions, evolve with technology, and support long-term business growth.",
    media: createElement(VisionBeam),
  },
  {
    id: "future",
    tone: "sky",
    eyebrow: "Our Engineering",
    title: "Technology That Grows With You",
    description:
      "We build clean, maintainable, and extensible systems designed to simplify future improvements without compromising reliability.",
    media: createElement(CraftFeed),
  },
  {
    id: "team",
    tone: "neutral",
    eyebrow: "Our Core Team",
    title: "Different Perspectives. One Shared Vision.",
    bleedImage: teamImage,
    bleedImageAlt:
      "Illustration of a diverse team coming together around a shared vision",
  },
  {
    id: "workflows",
    tone: "neutral",
    eyebrow: "Our Capabilities",
    title: "Everything Working Together, Seamlessly.",
    description:
      "Explore the capabilities and services behind our work. Move the interactive lens to discover how every piece fits together.",
    media: createElement(MagnifiedBento),
  },
  {
    id: "visitors",
    tone: "neutral",
    eyebrow: "Our Digital Impact",
    title: "Measuring Growth, One Milestone at a Time.",
    description:
      "Explore a sample monthly visitor trend through an interactive analytics experience.",
    media: createElement(MonthlyVisitorsChart, { showHeader: false }),
  },
  {
    id: "ticket",
    tone: "neutral",
    eyebrow: "Our Creative Craft",
    title: "Interactions That Make an Impression.",
    description:
      "Experience motion with purpose. Every movement is thoughtfully crafted to make digital interactions feel natural, engaging, and memorable.",
    media: createElement(NavorynTicket),
  },
]
