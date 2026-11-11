import { cn } from "@/lib/utils"
import type { AboutCard } from "@/types/about"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { MasonryCard } from "./MasonryCard"

interface MasonryGridProps {
  cards: AboutCard[]
  className?: string
}

export function MasonryGrid({ cards, className }: MasonryGridProps) {
  const gridRef = useReveal<HTMLDivElement>({ children: true, y: 40, scale: 0.97, stagger: 0.1 })

  return (
    <div ref={gridRef} className={cn("about-grid", className)}>
      {cards.slice(0, 8).map((card) => (
        <MasonryCard key={card.id} card={card} />
      ))}
    </div>
  )
}
