import { forwardRef } from "react"
import type { Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { IconSvg } from "../components/IconSvg"
import { useIconControls, type IconHandle, type IconProps } from "../components/useIconControls"

const TOP: Variants = {
  normal: { y: 0 },
  animate: { y: [0, -2.5, 0], transition: { duration: 0.55, ease: "easeInOut" } },
}
const MIDDLE: Variants = {
  normal: { y: 0 },
  animate: { y: 0 },
}
const BOTTOM: Variants = {
  normal: { y: 0 },
  animate: { y: [0, 2.5, 0], transition: { duration: 0.55, ease: "easeInOut" } },
}

/** Flexible Solutions: the layers pull apart and settle back. */
export const LayersIcon = forwardRef<IconHandle, IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const { controls, handleMouseEnter, handleMouseLeave } = useIconControls(ref, onMouseEnter, onMouseLeave)
    return (
      <div className={cn(className)} {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <IconSvg size={size}>
          <motion.path
            animate={controls}
            variants={TOP}
            d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"
          />
          <motion.path
            animate={controls}
            variants={MIDDLE}
            d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"
          />
          <motion.path
            animate={controls}
            variants={BOTTOM}
            d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"
          />
        </IconSvg>
      </div>
    )
  },
)
LayersIcon.displayName = "LayersIcon"
