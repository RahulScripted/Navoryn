import type { AboutCard } from "@/types/about"
import { createElement } from "react"

import expertiseImage from "@/asset/webps/home/about/experts.webp"
import teamImage from "@/asset/webps/home/about/team-members.webp"

import Pattern from "@/components/about/ui/message-chat"
import TerminalWindow from "@/components/about/ui/terminal"
import CraftFeed from "@/components/about/ui/animated-list"
import VisionBeam from "@/components/about/ui/animated-beam"
import DesignCreativity from "@/components/about/ui/design-creativity"
import MagnifiedBento from "@/components/about/ui/magnified-bento"
import MonthlyVisitorsChart from "@/components/about/ui/visitors-chart"
import CraftWheel from "@/components/about/ui/craft-wheel"
import LanguageMorph from "@/components/about/ui/language-morph"

export const ABOUT_CARDS: AboutCard[] = [
  {
    id: "promise",
    tone: "neutral",
    eyebrow: "Our Promise",
    title: "Made Around You",
    description:
      "Built on Understanding. Connected by Language.",
    media: createElement(LanguageMorph),
  },
  {
    id: "expertise",
    tone: "lilac",
    eyebrow: "Our Expertise",
    title: "Ideas Into Digital Reality",
    description:
      "We combine development and design to build intuitive digital experiences.",
    image: expertiseImage,
    imageAlt:
      "Illustration of developers and designers collaborating on code, mobile applications, and digital design",
  },
  {
    id: "workflows",
    tone: "neutral",
    eyebrow: "Our Capabilities",
    title: "Technology in Harmony",
    description:
      "Discover how our services and capabilities work together seamlessly.",
    media: createElement(MagnifiedBento),
  },
  {
    id: "clients",
    tone: "mint",
    eyebrow: "Our Partnerships",
    title: "Partnerships Built on Trust",
    description:
      "We value collaboration, transparency, and lasting client relationships.",
    media: createElement(Pattern),
  },
  {
    id: "craft",
    tone: "peach",
    eyebrow: "Our Standards",
    title: "Excellence in Every Detail",
    description:
      "We prioritize performance, accessibility, and seamless user experiences.",
    media: createElement(DesignCreativity),
  },
  {
    id: "process",
    tone: "pink",
    eyebrow: "Our Approach",
    title: "A Process With Purpose",
    description:
      "We turn ideas into results through strategic planning and execution.",
    media: createElement(TerminalWindow),
  },
  {
    id: "results",
    tone: "sky",
    eyebrow: "Our Vision",
    title: "Designed for What's Next",
    description:
      "We build adaptable solutions that evolve with your business.",
    media: createElement(VisionBeam),
  },
  {
    id: "future",
    tone: "sky",
    eyebrow: "Our Engineering",
    title: "Engineered to Scale",
    description:
      "We create reliable, maintainable systems built for long-term growth.",
    media: createElement(CraftFeed),
  },
  {
    id: "visitors",
    tone: "neutral",
    eyebrow: "Our Digital Impact",
    title: "Growth Through Insights",
    description:
      "Explore a sample monthly visitor trend through interactive analytics.",
    media: createElement(MonthlyVisitorsChart, { showHeader: false }),
  },
  {
    id: "ticket",
    tone: "neutral",
    eyebrow: "Our Creative Craft",
    title: "Motion With Meaning",
    description:
      "We craft purposeful interactions that make every experience memorable.",
    media: createElement(CraftWheel),
  },
  {
    id: "team",
    tone: "neutral",
    eyebrow: "Our Core Team",
    title: "One Vision. Many Perspectives.",
    bleedImage: teamImage,
    bleedImageAlt:
      "Illustration of a diverse team coming together around a shared vision",
  },
];
