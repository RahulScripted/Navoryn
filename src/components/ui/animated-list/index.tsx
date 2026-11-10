import { AnimatedList } from "./components/AnimatedList"
import { Notification } from "./components/Notification"
import { NOTIFICATIONS } from "./data/notifications"

/** "Our Craft": a live feed of build events, newest on top. */
export default function CraftFeed() {
  return (
    <div className="relative h-full w-full overflow-hidden [mask-image:linear-gradient(to_bottom,black_75%,transparent)]">
      <AnimatedList delay={1600}>
        {NOTIFICATIONS.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  )
}
