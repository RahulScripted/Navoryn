import { forwardRef } from "react"
import type { Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { IconSvg } from "../components/IconSvg"
import { useIconControls, type IconHandle, type IconProps } from "../components/useIconControls"

const PATH: Variants = {
  normal: { opacity: 1, pathLength: 1, transition: { duration: 0.6, opacity: { duration: 0.1 } } },
  animate: { opacity: [0, 1], pathLength: [0, 1], transition: { duration: 0.6, opacity: { duration: 0.1 } } },
}

export const ZapIcon = forwardRef<IconHandle, IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const { controls, handleMouseEnter, handleMouseLeave } = useIconControls(ref, onMouseEnter, onMouseLeave)
    return (
      <div className={cn(className)} {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <IconSvg size={size}>
          <motion.path
            animate={controls}
            variants={PATH}
            d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
          />
        </IconSvg>
      </div>
    )
  },
)
ZapIcon.displayName = "ZapIcon"
