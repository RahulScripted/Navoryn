interface TicketInfoProps {
  label: string
  value: string
  className?: string
}

export function TicketInfo({ label, value, className }: TicketInfoProps) {
  return (
    <div className={className}>
      <dt className="text-[0.65rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 break-words text-sm font-semibold">{value}</dd>
    </div>
  )
}
