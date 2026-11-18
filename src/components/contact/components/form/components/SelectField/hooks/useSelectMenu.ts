import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react"

export interface Option {
  id: string
  label: string
}

export interface Place {
  left: number
  width: number
  top?: number
  bottom?: number
  maxHeight: number
  up: boolean
}

const ROW = 38
const EXIT_MS = 200

interface Options {
  options: Option[]
  value: string
  locked?: boolean
  onChange: (value: string) => void
  onBlur?: () => void
}

export function useSelectMenu({ options, value, locked, onChange, onBlur }: Options) {
  const listId = useId()
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const panelRef = useRef<HTMLUListElement | null>(null)
  const typed = useRef({ text: "", at: 0 })
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(0)
  const [place, setPlace] = useState<Place | null>(null)

  const optionId = useCallback((index: number) => `${listId}-${index}`, [listId])

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

  useEffect(() => {
    if (open || !mounted) return undefined
    const timer = window.setTimeout(() => setMounted(false), EXIT_MS)
    return () => window.clearTimeout(timer)
  }, [open, mounted])

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
  }, [open, active, optionId])

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

  return {
    listId, optionId, buttonRef, panelRef,
    open, mounted, active, place,
    setActive, choose, onKeyDown,
    toggle: () => (open ? closePanel() : openPanel()),
  }
}
