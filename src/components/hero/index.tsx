import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { usePreloaderDone } from "@/ui/preloader/hooks/usePreloaderDone"
import { CircuitBoard } from "./components/CircuitBoard"
import { HeroAvatars } from "./Avtar"
import { HeroActions } from "./components/HeroActions"
import { HeroDevice } from "./components/HeroDevice"
import { HeroHeadline } from "./components/HeroHeadline"
import { HERO_EYEBROW, HERO_EYEBROW_MOBILE } from "./data/hero"
import { HeroDescription } from "./components/HeroDescription"
import { HeroTagline } from "./components/HeroTagline"
import { useDeviceAnchor } from "./hooks/useDeviceAnchor"
import { useHeroPointer } from "./hooks/useHeroPointer"
import { useSignal } from "./hooks/useSignal"
import { drop, fade, instant, rise, stagger } from "./lib/motion"

export default function Hero() {
  const reduced = Boolean(useReducedMotion())
  const ready = usePreloaderDone()
  const { frameRef, circuitRef, deviceRef, hot, onPointerMove, onPointerLeave } = useHeroPointer(reduced)
  const { pulse, send } = useSignal()
  const anchor = useDeviceAnchor(frameRef, deviceRef)
  const [inView, setInView] = useState(true)
  const [small, setSmall] = useState(() => window.matchMedia("(max-width: 639px)").matches)
  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)")
    const onChange = () => setSmall(media.matches)
    media.addEventListener("change", onChange)
    return () => media.removeEventListener("change", onChange)
  }, [])
  useEffect(() => {
    const frame = frameRef.current
    if (!frame) return
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting))
    observer.observe(frame)
    return () => observer.disconnect()
  }, [frameRef])
  const pick = (variant: typeof rise) => (reduced ? instant : variant)

  return (
    <motion.div
      ref={frameRef}
      initial="hidden"
      animate={ready ? "show" : "hidden"}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      data-paused={!ready || !inView ? "true" : undefined}
      className="hero-frame relative isolate flex lg:min-h-[max(680px,100svh)] flex-col overflow-hidden bg-muted/40"
    >
      <motion.div ref={circuitRef} variants={pick(fade)} className="hero-circuit pointer-events-none absolute inset-0 -z-10">
        <CircuitBoard hot={hot} reduced={reduced || small} anchor={anchor} />
      </motion.div>
      <motion.div
        variants={stagger(0.12, 0.1)}
        className="relative z-10 flex flex-col items-center px-5 pt-28 text-center sm:pt-32 lg:pt-32"
      >
        <motion.p
          variants={pick(rise)}
          className="mb-6 flex max-w-xs items-center gap-3 text-[0.65rem] sm:max-w-none font-semibold tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.7rem]"
        >
          <span aria-hidden="true" className="hidden h-px w-8 bg-current sm:block" />
          <span className="sm:hidden">{HERO_EYEBROW_MOBILE}</span>
          <span className="hidden sm:inline">{HERO_EYEBROW}</span>
          <span aria-hidden="true" className="hidden h-px w-8 bg-current sm:block" />
        </motion.p>
        <HeroHeadline ready={ready} />
        <HeroDescription ready={ready} />
        <motion.div variants={pick(rise)} className="mt-8">
          <HeroActions />
        </motion.div>
        <motion.div variants={pick(rise)} className="relative z-20 mt-6">
          <HeroTagline />
        </motion.div>
      </motion.div>
      <div className="relative z-10 mt-auto flex justify-center px-5 pt-12">
        <motion.div variants={pick(drop)}>
          <HeroDevice deviceRef={deviceRef} pulse={pulse} ready={ready} onPress={send} />
        </motion.div>
      </div>
      <motion.div variants={pick(rise)} className="relative z-20 flex justify-center px-5 pt-8 pb-8 sm:pb-10">
        <HeroAvatars />
      </motion.div>
    </motion.div>
  )
}
