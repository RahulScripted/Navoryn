import { motion } from "motion/react"
import { GlobeIcon } from "@radix-ui/react-icons"

const PULSES = [0, 1, 2, 3, 4]

export function GlobalNetwork() {
  return (
    <div className="relative flex h-full items-center justify-center perspective-[200px]">
      <motion.div
        className="z-10 transform-3d"
        animate={{ rotateY: 360 }}
        transition={{
          duration: 1.4,
          ease: [0.65, 0, 0.35, 1],
          repeat: Infinity,
          repeatDelay: 2,
        }}
      >
        <GlobeIcon className="size-6 text-foreground/80" aria-hidden="true" />
      </motion.div>

      {PULSES.map((pulse) => (
        <motion.div
          key={pulse}
          className="absolute size-6 rounded-full border border-foreground/30"
          initial={{ scale: 0.5, opacity: 1 }}
          animate={{ scale: 2.6, opacity: 0 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: pulse * 0.6,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
