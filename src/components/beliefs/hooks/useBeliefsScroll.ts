import { useLayoutEffect, type RefObject } from "react"
import { gsap } from "@/utilities/ScrollReveal/components/trigger/scroll"

interface Refs {
  /** Desktop pin target: the intro and the cards together, so the intro stays put while the cards slide. */
  wrap: RefObject<HTMLElement | null>
  /** The clipping window the cards slide through. Phone and tablet pin this alone, like the services row. */
  view: RefObject<HTMLElement | null>
  track: RefObject<HTMLElement | null>
}

const MOTION = "(prefers-reduced-motion: no-preference)"
const HEADER = 64 // the fixed header
const FIT_MARGIN = 24 // air above and below the block when it fits

/**
 * Vertical scroll drives a horizontal slide, the same as the services row. On desktop the whole block
 * pins with the intro on the left; below that the intro sits above and only the card row pins.
 * With reduced motion nothing pins and the row is a plain horizontally scrollable strip.
 */
export function useBeliefsScroll({ wrap, view, track }: Refs) {
  useLayoutEffect(() => {
    const wrapEl = wrap.current
    const viewEl = view.current
    const trackEl = track.current
    if (!wrapEl || !viewEl || !trackEl) return undefined

    const distance = () => Math.max(0, trackEl.scrollWidth - viewEl.clientWidth)
    const slide = () => ({ x: () => -distance(), ease: "none" as const })
    const common = { end: () => `+=${distance()}`, pin: true, scrub: 0.6, anticipatePin: 1, invalidateOnRefresh: true }

    // The slide begins exactly when the pinned block reaches the middle of the part of the screen below the
    // fixed header, never before, so it is fully in view first. A block too tall to fit there is pinned
    // from just under the header instead (nothing else is possible on a very short window).
    const startFor = (el: HTMLElement) => () =>
      el.offsetHeight + FIT_MARGIN > window.innerHeight - HEADER ? `top top+=${HEADER + 8}` : `center center+=${HEADER / 2}`

    const mm = gsap.matchMedia()
    mm.add(`(min-width: 1024px) and ${MOTION}`, () => {
      gsap.to(trackEl, { ...slide(), scrollTrigger: { id: "beliefs", trigger: wrapEl, start: startFor(wrapEl), ...common } })
    })
    mm.add(`(max-width: 1023px) and ${MOTION}`, () => {
      gsap.to(trackEl, { ...slide(), scrollTrigger: { id: "beliefs", trigger: viewEl, start: startFor(viewEl), ...common } })
    })
    return () => mm.revert()
  }, [wrap, view, track])
}
