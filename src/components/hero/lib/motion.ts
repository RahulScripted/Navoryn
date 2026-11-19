import type { Transition, Variants } from "motion/react"

const EASE: Transition["ease"] = [0.2, 0.8, 0.2, 1]

export const stagger = (gap: number, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
})

export const rise: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.9, ease: EASE } },
}

export const drop: Variants = {
  hidden: { opacity: 0, y: 70, scale: 0.88, rotate: -8 },
  show: { opacity: 1, y: 0, scale: 1, rotate: 0, transition: { duration: 1.2, ease: EASE, delay: 0.35 } },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.6, ease: "easeOut" } },
}

export const instant: Variants = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
}
