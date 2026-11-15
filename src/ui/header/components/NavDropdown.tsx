import { NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/ui/header/components/navigation-menu"
import { NavLinkItem } from "@/ui/header/components/NavLinkItem"
import type { LinkItem } from "@/ui/header/data/header"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"

const noHover = (e: { preventDefault: () => void }) => e.preventDefault()

interface NavDropdownProps {
  label: string
  links: LinkItem[]
  /** Width of the list, e.g. "w-[26rem]". Two columns. */
  widthClass: string
}

/** Desktop dropdown: opens on click (not hover) and lists its links in two columns. */
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
          "top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-background p-1 text-foreground duration-300 ease-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
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
