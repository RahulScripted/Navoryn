import { cn } from "@/lib/utils"
import { useIsDark } from "@/components/technology/hooks/useIsDark"
import { DetailLabel } from "./DetailLabel"
import { TechChip } from "./TechChip"

interface TechStackProps {
  items: readonly string[]
  className?: string
}

export function TechStack({ items, className }: TechStackProps) {
  const isDark = useIsDark()

  return (
    <div className={cn("flex min-w-0 flex-col gap-2.5", className)}>
      <DetailLabel>Tech Stack</DetailLabel>
      <ul className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <TechChip key={item} name={item} isDark={isDark} />
        ))}
      </ul>
    </div>
  )
}
