/** Tiny circular avatar. The brand side shows the NAVORYN logo. */
export function Avatar({ brand }: { brand?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={
        "grid size-6 shrink-0 place-items-center rounded-full text-[0.6rem] font-bold " +
        (brand
          ? "bg-foreground text-background"
          : "bg-muted text-foreground")
      }
    >
      {brand ? "N" : "CL"}
    </span>
  )
}
