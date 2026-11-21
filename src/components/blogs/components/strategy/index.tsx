import { CodeIcon, MagicWandIcon, MixerHorizontalIcon, Pencil2Icon, TargetIcon } from "@radix-ui/react-icons"
import image from "@/asset/webps/home/blog-service/blog-detail-1.webp"
import { CaseStudyLayout } from "../shared/CaseStudyLayout"
import type { CaseStudy } from "../shared/types"
const STUDY: CaseStudy = {
  seo: {
    title: "Turning Bold Ideas Into Meaningful Digital Experiences",
    description:
      "Discover how strategy, creativity, and thoughtful execution transform early ideas into meaningful digital experiences that connect with people and drive growth.",
  },
  title: "Turning a bold idea into a digital experience",
  description:
    "A great digital experience starts with more than an idea. It's about bringing clarity, creativity, and purpose together from the very beginning, shaping every decision into an experience that feels intuitive, meaningful, and built around people.",
  mobileDescription:
    "A great digital experience starts with more than an idea. It's about bringing clarity, creativity, and purpose together from the very beginning.",
  image,
  intro: {
    title: "Every great experience begins with a question.",
    paragraphs: [
      "What if it could work better? What if it could feel simpler? What if an ordinary idea could become something people genuinely enjoy using?",
      "The most meaningful digital experiences rarely begin with technology. They begin with curiosity, a clear understanding of the problem, and the ambition to create something better.",
    ],
  },
  points: [
    {
      number: "01",
      icon: TargetIcon,
      iconAnim: "pop",
      title: "Start with the idea, understand the purpose",
      description:
        "Every project has a reason behind it. Before thinking about layouts, colours, or technology, we focus on the bigger picture. Who is this being built for? What problem does it solve? What should people feel when they interact with it? These questions turn an open-ended idea into a direction everyone can work towards.",
    },
    {
      number: "02",
      icon: MixerHorizontalIcon,
      iconAnim: "nudge",
      title: "Bring clarity to complexity",
      description:
        "An idea can be ambitious without needing to be complicated. We organise information, define user journeys, establish priorities, and remove unnecessary friction. A well-considered structure helps users understand where they are, what they can do, and where they should go next.",
    },
    {
      number: "03",
      icon: Pencil2Icon,
      iconAnim: "wiggle",
      title: "Design with intention",
      description:
        "Good design is about making the experience feel natural. From typography and spacing to visual hierarchy and interaction patterns, every detail shapes how people use a product. The visual language should reflect the brand, support the content, and guide users without getting in their way.",
    },
    {
      number: "04",
      icon: CodeIcon,
      iconAnim: "nudge",
      title: "Turn design into something real",
      description:
        "We bring ideas to life through thoughtful frontend engineering, reliable architecture, and carefully selected technologies. Performance, accessibility, responsiveness, and maintainability are considered throughout development, so the experience looks right, works smoothly, and adapts as the business evolves.",
    },
    {
      number: "05",
      icon: MagicWandIcon,
      iconAnim: "wiggle",
      title: "Refine every detail",
      description:
        "The difference between something that works and something that feels complete often comes down to the details. We review interactions, test screen sizes, improve loading behaviour, and refine the smallest elements. Consistency comes from getting hundreds of small decisions right.",
    },
  ],
}
export function StrategyCaseStudy() {
  return <CaseStudyLayout study={STUDY} />
}
