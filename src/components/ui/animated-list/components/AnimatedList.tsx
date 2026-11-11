import React, { useEffect, useMemo, useState, type ReactElement } from "react"
import { AnimatePresence, motion } from "motion/react"
import { cn } from "@/lib/utils"

export interface AnimatedListProps {
  className?: string
  children: React.ReactNode
  delay?: number
  active?: boolean
}

export const AnimatedList = React.memo(
  ({ className, children, delay = 1000, active = true }: AnimatedListProps) => {
    const [index, setIndex] = useState(0)
    const childrenArray = useMemo(() => React.Children.toArray(children), [children])

    useEffect(() => {
      if (!active) return
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length)
      }, delay)

      return () => clearInterval(interval)
    }, [childrenArray.length, delay, active])

    const itemsToShow = useMemo(
      () => (active ? childrenArray.slice(0, index + 1).reverse() : []),
      [index, childrenArray, active],
    )

    return (
      <div className={cn("flex flex-col items-center gap-2", className)}>
        <AnimatePresence>
          {itemsToShow.map((item) => (
            <AnimatedListItem key={(item as ReactElement).key}>{item}</AnimatedListItem>
          ))}
        </AnimatePresence>
      </div>
    )
  },
)

AnimatedList.displayName = "AnimatedList"

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  } as const

  return (
    <motion.div {...animations} layout className="mx-auto w-full">
      {children}
    </motion.div>
  )
}
