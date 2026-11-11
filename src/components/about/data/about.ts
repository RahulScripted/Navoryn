import type { AboutCard } from "@/types/about"
import expertiseImage from "@/asset/webps/about/expertise.webp"
import teamImage from "@/asset/webps/team-members.webp"
import { createElement } from "react"
import Pattern from "@/components/ui/message-chat"
import TerminalWindow from "@/components/ui/terminal"
import CraftFeed from "@/components/ui/animated-list"
import VisionBeam from "@/components/ui/animated-beam"
import DesignCreativity from "@/components/ui/design-creativity"

export const ABOUT_CARDS: AboutCard[] = [
  // 1 — tall, left (3 rows on desktop)
  {
    id: "expertise",
    tone: "lilac",
    eyebrow: "Our Expertise",
    title: "Experience That Shapes Better Solutions",
    description:
      "Our combined expertise across web development, mobile experiences, and digital design helps us make informed decisions and build solutions with purpose.",
    image: expertiseImage,
    imageAlt: "Our team collaborating on a project",
  },
  // 2 — col 2 top (2 rows)
  {
    id: "clients",
    tone: "mint",
    eyebrow: "Our Relationships",
    title: "Built on Trust and Collaboration",
    description: "Great projects begin with understanding and clear communication.",
    media: createElement(Pattern),
  },
  // 3 — col 2 bottom (2 rows)
  {
    id: "craft",
    tone: "peach",
    eyebrow: "Our Standards",
    title: "Details That Make a Difference",
    description:
      "From performance and accessibility to responsive layouts and visual polish, we pay attention to the details that make digital experiences better.",
    media: createElement(DesignCreativity),
  },
  // 4 — col 3 top (1 row, short)
  {
    id: "process",
    tone: "pink",
    eyebrow: "How We Work",
    title: "A Clear Process, From Start to Finish",
    description:
      "A structured approach that keeps projects organized and progress transparent.",
    media: createElement(TerminalWindow),
  },
  // 5 — Our Vision (beam diagram)
  {
    id: "results",
    tone: "sky",
    eyebrow: "Our Vision",
    title: "Built for Today. Ready for Tomorrow.",
    description:
      "Maintainable, scalable solutions designed to adapt, evolve, and grow alongside the businesses they serve.",
    media: createElement(VisionBeam),
  },
  // 7 — col 4 bottom (2 rows)
  {
    id: "future",
    tone: "sky",
    eyebrow: "Our Craft",
    title: "Thoughtful, Future-Ready Builds",
    description: "Code and systems meant to grow — easy to extend, simple to maintain.",
    media: createElement(CraftFeed),
  },
  // 8 — col 1 bottom (1 row, short)
  {
    id: "team",
    tone: "neutral",
    eyebrow: "Core team members",
    title: "Different Skills. One Shared Vision.",
    bleedImage: teamImage,
    bleedImageAlt: "Illustration of a diverse group of teammates looking up together",
  },
]
