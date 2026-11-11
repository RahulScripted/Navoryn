import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const bubbleVariants = cva(
  "w-fit max-w-full rounded-xl px-3 py-2 text-[0.78rem] font-medium leading-snug shadow-sm",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background",
        muted: "bg-muted text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

interface BubbleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bubbleVariants> {}

export function Bubble({ className, variant, ...props }: BubbleProps) {
  return <div className={cn(bubbleVariants({ variant }), className)} {...props} />
}

export function BubbleContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("m-0", className)} {...props} />
}
