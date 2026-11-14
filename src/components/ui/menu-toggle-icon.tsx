import { cn } from "@/lib/utils"

type MenuToggleIconProps = React.ComponentProps<"svg"> & {
  open: boolean
  duration?: number
}

export function MenuToggleIcon({
  open,
  className,
  duration = 300,
  ...props
}: MenuToggleIconProps) {
  const line = {
    style: { transitionDuration: `${duration}ms`, transformOrigin: "center", transformBox: "fill-box" as const },
    className: "transition-transform ease-in-out",
  }
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      className={cn(className)}
      aria-hidden="true"
      {...props}
    >
      <line x1="4" y1="7" x2="20" y2="7" {...line}
        style={{ ...line.style, transform: open ? "translateY(5px) rotate(45deg)" : "none" }} />
      <line x1="4" y1="12" x2="20" y2="12" {...line}
        style={{ ...line.style, transform: open ? "scaleX(0)" : "none" }} />
      <line x1="4" y1="17" x2="20" y2="17" {...line}
        style={{ ...line.style, transform: open ? "translateY(-5px) rotate(-45deg)" : "none" }} />
    </svg>
  )
}
