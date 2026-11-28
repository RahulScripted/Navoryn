import { cn } from "@/lib/utils"
import { NotchedCard } from "@/utilities/Card/NotchedCard"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { BRIEF_CARDS, BRIEF_INTRO } from "../data/brief"

/** Six prompts that help visitors think about their brand before the call. Shown on every plan. */
export function BrandBrief({ className }: { className?: string }) {
  const gridRef = useReveal<HTMLUListElement>({ children: true, y: 40, stagger: 0.12 })
  return (
    <section
      aria-label="Tell us about your brand"
      className={cn("w-full overflow-x-clip bg-background text-foreground", className)}
    >
      <SectionHeading
        className="mb-16 sm:mb-20"
        title={BRIEF_INTRO.title}
        description={BRIEF_INTRO.description}
        tabletDescription={BRIEF_INTRO.tabletDescription}
        mobileDescription={BRIEF_INTRO.mobileDescription}
      />
      <ul ref={gridRef} className="grid w-full items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {BRIEF_CARDS.map((card, index) => (
          <li key={card.title} className="min-w-0">
            <NotchedCard icon={card.icon} iconAnim={card.anim} className="h-full" fill>
              <div className="flex h-full flex-col gap-2 p-6 pb-14 sm:p-7 sm:pb-14">
                <span className="text-[0.65rem] font-bold tracking-[0.16em] text-muted-foreground uppercase">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">{card.title}</h3>
                <p className="pr-12 text-sm leading-relaxed text-muted-foreground">{card.prompt}</p>
              </div>
            </NotchedCard>
          </li>
        ))}
      </ul>
      <p className="mt-12 w-full text-left text-base font-medium tracking-tight text-muted-foreground sm:text-lg">
        {BRIEF_INTRO.closing}
      </p>
    </section>
  )
}
