import { ArrowUpRight } from "lucide-react"
import { RollText } from "@/utilities/RollText"
import { CardNotch } from "./CardNotch"
import { NOTCH } from "./notch"

interface ServiceCardProps {
  title: string
}

export function ServiceCard({ title }: ServiceCardProps) {
  return (
    <article className="flex min-w-0 flex-col">
      <div className="relative aspect-[5/4] w-full sm:aspect-[16/9] lg:aspect-[5/2] xl:aspect-[8/3]">
        <div className="absolute inset-0 overflow-hidden rounded-[28px] border border-border bg-muted" />
        <CardNotch />
        <button
          type="button"
          aria-label={`Explore ${title}`}
          className="group/roll cursor-target absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-primary text-primary-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          style={{ width: NOTCH.disc, height: NOTCH.disc }}
        >
          <RollText>
            <ArrowUpRight className="size-5" aria-hidden="true" />
          </RollText>
        </button>
      </div>

      <h3 className="mt-5 text-xl font-medium tracking-tight text-foreground sm:text-2xl">{title}</h3>
    </article>
  )
}
