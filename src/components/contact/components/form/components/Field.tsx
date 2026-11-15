import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  /** Stretch to fill the remaining height of the form (used by the message box). */
  grow?: boolean
  className?: string
  /** The control. It must come first so the floating label can follow it (CSS sibling selectors). */
  children: ReactNode
}

/**
 * Underline field with a floating label: the same look as the footer's email input. The message
 * line is absolutely positioned under the control, so showing an error never moves anything.
 */
export function Field({ id, label, required, error, hint, grow, className, children }: FieldProps) {
  const message = error ?? hint
  return (
    <div className={cn("subscribe-field subscribe-field--form", grow && "subscribe-field--grow", className)}>
      {children}
      <label htmlFor={id} className="subscribe-field__label">
        {label}
        {required && (
          <span className="text-destructive" aria-hidden="true">
            {" "}*
          </span>
        )}
      </label>
      {message && (
        <p
          id={error ? `${id}-error` : `${id}-hint`}
          role={error ? "alert" : undefined}
          className={cn("subscribe-field__status", error ? "subscribe-field__status--error" : "subscribe-field__status--ok")}
        >
          {message}
        </p>
      )}
    </div>
  )
}
