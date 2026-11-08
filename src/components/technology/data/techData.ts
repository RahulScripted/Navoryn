import type { FolderIcon, TechCategory } from "../../../types/technology"
import { TOOL_ICONS } from "./icons"

export const TECH_CATEGORIES: TechCategory[] = [
  {
    no: "01",
    title: "Design & Prototyping",
    tools: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Framer"],
  },
  {
    no: "02",
    title: "Frontend & Interface Engineering",
    tools: ["React.js", "Next.js", "TypeScript", "Redux Toolkit"],
  },
  {
    no: "03",
    title: "Mobile App & Systems Engineering",
    tools: ["React Native", "Expo", "React Navigation", "TypeScript"],
  },
  {
    no: "04",
    title: "Backend & APIs",
    tools: ["Node.js", "Express.js", "Java", "Ruby on Rails"],
  },
  {
    no: "05",
    title: "Database & Storage",
    tools: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    no: "06",
    title: "Testing & Quality Assurance",
    tools: ["Jest", "Vitest", "Playwright", "Postman"],
  },
  {
    no: "07",
    title: "Deployment & Infrastructure",
    tools: ["AWS", "Vercel", "Render", "GitHub"],
  },
  {
    no: "08",
    title: "Animation & Visualization",
    tools: ["GSAP", "Framer Motion", "Three.js", "Chart.js"],
  },
  {
    no: "09",
    title: "AI & Intelligent Development Tools",
    tools: ["ChatGPT", "Claude", "Gemini", "Kiro"],
  },
]

const tileBg = "color-mix(in oklab, var(--foreground) 6%, var(--card))"

export function toolIcons(tools: string[]): FolderIcon[] {
  return tools.map((label) => {
    const entry = TOOL_ICONS[label]
    return {
      label,
      background: tileBg,
      src: entry?.src,
      srcDark: entry?.srcDark,
    }
  })
}
