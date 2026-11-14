import { CardStackIcon, ChatBubbleIcon, PersonIcon, StarIcon } from "@radix-ui/react-icons"
import type { NotificationItem } from "../components/Notification"

const BASE: NotificationItem[] = [
  { name: "New user registered", description: "Your customer base is growing", icon: PersonIcon },
  { name: "Payment received", description: "A new order just came in", icon: CardStackIcon },
  { name: "New message received", description: "A customer reached out", icon: ChatBubbleIcon },
  { name: "Feedback received", description: "A customer left a review", icon: StarIcon },
]

export const NOTIFICATIONS: NotificationItem[] = Array.from({ length: 10 }, () => BASE).flat()
