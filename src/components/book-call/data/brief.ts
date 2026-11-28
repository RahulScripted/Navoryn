import {
  ChatBubbleIcon,
  ColorWheelIcon,
  HeartIcon,
  IdCardIcon,
  ImageIcon,
  LightningBoltIcon,
} from "@radix-ui/react-icons"
import type { IconComponent } from "@/types/icon"
import type { IconAnim } from "@/utilities/Card/lib/iconAnim"

export interface BriefCard {
  title: string
  prompt: string
  icon: IconComponent
  anim: IconAnim
}

export const BRIEF_INTRO = {
  title: "Great work starts with a clear vision.",
  description:
    "A little about your brand goes a long way. Share your vision, preferences, and ideas so we can understand your business and bring the right digital experience to life.",
  tabletDescription:
    "Share your brand, preferences, and ideas to help us understand your vision and shape the right digital experience.",
  mobileDescription: "Share your ideas and preferences. We'll take it from there.",
  closing: "Don't have everything figured out? That's perfectly fine. We'll help you shape the direction together.",
}

export const BRIEF_CARDS: BriefCard[] = [
  { title: "Brand name", prompt: "Who are you?", icon: IdCardIcon, anim: "pop" },
  { title: "Your tagline", prompt: "What do you stand for?", icon: ChatBubbleIcon, anim: "wiggle" },
  { title: "Logo & assets", prompt: "What do you already have?", icon: ImageIcon, anim: "bounce" },
  { title: "Visual identity", prompt: "How should it look?", icon: ColorWheelIcon, anim: "spin" },
  { title: "Inspiration", prompt: "What do you love?", icon: HeartIcon, anim: "flash" },
  { title: "Your ideas", prompt: "What do you envision?", icon: LightningBoltIcon, anim: "rise" },
]
