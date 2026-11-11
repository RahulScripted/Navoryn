import { useState, useEffect, type ReactNode } from "react"
import { motion, useMotionValue, animate } from "motion/react"
import useMeasure from "react-use-measure"
import { cn } from "@/lib/utils"

interface InfiniteSliderProps {
  children: ReactNode
  gap?: number
  speed?: number
  speedOnHover?: number
  pauseOnHover?: boolean
  direction?: "horizontal" | "vertical"
  reverse?: boolean
  className?: string
}

export function InfiniteSlider({
  children,
  gap = 24,
  speed = 40,
  speedOnHover,
  pauseOnHover = false,
  direction = "horizontal",
  reverse = false,
  className,
}: InfiniteSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed)
  const [ref, { width, height }] = useMeasure()
  const translation = useMotionValue(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    if (paused) return

    let controls
    const size = direction === "horizontal" ? width : height
    const contentSize = size + gap
    const from = reverse ? -contentSize / 2 : 0
    const to = reverse ? 0 : -contentSize / 2

    const distanceToTravel = Math.abs(to - from)
    const duration = distanceToTravel / currentSpeed

    if (isTransitioning) {
      const remaining = Math.abs(translation.get() - to)
      const transitionDuration = remaining / currentSpeed
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false)
          setKey((k) => k + 1)
        },
      })
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      })
    }

    return controls?.stop
  }, [key, translation, currentSpeed, width, height, gap, isTransitioning, paused, direction, reverse])

  const hoverProps = pauseOnHover
    ? {
        onHoverStart: () => setPaused(true),
        onHoverEnd: () => {
          setIsTransitioning(true)
          setPaused(false)
        },
      }
    : speedOnHover
      ? {
          onHoverStart: () => {
            setIsTransitioning(true)
            setCurrentSpeed(speedOnHover)
          },
          onHoverEnd: () => {
            setIsTransitioning(true)
            setCurrentSpeed(speed)
          },
        }
      : {}

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        className={cn("flex", direction === "vertical" ? "w-full" : "w-max")}
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  )
}
