export function Watermark() {
  return (
    <div aria-hidden className="page-px pointer-events-none w-full select-none">
      <p className="-mb-[0.22em] bg-gradient-to-b from-foreground/15 to-transparent bg-clip-text text-center text-[clamp(5rem,22vw,16rem)] font-semibold leading-none tracking-tighter text-transparent">
        NAVORYN
      </p>
    </div>
  )
}
