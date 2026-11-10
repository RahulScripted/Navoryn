import { CreditCard, MessageCircle, Star, UserPlus } from "lucide-react"
import type { NotificationItem } from "../components/Notification"

/** "Our Craft": customer-facing events from a product built to grow. */
const BASE: NotificationItem[] = [
  { name: "New user registered", description: "Your customer base is growing", icon: UserPlus },
  { name: "Payment received", description: "A new order just came in", icon: CreditCard },
  { name: "New message received", description: "A customer reached out", icon: MessageCircle },
  { name: "Feedback received", description: "A customer left a review", icon: Star },
]

// Repeat so the list keeps feeding new items before it loops.
export const NOTIFICATIONS: NotificationItem[] = Array.from({ length: 10 }, () => BASE).flat()
