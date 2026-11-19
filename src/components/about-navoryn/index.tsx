import { Link } from "react-router-dom"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import { CardShell } from "@/components/what-we-do/components/card/CardShell"
import { LensReel } from "./components/LensReel"
import { RollText } from "@/utilities/RollText"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import { ABOUT_HERO, ABOUT_INTRO } from "./data/about"

export default function AboutNavoryn() {
  return (
    <div className="flex flex-col">
      <section className="pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="space-y-8">
          <div className="cursor-target relative isolate h-[240px] overflow-hidden rounded-[24px] border bg-muted/60 md:h-[460px]">
            <SpotlightLayer />
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-12">
            <h1 className="text-3xl leading-snug font-bold tracking-tight md:text-4xl">
              {ABOUT_HERO.titleLead} <span className="text-primary">{ABOUT_HERO.titleAccent}</span>{" "}
              <span className="text-muted-foreground">{ABOUT_HERO.titleRest}</span>
            </h1>
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-pretty text-muted-foreground sm:text-lg">
                {ABOUT_HERO.description}
              </p>
              <Link
                to={ABOUT_HERO.cta.href}
                className="group/roll cursor-target flex w-fit items-center justify-between gap-4 rounded-xl bg-primary p-1.5 pl-4 text-primary-foreground transition-transform duration-300 ease-out hover:-translate-y-0.5"
              >
                <RollText>
                  <span className="text-[0.65rem] font-semibold tracking-[0.12em] uppercase">
                    {ABOUT_HERO.cta.label}
                  </span>
                </RollText>
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-background text-foreground">
                  <RollText>
                    <ArrowTopRightIcon className="size-4" aria-hidden="true" />
                  </RollText>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-20 md:pb-28">
        <div className="space-y-12">
          <div className="grid gap-6 text-center md:grid-cols-2 md:gap-12 md:text-left">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">{ABOUT_INTRO.title}</h2>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">{ABOUT_INTRO.description}</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="cursor-target relative isolate min-h-[300px] overflow-hidden rounded-[24px] border bg-muted/60">
              <SpotlightLayer />
            </div>
            <div className="grid gap-6">
              {ABOUT_INTRO.cards.map((card) => (
                <CardShell
                  key={card.title}
                  title={card.title}
                  description={card.description}
                  media={card.reel ? <LensReel /> : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
