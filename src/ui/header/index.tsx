import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/ui/header/components/button"
import { MenuToggleIcon } from "@/ui/header/components/menu-toggle-icon"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/ui/header/components/navigation-menu"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"
import { ComingSoon } from "@/ui/header/components/ComingSoon"
import { MobileMenu } from "@/ui/header/components/MobileMenu"
import { MobileAccordion } from "@/ui/header/components/MobileAccordion"
import { NavDropdown } from "@/ui/header/components/NavDropdown"
import { NavLinkItem } from "@/ui/header/components/NavLinkItem"
import { COMPANY_LINKS, PORTFOLIO_LINK, PRICING_LINK, SERVICE_LINKS, CONTACT_LINK } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"
import { useScroll } from "@/ui/header/hooks/useScroll"


export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [section, setSection] = useState<"company" | "services" | null>(null)
  const scrolled = useScroll(10)
  const close = () => setOpen(false)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[100] w-full border-b border-transparent text-foreground transition-colors duration-300",
        (scrolled || open) && "border-border bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="flex h-16 w-full items-center justify-between px-(--page-x)">
        <a
          href="/"
          aria-label="Navoryn home"
          onClick={(e) => goToSection(e, "/", navigate, close)}
          className="cursor-target group rounded-md p-1.5"
        >
          <NavorynMark className="size-8 transition-transform duration-300 group-hover:scale-110" />
        </a>

        <NavigationMenu viewport={false} className="hidden md:flex" delayDuration={80} skipDelayDuration={400}>
          <NavigationMenuList>
            <NavDropdown label="Company" links={COMPANY_LINKS} widthClass="w-[26rem]" />
            <NavDropdown label="Services" links={SERVICE_LINKS} widthClass="w-[32rem]" />
            <NavigationMenuItem>
              <span
                aria-disabled="true"
                className="inline-flex h-9 cursor-not-allowed items-center gap-2 rounded-md px-4 py-2 text-sm font-medium opacity-50"
              >
                Portfolio
                <ComingSoon />
              </span>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/pricing"
                  onClick={(e) => goToSection(e, "/pricing", navigate)}
                  className="group/roll cursor-target inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <RollText>Pricing</RollText>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/contact"
                  onClick={(e) => goToSection(e, "/contact", navigate)}
                  className="group/roll cursor-target inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <RollText>Contact Us</RollText>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          size="icon"
          variant="ghost"
          onClick={() => setOpen((v) => !v)}
          className="cursor-target md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <MobileMenu open={open} className="flex flex-col gap-1 overflow-y-auto">
        <MobileAccordion
          id="mobile-company"
          label="Company"
          links={COMPANY_LINKS}
          open={section === "company"}
          onToggle={() => setSection((v) => (v === "company" ? null : "company"))}
          onNavigate={close}
        />
        <MobileAccordion
          id="mobile-services"
          label="Services"
          links={SERVICE_LINKS}
          open={section === "services"}
          onToggle={() => setSection((v) => (v === "services" ? null : "services"))}
          onNavigate={close}
        />
        <NavLinkItem {...PORTFOLIO_LINK} plain className="px-3 py-3 text-base" />
        <NavLinkItem {...PRICING_LINK} onNavigate={close} plain className="px-3 py-3 text-base" />
        <NavLinkItem {...CONTACT_LINK} onNavigate={close} plain className="px-3 py-3 text-base" />
      </MobileMenu>
    </header>
  )
}
