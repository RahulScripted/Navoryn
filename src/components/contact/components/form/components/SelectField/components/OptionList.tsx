import type { RefObject } from "react"
import { createPortal } from "react-dom"
import { CheckIcon } from "@radix-ui/react-icons"
import type { Option, Place } from "../hooks/useSelectMenu"

interface OptionListProps {
  listId: string
  label: string
  options: Option[]
  value: string
  active: number
  open: boolean
  place: Place
  panelRef: RefObject<HTMLUListElement | null>
  optionId: (index: number) => string
  onActive: (index: number) => void
  onChoose: (index: number) => void
}

export function OptionList({ listId, label, options, value, active, open, place, panelRef, optionId, onActive, onChoose }: OptionListProps) {
  return createPortal(
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
          onPointerEnter={() => onActive(index)}
          onPointerDown={(e) => e.preventDefault()}
          onClick={() => onChoose(index)}
          className="flex cursor-pointer items-center justify-between gap-3 rounded-md px-3 py-2 text-sm transition-colors duration-150 data-[active=true]:bg-accent data-[active=true]:text-accent-foreground"
        >
          <span className="truncate">{option.label}</span>
          {option.id === value && <CheckIcon className="size-4 shrink-0" aria-hidden="true" />}
        </li>
      ))}
    </ul>,
    document.body,
  )
}
