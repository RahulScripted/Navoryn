import { cn } from "@/lib/utils"
import { TECH_ICONS } from "../../../data/techIcons"

interface TechChipProps {
  name: string
  isDark: boolean
}

export function TechChip({ name, isDark }: TechChipProps) {
  const icon = TECH_ICONS[name]

  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-[0.7rem] font-medium leading-none text-muted-foreground transition-colors duration-200 hover:border-foreground/30 hover:text-foreground sm:text-xs">
      {icon?.kind === "logo" && (
        <img
          src={isDark && icon.logo.srcDark ? icon.logo.srcDark : icon.logo.src}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className={cn("size-3.5 shrink-0 object-contain", icon.mono && isDark && "invert")}
        />
      )}
      {icon?.kind === "glyph" && <icon.Icon className="size-3.5 shrink-0" aria-hidden="true" />}
      {name}
    </li>
  )
}
