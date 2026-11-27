import { ColorWheelIcon, CopyIcon, DesktopIcon, ReaderIcon, UpdateIcon } from "@radix-ui/react-icons"
import pointImage1 from "@/asset/webps/home/blogs/Brand/Brand-1.webp"
import pointImage2 from "@/asset/webps/home/blogs/Brand/Brand-2.webp"
import pointImage3 from "@/asset/webps/home/blogs/Brand/Brand-3.webp"
import pointImage4 from "@/asset/webps/home/blogs/Brand/Brand-4.webp"
import pointImage5 from "@/asset/webps/home/blogs/Brand/Brand-5.webp"
import image from "@/asset/webps/home/blog-service/blog-detail-2.webp"
import { CaseStudyLayout } from "../shared/CaseStudyLayout"
import type { CaseStudy } from "../shared/types"
const STUDY: CaseStudy = {
  seo: {
    title: "Creating Distinctive Brand Identities",
    description:
      "Learn how brand strategy, visual direction, typography, and consistency come together to create memorable identities that stand apart.",
  },
  title: "Creating identities that stand apart",
  description:
    "A memorable brand needs more than a good-looking logo. We bring together visual direction, consistency, and thoughtful design to create identities with character, giving businesses a distinctive presence that connects with people and stays recognisable across every touchpoint.",
  mobileDescription:
    "A memorable brand needs more than a good-looking logo. We bring together visual direction, consistency, and thoughtful design to create identities with character.",
  image,
  intro: {
    title: "Recognition gets attention. Identity creates connection.",
    paragraphs: [
      "A logo might be the first thing people notice about a brand, but it is rarely the only thing they remember. The colours, typography, language, visual elements, and overall experience all contribute to how a brand is perceived.",
      "A strong identity creates a recognisable presence. It communicates personality, builds familiarity, and helps people understand what a business stands for.",
    ],
  },
  points: [
    {
      number: "01",
      image: pointImage1,
      icon: ReaderIcon,
      iconAnim: "pop",
      title: "Find the story behind the brand",
      description:
        "Before creating visual elements, we understand the brand itself. What does the business believe in? Who does it want to reach? What makes it different? Brand strategy defines positioning, personality, audience, and communication direction, the foundation for everything that follows.",
    },
    {
      number: "02",
      image: pointImage2,
      icon: ColorWheelIcon,
      iconAnim: "spin",
      title: "Give the brand a visual language",
      description:
        "A visual identity brings together a distinctive logo, typography that sets tone and hierarchy, a considered colour palette, supporting graphic elements, and imagery that reinforces the brand's character. These elements should work together as one cohesive language rather than compete for attention.",
    },
    {
      number: "03",
      image: pointImage3,
      icon: CopyIcon,
      iconAnim: "pop",
      title: "Make consistency feel natural",
      description:
        "A brand should be recognisable on a website, social post, presentation, or printed material. Consistency doesn't mean every piece looks identical. It means the identity stays recognisable as formats change, supported by clear visual guidelines across platforms and touchpoints.",
    },
    {
      number: "04",
      image: pointImage4,
      icon: DesktopIcon,
      iconAnim: "bounce",
      title: "Design for real-world applications",
      description:
        "A logo needs to stay clear at different sizes, typography readable across screens, and colours usable in different contexts. We consider how the identity functions everywhere, from digital interfaces to marketing materials. A brand system should be as practical as it is distinctive.",
    },
    {
      number: "05",
      image: pointImage5,
      icon: UpdateIcon,
      iconAnim: "spin",
      title: "Build an identity that can evolve",
      description:
        "Businesses change, audiences expand, and new opportunities emerge. We create systems rather than isolated assets, so the identity stays recognisable while flexible enough to evolve. A thoughtful identity gives a brand room to experiment and grow without losing its core character.",
    },
  ],
}
export function BrandingCaseStudy() {
  return <CaseStudyLayout study={STUDY} />
}
