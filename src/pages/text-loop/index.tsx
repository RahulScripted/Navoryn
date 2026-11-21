import TextLoop from "@/utilities/TextLoop"
import { useIsDark } from "@/utilities/useIsDark"

export default function TextLoopBand() {
  const isDark = useIsDark()
  return (
    <section
      aria-label="Design, develop, innovate, scale"
      className="-mx-(--page-x) w-auto overflow-x-clip bg-background text-foreground"
    >
      <TextLoop
        text="DESIGN ✦ DEVELOP ✦ INNOVATE ✦ SCALE"
        separator="✦"
        shape="wave"
        speed={80}
        curviness={40}
        fontSize={36}
        fontWeight={800}
        letterSpacing={3}
        ribbonWidth={70}
        ribbonColor={isDark ? "#fafafa" : "#0a0a0a"}
        color={isDark ? "#0a0a0a" : "#fafafa"}
        edgeFade={0.15}
        scrollBoost={1}
        pauseOnHover
        className="cursor-target aspect-[1200/210]"
        svgClassName="absolute inset-x-0 top-1/2 -translate-y-1/2"
      />
    </section>
  )
}
