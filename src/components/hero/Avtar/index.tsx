import { Avatar as DiceAvatar, Style } from "@dicebear/core"
import definition from "@dicebear/styles/lorelei.json"
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupTooltip, AvatarImage } from "./avatar-group"

interface HeroAvatar {
  id: string
  initials: string
  label: string
  /** A real photo. When set, it replaces the generated profile picture. */
  image?: string
}

const style = new Style(definition)

/** A generated profile picture (DiceBear Lorelei), seeded by name so it stays the same. */
const profile = (seed: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(new DiceAvatar(style, { seed }).toString())}`

// Sample names for now. Replace them with real clients and add `image` when photos are ready.
const HERO_AVATARS: HeroAvatar[] = [
  { id: "aarav", initials: "AS", label: "Aarav Sharma" },
  { id: "priya", initials: "PN", label: "Priya Nair" },
  { id: "rohan", initials: "RM", label: "Rohan Mehta" },
  { id: "ananya", initials: "AI", label: "Ananya Iyer" },
  { id: "vikram", initials: "VR", label: "Vikram Reddy" },
]

export function HeroAvatars() {
  return (
    <div className="flex items-center justify-center gap-3 rounded-full border border-border bg-muted py-2 pr-5 pl-2.5">
      <AvatarGroup>
        {HERO_AVATARS.map((person) => (
          <Avatar key={person.id} className="size-9 border-2 border-muted">
            <AvatarImage src={person.image ?? profile(person.label)} alt={person.label} />
            <AvatarFallback className="bg-muted text-[0.65rem] font-semibold">{person.initials}</AvatarFallback>
            <AvatarGroupTooltip>{person.label}</AvatarGroupTooltip>
          </Avatar>
        ))}
      </AvatarGroup>
      <span className="text-sm font-medium text-muted-foreground">
        Trusted by <span className="font-semibold text-foreground">450+</span> people
      </span>
    </div>
  )
}
