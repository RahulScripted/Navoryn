export interface EnquiryValues {
  name: string
  email: string
  /** Service id (e.g. "web-development"), or "other". */
  service: string
  budget: string
  details: string
}

export type EnquiryField = keyof EnquiryValues
export type EnquiryErrors = Partial<Record<EnquiryField, string>>

export type SubmitStatus = "idle" | "sending" | "error"

/** What the thank-you ticket shows after a successful enquiry. */
export interface EnquiryTicket {
  reference: string
  date: string
  name: string
  email: string
  serviceLabel: string
  budget: string
}
