export type Project = {
  id: string
  name: string
  category: string
  summary: string
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
  { id: "project-1", name: "Project 1", category: "Web Platform", summary: "Upcoming project: web platform." },
  { id: "project-2", name: "Project 2", category: "Brand & Website", summary: "Upcoming project: brand & website." },
  { id: "project-3", name: "Project 3", category: "Web Application", summary: "Upcoming project: web application." },
  { id: "project-4", name: "Project 4", category: "E-commerce", summary: "Upcoming project: e-commerce." },
  { id: "project-5", name: "Project 5", category: "Mobile App", summary: "Upcoming project: mobile app." },
]
