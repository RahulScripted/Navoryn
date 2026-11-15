import { ChevronDownIcon } from "@radix-ui/react-icons"
import { NavLinkItem } from "@/ui/header/components/NavLinkItem"
import type { LinkItem } from "@/ui/header/data/header"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"

interface MobileAccordionProps {
  id: string
  label: string
  links: LinkItem[]
  open: boolean
  onToggle: () => void
  onNavigate: () => void
}

export function MobileAccordion({ id, label, links, open, onToggle, onNavigate }: MobileAccordionProps) {
  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={onToggle}
        className="group/roll cursor-target flex w-full items-center justify-between gap-2 rounded-md px-3 py-3 text-base font-medium"
      >
        <RollText>{label}</RollText>
        <ChevronDownIcon className={cn("size-4 transition-transform duration-300", open && "rotate-180")} />
      </button>
      <div
        id={id}
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <ul className="grid min-h-0 grid-cols-1 gap-1 overflow-hidden pl-6">
          {links.map((link) => (
            <li key={link.title}>
              <NavLinkItem {...link} onNavigate={onNavigate} plain />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
