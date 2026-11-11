import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

const LOAD_MS = 600
const CYCLE_MS = 3200

/** Skeleton → "100ms" with a filling bar; replays on a loop. */
export function SpeedIndicator() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let done: ReturnType<typeof setTimeout>
    const run = () => {
      setLoading(true)
      done = setTimeout(() => setLoading(false), LOAD_MS)
    }
    const first = setTimeout(run, 0)
    const interval = setInterval(run, CYCLE_MS)
    return () => {
      clearTimeout(first)
      clearTimeout(done)
      clearInterval(interval)
    }
  }, [])

  return (
    <div className="flex h-full flex-col items-center justify-center gap-1.5">
      <div className="relative flex h-6 w-full items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loader"
              className="h-4 w-12 rounded bg-foreground/10"
              initial={{ opacity: 0.5 }}
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              exit={{ opacity: 0, y: -12, position: "absolute" }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          ) : (
            <motion.span
              key="text"
              initial={{ y: 12, opacity: 0, filter: "blur(4px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              className="text-base font-semibold text-foreground"
            >
              100ms
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      <div className="h-1 w-full max-w-16 overflow-hidden rounded-full bg-foreground/10">
        <motion.div
          className="h-full rounded-full bg-foreground"
          initial={{ width: 0 }}
          animate={{ width: loading ? 0 : "100%" }}
          transition={{ type: "spring", stiffness: 100, damping: 15, mass: 1 }}
        />
      </div>
    </div>
  )
}
