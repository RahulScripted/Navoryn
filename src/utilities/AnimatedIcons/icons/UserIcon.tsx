import { forwardRef } from "react"
import type { Variants } from "motion/react"
import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { IconSvg } from "../components/IconSvg"
import { useIconControls, type IconHandle, type IconProps } from "../components/useIconControls"

const HEAD: Variants = {
  normal: { scale: 1 },
  animate: { scale: [1, 0.78, 1.14, 1], transition: { duration: 0.55, ease: "easeOut" } },
}
const BODY: Variants = {
  normal: { opacity: 1, pathLength: 1 },
  animate: { opacity: [0, 1], pathLength: [0, 1], transition: { duration: 0.5, delay: 0.12 } },
}
const FROM_CENTER = { transformBox: "fill-box", transformOrigin: "center" } as const

export const UserIcon = forwardRef<IconHandle, IconProps>(
  ({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const { controls, handleMouseEnter, handleMouseLeave } = useIconControls(ref, onMouseEnter, onMouseLeave)
    return (
      <div className={cn(className)} {...props} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <IconSvg size={size}>
          <motion.circle animate={controls} variants={HEAD} style={FROM_CENTER} cx="12" cy="7" r="4" />
          <motion.path animate={controls} variants={BODY} d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        </IconSvg>
      </div>
    )
  },
)
UserIcon.displayName = "UserIcon"
