import { useId, type FormEvent } from "react"
import { Button } from "@/components/pricing/components/Button"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { BUDGET_OPTIONS, SERVICE_OPTIONS, whatsappUrl } from "../data/contact"
import type { useEnquiryForm } from "../hooks/useEnquiryForm"
import { CONTROL, Field } from "./Field"
import { SelectField } from "./SelectField"

type Form = ReturnType<typeof useEnquiryForm>

interface ContactFormProps {
  form: Form
  idPrefix: string
  onSubmit: (honeypot: boolean) => void
}

export function ContactForm({ form, idPrefix, onSubmit }: ContactFormProps) {
  const { values, errors, status, locked, serviceLabel, setField, blurField } = form
  const sending = status === "sending"
  const budgetOptions = BUDGET_OPTIONS.map((label) => ({ id: label, label }))
  const trapId = useId()

  const handle = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const trap = e.currentTarget.elements.namedItem("botcheck") as HTMLInputElement | null
    onSubmit(Boolean(trap?.checked))
  }

  const describe = (field: keyof typeof errors) => (errors[field] ? `${idPrefix}-${field}-error` : undefined)

  return (
    <div className="cursor-target relative isolate flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground sm:p-8">
      <SpotlightLayer />
      <form onSubmit={handle} noValidate className="relative z-10 flex flex-1 flex-col" aria-labelledby={`${idPrefix}-form-title`}>
        <div className="mb-6">
          <h3 id={`${idPrefix}-form-title`} className="text-xl font-bold tracking-tight">
            Start your project enquiry
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">Tell us a little about what you need.</p>
        </div>

        {/* Honeypot: hidden from people, bots tick it. */}
        <input id={trapId} type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

        <div className="grid gap-x-5 sm:grid-cols-2">
          <Field id={`${idPrefix}-name`} label="Full name" required error={errors.name}>
            <input
              id={`${idPrefix}-name`}
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Jane Doe"
              value={values.name}
              onChange={(e) => setField("name", e.target.value)}
              onBlur={() => blurField("name")}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={describe("name")}
              className={CONTROL}
            />
          </Field>
          <Field id={`${idPrefix}-email`} label="Email address" required error={errors.email}>
            <input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              autoComplete="email"
              placeholder="jane@company.com"
              value={values.email}
              onChange={(e) => setField("email", e.target.value)}
              onBlur={() => blurField("email")}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describe("email")}
              className={CONTROL}
            />
          </Field>
        </div>

        <div className="grid gap-x-5 sm:grid-cols-2">
          <SelectField
            id={`${idPrefix}-service`}
            label="Service you're interested in"
            required
            value={values.service}
            options={SERVICE_OPTIONS}
            placeholder="Select a service"
            locked={locked}
            error={errors.service}
            onChange={(value) => setField("service", value)}
            onBlur={() => blurField("service")}
          />
          <SelectField
            id={`${idPrefix}-budget`}
            label="Estimated project budget"
            value={values.budget}
            options={budgetOptions}
            onChange={(value) => setField("budget", value)}
          />
        </div>

        <Field id={`${idPrefix}-details`} label="Tell us about your project" required grow error={errors.details}>
          <textarea
            id={`${idPrefix}-details`}
            name="details"
            rows={5}
            placeholder="What are you looking to build? Goals, features, timeline..."
            value={values.details}
            onChange={(e) => setField("details", e.target.value)}
            onBlur={() => blurField("details")}
            aria-invalid={Boolean(errors.details)}
            aria-describedby={describe("details")}
            className={`${CONTROL} min-h-32 flex-1 resize-none`}
          />
        </Field>

        {status === "error" && (
          <p role="alert" className="mb-4 rounded-lg border border-destructive/40 bg-destructive/5 px-3.5 py-2.5 text-sm text-destructive">
            We couldn&apos;t send your enquiry. Please try again, or{" "}
            <a href={whatsappUrl(serviceLabel)} target="_blank" rel="noopener noreferrer" className="cursor-target font-medium underline underline-offset-2">
              message us on WhatsApp
            </a>
            .
          </p>
        )}

        <Button type="submit" size="lg" disabled={sending} className="cursor-target w-full">
          {sending ? "Sending…" : "Send Project Enquiry"}
        </Button>
      </form>
    </div>
  )
}
