import type { ReactNode } from "react"

export function DetailLabel({ children }: { children: ReactNode }) {
  return (
    <span className="text-[0.6rem] font-bold uppercase tracking-[0.16em] text-muted-foreground">
      {children}
    </span>
  )
}
