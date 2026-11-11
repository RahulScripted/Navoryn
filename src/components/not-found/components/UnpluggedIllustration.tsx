import monsterSmall from "@/asset/webps/404.webp"
import monsterLarge from "@/asset/webps/404-large.webp"

export function UnpluggedIllustration() {
  return (
    <div className="relative aspect-[3/2] w-full overflow-hidden lg:aspect-[1774/710]">
      <picture>
        <source media="(min-width: 1024px)" srcSet={monsterLarge} />
        <img
          src={monsterSmall}
          alt="A fuzzy orange monster holding an unplugged cable, its two ends running off both edges of the screen"
          decoding="async"
          className="absolute inset-x-0 top-0 h-auto w-full select-none lg:top-[-15%]"
          draggable={false}
        />
      </picture>
    </div>
  )
}
