import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"
import { ComingSoon } from "@/ui/header/components/ComingSoon"
import { MobileMenu } from "@/ui/header/components/MobileMenu"
import { NavLinkItem } from "@/ui/header/components/NavLinkItem"
import { COMPANY_LINKS, PORTFOLIO_LINK, PRICING_LINK, SERVICES_LINK } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"
import { useScroll } from "@/ui/header/hooks/useScroll"

const noHover = (e: { preventDefault: () => void }) => e.preventDefault()
const mobileRow = "flex w-full items-center gap-2 rounded-md px-3 py-3 text-base font-medium"

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [companyOpen, setCompanyOpen] = useState(false)
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
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger
                className="group/roll cursor-target bg-transparent"
                onPointerEnter={noHover}
                onPointerMove={noHover}
                onPointerLeave={noHover}
              >
                <RollText>Company</RollText>
              </NavigationMenuTrigger>
              <NavigationMenuContent
                onPointerEnter={noHover}
                onPointerLeave={noHover}
                className="top-full left-1/2 mt-2 -translate-x-1/2 rounded-md bg-background p-1 text-foreground duration-300 ease-out data-[state=closed]:animate-out data-[state=open]:animate-in data-[state=closed]:fade-out data-[state=open]:fade-in data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
              >
                <ul className="grid w-[26rem] grid-cols-2 gap-1">
                  {COMPANY_LINKS.map((item) => (
                    <li key={item.title}>
                      <NavLinkItem {...item} />
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href="/services"
                  onClick={(e) => goToSection(e, "/services", navigate)}
                  className="group/roll cursor-target inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <RollText>Services</RollText>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>

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
        <button
          type="button"
          aria-expanded={companyOpen}
          aria-controls="mobile-company"
          onClick={() => setCompanyOpen((v) => !v)}
          className={cn(mobileRow, "group/roll justify-between")}
        >
          <RollText>Company</RollText>
          <ChevronDownIcon
            className={cn("size-4 transition-transform duration-300", companyOpen && "rotate-180")}
          />
        </button>
        <div
          id="mobile-company"
          className={cn(
            "grid transition-[grid-template-rows] duration-300 ease-out",
            companyOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          )}
        >
          <ul className="grid min-h-0 grid-cols-1 gap-1 overflow-hidden pl-6">
            {COMPANY_LINKS.map((l) => (
              <li key={l.title}>
                <NavLinkItem {...l} onNavigate={close} plain />
              </li>
            ))}
          </ul>
        </div>
        <NavLinkItem {...SERVICES_LINK} onNavigate={close} plain className="px-3 py-3 text-base" />
        <NavLinkItem {...PORTFOLIO_LINK} plain className="px-3 py-3 text-base" />
        <NavLinkItem {...PRICING_LINK} onNavigate={close} plain className="px-3 py-3 text-base" />
      </MobileMenu>
    </header>
  )
}
