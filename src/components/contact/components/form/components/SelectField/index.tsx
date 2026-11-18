import { ChevronDownIcon, LockClosedIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { SELECT } from "../../lib/styles"
import { Field } from "../Field"
import { OptionList } from "./components/OptionList"
import { useSelectMenu, type Option } from "./hooks/useSelectMenu"

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
  locked?: boolean
  hint?: string
}

export function SelectField({
  id, label, value, options, onChange, onBlur, required, placeholder, error, locked, hint,
}: SelectFieldProps) {
  const {
    listId, optionId, buttonRef, panelRef, open, mounted, active, place, setActive, choose, onKeyDown, toggle,
  } = useSelectMenu({ options, value, locked, onChange, onBlur })
  const selected = options.find((option) => option.id === value)
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
        data-empty={selected ? undefined : "true"}
        disabled={locked}
        onClick={toggle}
        onKeyDown={onKeyDown}
        className={SELECT}
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

      {mounted && place && (
        <OptionList
          listId={listId}
          label={label}
          options={options}
          value={value}
          active={active}
          open={open}
          place={place}
          panelRef={panelRef}
          optionId={optionId}
          onActive={setActive}
          onChoose={choose}
        />
      )}
    </Field>
  )
}
