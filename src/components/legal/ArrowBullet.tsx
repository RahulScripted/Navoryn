export function ArrowBullet({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      <path
        d="M3.5 9.5h8V5.2c0-.8.9-1.2 1.5-.7l7.3 6.8c.4.4.4 1 0 1.4L13 19.5c-.6.5-1.5.1-1.5-.7V14.5h-8c-.6 0-1-.4-1-1v-3c0-.6.4-1 1-1z"
        strokeWidth="1.6"
        strokeLinejoin="round"
        className="fill-muted-foreground/35 stroke-foreground"
      />
    </svg>
  )
}
