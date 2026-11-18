import { CardShell } from "@/components/what-we-do/components/card/CardShell"
import type { Belief } from "../types/belief"

/** One belief in the site's card (image area, label, title, text, notch), with its icon in the notch. */
export function BeliefCard({ belief }: { belief: Belief }) {
  return (
    <li className="w-[100cqw] shrink-0 md:w-[calc((100cqw-1.5rem)/2)] lg:w-[100cqw] xl:w-[calc((100cqw-1.5rem)/2)]">
      <CardShell
        title={belief.title}
        description={belief.description}
        eyebrow={belief.number}
        image={belief.image}
        icon={belief.icon}
        iconAnim={belief.anim}
      />
    </li>
  )
}
