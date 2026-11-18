import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { Button } from "@/ui/header/components/button"
import { CONTACT_LINK } from "@/ui/header/data/header"
import { goToSection } from "@/ui/header/goToSection"
import { cn } from "@/lib/utils"
import { RollText } from "@/utilities/RollText"

interface ContactButtonProps {
  size?: "sm" | "lg"
  className?: string
  onNavigate?: () => void
}

export function ContactButton({ size = "sm", className, onNavigate }: ContactButtonProps) {
  const navigate = useNavigate()
  return (
    <Button asChild size={size} className={className}>
      <a
        href={CONTACT_LINK.href}
        onClick={(e) => goToSection(e, CONTACT_LINK.href, navigate, onNavigate)}
        className={cn("group/roll cursor-target gap-2", size === "sm" && "px-4")}
      >
        <RollText>{CONTACT_LINK.title}</RollText>
        <RollText>
          <ArrowTopRightIcon className="size-4" aria-hidden="true" />
        </RollText>
      </a>
    </Button>
  )
}
