export type CookieConsent = "all" | "declined"
export const CONSENT_COOKIE = "navoryn_cookie_consent"
const ONE_YEAR = 60 * 60 * 24 * 365
export function getCookieConsent(): CookieConsent | null {
  if (typeof document === "undefined") return null
  const match = document.cookie
    .split("; ")
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE}=`))
  const value = match?.split("=")[1]
  return value === "all" || value === "declined" ? value : null
}
export function setCookieConsent(value: CookieConsent) {
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE}=${value}; Max-Age=${ONE_YEAR}; Path=/; SameSite=Lax${secure}`
}
