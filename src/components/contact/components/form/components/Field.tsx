import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface FieldProps {
  id: string
  label: string
  required?: boolean
  error?: string
  hint?: string
  grow?: boolean
  className?: string
  children: ReactNode
}

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
