import { useRef } from "react"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { BeliefCard } from "./components/BeliefCard"
import { BeliefsAside } from "./components/BeliefsAside"
import { BeliefsTitle } from "./components/BeliefsTitle"
import { BELIEFS } from "./data/beliefs"
import { useBeliefsScroll } from "./hooks/useBeliefsScroll"

export default function Beliefs() {
  const title = useRef<HTMLDivElement>(null)
  const row = useRef<HTMLDivElement>(null)
  const view = useRef<HTMLDivElement>(null)
  const track = useRef<HTMLUListElement>(null)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useBeliefsScroll({ title, row, view, track })

  return (
    <section id="beliefs" className="w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <div ref={title}>
        <BeliefsTitle />
      </div>
      <div ref={row} className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        <BeliefsAside />
        <div className="min-w-0 lg:flex-1">
          <div ref={view} className="@container w-full overflow-x-auto motion-safe:overflow-x-clip">
            <div ref={revealRef}>
              <ul ref={track} aria-label="What we believe in" className="flex w-max gap-6 py-4">
                {BELIEFS.map((belief) => (
                  <BeliefCard key={belief.id} belief={belief} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
