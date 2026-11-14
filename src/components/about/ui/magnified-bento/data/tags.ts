import { ArchiveIcon, BarChartIcon, CodeIcon, LightningBoltIcon, Link2Icon, LockClosedIcon, LoopIcon, MagnifyingGlassIcon, MixerHorizontalIcon, MobileIcon, PersonIcon, RotateCounterClockwiseIcon, Share2Icon, StackIcon, TokensIcon } from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"

export interface TagItem {
  id: string
  icon: IconComponent
  label: string
}

export const TAG_ROWS: TagItem[][] = [
  [
    { id: "discovery", icon: MagnifyingGlassIcon, label: "Discovery" },
    { id: "client-review", icon: PersonIcon, label: "Client Review" },
    { id: "system-design", icon: Share2Icon, label: "System Design" },
    { id: "devops-integration", icon: LoopIcon, label: "DevOps Integration" },
    { id: "post-launch", icon: RotateCounterClockwiseIcon, label: "Post-Launch Support" },
  ],
  [
    { id: "qa-optimization", icon: MixerHorizontalIcon, label: "QA & Optimization" },
    { id: "launch-deploy", icon: TokensIcon, label: "Launch & Deploy" },
    { id: "full-stack", icon: CodeIcon, label: "Full-Stack Development" },
    { id: "analytics", icon: BarChartIcon, label: "Analytics" },
    { id: "mvp-engineering", icon: LightningBoltIcon, label: "MVP Engineering" },
  ],
  [
    { id: "api-backend", icon: Link2Icon, label: "API & Backend" },
    { id: "mobile-dev", icon: MobileIcon, label: "Mobile Development" },
    { id: "cloud-infrastructure", icon: StackIcon, label: "StackIcon Infrastructure" },
    { id: "database-design", icon: ArchiveIcon, label: "ArchiveIcon Design" },
    { id: "security", icon: LockClosedIcon, label: "Security" },
  ],
]

export const LENS_SIZE = 92
