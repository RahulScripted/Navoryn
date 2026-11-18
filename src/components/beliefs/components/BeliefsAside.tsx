import { Description } from "@/utilities/SectionHeading/SectionHeading"
import { BELIEFS_INTRO } from "../data/beliefs"

export function BeliefsAside() {
  return (
    <div className="flex flex-col items-center gap-8 text-center lg:w-[32%] lg:shrink-0 lg:items-start lg:gap-10 lg:text-left">
      <Description className="sm:hidden">{BELIEFS_INTRO.mobileDescription}</Description>
      <Description className="hidden sm:block lg:hidden">{BELIEFS_INTRO.tabletDescription}</Description>
      <Description className="hidden lg:block">{BELIEFS_INTRO.description}</Description>
      <p className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">{BELIEFS_INTRO.label}</p>
    </div>
  )
}
