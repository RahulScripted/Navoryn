import { NOTCH } from "./notch"

const SURFACE = "var(--background)"

export function CardNotch() {
  const { disc, block, fillet } = NOTCH

  return (
    <>
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0"
        style={{ width: block, height: block, borderTopLeftRadius: block - disc / 2, background: SURFACE }}
      />
      {[
        { bottom: block, right: 0 },
        { bottom: 0, right: block },
      ].map((pos, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute"
          style={{
            ...pos,
            width: fillet,
            height: fillet,
            background: `radial-gradient(circle at top left, transparent ${fillet - 0.5}px, ${SURFACE} ${fillet}px)`,
          }}
        />
      ))}
    </>
  )
}
