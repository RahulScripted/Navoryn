import type { ComponentProps } from "react"
import { createPortal } from "react-dom"
import { cn } from "@/lib/utils"

type Props = ComponentProps<"div"> & { open: boolean }

export function MobileMenu({ open, children, className, ...props }: Props) {
  if (!open || typeof window === "undefined") return null
  return createPortal(
    <div
      id="mobile-menu"
      className="fixed top-16 right-0 bottom-0 left-0 z-[90] flex flex-col overflow-hidden border-y bg-background/95 backdrop-blur-lg md:hidden"
    >
      <div
        data-slot="open"
        className={cn("size-full p-4 ease-out data-[slot=open]:animate-in data-[slot=open]:zoom-in-97", className)}
        {...props}
      >
        {children}
      </div>
    </div>,
    document.body,
  )
}
