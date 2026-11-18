import type { ForwardedRef, HTMLAttributes, MouseEvent, RefAttributes, ForwardRefExoticComponent } from "react"
import { useCallback, useImperativeHandle, useRef } from "react"
import { useAnimation, useReducedMotion } from "motion/react"

export interface IconHandle {
  startAnimation: () => void
  stopAnimation: () => void
}

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  size?: number
}

export type AnimatedIconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<IconHandle>>

export function useIconControls(
  ref: ForwardedRef<IconHandle>,
  onMouseEnter: IconProps["onMouseEnter"],
  onMouseLeave: IconProps["onMouseLeave"],
) {
  const controls = useAnimation()
  const reduced = useReducedMotion()
  const controlled = useRef(false)

  useImperativeHandle(ref, () => {
    controlled.current = true
    return {
      startAnimation: () => {
        if (!reduced) void controls.start("animate")
      },
      stopAnimation: () => {
        void controls.start("normal")
      },
    }
  })

  const handleMouseEnter = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (controlled.current) onMouseEnter?.(e)
      else if (!reduced) void controls.start("animate")
    },
    [controls, onMouseEnter, reduced],
  )

  const handleMouseLeave = useCallback(
    (e: MouseEvent<HTMLDivElement>) => {
      if (controlled.current) onMouseLeave?.(e)
      else void controls.start("normal")
    },
    [controls, onMouseLeave],
  )

  return { controls, handleMouseEnter, handleMouseLeave }
}
