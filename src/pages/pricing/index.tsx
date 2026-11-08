import { SparklesIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"
import { SectionHeading } from "@/components/common/SectionHeading/SectionHeading"
import { PackageCard } from "@/components/pricing/components/PackageCard"
import { SlideButton } from "@/components/pricing/components/SlideButton"
import { Badge } from "@/components/pricing/components/Badge"
import { PACKAGES } from "@/components/pricing/data/pricing"

export default function Pricing() {
  const navigate = useNavigate()

  return (
    <section className="w-full overflow-x-hidden bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Pricing That Works for You"
        description="Every project is unique, and so is its budget. Choose the pages, features, and integrations you need, customize your requirements, and get a transparent estimate tailored to your vision. Have a budget in mind? Let's find the right solution together."
        mobileDescription="Choose your pages, features, and integrations to get a custom estimate that fits your needs and budget."
        tabletDescription="Choose your pages, features, and integrations to receive a transparent estimate tailored to your project scope and budget."
      />

      <div className="w-full space-y-10">
        <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        <div className="cursor-target flex flex-col gap-6 rounded-xl border bg-background p-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="flex min-w-0 items-start gap-4">
            <span className="grid size-11 shrink-0 place-items-center rounded-lg border">
              <SparklesIcon className="size-5" />
            </span>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold tracking-tight">Build your own</h3>
                <Badge variant="secondary">Custom</Badge>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Pick pages, sections, and from 60+ add-ons. See your estimate live, then
                book a call to lock the scope.
              </p>
            </div>
          </div>
          <SlideButton
            className="lg:!w-80"
            label="Build Your Custom Quote"
            onComplete={() => navigate("/book-call?plan=custom")}
          />
        </div>

        <p className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
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
