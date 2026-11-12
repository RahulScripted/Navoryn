import type { ReactNode } from "react"
import * as motion from "motion/react-client"
import { Avatar } from "./Avatar"
import { fromLeft, fromRight, spring } from "../../types/variants"

interface ChatRowProps {
  dir: "left" | "right"
  children: ReactNode
}

export function ChatRow({ dir, children }: ChatRowProps) {
  return (
    <motion.div
      variants={dir === "left" ? fromLeft : fromRight}
      transition={spring}
      className={
        "flex items-center gap-2 " + (dir === "right" ? "flex-row-reverse" : "")
      }
    >
      <Avatar brand={dir === "right"} />
      {children}
    </motion.div>
  )
}
