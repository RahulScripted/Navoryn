/** Clean URL slug (/pricing) -> id of the section on the home page. */
export const SECTION_BY_SLUG: Record<string, string> = {
  about: "about",
  services: "what-we-do",
  technologies: "technology",
  testimonials: "testimonials",
  pricing: "pricing",
  faq: "faq",
  contact: "contact",
}

export function isSectionPath(pathname: string) {
  return pathname.slice(1) in SECTION_BY_SLUG
}

/**
 * The page content lives in a fixed layer (RevealFooter), so scrollIntoView
 * does not move the window. A section's document offset is
 * rect.top + scrollY, because the layer's top is set to -scrollY.
 */
export function scrollToSection(id: string | undefined, behavior: ScrollBehavior = "smooth") {
  if (!id) return window.scrollTo({ top: 0, behavior })
  const el = document.getElementById(id)
  if (!el) return
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior })
}

/**
 * Click handler for in-app links such as /pricing. If the URL is already current the router
 * would do nothing, so scroll directly; otherwise navigate and let the home page scroll.
 */
export function goToSection(
  e: { preventDefault: () => void },
  href: string,
  navigate: (to: string) => void,
  after?: () => void,
) {
  if (!href.startsWith("/")) return
  e.preventDefault()
  after?.()
  // Let the mobile menu release its body scroll lock first.
  window.setTimeout(() => {
    // On a service page the contact form is right there (locked to that service): scroll to it
    // instead of leaving for the home page.
    const here = window.location.pathname
    const onHome = here === "/" || isSectionPath(here)
    if (href === "/contact" && !onHome && document.getElementById("contact")) {
      scrollToSection("contact")
      return
    }
    if (window.location.pathname === href) scrollToSection(SECTION_BY_SLUG[href.slice(1)])
    else navigate(href)
  }, 60)
}
