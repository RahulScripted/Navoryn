import { useMemo } from "react"
import { CheckIcon, MinusIcon, PlusIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { PAGE_OPTIONS, MAINTENANCE_OPTIONS } from "../data/pricing"

export interface ConfiguratorState {
  pageOptId: string
  sectionCounts: number[]
  maintenance: boolean
}

interface ConfiguratorProps {
  state: ConfiguratorState
  onChange: (next: ConfiguratorState) => void
}

export function Configurator({ state, onChange }: ConfiguratorProps) {
  const pageOpt = PAGE_OPTIONS.find((p) => p.id === state.pageOptId)!
  const isCustom = pageOpt.pages >= 11
  const visiblePages = Math.min(pageOpt.pages, 10)

  const counts = useMemo(() => {
    const next = [...state.sectionCounts]
    while (next.length < visiblePages) next.push(4)
    return next.slice(0, visiblePages)
  }, [state.sectionCounts, visiblePages])

  const setPage = (id: string) => onChange({ ...state, pageOptId: id })
  const setSection = (i: number, v: number) => {
    const next = [...counts]
    next[i] = Math.max(1, v)
    onChange({ ...state, sectionCounts: next })
  }
  const setMaintenance = (m: boolean) => onChange({ ...state, maintenance: m })

  return (
    <div className="space-y-7">
      <Field label="Website size">
        <div className="flex flex-wrap gap-2">
          {PAGE_OPTIONS.map((p) => (
            <Chip key={p.id} active={state.pageOptId === p.id} onClick={() => setPage(p.id)}>
              {p.label}
            </Chip>
          ))}
        </div>
      </Field>

      {!isCustom && (
        <Field label="Sections per page">
          <p className="-mt-1 text-xs text-muted-foreground">
            4 sections are included per page. Extra blocks of 4 add ₹500 each.
          </p>
          <div className="flex flex-wrap gap-3">
            {counts.map((count, i) => (
              <div
                key={i}
                className="cursor-target flex items-center gap-2 rounded-lg border bg-background px-3 py-2"
              >
                <span className="text-sm text-muted-foreground">Page {i + 1}</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setSection(i, count - 1)}
                    className="grid size-6 place-items-center rounded-md border hover:bg-accent"
                  >
                    <MinusIcon className="size-3.5" />
                  </button>
                  <span className="w-5 text-center text-sm font-medium">{count}</span>
                  <button
                    type="button"
                    onClick={() => setSection(i, count + 1)}
                    className="grid size-6 place-items-center rounded-md border hover:bg-accent"
                  >
                    <PlusIcon className="size-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Field>
      )}

      <Field label="Maintenance preference">
        <div className="flex flex-wrap gap-2">
          {MAINTENANCE_OPTIONS.map((m) => {
            const active = (m.id === "monthly") === state.maintenance
            return (
              <Chip key={m.id} active={active} onClick={() => setMaintenance(m.id === "monthly")}>
                {m.label}
              </Chip>
            )
          })}
        </div>
      </Field>
    </div>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold">{label}</p>
      {children}
    </div>
  )
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "cursor-target inline-flex items-center rounded-full border px-3 py-1.5 text-sm transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-foreground hover:bg-accent",
      )}
    >
      {active && <CheckIcon className="mr-1.5 size-3.5" />}
      {children}
    </button>
  )
}
