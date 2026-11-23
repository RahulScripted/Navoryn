import { useEffect } from "react"
import { createPortal } from "react-dom"
import { motion, useMotionValue, useSpring } from "motion/react"
export function ViewCursor({ active }: { active: boolean }) {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 600, damping: 45, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 600, damping: 45, mass: 0.4 })
  useEffect(() => {
    const move = (event: PointerEvent) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }
    window.addEventListener("pointermove", move, { passive: true })
    return () => window.removeEventListener("pointermove", move)
  }, [x, y])
  return createPortal(
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[2147483646] -mt-[22.5px] -ml-[22.5px] flex size-[45px] items-center justify-center rounded-full bg-primary text-[11px] font-semibold text-primary-foreground"
      style={{ x: springX, y: springY }}
      initial={false}
      animate={{ scale: active ? 1 : 0, opacity: active ? 1 : 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      View
    </motion.div>,
    document.body,
  )
}
