import { Fragment, useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { HERO_PILLARS, PILLAR_MS } from "../data/hero"

const EASE = [0.2, 0.8, 0.2, 1] as const

export function HeroPillars() {
  const reduced = useReducedMotion()
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (reduced) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % HERO_PILLARS.length), PILLAR_MS)
    return () => window.clearInterval(id)
  }, [reduced])
  return (
    <motion.span
      layout
      transition={{ duration: 0.4, ease: EASE }}
      className="inline-flex h-8 items-center gap-2 overflow-hidden rounded-full border border-border bg-background/80 px-3.5 text-[0.7rem] font-semibold whitespace-nowrap text-foreground shadow-sm backdrop-blur-md"
    >
      <span className="hero-ping size-1.5 shrink-0 rounded-full bg-(--hero-live)" />
      <span className="sr-only">{HERO_PILLARS.map((set) => set.join(", ")).join(". ")}</span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span key={index} aria-hidden="true" className="flex items-center gap-1.5">
          {HERO_PILLARS[index].map((word, i) => (
            <Fragment key={word}>
              {i > 0 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { delay: i * 0.08 } }}
                  exit={{ opacity: 0 }}
                  className="text-muted-foreground"
                >
                  |
                </motion.span>
              )}
              <motion.span
                initial={{ y: "120%", opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)", transition: { duration: 0.45, ease: EASE, delay: i * 0.08 } }}
                exit={{ y: "-120%", opacity: 0, filter: "blur(4px)", transition: { duration: 0.3, ease: EASE, delay: i * 0.05 } }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </Fragment>
          ))}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  )
}
