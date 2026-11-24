import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { CardShell } from "@/utilities/Card"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import type { CaseStudyPoint } from "./types"
gsap.registerPlugin(ScrollTrigger)
export function CaseStudyScroller({ points }: { points: CaseStudyPoint[] }) {
  const pinRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const revealRef = useReveal<HTMLDivElement>({ y: 48, scale: 0.97, blur: 10, duration: 1.1 })
  useLayoutEffect(() => {
    const pin = pinRef.current
    const track = trackRef.current
    if (!pin || !track) return
    const mm = gsap.matchMedia()
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth)
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pin,
          start: "center center",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
    })
    return () => mm.revert()
  }, [])
  return (
    <div ref={revealRef}>
      <div ref={pinRef} className="@container w-full overflow-x-auto motion-safe:overflow-x-clip">
        <ul ref={trackRef} className="flex w-max gap-6 py-4">
          {points.map((point) => (
            <li
              key={point.number}
              className="w-[100cqw] shrink-0 md:w-[calc((100cqw-1.5rem)/2)] lg:w-[calc((100cqw-3rem)/3)]"
            >
              <CardShell
                title={point.title}
                description={point.description}
                image={point.image}
                icon={point.icon}
                iconAnim={point.iconAnim}
                background={
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute bottom-0 right-3 z-0 select-none text-[14rem] font-black leading-none tracking-tighter text-foreground/[0.06]"
                  >
                    {point.number}
                  </span>
                }
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
