import blog1 from "@/asset/webps/home/blogs/Blog1.webp"
import blog2 from "@/asset/webps/home/blogs/Blog2.webp"
import blog3 from "@/asset/webps/home/blogs/Blog3.webp"
import blog4 from "@/asset/webps/home/blogs/Blog4.webp"
export type Blog = {
  number: string
  category: string
  to: string
  image: string
  title: string
  description: string
}
export const BLOGS_INTRO = {
  title: "Ideas Into Impact",
  description:
    "Every project starts with a challenge and becomes an opportunity to create something meaningful. Explore how we bring strategy, design, and technology together to solve real problems and build digital experiences that make a difference.",
  tabletDescription:
    "Explore how we turn challenges into meaningful digital experiences through thoughtful strategy, creative design, and purposeful development.",
  mobileDescription: "Real challenges. Thoughtful solutions. Work that makes an impact.",
}
export const BLOGS: Blog[] = [
  {
    number: "01",
    image: blog1,
    category: "Strategy",
    to: "/case-study/strategy",
    title: "Turning a bold idea into a digital experience",
    description:
      "A great digital experience starts with more than an idea. It's about bringing clarity, creativity, and purpose together from the very beginning.",
  },
  {
    number: "02",
    image: blog2,
    category: "Engineering",
    to: "/case-study/engineering",
    title: "Building digital products ready to scale",
    description:
      "From the first component to the underlying architecture, we build digital products designed for performance, flexibility, and future growth.",
  },
  {
    number: "03",
    image: blog3,
    category: "Branding",
    to: "/case-study/branding",
    title: "Creating identities that stand apart",
    description:
      "A memorable brand needs more than a good-looking logo. We bring together visual direction, consistency, and thoughtful design to create identities with character.",
  },
  {
    number: "04",
    image: blog4,
    category: "Technology",
    to: "/case-study/technology",
    title: "Bringing complex ideas to life through technology",
    description:
      "The right technology can turn complicated challenges into simple experiences. We connect thoughtful engineering with practical solutions built around real business needs.",
  },
]
