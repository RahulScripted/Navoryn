import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { LockClosedIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"

const INITIAL = [
  { id: 1, active: false },
  { id: 2, active: false },
  { id: 3, active: false },
]

export function SecurityBadge() {
  const [shields, setShields] = useState(INITIAL)

  useEffect(() => {
    let cycle = 1
    const interval = setInterval(() => {
      setShields((prev) => {
        const nextIndex = prev.findIndex((s) => !s.active)
        if (nextIndex === -1) {
          cycle += 1
          return prev.map((_, i) => ({ id: cycle * 10 + i, active: false }))
        }
        return prev.map((s, i) => (i === nextIndex ? { ...s, active: true } : s))
      })
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-full items-center justify-center gap-1.5">
      {shields.map((shield) => (
        <motion.div
          key={shield.id}
          className={cn(
            "flex size-6 items-center justify-center rounded-md transition-colors",
            shield.active ? "bg-foreground/20" : "bg-foreground/5",
          )}
          animate={{ scale: shield.active ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <LockClosedIcon
            aria-hidden="true"
            className={cn(
              "size-3",
              shield.active ? "text-foreground" : "text-muted-foreground/60",
            )}
          />
        </motion.div>
      ))}
    </div>
  )
}
