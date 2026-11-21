import { FOLD } from "../lib/fold"
export function FoldCorner() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width={FOLD}
      height={FOLD}
      viewBox={`0 0 ${FOLD} ${FOLD}`}
      className="pointer-events-none absolute right-0 top-0 z-20"
    >
      <path
        d={`M0.5 0 V${FOLD - 0.5} H${FOLD} Z`}
        fill="var(--muted)"
        stroke="var(--border)"
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  )
}
