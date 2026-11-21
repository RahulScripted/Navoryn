import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useIsDark } from "@/utilities/useIsDark"
import ShinyText from "@/utilities/ShinyText"
import { HERO_TAGLINES, SHINE_COLORS, TAGLINE_MS } from "../data/hero"

export function HeroTagline() {
  const reduced = useReducedMotion()
  const dark = useIsDark()
  const colors = dark ? SHINE_COLORS.dark : SHINE_COLORS.light
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_TAGLINES.length), TAGLINE_MS)
    return () => window.clearInterval(id)
  }, [reduced])
  return (
    <p className="relative flex h-7 items-center justify-center overflow-hidden text-sm font-semibold tracking-wide sm:text-base">
      <span className="sr-only">{HERO_TAGLINES.join(" ")}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${index}-${dark}`}
          aria-hidden="true"
          inherit={false}
          initial={{ y: "100%", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "-100%", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
          className="block"
        >
          <ShinyText
            text={HERO_TAGLINES[index]}
            color={colors.base}
            shineColor={colors.shine}
            speed={2.4}
            delay={0.4}
            shineWidth={40}
            softness={0.8}
            trigger="loop"
          />
        </motion.span>
      </AnimatePresence>
    </p>
  )
}
