import type { ReactNode } from "react"
import * as motion from "motion/react-client"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface BentoTileProps {
  title: string
  icon?: LucideIcon
  className?: string
  index?: number
  active?: boolean
  children: ReactNode
}

export function BentoTile({
  title,
  icon: Icon,
  className,
  index = 0,
  active = true,
  children,
}: BentoTileProps) {
  return (
    <motion.div
      className={cn(
        "@container flex min-h-0 min-w-0 flex-col overflow-hidden rounded-xl p-2",
        "border border-border bg-background text-foreground",
        "transition-colors duration-300 hover:border-foreground/20",
        className,
      )}
      initial={{ opacity: 0, y: 12 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="relative min-h-0 flex-1">{children}</div>
      <h4 className="mt-1 flex items-center gap-1 truncate text-[0.6rem] font-semibold leading-none">
        {Icon && <Icon className="size-2.5 shrink-0" aria-hidden="true" />}
        {title}
      </h4>
    </motion.div>
  )
}
