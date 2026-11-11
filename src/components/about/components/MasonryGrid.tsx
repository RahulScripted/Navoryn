import { cn } from "@/lib/utils"
import type { AboutCard } from "@/types/about"
import { MasonryCard } from "./MasonryCard"

interface MasonryGridProps {
  cards: AboutCard[]
  className?: string
}

export function MasonryGrid({ cards, className }: MasonryGridProps) {
  return (
    <div className={cn("about-grid", className)}>
      {cards.slice(0, 8).map((card) => (
        <MasonryCard key={card.id} card={card} />
      ))}
    </div>
  )
}
