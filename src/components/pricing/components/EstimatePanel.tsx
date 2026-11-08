import { cn } from "@/lib/utils"
import type { QuoteResult } from "@/types/pricing"
import { formatINR } from "../data/calculator"

interface EstimatePanelProps {
  quote: QuoteResult
  isCustom: boolean
}

export function EstimatePanel({ quote, isCustom }: EstimatePanelProps) {
  return (
    <div className="flex flex-col rounded-xl border bg-muted/40 p-5">
      <span className="text-sm font-medium text-muted-foreground">Estimated price</span>

      {isCustom ? (
        <>
          <div className="mt-2 text-2xl font-extrabold tracking-tight md:text-3xl">
            Custom quote
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            10+ pages need a tailored scope. We&apos;ll prepare pricing after reviewing
            your requirements on the call.
          </p>
        </>
      ) : (
        <>
          <div className="mt-2 text-3xl font-extrabold tracking-tighter md:text-4xl">
            {formatINR(quote.total ?? 0)}
          </div>

          <div className="mt-5 space-y-2 border-t pt-4 text-sm">
            <Row label="Base website" value={formatINR(quote.base)} />
            {quote.extraSections > 0 && (
              <Row label="Additional sections" value={formatINR(quote.extraSections)} />
            )}
            {quote.addonTotal > 0 && <Row label="Add-ons" value={formatINR(quote.addonTotal)} />}
            {quote.maintenance > 0 && (
              <Row label="Maintenance" value={`${formatINR(quote.maintenance)}/mo`} />
            )}
          </div>

          <div className="mt-4 space-y-2 border-t pt-4 text-sm">
            <Row label="50% advance" value={formatINR(quote.advance)} strong />
            <Row label="50% before handover" value={formatINR(quote.remaining)} strong />
          </div>
        </>
      )}

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        All estimates are indicative. Final pricing and delivery timelines are confirmed
        after reviewing project requirements.
      </p>
    </div>
  )
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className={cn("text-muted-foreground", strong && "text-foreground")}>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  )
}
