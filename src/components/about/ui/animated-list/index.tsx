import { AnimatedList } from "./components/AnimatedList"
import { Notification } from "./components/Notification"
import { NOTIFICATIONS } from "./data/notifications"
import { useRevealReady } from "@/utilities/ScrollReveal/components/block/useRevealReady"

export default function CraftFeed() {
  const [ref, ready] = useRevealReady<HTMLDivElement>()

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
      <AnimatedList delay={1600} active={ready}>
        {NOTIFICATIONS.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}
