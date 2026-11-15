import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

/** No ring or outline on focus: the border darkens instead. */
export const CONTROL =
  "w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors duration-200 placeholder:text-muted-foreground/70 hover:border-foreground/30 focus-visible:border-foreground/60 disabled:cursor-not-allowed disabled:bg-muted/50 disabled:text-muted-foreground aria-[invalid=true]:border-destructive"

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  /** Stretch to fill the remaining height of the form (used by the message box). */
  grow?: boolean
  className?: string
  children: ReactNode
}

/**
 * Label + control. The bottom padding always reserves a line for the message, and the message is
 * absolutely positioned inside it, so showing an error never moves anything.
 */
export function Field({ id, label, required, error, hint, grow, className, children }: FieldProps) {
  return (
    <div className={cn("relative flex flex-col pb-7", grow && "flex-1", className)}>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
        {required && (
          <span className="text-destructive" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>
      <div className={cn("mt-1.5", grow && "flex flex-1 flex-col")}>{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="absolute bottom-1.5 left-0 max-w-full truncate text-xs leading-4 text-destructive">
          {error}
        </p>
      ) : (
        hint && (
          <p id={`${id}-hint`} className="absolute bottom-1.5 left-0 max-w-full truncate text-xs leading-4 text-muted-foreground">
            {hint}
          </p>
        )
      )}
    </div>
  )
}
