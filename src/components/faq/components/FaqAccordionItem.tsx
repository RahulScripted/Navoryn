import { useId } from "react"
import { PlusIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import type { FaqItem } from "@/types/faq"
import { SpotlightLayer } from "@/utilities/SpotlightCard"

interface FaqAccordionItemProps {
  item: FaqItem
  index: number
  isOpen: boolean
  onToggle: () => void
}

export function FaqAccordionItem({ item, index, isOpen, onToggle }: FaqAccordionItemProps) {
  const id = useId()
  const panelId = `${id}-panel`
  const buttonId = `${id}-button`

  return (
    <div className="cursor-target relative isolate rounded-xl border bg-background">
      <SpotlightLayer />
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
        >
          <span className="text-sm font-semibold text-muted-foreground tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="flex-1 text-base font-medium tracking-tight sm:text-lg">
            {item.question}
          </span>
          <PlusIcon
            className={cn(
              "size-5 shrink-0 text-muted-foreground transition-transform duration-300",
              isOpen && "rotate-45",
            )}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={cn(
          "grid transition-all duration-300 ease-out",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="px-5 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground sm:px-6 sm:pl-16">
            {item.answer}
          </div>
        </div>
      </div>
    </div>
  )
}
