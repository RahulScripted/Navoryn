import type { AboutCard } from "@/types/about"
import expertiseImage from "@/asset/webps/experts.webp"
import teamImage from "@/asset/webps/team-members.webp"
import { createElement } from "react"
import Pattern from "@/components/ui/message-chat"
import TerminalWindow from "@/components/ui/terminal"
import CraftFeed from "@/components/ui/animated-list"
import VisionBeam from "@/components/ui/animated-beam"
import DesignCreativity from "@/components/ui/design-creativity"

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "expertise",
    tone: "lilac",
    eyebrow: "Our Expertise",
    title: "Experience That Shapes Better Solutions",
    description:
      "Our combined expertise across web development, mobile experiences, and digital design helps us make informed decisions and build solutions with purpose.",
    image: expertiseImage,
    imageAlt: "Illustration of developers and designers working together on code, mobile and design",
  },
  {
    id: "clients",
    tone: "mint",
    eyebrow: "Our Relationships",
    title: "Built on Trust and Collaboration",
    description: "Great projects begin with understanding and clear communication.",
    media: createElement(Pattern),
  },
  {
    id: "craft",
    tone: "peach",
    eyebrow: "Our Standards",
    title: "Details That Make a Difference",
    description:
      "From performance and accessibility to responsive layouts and visual polish, we pay attention to the details that make digital experiences better.",
    media: createElement(DesignCreativity),
  },
  {
    id: "process",
    tone: "pink",
    eyebrow: "How We Work",
    title: "A Clear Process, From Start to Finish",
    description:
      "A structured approach that keeps projects organized and progress transparent.",
    media: createElement(TerminalWindow),
  },
  {
    id: "results",
    tone: "sky",
    eyebrow: "Our Vision",
    title: "Built for Today. Ready for Tomorrow.",
    description:
      "Maintainable, scalable solutions designed to adapt, evolve, and grow alongside the businesses they serve.",
    media: createElement(VisionBeam),
  },
  {
    id: "future",
    tone: "sky",
    eyebrow: "Our Craft",
    title: "Thoughtful, Future-Ready Builds",
    description: "Code and systems meant to grow — easy to extend, simple to maintain.",
    media: createElement(CraftFeed),
  },
  {
    id: "team",
    tone: "neutral",
    eyebrow: "Core team members",
    title: "Different Skills. One Shared Vision.",
    bleedImage: teamImage,
    bleedImageAlt: "Illustration of a diverse group of teammates looking up together",
  },
]
