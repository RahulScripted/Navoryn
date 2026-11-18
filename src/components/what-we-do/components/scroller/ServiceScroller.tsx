import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SERVICES } from "../../data/services"
import { ServiceCard } from "../card/ServiceCard"

gsap.registerPlugin(ScrollTrigger)

export function ServiceScroller() {
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
          {SERVICES.map((service) => (
            <li
              key={service.id}
              className="w-[100cqw] shrink-0 md:w-[calc((100cqw-1.5rem)/2)] lg:w-[calc((100cqw-3rem)/3)]"
            >
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
