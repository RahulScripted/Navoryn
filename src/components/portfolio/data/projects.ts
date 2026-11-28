import project1 from "@/asset/webps/projects/Project-1.webp"
import project2 from "@/asset/webps/projects/Project-2.webp"
import project3 from "@/asset/webps/projects/Project-3.webp"
import project4 from "@/asset/webps/projects/Project-4.webp"
import project5 from "@/asset/webps/projects/Project-5.webp"
import project6 from "@/asset/webps/projects/Project-6.webp"

export type Project = {
  id: string
  name: string
  /** The live site the card opens. */
  url: string
  image: string
}

export const PORTFOLIO_INTRO = {
  title: "Our Work Speaks Through What We Build.",
  description:
    "Explore a collection of digital experiences shaped by thoughtful design, purposeful engineering, and creative thinking. Every project reflects our commitment to solving real challenges and building solutions that move businesses forward.",
  tabletDescription:
    "Discover digital experiences built through creative thinking, thoughtful design, and purposeful engineering. Each project is made to solve real challenges.",
  mobileDescription: "Ideas transformed into digital experiences. Thoughtfully designed. Purposefully built.",
}
export const PROJECTS: Project[] = [
  { id: "project-1", name: "Kinara & Lehar", url: "https://kinara-lehar.vercel.app/", image: project1 },
  { id: "project-2", name: "Knot", url: "https://knot-sable-two.vercel.app/", image: project2 },
  { id: "project-3", name: "GyanSetu", url: "https://gyan-setu-nine-blond.vercel.app/", image: project3 },
  { id: "project-4", name: "chhaap", url: "https://chhaap-jet.vercel.app/", image: project4 },
  { id: "project-5", name: "Hearthly", url: "https://hearthly-phi.vercel.app/", image: project5 },
  { id: "project-6", name: "Setu", url: "https://dashboard-sandy-xi-93.vercel.app/", image: project6 },
]
