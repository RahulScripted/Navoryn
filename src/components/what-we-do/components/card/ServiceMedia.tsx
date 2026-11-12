import { cn } from "@/lib/utils"

interface ServiceMediaProps {
  image?: string
  className?: string
}

export function ServiceMedia({ image, className }: ServiceMediaProps) {
  return (
    <div className={cn("relative w-full", className)}>
      {image && (
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          draggable={false}
          className="absolute inset-0 h-full w-full object-contain transition-transform duration-500 ease-out group-hover/card:scale-[1.03]"
        />
      )}
    </div>
  )
}
