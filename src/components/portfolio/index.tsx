import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { cn } from "@/lib/utils"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { CategoryStrip } from "./components/CategoryStrip"
import { ServiceStrip } from "./components/ServiceStrip"
import { NextProject } from "./components/NextProject"
import { ProjectDeck } from "./components/ProjectDeck"
import { PORTFOLIO_INTRO, PROJECTS } from "./data/projects"
gsap.registerPlugin(ScrollTrigger)
export default function Portfolio({
  className,
  showNext = true,
  showBrowse = false,
}: {
  className?: string
  /** The "Yours could be next." line after the projects. */
  showNext?: boolean
  /** The services and categories strips. Only the portfolio page shows them. */
  showBrowse?: boolean
}) {
  const headingRef = useRef<HTMLDivElement>(null)
  const deckRef = useRef<HTMLDivElement>(null)
  useLayoutEffect(() => {
    const heading = headingRef.current
    const deck = deckRef.current
    if (!heading || !deck) return
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(heading, {
        opacity: 0,
        y: -80,
        ease: "none",
        scrollTrigger: { trigger: deck, start: "top 70%", end: "top top", scrub: true },
      })
    })
    return () => mm.revert()
  }, [])
  return (
    <section id="portfolio" className={cn("w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32", className)}>
      <div ref={headingRef}>
        <SectionHeading
          className="mb-16 sm:mb-20"
          title={PORTFOLIO_INTRO.title}
          description={PORTFOLIO_INTRO.description}
          tabletDescription={PORTFOLIO_INTRO.tabletDescription}
          mobileDescription={PORTFOLIO_INTRO.mobileDescription}
        />
      </div>
      <div ref={deckRef}>
        <ProjectDeck projects={PROJECTS} />
      </div>
      {showBrowse && (
        <>
          <ServiceStrip />
          <CategoryStrip />
        </>
      )}
      {showNext && <NextProject />}
    </section>
  )
}
