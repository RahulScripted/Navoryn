import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { goToSection } from "@/lib/sections"
import { RollText } from "@/utilities/RollText"
import { CTA } from "../data/cta"

export function CtaLink() {
  const navigate = useNavigate()
  return (
    <a
      href={CTA.href}
      onClick={(e) => goToSection(e, CTA.href, navigate)}
      className="group/roll cursor-target flex w-full max-w-md items-center justify-between gap-4 rounded-2xl bg-primary p-2 pl-5 text-primary-foreground transition-transform duration-300 ease-out hover:-translate-y-0.5"
    >
      <RollText>
        <span className="flex flex-col text-left text-[0.66rem] leading-snug font-semibold tracking-[0.06em] uppercase sm:text-[0.72rem] sm:tracking-[0.12em]">
          {CTA.linkLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </span>
      </RollText>
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
        <RollText>
          <ArrowTopRightIcon className="size-5" aria-hidden="true" />
        </RollText>
      </span>
    </a>
  )
}
