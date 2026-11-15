import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react"
import { createPortal } from "react-dom"
import { CheckIcon, ChevronDownIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { CONTROL, Field } from "./Field"

interface Option {
  id: string
  label: string
}

interface SelectFieldProps {
  id: string
  label: string
  value: string
  options: Option[]
  onChange: (value: string) => void
  onBlur?: () => void
  required?: boolean
  placeholder?: string
  error?: string
  /** Fixed to the current value (shows a lock). */
  locked?: boolean
  hint?: string
}

interface Place {
  left: number
  width: number
  top?: number
  bottom?: number
  maxHeight: number
  up: boolean
}

const ROW = 38
const EXIT_MS = 200

/**
 * Custom select: a button + listbox in a portal (so the card can't clip it). It drops in with the
 * same fade-and-settle as the navbar menus, flips upward when there's no room below, and supports
 * the keyboard (arrows, Home/End, Enter/Space, Esc, type to jump).
 */
export function SelectField({
  id, label, value, options, onChange, onBlur, required, placeholder, error, locked, hint,
}: SelectFieldProps) {
  const listId = useId()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLUListElement | null>(null)
  const typed = useRef({ text: "", at: 0 })
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(0)
  const [place, setPlace] = useState<Place | null>(null)

  const selected = options.find((option) => option.id === value)
  const optionId = (index: number) => `${listId}-${index}`

  const measure = useCallback(() => {
    const button = buttonRef.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const need = Math.min(options.length * ROW + 10, 260)
    const below = window.innerHeight - rect.bottom - 14
    const up = below < need && rect.top > below
    setPlace({
      left: rect.left,
      width: rect.width,
      top: up ? undefined : rect.bottom + 6,
      bottom: up ? window.innerHeight - rect.top + 6 : undefined,
      maxHeight: Math.max(120, Math.min(260, up ? rect.top - 14 : below)),
      up,
    })
  }, [options.length])

  const openPanel = () => {
    if (locked) return
    measure()
    setActive(Math.max(0, options.findIndex((option) => option.id === value)))
    setMounted(true)
    setOpen(true)
  }

  const closePanel = useCallback(
    (refocus = false) => {
      setOpen(false)
      onBlur?.()
      if (refocus) buttonRef.current?.focus()
    },
    [onBlur],
  )

  const choose = (index: number) => {
    const option = options[index]
    if (!option) return
    onChange(option.id)
    closePanel(true)
  }

  // Take the panel out of the DOM once its exit animation has played.
  useEffect(() => {
    if (open || !mounted) return undefined
    const timer = window.setTimeout(() => setMounted(false), EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [open, mounted])

  // While open: follow the button on scroll/resize and close on an outside press.
  useEffect(() => {
    if (!open) return undefined
    const onOutside = (e: PointerEvent) => {
      const target = e.target as Node
      if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return
      closePanel()
    }
    window.addEventListener("resize", measure)
    window.addEventListener("scroll", measure, true)
    document.addEventListener("pointerdown", onOutside)
    return () => {
      window.removeEventListener("resize", measure)
      window.removeEventListener("scroll", measure, true)
      document.removeEventListener("pointerdown", onOutside)
    }
  }, [open, measure, closePanel])

  useEffect(() => {
    if (open) document.getElementById(optionId(active))?.scrollIntoView({ block: "nearest" })
    // optionId is derived from listId and active
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, active])

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (locked) return
    const last = options.length - 1
    if (!open) {
      if (["ArrowDown", "ArrowUp", "Enter", " "].includes(e.key)) {
        e.preventDefault()
        openPanel()
      }
      return
    }
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setActive((i) => Math.min(last, i + 1))
        break
      case "ArrowUp":
        e.preventDefault()
        setActive((i) => Math.max(0, i - 1))
        break
      case "Home":
        e.preventDefault()
        setActive(0)
        break
      case "End":
        e.preventDefault()
        setActive(last)
        break
      case "Enter":
      case " ":
        e.preventDefault()
        choose(active)
        break
      case "Escape":
        e.preventDefault()
        closePanel(true)
        break
      case "Tab":
        closePanel()
        break
      default:
        if (e.key.length === 1 && !e.ctrlKey && !e.metaKey) {
          const now = Date.now()
          typed.current.text = now - typed.current.at > 600 ? e.key.toLowerCase() : typed.current.text + e.key.toLowerCase()
          typed.current.at = now
          const hit = options.findIndex((option) => option.label.toLowerCase().startsWith(typed.current.text))
          if (hit >= 0) setActive(hit)
        }
    }
  }

  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined

  return (
    <Field id={id} label={label} required={required} error={error} hint={hint}>
      <button
        ref={buttonRef}
        id={id}
        type="button"
        role="combobox"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={listId}
        aria-activedescendant={open ? optionId(active) : undefined}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        disabled={locked}
        onClick={() => (open ? closePanel() : openPanel())}
        onKeyDown={onKeyDown}
        className={cn(CONTROL, "cursor-target flex items-center justify-between gap-2 text-left", !selected && "text-muted-foreground/70")}
      >
        <span className="truncate">{selected?.label ?? placeholder ?? "Select"}</span>
        {locked ? (
          <LockClosedIcon className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        ) : (
          <ChevronDownIcon
            className={cn("size-4 shrink-0 text-muted-foreground transition-transform duration-300", open && "rotate-180")}
            aria-hidden="true"
          />
        )}
      </button>

      {mounted &&
        place &&
        createPortal(
          <ul
            ref={panelRef}
            id={listId}
            role="listbox"
            aria-label={label}
            data-state={open ? "open" : "closed"}
            style={{
              position: "fixed",
              left: place.left,
              width: place.width,
              top: place.top,
              bottom: place.bottom,
              maxHeight: place.maxHeight,
              transformOrigin: place.up ? "bottom" : "top",
            }}
            className="z-50 overflow-y-auto rounded-xl border bg-popover p-1 text-popover-foreground shadow-lg will-change-[transform,opacity] data-[state=closed]:pointer-events-none data-[state=open]:animate-[nav-panel-in_300ms_cubic-bezier(0.16,1,0.3,1)_both] data-[state=closed]:animate-[nav-panel-out_200ms_cubic-bezier(0.4,0,1,1)_both] motion-reduce:animate-none"
          >
            {options.map((option, index) => (
              <li
                key={option.id}
                id={optionId(index)}
                role="option"
                aria-selected={option.id === value}
                data-active={index === active}
                onPointerEnter={() => setActive(index)}
                onPointerDown={(e) => e.preventDefault()}
                onClick={() => choose(index)}
                className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
              >
                <span className="truncate">{option.label}</span>
                {option.id === value && <CheckIcon className="size-4 shrink-0" aria-hidden="true" />}
              </li>
            ))}
          </ul>,
          document.body,
        )}
    </Field>
  )
}
