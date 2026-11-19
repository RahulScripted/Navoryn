import { useRef } from "react"
import type { RefObject } from "react"
import { cn } from "@/lib/utils"
import VariableProximity from "@/utilities/VariableProximity/VariableProximity"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { HERO_TITLE, HERO_TITLE_MOBILE } from "../data/hero"
import type { HeroLine } from "../types/hero"

const TITLE = "text-[2.6rem] leading-[1.02] font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]"

function Lines({ lines, className, containerRef }: { lines: HeroLine[]; className: string; containerRef: RefObject<HTMLDivElement | null> }) {
  return (
    <span className={className}>
      {lines.map((line) => (
        <span key={line.text} className={cn("block", line.muted && "text-muted-foreground")}>
          <VariableProximity
            label={line.text}
            containerRef={containerRef}
            fromFontVariationSettings="'wght' 500, 'opsz' 9"
            toFontVariationSettings="'wght' 1000, 'opsz' 40"
            radius={140}
            falloff="gaussian"
            smoothing={0.25}
          />
        </span>
      ))}
    </span>
  )
}

function LiveHeadline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useReveal<HTMLHeadingElement>({ y: 36, blur: 10, duration: 1 })
  return (
    <div ref={containerRef} className="w-full">
      <h1 ref={titleRef} className={TITLE}>
        <Lines lines={HERO_TITLE_MOBILE} className="block sm:hidden" containerRef={containerRef} />
        <Lines lines={HERO_TITLE} className="hidden sm:block" containerRef={containerRef} />
      </h1>
    </div>
  )
}

function Placeholder() {
  return (
    <div className="invisible w-full" aria-hidden="true">
      <p className={TITLE}>
        <span className="block sm:hidden">
          {HERO_TITLE_MOBILE.map((line) => (
            <span key={line.text} className="block">
              {line.text}
            </span>
          ))}
        </span>
        <span className="hidden sm:block">
          {HERO_TITLE.map((line) => (
            <span key={line.text} className="block">
              {line.text}
            </span>
          ))}
        </span>
      </p>
    </div>
  )
}

export function HeroHeadline({ ready }: { ready: boolean }) {
  return ready ? <LiveHeadline /> : <Placeholder />
}
