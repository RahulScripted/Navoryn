export interface EnquiryValues {
  name: string
  email: string
  service: string
  budget: string
  details: string
}

export type EnquiryField = keyof EnquiryValues
export type EnquiryErrors = Partial<Record<EnquiryField, string>>

export type SubmitStatus = "idle" | "sending" | "error"

export interface EnquiryTicket {
  reference: string
  date: string
  name: string
  email: string
  serviceLabel: string
  budget: string
}
