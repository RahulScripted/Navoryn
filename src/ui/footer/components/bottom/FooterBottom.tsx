import { FOOTER_SOCIALS } from "@/ui/footer/data/footer"

export function FooterBottom() {
  return (
    <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t py-8 sm:flex-row sm:items-center">
      <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:gap-6">
        <span>© {new Date().getFullYear()} NAVORYN. All rights reserved.</span>
        <a
          href="#"
          className="cursor-target inline-flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <span aria-hidden className="relative flex size-2 shrink-0">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-full rounded-full bg-emerald-500" />
          </span>
          Available for new projects
        </a>
      </div>
      <div className="flex w-full items-center justify-between gap-1 sm:w-auto sm:justify-start lg:gap-2">
        {FOOTER_SOCIALS.map(({ name, icon: Icon }) => (
          <a
            key={name}
            href="#"
            aria-label={name}
            className="cursor-target inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground lg:size-12"
          >
            <Icon className="size-4 lg:size-6" />
          </a>
        ))}
      </div>
    </div>
  )
}
