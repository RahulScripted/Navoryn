import { GroupIcon, HeartIcon, LayersIcon, StarIcon } from "@radix-ui/react-icons"
import type { Belief } from "../types/belief"

export const BELIEFS_INTRO = {
  title: "Good work starts with the right mindset.",
  description:
    "We believe meaningful digital experiences come from clear thinking, thoughtful design, and purposeful execution. These principles shape how we approach every challenge, collaborate with our clients, and bring ideas to life.",
  label: "We believe in…",
}

export const BELIEFS: Belief[] = [
  {
    id: "building-better-together",
    number: "#01",
    title: "Building better, together.",
    description:
      "The best ideas rarely happen in isolation. We believe in open collaboration, honest conversations, and bringing different perspectives together. By working closely with our clients, we create solutions that are thoughtful, relevant, and built around real needs.",
    icon: GroupIcon,
    anim: "pop",
  },
  {
    id: "creating-work-that-matters",
    number: "#02",
    title: "Creating work that matters.",
    description:
      "Good design should do more than look impressive. It should solve problems, create meaningful experiences, and make a genuine difference to the people who use it. Every decision we make starts with purpose and ends with value.",
    icon: HeartIcon,
    anim: "pop",
  },
  {
    id: "thinking-before-building",
    number: "#03",
    title: "Thinking before building.",
    description:
      "Strong digital experiences begin with a clear direction. We take the time to understand the bigger picture, question assumptions, and make informed decisions before moving into design and development. Because the right foundation makes all the difference.",
    icon: LayersIcon,
    anim: "bounce",
  },
  {
    id: "never-settling-for-ordinary",
    number: "#04",
    title: "Never settling for ordinary.",
    description:
      "We believe there's always a better way to approach a challenge. We question conventions, explore new possibilities, and push beyond expected solutions. Not for the sake of being different, but to create work that stands apart for the right reasons.",
    icon: StarIcon,
    anim: "flash",
  },
]
