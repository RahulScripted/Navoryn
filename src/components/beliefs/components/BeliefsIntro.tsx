import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { BELIEFS_INTRO } from "../data/beliefs"

/**
 * Title and description. Centered above the cards on phone and tablet like the other sections; on
 * desktop it becomes the left column that stays put while the cards slide past.
 */
export function BeliefsIntro() {
  return (
    <div className="flex flex-col gap-8 lg:w-[32%] lg:shrink-0 lg:gap-10">
      <SectionHeading
        title={BELIEFS_INTRO.title}
        description={BELIEFS_INTRO.description}
        className="lg:mx-0 lg:max-w-none lg:items-start lg:text-left lg:[&_h2]:text-4xl xl:[&_h2]:text-5xl"
      />
      <p className="text-center text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase lg:text-left">
        {BELIEFS_INTRO.label}
      </p>
    </div>
  )
}
