import { GroupIcon, HeartIcon, LayersIcon, StarIcon } from "@radix-ui/react-icons"
import build1 from "@/asset/webps/build/build-1.webp"
import build2 from "@/asset/webps/build/build-2.webp"
import build3 from "@/asset/webps/build/build-3.webp"
import build4 from "@/asset/webps/build/build-4.webp"
import type { Belief } from "../types/belief"

export const BELIEFS_INTRO = {
  title: "Good work starts with the right mindset.",
  description:
    "We believe meaningful digital experiences come from clear thinking, thoughtful design, and purposeful execution. These principles shape how we work, collaborate, and bring ideas to life.",
  tabletDescription:
    "Meaningful digital experiences start with clear thinking, thoughtful design, and purposeful execution. These principles guide everything we create.",
  mobileDescription: "Clear thinking. Thoughtful design. Purposeful execution. The foundation of everything we create.",
  label: "We believe in…",
}

export const BELIEFS: Belief[] = [
  {
    id: "building-better-together",
    number: "#01",
    title: "Building better, together.",
    description:
      "The best ideas rarely happen in isolation. We believe in open collaboration, honest conversations, and bringing different perspectives together. By working closely with our clients, we create solutions that are thoughtful, relevant, and built around real needs.",
    image: build1,
    imageShift: { x: -1.43, y: -1.81 },
    icon: GroupIcon,
    anim: "pop",
  },
  {
    id: "creating-work-that-matters",
    number: "#02",
    title: "Creating work that matters.",
    description:
      "Good design should do more than look impressive. It should solve problems, create meaningful experiences, and make a genuine difference to the people who use it. Every decision we make starts with purpose and ends with value.",
    image: build2,
    imageShift: { x: -0.67, y: -1.61 },
    icon: HeartIcon,
    anim: "pop",
  },
  {
    id: "thinking-before-building",
    number: "#03",
    title: "Thinking before building.",
    description:
      "Strong digital experiences begin with a clear direction. We take the time to understand the bigger picture, question assumptions, and make informed decisions before moving into design and development. Because the right foundation makes all the difference.",
    image: build3,
    imageShift: { x: -2.59, y: -0.44 },
    icon: LayersIcon,
    anim: "bounce",
  },
  {
    id: "never-settling-for-ordinary",
    number: "#04",
    title: "Never settling for ordinary.",
    description:
      "We believe there's always a better way to approach a challenge. We question conventions, explore new possibilities, and push beyond expected solutions. Not for the sake of being different, but to create work that stands apart for the right reasons.",
    image: build4,
    imageShift: { x: 0.49, y: 0.2 },
    icon: StarIcon,
    anim: "flash",
  },
]
