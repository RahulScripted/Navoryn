import { forwardRef } from "react"
import type { Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { IconSvg } from "../components/IconSvg"
import { useIconControls, type IconHandle, type IconProps } from "../components/useIconControls"

const RING: Variants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: { opacity: [0, 1], pathLength: [0, 1], transition: { duration: 0.5 } },
}
const TICK: Variants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: { opacity: [0, 1], pathLength: [0, 1], transition: { duration: 0.3, delay: 0.4 } },
}

export const CircleCheckIcon = forwardRef<IconHandle, IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const { controls, handleMouseEnter, handleMouseLeave } = useIconControls(ref, onMouseEnter, onMouseLeave)
    return (
      <div className={cn(className)} {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <IconSvg size={size}>
          <motion.circle animate={controls} variants={RING} cx="12" cy="12" r="10" />
          <motion.path animate={controls} variants={TICK} d="m9 12 2 2 4-4" />
        </IconSvg>
      </div>
    )
  },
)
CircleCheckIcon.displayName = "CircleCheckIcon"
