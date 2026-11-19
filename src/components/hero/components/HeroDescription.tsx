import { Description } from "@/utilities/SectionHeading/SectionHeading"
import { HERO_DESCRIPTION, HERO_DESCRIPTION_MOBILE } from "../data/hero"

const BOX = "mt-6 max-w-xl text-pretty"

export function HeroDescription({ ready }: { ready: boolean }) {
  if (!ready) {
    return (
      <p aria-hidden="true" className={`${BOX} invisible text-base leading-relaxed sm:text-lg`}>
        <span className="sm:hidden">{HERO_DESCRIPTION_MOBILE}</span>
        <span className="hidden sm:inline">{HERO_DESCRIPTION}</span>
      </p>
    )
  }
  return (
    <>
      <Description className={`${BOX} sm:hidden`}>{HERO_DESCRIPTION_MOBILE}</Description>
      <Description className={`${BOX} hidden sm:block`}>{HERO_DESCRIPTION}</Description>
    </>
  )
}
