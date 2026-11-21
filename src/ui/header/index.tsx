import { useEffect, useState } from "react"
import { createPortal } from "react-dom"
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
import { SvgTextDraw } from "@/utilities/SvgTextDraw"
import { RollText } from "@/utilities/RollText"
import { ComingSoon } from "@/ui/header/components/ComingSoon"
import { ContactButton } from "@/ui/header/components/ContactButton"
import { CurvedMenu } from "@/ui/header/components/CurvedMenu"
import { NavDropdown } from "@/ui/header/components/NavDropdown"
import { ABOUT_LINK, SERVICE_LINKS } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"
import { useScroll } from "@/ui/header/hooks/useScroll"

export default function Header() {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
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
        "fixed inset-x-0 top-0 z-[100] mx-auto w-full max-w-full border-b border-transparent text-foreground transition-all duration-300 ease-out md:rounded-md md:border",
        (scrolled || open) && "border-border bg-background/80 backdrop-blur-lg",
        scrolled && !open && "md:top-4 md:max-w-4xl md:shadow-lg md:shadow-black/5",
      )}
    >
      <nav
        className={cn(
          "flex h-16 w-full items-center justify-between px-(--page-x) transition-all duration-300 ease-out",
          scrolled && "md:h-14 md:px-3",
        )}
      >
        <a
          href="/"
          aria-label="Navoryn home"
          onClick={(e) => goToSection(e, "/", navigate, close)}
          className="cursor-target group rounded-md p-1.5"
        >
          <NavorynMark className="size-8 transition-transform duration-300 group-hover:scale-110" />
        </a>
        <div
          aria-hidden={scrolled}
          className={cn(
            "mr-auto flex items-center gap-3 overflow-hidden whitespace-nowrap transition-all duration-300",
            scrolled ? "max-w-0 -translate-x-2 opacity-0" : "max-w-xs translate-x-0 opacity-100",
          )}
        >
          <span className="h-8 w-px bg-foreground/60" />
          <div className="flex flex-col gap-1">
            <SvgTextDraw className="h-3 sm:h-3.5" strokeWidth={9} speed={1.4}>
              WE DESIGN
            </SvgTextDraw>
            <SvgTextDraw className="h-3 sm:h-3.5" strokeWidth={9} speed={1.4} delay={0.8}>
              WHAT'S NEXT
            </SvgTextDraw>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
        <NavigationMenu viewport={false} className="flex" delayDuration={80} skipDelayDuration={400}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <a
                  href={ABOUT_LINK.href}
                  onClick={(e) => goToSection(e, ABOUT_LINK.href, navigate)}
                  className="group/roll cursor-target inline-flex h-9 items-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <RollText>{ABOUT_LINK.title}</RollText>
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
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
          </NavigationMenuList>
        </NavigationMenu>
        <ContactButton />
        </div>
      </nav>

      <CurvedMenu open={open} onClose={close} />
      {createPortal(
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen((v) => !v)}
          className="cursor-target fixed top-3 right-4 z-[102] rounded-full bg-background/90 backdrop-blur-lg md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-6" duration={500} />
        </Button>,
        document.body,
      )}
    </header>
  )
}
