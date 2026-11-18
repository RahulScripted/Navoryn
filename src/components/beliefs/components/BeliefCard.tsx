import { CardShell } from "@/components/what-we-do/components/card/CardShell"
import type { Belief } from "../types/belief"

export function BeliefCard({ belief }: { belief: Belief }) {
  return (
    <li className="w-[100cqw] shrink-0 md:w-[calc((100cqw-1.5rem)/2)] lg:w-[100cqw] xl:w-[calc((100cqw-1.5rem)/2)]">
      <CardShell
        title={belief.title}
        description={belief.description}
        eyebrow={belief.number}
        image={belief.image}
        imageShift={belief.imageShift}
        icon={belief.icon}
        iconAnim={belief.anim}
      />
    </li>
  )
}
