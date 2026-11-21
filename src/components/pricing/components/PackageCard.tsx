import { CheckIcon } from "@radix-ui/react-icons"
import { useNavigate } from "react-router-dom"
import { cn } from "@/lib/utils"
import { Badge } from "@/utilities/Badge"
import { BorderTrail } from "./BorderTrail"
import { Glitter } from "./Glitter"
import { SlideButton } from "./SlideButton"
import { SpotlightLayer } from "@/utilities/SpotlightCard"
import type { PricingPackage } from "@/types/pricing"

export function PackageCard({ pkg }: { pkg: PricingPackage }) {
  const navigate = useNavigate()

  return (
    <div
      className={cn(
        "cursor-target relative isolate flex h-full flex-col rounded-xl border bg-background p-6",
        pkg.featured && "border-foreground/30 shadow-lg",
      )}
    >
      {pkg.featured && (
        <BorderTrail
          size={90}
          style={{
            boxShadow:
              "0px 0px 60px 30px rgb(255 255 255 / 25%), 0 0 100px 60px rgb(0 0 0 / 25%)",
          }}
        />
      )}

      <SpotlightLayer />

      <div className="flex items-center justify-between">
        <span className="relative inline-flex isolate">
          <Badge variant={pkg.featured ? "default" : "secondary"}>{pkg.badge}</Badge>
          {pkg.glitter && <Glitter />}
        </span>
        <span className="text-sm text-muted-foreground">{pkg.pages}</span>
      </div>

      <div className="mt-5">
        <span className="text-2xl font-extrabold tracking-tighter text-foreground md:text-3xl">
          {pkg.price}
        </span>
      </div>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Delivery within <span className="font-medium text-foreground">{pkg.timeline}</span>
      </p>

      <ul className="mt-6 flex-1 space-y-2.5">
        {pkg.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckIcon className="mt-0.5 size-4 shrink-0 text-foreground" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>

      <SlideButton
        className="mt-7"
        label={pkg.id === "promax" ? "Request a Quote" : "Choose this plan"}
        onComplete={() => navigate(`/book-call?plan=${pkg.id}`)}
      />
    </div>
  )
}
