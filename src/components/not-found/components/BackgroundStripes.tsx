const STRIPES = {
  backgroundImage:
    "repeating-linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 5%, transparent) 0 14px, transparent 14px 30px)",
  maskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 70%)",
  WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 45%, transparent 70%)",
}

export function BackgroundStripes() {
  return <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={STRIPES} />
}
