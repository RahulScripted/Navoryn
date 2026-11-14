import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { ADD_ON_GROUPS, ADDITIONAL_SERVICE_GROUPS } from "../data/pricing"

interface AddOnPickerProps {
  selected: string[]
  onToggle: (id: string) => void
}

export function AddOnPicker({ selected, onToggle }: AddOnPickerProps) {
  return (
    <div className="space-y-10">
      <div className="space-y-8">
        <h3 className="text-lg font-bold tracking-tight">Add-ons</h3>
        {ADD_ON_GROUPS.map((group) => (
          <div key={group.title} className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((a) => {
                const active = selected.includes(a.id)
                return (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => onToggle(a.id)}
                    className={cn(
                      "cursor-target inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-colors",
                      active
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background text-foreground hover:bg-accent",
                    )}
                  >
                    {active && <CheckIcon className="mr-1.5 size-3.5" />}
                    {a.label}
                    <span className="ml-1.5 opacity-60">{a.price}</span>
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-8">
        <h3 className="text-lg font-bold tracking-tight">Additional services</h3>
        {ADDITIONAL_SERVICE_GROUPS.map((group) => (
          <div key={group.title} className="space-y-3">
            <p className="text-sm font-semibold text-muted-foreground">{group.title}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <div
                  key={s.label}
                  className="cursor-target inline-flex items-center gap-1.5 rounded-full border bg-background px-3 py-1.5 text-sm"
                >
                  <span>{s.label}</span>
                  <span className="font-semibold text-muted-foreground">{s.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
