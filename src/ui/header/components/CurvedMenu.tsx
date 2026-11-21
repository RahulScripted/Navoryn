import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
import { useNavigate } from "react-router-dom"
import { AnimatePresence, motion } from "motion/react"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { FOOTER_SOCIALS } from "@/ui/footer/data/footer"
import { ComingSoon } from "@/ui/header/components/ComingSoon"
import { ContactButton } from "@/ui/header/components/ContactButton"
import { ABOUT_LINK, PORTFOLIO_LINK, PRICING_LINK, SERVICE_LINKS, type LinkItem } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"
const EASE = [0.76, 0, 0.24, 1] as const
const SLIDE = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: 0, transition: { duration: 0.8, ease: EASE } },
  exit: { x: "calc(100% + 100px)", transition: { duration: 0.8, ease: EASE } },
}
const CURVE = {
  initial: { d: "M100 0 L100 100 Q-100 50 100 0 Z" },
  enter: { d: "M100 0 L100 100 Q100 50 100 0 Z", transition: { duration: 1, ease: EASE } },
  exit: { d: "M100 0 L100 100 Q-100 50 100 0 Z", transition: { duration: 0.8, ease: EASE } },
}
const ITEM = {
  initial: { opacity: 0, x: 40 },
  enter: (i: number) => ({ opacity: 1, x: 0, transition: { delay: 0.35 + i * 0.07, duration: 0.5, ease: EASE } }),
  exit: { opacity: 0, transition: { duration: 0.2 } },
}
const ROW = "flex w-full items-baseline gap-3 border-b border-border py-4 text-left uppercase"
const LABEL = "text-3xl font-extralight tracking-tight"
interface CurvedMenuProps {
  open: boolean
  onClose: () => void
}
function Row({ link, index, onClose }: { link: LinkItem; index: number; onClose: () => void }) {
  const navigate = useNavigate()
  const content = (
    <>
      <span className={LABEL}>{link.title}</span>
      {link.disabled && <ComingSoon />}
    </>
  )
  if (link.disabled) {
    return (
      <motion.div custom={index} variants={ITEM} aria-disabled="true" className={cn(ROW, "cursor-not-allowed opacity-50")}>
        {content}
      </motion.div>
    )
  }
  return (
    <motion.a
      custom={index}
      variants={ITEM}
      href={link.href}
      onClick={(e) => goToSection(e, link.href, navigate, onClose)}
      className={cn(ROW, "cursor-target")}
    >
      {content}
    </motion.a>
  )
}
export function CurvedMenu({ open, onClose }: CurvedMenuProps) {
  const navigate = useNavigate()
  const [servicesOpen, setServicesOpen] = useState(false)
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose()
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onClose])
  if (typeof document === "undefined") return null
  return createPortal(
    <AnimatePresence onExitComplete={() => setServicesOpen(false)}>
      {open && (
        <>
          <motion.div
            key="overlay"
            aria-hidden="true"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] bg-foreground/40 backdrop-blur-sm md:hidden"
          />
          <motion.nav
            key="drawer"
            id="mobile-menu"
            aria-label="Mobile"
            variants={SLIDE}
            initial="initial"
            animate="enter"
            exit="exit"
            className="fixed top-0 right-0 z-[101] h-[100dvh] w-[85vw] max-w-sm bg-background text-foreground md:hidden"
          >
            <div className="flex h-full flex-col overflow-y-auto px-8 pt-16 pb-6">
              <Row link={ABOUT_LINK} index={1} onClose={onClose} />
              <motion.div custom={2} variants={ITEM}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  aria-controls="mobile-services"
                  onClick={() => setServicesOpen((v) => !v)}
                  className={cn(ROW, "cursor-target items-center border-t-0")}
                >
                  <span className={LABEL}>Services</span>
                  <ChevronDownIcon
                    className={cn("ml-auto size-5 self-center transition-transform duration-300", servicesOpen && "rotate-180")}
                  />
                </button>
                <div
                  id="mobile-services"
                  className={cn(
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    servicesOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <ul className="min-h-0 overflow-hidden">
                    {SERVICE_LINKS.map((link) => (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          tabIndex={servicesOpen ? 0 : -1}
                          onClick={(e) => goToSection(e, link.href, navigate, onClose)}
                          className="cursor-target block py-2 pl-8 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              <Row link={PORTFOLIO_LINK} index={3} onClose={onClose} />
              <Row link={PRICING_LINK} index={4} onClose={onClose} />
              <motion.div custom={5} variants={ITEM} className="mt-auto flex flex-col gap-5 pt-8">
                <ContactButton size="lg" className="w-full" onNavigate={onClose} />
                <div className="flex items-center justify-between px-1 text-muted-foreground">
                  {FOOTER_SOCIALS.map(({ name, icon: Icon }) => (
                    <a key={name} href="#" aria-label={name} className="cursor-target p-2 transition-colors hover:text-foreground">
                      <Icon className="size-5" />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute top-0 -left-[99px] h-full w-[100px] fill-background stroke-none"
            >
              <motion.path variants={CURVE} initial="initial" animate="enter" exit="exit" />
            </svg>
          </motion.nav>
        </>
      )}
    </AnimatePresence>,
    document.body,
  )
}
