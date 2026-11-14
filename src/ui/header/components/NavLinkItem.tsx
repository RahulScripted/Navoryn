import { useNavigate } from "react-router-dom"
import { NavigationMenuLink } from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"
import { ComingSoon } from "@/ui/header/components/ComingSoon"
import type { LinkItem } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"

type Props = LinkItem & {
  onNavigate?: () => void
  /** Use a plain anchor (required outside <NavigationMenu>, e.g. the mobile menu). */
  plain?: boolean
  className?: string
}

const base = "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200"

export function NavLinkItem({ title, href, disabled, onNavigate, plain, className }: Props) {
  const navigate = useNavigate()
  if (disabled) {
    return (
      <div aria-disabled="true" className={cn(base, "cursor-not-allowed opacity-50", className)}>
        {title}
        <ComingSoon />
      </div>
    )
  }
  const link = (
    <a
      href={href}
      onClick={(e) => goToSection(e, href, navigate, onNavigate)}
      className={cn(base, "group/roll cursor-target hover:bg-accent hover:text-accent-foreground", className)}
    >
      <RollText>{title}</RollText>
    </a>
  )
  return plain ? link : <NavigationMenuLink asChild>{link}</NavigationMenuLink>
}
