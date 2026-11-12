import type { Variants } from "motion/react"

export const fromLeft: Variants = {
  hidden: { opacity: 0, x: -24, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1 },
}

export const fromRight: Variants = {
  hidden: { opacity: 0, x: 24, scale: 0.96 },
  show: { opacity: 1, x: 0, scale: 1 },
}

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.45, delayChildren: 0.1 } },
}

export const reaction: Variants = {
  hidden: { opacity: 0, scale: 0, y: 6, rotate: -18 },
  show: {
    opacity: 1,
    scale: [0, 1.35, 0.9, 1.12, 1],
    y: [6, 0, 0, 0, 0],
    rotate: [-18, 8, -4, 2, 0],
  },
}

export const spring = { type: "spring", stiffness: 420, damping: 30 } as const
