import {
  Braces,
  Cable,
  Component,
  KeyRound,
  MousePointerClick,
  Network,
  Timer,
  Webhook,
  type LucideIcon,
} from "lucide-react"
import { TOOL_ICONS, type ToolIcon } from "@/components/technology/data/icons"

export type TechIcon =
  | { kind: "logo"; logo: ToolIcon; mono?: boolean }
  | { kind: "glyph"; Icon: LucideIcon }

const logo = (name: string, mono = false): TechIcon => ({ kind: "logo", logo: TOOL_ICONS[name], mono })
const glyph = (Icon: LucideIcon): TechIcon => ({ kind: "glyph", Icon })

export const TECH_ICONS: Record<string, TechIcon> = {
  "React": logo("React.js"),
  "Next.js": logo("Next.js"),
  "Next.js SEO": logo("Next.js"),
  "TypeScript": logo("TypeScript"),
  "Node.js": logo("Node.js"),
  "Express.js": logo("Express.js", true),
  "PostgreSQL": logo("PostgreSQL"),
  "MongoDB": logo("MongoDB"),
  "React Native": logo("React Native"),
  "Expo": logo("Expo"),
  "React Navigation": logo("React Navigation"),
  "Figma": logo("Figma"),
  "Adobe Photoshop": logo("Adobe Photoshop"),
  "Adobe Illustrator": logo("Adobe Illustrator"),
  "Framer": logo("Framer"),
  "Framer Motion": logo("Framer Motion"),
  "GSAP": logo("GSAP"),
  "Postman": logo("Postman"),
  "GitHub": logo("GitHub"),
  "Jest": logo("Jest"),

  "REST APIs": glyph(Braces),
  "Webhooks": glyph(Webhook),
  "WebSockets": glyph(Cable),
  "OAuth 2.0": glyph(KeyRound),
  "Cron Jobs": glyph(Timer),
  "Design Systems": glyph(Component),
  "Interactive Prototyping": glyph(MousePointerClick),
  "Sitemap and Robots.txt": glyph(Network),
}
