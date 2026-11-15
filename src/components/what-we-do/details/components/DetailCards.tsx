import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { CardShell } from "../../components/card/CardShell"
import type { DetailIcon } from "../data/icons"
import type { DetailImage } from "../data/images"
import type { DetailCard } from "../types/detail"

export function DetailCards({ cards, images, icons, serviceTitle }: { cards: DetailCard[]; images?: DetailImage[]; icons?: DetailIcon[]; serviceTitle: string }) {
  const gridRef = useReveal<HTMLUListElement>({ children: true, y: 40, stagger: 0.12 })
  return (
    <ul ref={gridRef} className="grid w-full items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => (
        <li key={card.title} className="min-w-0">
          <CardShell
            title={card.title}
            description={card.description}
            icon={icons?.[index]?.icon}
            iconAnim={icons?.[index]?.anim}
            image={card.image ?? images?.[index]?.src}
            imageShift={card.image ? undefined : images?.[index]?.shift}
            eyebrow={card.category}
            to="/book-call"
            linkLabel={`Talk to us about ${card.title} (${serviceTitle})`}
          />
        </li>
      ))}
    </ul>
  )
}
