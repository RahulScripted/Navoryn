import { useCallback } from "react"
import type { BookingContact } from "@/components/ui/illos-booking-card"

const ENDPOINT = "https://api.web3forms.com/submit"
const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

const when = new Intl.DateTimeFormat("en-GB", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
  hour: "numeric",
  minute: "2-digit",
  hour12: true,
  timeZoneName: "short",
})

/** Sends a call booking through the same Web3Forms key the contact form uses. */
export function useBookCall(planLabel: string, durationMinutes: number) {
  return useCallback(
    async (start: Date, contact: BookingContact) => {
      if (!ACCESS_KEY) {
        console.error("VITE_WEB3FORMS_KEY is not set. Add it to .env.local (see .env.example).")
        throw new Error("Missing Web3Forms key")
      }
      const end = new Date(start.getTime() + durationMinutes * 60_000)
      const data = new FormData()
      data.append("access_key", ACCESS_KEY)
      data.append("subject", `New call booking: ${when.format(start)} (${contact.name})`)
      data.append("from_name", "Navoryn website")
      data.append("name", contact.name)
      data.append("email", contact.email)
      data.append("plan", planLabel)
      data.append("call_start", when.format(start))
      data.append("call_end", when.format(end))
      data.append("call_start_iso", start.toISOString())
      data.append("message", `Call booked for ${when.format(start)} (${durationMinutes} min). Plan: ${planLabel}.`)
      const response = await fetch(ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: data })
      const result = (await response.json()) as { success?: boolean }
      if (!result.success) throw new Error("Web3Forms rejected the submission")
    },
    [planLabel, durationMinutes],
  )
}
