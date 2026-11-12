import { cn } from "@/lib/utils"

const LOGO = "url(/favicon-dark.svg)"

export function NavorynMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("block bg-current", className)}
      style={{
        maskImage: LOGO,
        WebkitMaskImage: LOGO,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "center",
        WebkitMaskPosition: "center",
      }}
    />
  )
}
