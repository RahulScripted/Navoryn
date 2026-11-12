import { NOTCH } from "./notch"

export function CardNotch() {
  const { disc, block, fillet, surface } = NOTCH

  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 z-20"
        style={{ width: block, height: block, borderTopLeftRadius: block - disc / 2, background: surface }}
      />
      {[
        { bottom: block, right: 0 },
        { bottom: 0, right: block },
      ].map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="pointer-events-none absolute z-20"
          style={{
            ...pos,
            width: fillet,
            height: fillet,
            background: `radial-gradient(circle at top left, transparent ${fillet - 0.5}px, ${surface} ${fillet}px)`,
          }}
        />
      ))}
    </>
  )
}
