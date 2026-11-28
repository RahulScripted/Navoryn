import { useCallback, useEffect, useRef, useState, type MouseEvent, type PointerEvent, type ReactNode } from "react"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"

const DRAG_THRESHOLD = 5

/**
 * A row that scrolls sideways. It has two arrow buttons, scrolls by dragging with the mouse, and also
 * works with swipes and a trackpad. `heading` sits on the left of the buttons.
 */
export function ScrollStrip({
  heading,
  actions,
  children,
  className,
  gap = "gap-10 sm:gap-14",
}: {
  heading?: ReactNode
  /** Extra controls shown to the left of the two arrow buttons. */
  actions?: ReactNode
  children: ReactNode
  className?: string
  gap?: string
}) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const drag = useRef({ active: false, moved: false, startX: 0, startLeft: 0 })
  const [edges, setEdges] = useState({ start: true, end: true })
  const [dragging, setDragging] = useState(false)
  const revealRef = useReveal<HTMLDivElement>({ y: 32, blur: 8 })

  const measure = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    setEdges({ start: el.scrollLeft <= 1, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 1 })
  }, [])

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [measure])

  const page = (direction: -1 | 1) => {
    const el = scrollerRef.current
    el?.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: "smooth" })
  }

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    if (!el || event.pointerType !== "mouse" || event.button !== 0) return
    drag.current = { active: true, moved: false, startX: event.clientX, startLeft: el.scrollLeft }
  }

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const el = scrollerRef.current
    const state = drag.current
    if (!el || !state.active) return
    const distance = event.clientX - state.startX
    if (!state.moved && Math.abs(distance) > DRAG_THRESHOLD) {
      state.moved = true
      setDragging(true)
      el.setPointerCapture(event.pointerId)
    }
    if (state.moved) el.scrollLeft = state.startLeft - distance
  }

  const endDrag = () => {
    drag.current.active = false
    setDragging(false)
  }

  // A drag that ends over a link must not count as a click on it.
  const onClickCapture = (event: MouseEvent<HTMLDivElement>) => {
    if (!drag.current.moved) return
    event.preventDefault()
    event.stopPropagation()
    drag.current.moved = false
  }

  return (
    <div ref={revealRef} className={className}>
      <div className={cn("mb-8 flex items-end gap-6", heading ? "justify-between" : "justify-end")}>
        {heading}
        <div className="flex shrink-0 items-center gap-4">
          {actions}
          <div className="flex gap-2">
          <ArrowButton label="Scroll left" disabled={edges.start} onClick={() => page(-1)}>
            <ChevronLeftIcon className="size-5" aria-hidden="true" />
          </ArrowButton>
          <ArrowButton label="Scroll right" disabled={edges.end} onClick={() => page(1)}>
            <ChevronRightIcon className="size-5" aria-hidden="true" />
          </ArrowButton>
          </div>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollerRef}
          onScroll={measure}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onClickCapture={onClickCapture}
          data-scroll-strip=""
          className={cn(
            "flex overflow-x-auto pb-2 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
            gap,
            dragging ? "cursor-grabbing" : "cursor-grab",
          )}
        >
          {children}
        </div>
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent transition-opacity duration-300",
            edges.start ? "opacity-0" : "opacity-100",
          )}
        />
        <span
          aria-hidden="true"
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent transition-opacity duration-300",
            edges.end ? "opacity-0" : "opacity-100",
          )}
        />
      </div>
    </div>
  )
}

function ArrowButton({
  label,
  disabled,
  onClick,
  children,
}: {
  label: string
  disabled: boolean
  onClick: () => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      className="cursor-target grid size-10 place-items-center rounded-full border border-border bg-background text-foreground transition-[background-color,opacity,scale] duration-200 hover:bg-muted active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-background disabled:active:scale-100"
    >
      {children}
    </button>
  )
}
