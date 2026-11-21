export type IconAnim = "spin" | "spin-y" | "pop" | "wiggle" | "nudge" | "rise" | "bounce" | "flash" | "grow"

export const ICON_ANIM: Record<IconAnim, string> = {
  spin: "group-hover/card:animate-[ci-spin_0.8s_ease-in-out]",
  "spin-y": "group-hover/card:animate-[ci-spin-y_0.9s_ease-in-out]",
  pop: "group-hover/card:animate-[ci-pop_0.55s_ease-out]",
  wiggle: "group-hover/card:animate-[ci-wiggle_0.6s_ease-in-out]",
  nudge: "group-hover/card:animate-[ci-nudge_0.55s_ease-out]",
  rise: "group-hover/card:animate-[ci-rise_0.6s_ease-out]",
  bounce: "group-hover/card:animate-[ci-bounce_0.6s_ease-out]",
  flash: "group-hover/card:animate-[ci-flash_0.7s_ease-in-out]",
  grow: "origin-bottom group-hover/card:animate-[ci-grow_0.6s_ease-out]",
}
