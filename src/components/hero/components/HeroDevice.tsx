import { useId } from "react"
import type { RefObject } from "react"
import { NavorynMark } from "@/ui/header/components/NavorynMark"
import { HeroPillars } from "./HeroPillars"

interface HeroDeviceProps {
  deviceRef: RefObject<HTMLDivElement | null>
  pulse: number
  ready: boolean
  onPress: () => void
}

function DeviceBody({ pulse }: { pulse: number }) {
  const p = `hero-dev-${useId().replace(/:/g, "")}`
  return (
    <svg viewBox="0 0 320 320" className="hero-device-svg size-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${p}-face`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.32" />
          <stop offset="0.45" stopColor="#fff" stopOpacity="0.04" />
          <stop offset="1" stopColor="#000" stopOpacity="0.18" />
        </linearGradient>
        <radialGradient id={`${p}-sheen`} cx="0.28" cy="0.22" r="0.7">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="0.5" stopColor="#fff" stopOpacity="0.06" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`${p}-side`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#000" stopOpacity="0.05" />
          <stop offset="1" stopColor="#000" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id={`${p}-led`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="var(--hero-glow)" stopOpacity="0" />
          <stop offset="0.55" stopColor="var(--hero-glow)" stopOpacity="0.9" />
          <stop offset="0.8" stopColor="var(--hero-glow)" stopOpacity="1" />
          <stop offset="1" stopColor="var(--hero-glow)" stopOpacity="0.2" />
        </linearGradient>
        <filter id={`${p}-blur`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="9" />
        </filter>
      </defs>
      <g transform="rotate(-14 160 160)">
        <rect x="46" y="58" width="228" height="228" rx="76" fill="var(--hero-device-side)" />
        <rect x="46" y="58" width="228" height="228" rx="76" fill={`url(#${p}-side)`} />
        <g key={pulse} className="hero-led">
          <path d="M270 150Q276 262 168 280" fill="none" stroke={`url(#${p}-led)`} strokeWidth="14" strokeLinecap="round" filter={`url(#${p}-blur)`} />
          <path d="M268 160Q270 258 172 276" fill="none" stroke={`url(#${p}-led)`} strokeWidth="3.4" strokeLinecap="round" />
        </g>
        <rect x="46" y="44" width="228" height="228" rx="76" fill="var(--hero-device)" />
        <rect x="46" y="44" width="228" height="228" rx="76" fill={`url(#${p}-face)`} />
        <rect x="46" y="44" width="228" height="228" rx="76" fill={`url(#${p}-sheen)`} />
        <rect x="47" y="45" width="226" height="226" rx="75" fill="none" stroke="#fff" strokeOpacity="0.35" strokeWidth="1.4" />
      </g>
    </svg>
  )
}

export function HeroDevice({ deviceRef, pulse, ready, onPress }: HeroDeviceProps) {
  return (
    <div ref={deviceRef} className="hero-device relative mx-auto aspect-square w-[clamp(190px,19vw,270px)]">
      {ready && (
        <div key={pulse} className="pointer-events-none absolute inset-0" aria-hidden="true">
          <i className="hero-ring" />
          <i className="hero-ring [animation-delay:0.18s]" />
          <i className="hero-ring [animation-delay:0.36s]" />
        </div>
      )}
      <button
        type="button"
        onClick={onPress}
        aria-label="Send a signal"
        className="hero-device-btn cursor-target block size-full rounded-[40%] outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <span className="hero-device-float relative block size-full">
          <DeviceBody pulse={pulse} />
          <NavorynMark className="hero-device-mark absolute top-[48.5%] left-1/2 size-[30%] -translate-x-1/2 -translate-y-1/2 -rotate-[14deg]" />
        </span>
      </button>
      <span className="hero-device-shadow" aria-hidden="true" />
      <div className="pointer-events-none absolute top-[12%] -left-[46%] z-10 max-sm:-top-[10%] max-sm:-left-[22%]">
        <HeroPillars />
      </div>
    </div>
  )
}
