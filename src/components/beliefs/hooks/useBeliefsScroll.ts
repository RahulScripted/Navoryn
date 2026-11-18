import { useLayoutEffect, type RefObject } from "react"
import { docTop, gsap } from "@/utilities/ScrollReveal/components/trigger/scroll"

interface Refs {
  title: RefObject<HTMLElement | null>
  row: RefObject<HTMLElement | null>
  view: RefObject<HTMLElement | null>
  track: RefObject<HTMLElement | null>
}

const MOTION = "(prefers-reduced-motion: no-preference)"
const HEADER = 64
const FIT_MARGIN = 24

export function useBeliefsScroll({ title, row, view, track }: Refs) {
  useLayoutEffect(() => {
    const rowEl = row.current
    const viewEl = view.current
    const trackEl = track.current
    if (!rowEl || !viewEl || !trackEl) return undefined

    const distance = () => Math.max(0, trackEl.scrollWidth - viewEl.clientWidth)
    const slide = () => ({ x: () => -distance(), ease: "none" as const })
    const common = { end: () => `+=${distance()}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true }

    const startFor = (el: HTMLElement) => () => {
      const screen = window.innerHeight
      if (el.offsetHeight + FIT_MARGIN > screen - HEADER) return `top ${HEADER + 8}px`
      const centeredTop = (screen + HEADER) / 2 - el.offsetHeight / 2
      const heading = title.current
      const gap = heading ? docTop(el) - (docTop(heading) + heading.offsetHeight) : Infinity
      return `top ${Math.min(centeredTop, HEADER + gap)}px`
    }

    const mm = gsap.matchMedia()
    mm.add(`(min-width: 1024px) and ${MOTION}`, () => {
      gsap.to(trackEl, { ...slide(), scrollTrigger: { id: "beliefs", trigger: rowEl, start: startFor(rowEl), ...common } })
    })
    mm.add(`(max-width: 1023px) and ${MOTION}`, () => {
      gsap.to(trackEl, { ...slide(), scrollTrigger: { id: "beliefs", trigger: viewEl, start: startFor(viewEl), ...common } })
    })
    return () => mm.revert()
  }, [title, row, view, track])
}
