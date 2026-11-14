import type { MouseEvent } from "react"
import type { NavigateFunction } from "react-router-dom"

/** Navigates to a clean section URL (e.g. /pricing). The home page scrolls to the section. */
export function goToSection(
  e: MouseEvent<HTMLElement>,
  href: string,
  navigate: NavigateFunction,
  after?: () => void,
) {
  if (!href.startsWith("/")) return
  e.preventDefault()
  after?.()
  // Let the mobile menu release its body scroll lock first.
  window.setTimeout(() => navigate(href), 60)
}
