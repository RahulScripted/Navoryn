import { useCallback, useMemo, useState } from "react"
import { NOT_DECIDED, SERVICE_OPTIONS } from "../data/contact"
import { validate } from "../lib/validate"
import type { EnquiryErrors, EnquiryField, EnquiryTicket, EnquiryValues, SubmitStatus } from "../types/contact"

const ENDPOINT = "https://api.web3forms.com/submit"
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

const FIELD_ORDER: EnquiryField[] = ["name", "email", "service", "details"]

function makeReference() {
  const now = new Date()
  const stamp = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase()
  return `NVR-${stamp}-${rand}`
}

export function useEnquiryForm(idPrefix: string, lockedService?: string) {
  const initial = useMemo<EnquiryValues>(
    () => ({ name: "", email: "", service: lockedService ?? "", budget: NOT_DECIDED, details: "" }),
    [lockedService],
  )
  const [values, setValues] = useState<EnquiryValues>(initial)
  const [touched, setTouched] = useState<Set<EnquiryField>>(new Set())
  const [attempted, setAttempted] = useState(false)
  const [status, setStatus] = useState<SubmitStatus>("idle")

  const allErrors = useMemo(() => validate(values), [values])
  const errors = useMemo<EnquiryErrors>(() => {
    const shown: EnquiryErrors = {}
    for (const field of Object.keys(allErrors) as EnquiryField[]) {
      if (attempted || touched.has(field)) shown[field] = allErrors[field]
    }
    return shown
  }, [allErrors, attempted, touched])

  const setField = useCallback(
    (field: EnquiryField, value: string) => {
      if (field === "service" && lockedService) return
      setValues((prev) => ({ ...prev, [field]: value }))
    },
    [lockedService],
  )

  const blurField = useCallback((field: EnquiryField) => {
    setTouched((prev) => (prev.has(field) ? prev : new Set(prev).add(field)))
  }, [])

  const serviceLabel = SERVICE_OPTIONS.find((option) => option.id === values.service)?.label ?? ""

  const submit = useCallback(
    async (honeypot: boolean): Promise<EnquiryTicket | null> => {
      if (honeypot) return null
      setAttempted(true)
      const firstInvalid = FIELD_ORDER.find((field) => allErrors[field])
      if (firstInvalid) {
        document.getElementById(`${idPrefix}-${firstInvalid}`)?.focus()
        return null
      }
      if (!ACCESS_KEY) {
        console.error("VITE_WEB3FORMS_KEY is not set. Add it to .env.local (see .env.example).")
        setStatus("error")
        return null
      }

      setStatus("sending")
      const data = new FormData()
      data.append("access_key", ACCESS_KEY)
      data.append("subject", `New project enquiry: ${serviceLabel} (${values.name.trim()})`)
      data.append("from_name", "Navoryn website")
      data.append("name", values.name.trim())
      data.append("email", values.email.trim())
      data.append("service", serviceLabel)
      data.append("budget", values.budget)
      data.append("message", values.details.trim())

      try {
        const response = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data })
        const result = (await response.json()) as { success?: boolean }
        if (!result.success) throw new Error("Web3Forms rejected the submission")
      } catch {
        setStatus("error")
        return null
      }

      const ticket: EnquiryTicket = {
        reference: makeReference(),
        date: new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" }),
        name: values.name.trim(),
        email: values.email.trim(),
        serviceLabel,
        budget: values.budget,
      }
      setValues(initial)
      setTouched(new Set())
      setAttempted(false)
      setStatus("idle")
      return ticket
    },
    [allErrors, idPrefix, initial, serviceLabel, values],
  )

  return { values, errors, status, serviceLabel, locked: Boolean(lockedService), setField, blurField, submit }
}
