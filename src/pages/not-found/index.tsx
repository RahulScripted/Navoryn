import { BackgroundStripes } from "@/components/not-found/components/BackgroundStripes"
import { NotFoundMessage } from "@/components/not-found/components/NotFoundMessage"
import { UnpluggedIllustration } from "@/components/not-found/components/UnpluggedIllustration"

export default function NotFound() {
  return (
    <main className="relative flex min-h-svh flex-col overflow-hidden bg-background text-foreground">
      <BackgroundStripes />

      <h1 className="sr-only">404 error. Sorry, the page was not found.</h1>

      <p
        aria-hidden="true"
        className="page-px relative z-0 select-none pt-[12vh] text-center text-[clamp(4.5rem,19vw,15rem)] font-black uppercase leading-[0.85] tracking-tighter text-foreground/10"
      >
        404
      </p>

      <div className="relative mt-auto lg:-mt-[6vw]">
        <NotFoundMessage />
        <UnpluggedIllustration />
      </div>
    </main>
  )
}
