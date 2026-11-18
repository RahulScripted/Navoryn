import { useRef } from "react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { BeliefCard } from "./components/BeliefCard"
import { BeliefsIntro } from "./components/BeliefsIntro"
import { BELIEFS } from "./data/beliefs"
import { useBeliefsScroll } from "./hooks/useBeliefsScroll"

export default function Beliefs() {
  const wrap = useRef<HTMLDivElement>(null)
  const view = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLUListElement>(null)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useBeliefsScroll({ wrap, view, track })

  return (
    <section id="beliefs" className="w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <div ref={wrap} className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
        <BeliefsIntro />
        <div ref={revealRef} className="min-w-0 lg:flex-1">
          <div ref={view} className="@container w-full overflow-x-auto motion-safe:overflow-x-clip">
            <ul ref={track} aria-label="What we believe in" className="flex w-max gap-6 py-4">
              {BELIEFS.map((belief) => (
                <BeliefCard key={belief.id} belief={belief} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
