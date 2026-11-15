import type { EnquiryErrors, EnquiryValues } from "../types/contact"

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export function validate(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {}
  const name = values.name.trim()
  const details = values.details.trim()

  if (!name) errors.name = "Please enter your full name."
  else if (name.length < 2) errors.name = "That name looks too short."
  else if (name.length > 80) errors.name = "Please keep it under 80 characters."

  if (!values.email.trim()) errors.email = "Please enter your email address."
  else if (!EMAIL.test(values.email.trim())) errors.email = "Please enter a valid email address."

  if (!values.service) errors.service = "Please choose a service."

  if (!details) errors.details = "Please tell us about your project."
  else if (details.length < 10) errors.details = "Add a few more details (10+ characters)."
  else if (details.length > 2000) errors.details = "Please keep it under 2000 characters."

  return errors
}
