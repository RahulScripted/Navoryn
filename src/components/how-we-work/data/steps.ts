import { CodeIcon, MagnifyingGlassIcon, RocketIcon, TargetIcon } from "@radix-ui/react-icons"
import type { WorkStep } from "../types/step"

export const STEPS: WorkStep[] = [
  {
    id: "discover",
    number: "01",
    weeks: "Weeks 1–2",
    title: "Discover",
    description:
      "We get to know your business, your audience, and your ambitions. Through focused conversations and research, we uncover what makes your brand different and where it can go.",
    start: 0,
    end: 2,
    icon: MagnifyingGlassIcon,
    anim: "wiggle",
  },
  {
    id: "define",
    number: "02",
    weeks: "Weeks 3–4",
    title: "Define",
    description:
      "We turn insights into direction. Together, we establish your brand positioning, visual identity, messaging, and the principles that guide every creative decision.",
    start: 2,
    end: 4,
    icon: TargetIcon,
    anim: "pop",
  },
  {
    id: "design-build",
    number: "03",
    weeks: "Weeks 5–9",
    title: "Design & Build",
    description:
      "Ideas take shape through thoughtful design and purposeful development. We explore creative directions, refine the details, and build a digital experience that brings your vision to life.",
    start: 4,
    end: 9,
    icon: CodeIcon,
    anim: "nudge",
  },
  {
    id: "launch-grow",
    number: "04",
    weeks: "Week 10 Onwards",
    title: "Launch & Grow",
    description:
      "We prepare everything for a confident launch, from final assets and handover to ongoing support. And as your business evolves, we're here to help you move forward.",
    start: 9,
    end: 12,
    icon: RocketIcon,
    anim: "rise",
  },
]

/** Columns on the chart: W01 to W12. */
export const WEEK_LABELS = Array.from({ length: 12 }, (_, i) => `W${String(i + 1).padStart(2, "0")}`)
