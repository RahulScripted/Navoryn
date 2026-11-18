import { useNavigate } from "react-router-dom"
import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { PackageCard } from "@/components/pricing/components/PackageCard"
import { SlideButton } from "@/components/pricing/components/SlideButton"
import { Badge } from "@/components/pricing/components/Badge"
import { PACKAGES } from "@/components/pricing/data/pricing"
import customImage from "@/asset/webps/home/miscellaneous/custom.webp"
import { useReveal } from "@/utilities/ScrollReveal/components/block/useReveal"
import { SpotlightLayer } from "@/utilities/SpotlightCard"

export default function Pricing() {
  const navigate = useNavigate()
  const gridRef = useReveal<HTMLDivElement>({ children: true, y: 40, stagger: 0.12 })
  const customRef = useReveal<HTMLDivElement>({ y: 40 })
  const imageRef = useReveal<HTMLImageElement>({ y: 0, scale: 0.85, blur: 12, delay: 0.15 })
  const termsRef = useReveal<HTMLParagraphElement>({ y: 16, blur: 4 })

  return (
    <section id="pricing" className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Pricing That Works for You"
        description="Every project is unique, and so is its budget. Choose the pages, features, and integrations you need, customize your requirements, and get a transparent estimate tailored to your vision. Have a budget in mind? Let's find the right solution together."
        mobileDescription="Choose your pages, features, and integrations to get a custom estimate that fits your needs and budget."
        tabletDescription="Choose your pages, features, and integrations to receive a transparent estimate tailored to your project scope and budget."
      />

      <div className="w-full space-y-10">
        <div ref={gridRef} className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div
          ref={customRef}
          className="cursor-target relative isolate flex flex-col gap-6 rounded-xl border bg-background p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8"
        >
          <SpotlightLayer />
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:items-center sm:text-left">
            <img
              ref={imageRef}
              src={customImage}
              alt="Custom build"
              width={1229}
              height={1280}
              loading="lazy"
              decoding="async"
              className="size-28 shrink-0 rounded-xl object-cover [image-rendering:auto] sm:size-24 lg:size-32"
            />
            <div className="min-w-0">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <h3 className="text-lg font-bold tracking-tight">Build your own</h3>
                <Badge variant="secondary">Custom</Badge>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                <span className="sm:hidden">
                  Pick pages, sections, and from 60+ add-ons. See your estimate live, then
                  book a call to lock the scope.
                </span>
                <span className="hidden sm:inline">
                  Choose your pages, customize sections, and explore 60+ add-ons to build a
                  website that fits your needs. Get an instant price estimate as you make
                  selections, then schedule a consultation with our team to discuss your
                  requirements, finalize the project scope, and plan the next steps.
                </span>
              </p>
            </div>
          </div>
          <SlideButton
            className="w-full shrink-0 lg:!w-80"
            label="Build Your Custom Quote"
            onComplete={() => navigate("/book-call?plan=custom")}
          />
        </div>

        <p ref={termsRef} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
          <span className="font-bold text-destructive">*</span>
          <span>
            <span className="font-semibold text-foreground">Payment Terms:</span> A 50%
            advance payment is required once the project scope, requirements, and demo
            direction are approved. The remaining 50% is payable upon project completion,
            before final delivery and handover.
          </span>
        </p>
      </div>
    </section>
  )
}
