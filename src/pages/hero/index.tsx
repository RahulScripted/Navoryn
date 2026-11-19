import HeroFrame from "@/components/hero"

export default function Hero() {
  return (
    <section id="home" aria-label="Introduction" className="-mx-(--page-x) m-0 w-[calc(100%+2*var(--page-x))] bg-background p-0 text-foreground">
      <HeroFrame />
    </section>
  )
}
