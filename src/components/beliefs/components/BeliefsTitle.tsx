import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { BELIEFS_INTRO } from "../data/beliefs"

export function BeliefsTitle() {
  return <SectionHeading title={BELIEFS_INTRO.title} className="mb-4 lg:mb-20" />
}
