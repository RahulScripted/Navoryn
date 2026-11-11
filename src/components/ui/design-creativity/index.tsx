import { Globe, Lock } from "lucide-react"
import { BentoTile } from "./components/tile/BentoTile"
import { GlobalNetwork } from "./components/global-cdn/GlobalNetwork"
import { ResponsiveMorph } from "./components/responsiveness/ResponsiveMorph"
import { SecurityBadge } from "./components/security/SecurityBadge"
import { SpeedIndicator } from "./components/speed/SpeedIndicator"
import { TypeTester } from "./components/typography/TypeTester"
import { useRevealReady } from "@/utilities/ScrollReveal/components/block/useRevealReady"

export default function DesignCreativity() {
  const [ref, ready] = useRevealReady<HTMLDivElement>()

  return (
    <div ref={ref} className="grid h-full w-full grid-cols-3 grid-rows-3 gap-1.5">
      <BentoTile active={ready} title="Responsive Layout" index={0} className="col-span-2 row-span-2">
        <ResponsiveMorph />
      </BentoTile>

      <BentoTile active={ready} title="Typography" index={1}>
        <TypeTester />
      </BentoTile>

      <BentoTile active={ready} title="Speed" index={2}>
        <SpeedIndicator />
      </BentoTile>

      <BentoTile active={ready} title="Security" icon={Lock} index={3} className="col-span-2">
        <SecurityBadge />
      </BentoTile>

      <BentoTile active={ready} title="Global CDN" icon={Globe} index={4}>
        <GlobalNetwork />
      </BentoTile>
    </div>
  )
}
