import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/ui/header/components/navigation-menu"
import { NavLinkItem } from "@/ui/header/components/NavLinkItem"
import type { LinkItem } from "@/ui/header/data/header"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"

const noHover = (e: { preventDefault: () => void }) => e.preventDefault()

interface NavDropdownProps {
  label: string
  links: LinkItem[]
  widthClass: string
}

export function NavDropdown({ label, links, widthClass }: NavDropdownProps) {
  return (
    <NavigationMenuItem className="relative">
      <NavigationMenuTrigger
        className="group/roll cursor-target bg-transparent"
        onPointerEnter={noHover}
        onPointerMove={noHover}
        onPointerLeave={noHover}
      >
        <RollText>{label}</RollText>
      </NavigationMenuTrigger>
      <NavigationMenuContent
        onPointerEnter={noHover}
        onPointerLeave={noHover}
        className={cn(
          "top-full left-1/2 mt-2 origin-top -translate-x-1/2 rounded-md bg-background p-1 text-foreground will-change-[transform,opacity] data-[state=open]:animate-[nav-panel-in_320ms_cubic-bezier(0.16,1,0.3,1)_both] data-[state=closed]:animate-[nav-panel-out_220ms_cubic-bezier(0.4,0,1,1)_both] motion-reduce:animate-none",
        )}
      >
        <ul className={cn("grid grid-cols-2 gap-1", widthClass)}>
          {links.map((item) => (
            <li key={item.title}>
              <NavLinkItem {...item} />
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}
