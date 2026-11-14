import { useNavigate } from "react-router-dom"
import { FOOTER_COLUMNS } from "@/ui/footer/data/footer"
import { goToSection } from "@/lib/sections"
import { RollText } from "@/utilities/RollText"
import { ComingSoon } from "@/ui/header/components/ComingSoon"

export function FooterNav() {
  const navigate = useNavigate()
  return (
    <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-4">
      {FOOTER_COLUMNS.map((column) => (
        <div key={column.title} className="min-w-0">
          <h3 className="text-sm font-medium">{column.title}</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {column.links.map((link) => (
              <li key={link.label}>
                {link.disabled ? (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed flex-wrap items-center gap-2 text-sm text-muted-foreground opacity-60"
                  >
                    {link.label}
                    <ComingSoon />
                  </span>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => goToSection(e, link.href, navigate)}
                    className="group/roll cursor-target text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <RollText>{link.label}</RollText>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </nav>
  )
}
