import { useNavigate } from "react-router-dom"
import { ArrowRightIcon, ArrowTopRightIcon } from "@radix-ui/react-icons"
import { goToSection, scrollToSection } from "@/lib/sections"
import { RollText } from "@/utilities/RollText"
import { HERO_PRIMARY, HERO_SECONDARY } from "../data/hero"

export function HeroActions() {
  const navigate = useNavigate()
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={HERO_PRIMARY.href}
        onClick={(e) => goToSection(e, HERO_PRIMARY.href, navigate)}
        className="group/roll cursor-target flex items-center gap-4 rounded-xl bg-primary p-1.5 pl-5 text-primary-foreground transition-transform duration-300 ease-out hover:-translate-y-0.5"
      >
        <RollText>
          <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase">{HERO_PRIMARY.label}</span>
        </RollText>
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
          <RollText>
            <ArrowTopRightIcon className="size-4" aria-hidden="true" />
          </RollText>
        </span>
      </a>
      <a
        href={HERO_SECONDARY.href}
        onClick={(e) => {
          e.preventDefault()
          scrollToSection("what-we-do")
        }}
        className="group/roll cursor-target flex h-12 items-center gap-3 rounded-xl border border-border bg-background/70 px-5 text-foreground backdrop-blur-sm transition-[transform,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/40"
      >
        <RollText>
          <span className="text-[0.72rem] font-semibold tracking-[0.12em] uppercase">{HERO_SECONDARY.label}</span>
        </RollText>
        <ArrowRightIcon className="size-4" aria-hidden="true" />
      </a>
    </div>
  )
}
