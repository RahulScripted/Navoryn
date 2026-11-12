import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import type { TagItem } from "../../data/tags"

interface TagRowProps {
  row: TagItem[]
  index: number
  magnified?: boolean
}

export function TagRow({ row, index, magnified = false }: TagRowProps) {
  const forward = index % 2 === 0

  return (
    <motion.div
      className="flex w-max gap-4"
      animate={{ x: forward ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
      transition={{ duration: 25, ease: "linear", repeat: Infinity }}
    >
      {[...row, ...row, ...row].map(({ id, icon: Icon, label }, idx) => (
        <div
          key={`${id}-${idx}`}
          className={cn(
            "flex w-fit items-center gap-2 whitespace-nowrap rounded-full border p-2 px-3 text-xs",
            magnified
              ? "ml-6 scale-125 border-foreground/20 bg-background text-foreground shadow-sm"
              : "border-border/60 bg-background/60 text-muted-foreground backdrop-blur-sm",
          )}
        >
          <Icon className="size-3.5 shrink-0" aria-hidden="true" />
          <span className={cn(magnified && "font-medium")}>{label}</span>
        </div>
      ))}
    </motion.div>
  )
}
