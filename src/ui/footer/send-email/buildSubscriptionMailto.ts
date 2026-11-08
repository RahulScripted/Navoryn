export const SUBSCRIPTION_RECIPIENT = "navoryn.studio@gmail.com"

const SUBJECT = "NAVORYN Newsletter Subscription Request"

export function isValidEmail(email: string): boolean {
  const value = email.trim()
  if (!value) return false
  return /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/.test(value)
}

export function buildSubscriptionMailto(email: string): string {
  const cleanEmail = email.trim()

  const body = [
    "Hello NAVORYN Team,",
    "",
    "I would like to subscribe to NAVORYN's monthly project updates and newsletter.",
    "",
    "Please add the following email address to your mailing list:",
    "",
    `Email Address: ${cleanEmail}`,
    "",
    "I look forward to receiving updates about your latest projects, services, and digital experiences.",
    "",
    "Thank you,",
    "NAVORYN Website Subscriber",
  ].join("\n")

  const params = new URLSearchParams({
    subject: SUBJECT,
    body,
  })

  return `mailto:${SUBSCRIPTION_RECIPIENT}?${params.toString().replace(/\+/g, "%20")}`
}
