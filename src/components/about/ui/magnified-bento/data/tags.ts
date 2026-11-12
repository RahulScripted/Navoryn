import {
  ChartLine,
  Cloud,
  Code,
  Cpu,
  Database,
  Link,
  Lock,
  Network,
  RotateCcw,
  Search,
  Settings2,
  Smartphone,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react"

export interface TagItem {
  id: string
  icon: LucideIcon
  label: string
}

export const TAG_ROWS: TagItem[][] = [
  [
    { id: "discovery", icon: Search, label: "Discovery" },
    { id: "client-review", icon: Users, label: "Client Review" },
    { id: "system-design", icon: Network, label: "System Design" },
    { id: "devops-integration", icon: Workflow, label: "DevOps Integration" },
    { id: "post-launch", icon: RotateCcw, label: "Post-Launch Support" },
  ],
  [
    { id: "qa-optimization", icon: Settings2, label: "QA & Optimization" },
    { id: "launch-deploy", icon: Cpu, label: "Launch & Deploy" },
    { id: "full-stack", icon: Code, label: "Full-Stack Development" },
    { id: "analytics", icon: ChartLine, label: "Analytics" },
    { id: "mvp-engineering", icon: Zap, label: "MVP Engineering" },
  ],
  [
    { id: "api-backend", icon: Link, label: "API & Backend" },
    { id: "mobile-dev", icon: Smartphone, label: "Mobile Development" },
    { id: "cloud-infrastructure", icon: Cloud, label: "Cloud Infrastructure" },
    { id: "database-design", icon: Database, label: "Database Design" },
    { id: "security", icon: Lock, label: "Security" },
  ],
]

export const LENS_SIZE = 92
