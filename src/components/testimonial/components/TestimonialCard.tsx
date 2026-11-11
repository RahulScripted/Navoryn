import type { ComponentProps } from "react"
import { cn } from "@/lib/utils"
import type { Testimonial } from "@/types/testimonial"
import { Avatar, AvatarFallback, AvatarImage } from "./Avatar"
import { SpotlightLayer } from "@/utilities/SpotlightCard"

type TestimonialCardProps = ComponentProps<"figure"> & {
  testimonial: Testimonial
}

export function TestimonialCard({
  testimonial,
  className,
  ...props
}: TestimonialCardProps) {
  const { quote, image, name, role, company } = testimonial
  return (
    <figure
      className={cn(
        "cursor-target relative isolate w-full rounded-3xl border bg-card p-8 shadow-foreground/10 shadow-lg dark:bg-card/20 md:max-w-none",
        className,
      )}
      {...props}
    >
      <SpotlightLayer />
      <blockquote>{quote}</blockquote>
      <figcaption className="mt-5 flex items-center gap-2">
        <Avatar className="size-8 rounded-full">
          <AvatarImage alt={`${name}'s profile picture`} src={image} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <cite className="font-medium not-italic leading-5 tracking-tight">
            {name}
          </cite>
          <span className="text-muted-foreground text-sm leading-5 tracking-tight">
            {role}
            {company && `, ${company}`}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}
