export const SECTION_BY_SLUG: Record<string, string> = {
  about: "about",
  services: "what-we-do",
  technologies: "technology",
  testimonials: "testimonials",
  faq: "faq",
}

export function isSectionPath(pathname: string) {
  return pathname.slice(1) in SECTION_BY_SLUG
}

export function scrollToSection(id: string | undefined, behavior: ScrollBehavior = "smooth") {
  if (!id) return window.scrollTo({ top: 0, behavior })
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior })
}

export function goToSection(
  e: { preventDefault: () => void },
  href: string,
  navigate: (to: string) => void,
  after?: () => void,
) {
  if (!href.startsWith("/")) return
  e.preventDefault()
  after?.()
  window.setTimeout(() => {
    if (window.location.pathname === href) scrollToSection(SECTION_BY_SLUG[href.slice(1)])
    else navigate(href)
  }, 60)
}
