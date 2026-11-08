import { useMemo, useState } from "react"
import {
  ArrowRightIcon,
  ChevronLeftIcon,
  CheckCircle2Icon,
  HandshakeIcon,
} from "lucide-react"
import { Link, useNavigate, useSearchParams } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Button } from "@/components/pricing/components/Button"
import { Badge } from "@/components/pricing/components/Badge"
import { Configurator, type ConfiguratorState } from "@/components/pricing/components/Configurator"
import { AddOnPicker } from "@/components/pricing/components/AddOnPicker"
import { EstimatePanel } from "@/components/pricing/components/EstimatePanel"
import { calculateQuote } from "@/components/pricing/data/calculator"
import { ALL_ADD_ONS, PACKAGES, PAGE_OPTIONS } from "@/components/pricing/data/pricing"

const PLAN_LABELS: Record<string, string> = {
  starter: "Starter plan",
  pro: "Pro plan",
  promax: "Pro Max — Custom quote",
  custom: "Custom build",
}

const PLAN_PRESETS: Record<string, string> = {
  starter: "p2",
  pro: "p4",
  promax: "p5",
  custom: "p2",
}

type Step = "configure" | "addons" | "book"

export default function BookCall() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const plan = params.get("plan") ?? "custom"
  const planLabel = PLAN_LABELS[plan] ?? "Custom build"
  const pkg = PACKAGES.find((p) => p.id === plan)

  const [step, setStep] = useState<Step>("configure")
  const [config, setConfig] = useState<ConfiguratorState>({
    pageOptId: PLAN_PRESETS[plan] ?? "p2",
    sectionCounts: [4, 4, 4],
    maintenance: false,
  })
  const [addOnIds, setAddOnIds] = useState<string[]>([])
  const [bargain, setBargain] = useState(false)
  const [bargainBudget, setBargainBudget] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const pageOpt = PAGE_OPTIONS.find((p) => p.id === config.pageOptId)!
  const isCustom = pageOpt.pages >= 11

  const quote = useMemo(() => {
    const selected = ALL_ADD_ONS.filter((a) => addOnIds.includes(a.id))
    return calculateQuote(pageOpt.pages, config.sectionCounts, selected, config.maintenance)
  }, [pageOpt.pages, config.sectionCounts, config.maintenance, addOnIds])

  const toggleAddOn = (id: string) =>
    setAddOnIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  if (submitted) {
    return (
      <main className="page-px grid min-h-screen place-items-center bg-background text-foreground">
        <div className="flex max-w-md flex-col items-center text-center">
          <CheckCircle2Icon className="size-14" />
          <h1 className="mt-6 text-2xl font-bold tracking-tight">Request received</h1>
          <p className="mt-3 text-muted-foreground">
            Thanks for reaching out. We&apos;ll confirm your meeting slot over email shortly
            so we can understand your requirements crystal clear.
          </p>
          <Button className="cursor-target mt-8" asChild>
            <Link to="/">Back to home</Link>
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="page-px min-h-screen bg-background py-14 text-foreground">
      <div className="w-full">
        <button
          type="button"
          onClick={() => (window.history.length > 1 ? navigate(-1) : navigate("/"))}
          className="cursor-target inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ChevronLeftIcon className="size-4" />
          Back
        </button>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            {step === "book" ? "Schedule a meeting" : "Configure your project"}
          </h1>
          <Badge>{planLabel}</Badge>
          {pkg && <span className="text-sm text-muted-foreground">{pkg.price}</span>}
        </div>

        <div className="mt-6 flex items-center gap-2 text-sm">
          <StepDot label="Configure" active={step === "configure"} done={step !== "configure"} />
          <Line />
          <StepDot label="Add-ons" active={step === "addons"} done={step === "book"} />
          <Line />
          <StepDot label="Book a call" active={step === "book"} done={false} />
        </div>

        {step === "configure" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <Configurator state={config} onChange={setConfig} />
            <div className="space-y-4">
              <EstimatePanel quote={quote} isCustom={isCustom} />
              <Button className="cursor-target w-full gap-2" onClick={() => setStep("addons")}>
                Continue to add-ons
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        )}

        {step === "addons" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <AddOnPicker selected={addOnIds} onToggle={toggleAddOn} />
            <div className="space-y-4 lg:sticky lg:top-6 lg:self-start">
              <EstimatePanel quote={quote} isCustom={isCustom} />

              <Button className="cursor-target w-full gap-2" onClick={() => setStep("book")}>
                Continue to book a call
                <ArrowRightIcon className="size-4" />
              </Button>

              <Button
                variant="outline"
                className="cursor-target w-full gap-2"
                onClick={() => setBargain((v) => !v)}
              >
                <HandshakeIcon className="size-4" />
                Let&apos;s Bargain
              </Button>

              {bargain && (
                <div className="rounded-lg border bg-background p-3">
                  <label className="text-xs font-medium text-muted-foreground">
                    Propose your budget
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    value={bargainBudget}
                    onChange={(e) => setBargainBudget(e.target.value)}
                    placeholder="₹ Your offer"
                    className="mt-2 h-9 w-full rounded-md border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">
                    Mention your budget in the call request and we&apos;ll suggest a scope
                    that fits.
                  </p>
                </div>
              )}

              <Button
                variant="ghost"
                className="cursor-target w-full"
                onClick={() => setStep("configure")}
              >
                Back to configuration
              </Button>
            </div>
          </div>
        )}

        {step === "book" && (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_1fr]">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSubmitted(true)
              }}
              className="space-y-5"
            >
              <p className="text-muted-foreground">
                Let&apos;s understand your requirements crystal clear. Book a call and
                we&apos;ll finalize the scope, timeline, and pricing together.
              </p>

              <div className="grid gap-5 sm:grid-cols-2">
                <InputField label="Full name" name="name" placeholder="Your name" required />
                <InputField label="Business name" name="business" placeholder="Company / brand" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField label="Email" name="email" type="email" placeholder="you@email.com" required />
                <InputField label="Phone" name="phone" type="tel" placeholder="+91 ..." required />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <InputField label="Preferred date" name="date" type="date" />
                <InputField label="Preferred time" name="time" type="time" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold" htmlFor="description">
                  Project description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell us about your project, goals, and any specific requirements."
                  className="w-full rounded-lg border bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>

              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-target"
                  onClick={() => setStep("addons")}
                >
                  Back
                </Button>
                <Button type="submit" className="cursor-target flex-1">
                  Book the call
                </Button>
              </div>

              <p className="flex gap-2 text-xs leading-relaxed text-muted-foreground">
                <span className="font-bold text-destructive">*</span>
                <span>
                  A 50% advance payment is required once the project scope, requirements,
                  and demo direction are approved. The remaining 50% is payable upon
                  project completion, before final delivery and handover.
                </span>
              </p>
            </form>

            <div className="lg:sticky lg:top-6 lg:self-start">
              <EstimatePanel quote={quote} isCustom={isCustom} />
            </div>
          </div>
        )}
      </div>
    </main>
  )
}

function StepDot({ label, active, done }: { label: string; active: boolean; done: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={cn(
          "grid size-6 place-items-center rounded-full border text-xs font-medium",
          active && "border-primary bg-primary text-primary-foreground",
          done && "border-foreground bg-foreground text-background",
          !active && !done && "text-muted-foreground",
        )}
      >
        {done ? "✓" : label.charAt(0)}
      </span>
      <span className={cn("hidden sm:inline", !active && !done && "text-muted-foreground")}>
        {label}
      </span>
    </div>
  )
}

function Line() {
  return <span className="h-px flex-1 bg-border" />
}

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold" htmlFor={name}>
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="h-10 w-full rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  )
}
