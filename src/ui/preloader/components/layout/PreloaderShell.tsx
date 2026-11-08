import { motion, AnimatePresence } from "motion/react"
import StickerSwapHeadline from "../headline/StickerSwapHeadline"
import WeightSweepCounter  from "../counter/WeightSweepCounter"
import { words } from "../headline/words"

interface PreloaderShellProps {
  visible:     boolean
  durationMs:  number
}

export default function PreloaderShell({ visible, durationMs }: PreloaderShellProps) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          style={{ position: "fixed", inset: 0, zIndex: 9999 }}
        >
          {/* Headline animation */}
          <StickerSwapHeadline
            lead="Stay"
            words={words}
            interval={4000}
            height="100svh"
          />

          {/* Counter + HUD overlay, synced to the same duration */}
          <WeightSweepCounter
            durationMs={durationMs}
            label="Navoryn"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
