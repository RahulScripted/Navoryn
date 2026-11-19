import banner from "@/asset/webps/home/miscellaneous/banner.webp"

export const ABOUT_HERO = {
  image: banner,
  titleLead: "The Navoryn",
  titleAccent: "ecosystem",
  titleRest: "brings together our strategy, design, and engineering.",
  description:
    "Navoryn is more than a development studio. We pair strategy, design, and engineering so businesses can launch, grow, and scale with one dependable team.",
  cta: { label: "See our strength", href: "/portfolio" },
}

export const ABOUT_INTRO: {
  title: string
  description: string
  cards: { title: string; description: string; media?: "reel" | "chart" }[]
} = {
  title: "About Us",
  description:
    "Navoryn is a focused team that builds purposeful digital products, from the first conversation to launch and beyond.",
  cards: [
    {
      title: "Future-Ready Design",
      description: "Intuitive, scalable designs that combine aesthetics with functionality.",
      media: "reel",
    },
    {
      title: "Accelerate Growth",
      description: "Our solutions drive efficiency and measurable impact for your business.",
      media: "chart",
    },
  ],
}
