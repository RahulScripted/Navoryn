import { useLayoutEffect, useRef } from "react"
import { ALLOW_MOTION, gsap } from "@/utilities/ScrollReveal/components/trigger/scroll"
export function useImpactExpand(enabled: boolean) {
  const stage = useRef<HTMLDivElement>(null)
  const slot = useRef<HTMLSpanElement>(null)
  const layer = useRef<HTMLDivElement>(null)
  const video = useRef<HTMLVideoElement>(null)
  const caption = useRef<HTMLDivElement>(null)
  const lineTop = useRef<HTMLSpanElement>(null)
  const lineBottom = useRef<HTMLSpanElement>(null)
  useLayoutEffect(() => {
    const stageEl = stage.current
    const slotEl = slot.current
    const layerEl = layer.current
    const captionEl = caption.current
    const topEl = lineTop.current
    const bottomEl = lineBottom.current
    if (!topEl || !bottomEl) return
    if (!enabled || !stageEl || !slotEl || !layerEl || !captionEl) return
    const mm = gsap.matchMedia()
    mm.add(ALLOW_MOTION, () => {
      const box = () => {
        const s = stageEl.getBoundingClientRect()
        const p = slotEl.getBoundingClientRect()
        return { top: p.top - s.top, left: p.left - s.left, width: p.width, height: p.height, borderRadius: p.height / 2 }
      }
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: stageEl,
          start: "top top",
          end: "+=120%",
          pin: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })
      timeline.fromTo(
        layerEl,
        { top: () => box().top, left: () => box().left, width: () => box().width, height: () => box().height, borderRadius: () => box().borderRadius },
        { top: 0, left: 0, width: () => stageEl.offsetWidth, height: () => stageEl.offsetHeight, borderRadius: 0, duration: 1, ease: "power2.inOut" },
        0,
      )
      const apart = () => stageEl.offsetHeight / 2
      timeline.fromTo(topEl, { y: 0, opacity: 1 }, { y: () => -apart(), opacity: 0, duration: 0.7, ease: "power2.in" }, 0)
      timeline.fromTo(bottomEl, { y: 0, opacity: 1 }, { y: () => apart(), opacity: 0, duration: 0.7, ease: "power2.in" }, 0)
      timeline.fromTo(captionEl, { opacity: 0, y: 32 }, { opacity: 1, y: 0, duration: 0.3 }, 0.7)
    })
    return () => mm.revert()
  }, [enabled])
  return { stage, slot, layer, video, caption, lineTop, lineBottom }
}
