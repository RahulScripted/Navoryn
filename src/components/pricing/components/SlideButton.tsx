import { useEffect, useRef } from "react"
import gsap from "gsap"
import { Draggable } from "gsap/Draggable"
import { cn } from "@/lib/utils"

gsap.registerPlugin(Draggable)

interface SlideButtonProps {
  label: string
  completedLabel?: string
  onComplete: () => void
  className?: string
}

export function SlideButton({
  label,
  completedLabel = "Opening…",
  onComplete,
  className,
}: SlideButtonProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const controlRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLSpanElement | null>(null)
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const completedArrowRef = useRef<SVGPathElement | null>(null)
  const onCompleteRef = useRef(onComplete)
  onCompleteRef.current = onComplete

  useEffect(() => {
    const container = containerRef.current
    const control = controlRef.current
    const text = textRef.current
    const overlay = overlayRef.current
    const completedArrow = completedArrowRef.current
    if (!container || !control || !text || !overlay || !completedArrow) return

    const getSlidingWidth = () => container.getBoundingClientRect().width - 8
    let animInterval: ReturnType<typeof setInterval> | null = null
    let dragInstance: Draggable | null = null
    let completed = false

    const animateShake = () => {
      if (dragInstance?.isDragging || completed) return
      gsap.to(control, {
        x: 20,
        duration: 0.2,
        ease: "power1.in",
        onComplete() {
          gsap.to(control, { x: 0, duration: 0.5, ease: "bounce.out" })
        },
      })
    }

    const startContinuous = () => {
      animInterval = setInterval(animateShake, 4000)
    }
    const stopContinuous = () => {
      if (animInterval) clearInterval(animInterval)
    }

    animateShake()
    startContinuous()

    const [drag] = Draggable.create(control, {
      bounds: { left: 4, width: getSlidingWidth() },
      type: "x",
      onDrag() {
        const percent = this.x / this.maxX
        const completedOpacity = Math.pow(percent, 4)
        text.style.opacity = String(1 - percent * 1.5)
        overlay.style.opacity = String(completedOpacity)
        completedArrow.style.opacity = String(completedOpacity)
        stopContinuous()
      },
      onDragEnd() {
        const isSlideCompleted = this.x > this.maxX * 0.4
        const destinationX = isSlideCompleted ? this.maxX : this.minX
        const duration = isSlideCompleted ? 0.2 : 0.5
        const toCompleteOpacity = isSlideCompleted ? 0 : 1
        const completedOpacity = isSlideCompleted ? 1 : 0
        const ease = isSlideCompleted ? "power2.out" : "back.out(1.05)"

        if (isSlideCompleted) {
          completed = true
          stopContinuous()
          drag.disable()
        }

        gsap.to(this.target, { x: destinationX, duration, ease })
        gsap.to(text, { opacity: toCompleteOpacity, duration: 0.2 })
        gsap.to(overlay, { opacity: completedOpacity, duration: 0.2 })
        gsap.to(completedArrow, { opacity: completedOpacity, duration: 0.2 })

        if (isSlideCompleted) {
          setTimeout(() => onCompleteRef.current(), 250)
        } else {
          startContinuous()
        }
      },
    })
    dragInstance = drag

    const resizeObs = new ResizeObserver(() => {
      if (completed || drag.isDragging) return
      drag.applyBounds({ minX: 0, maxX: getSlidingWidth() - control.offsetWidth })
      gsap.set(control, { x: 0 })
    })
    resizeObs.observe(container)

    return () => {
      stopContinuous()
      resizeObs.disconnect()
      drag.kill()
      gsap.killTweensOf(control)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn("slide-button", className)}>
      <span ref={textRef} className="slide-button__text">
        {label}
      </span>
      <div ref={overlayRef} className="slide-button__overlay">
        <span className="slide-button__text">{completedLabel}</span>
      </div>
      <div ref={controlRef} className="slide-button__control cursor-target">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.418 82.64" aria-hidden>
          <path
            className="slide-button__arrow"
            d="M13.878,82.457,5.979,75.4a1.763,1.763,0,0,1,0-2.5L33.835,41.625,5.874,10.349a1.763,1.763,0,0,1,0-2.5l7.9-7.052a1.763,1.763,0,0,1,2.5,0L52.77,41.625,16.381,82.316a1.763,1.763,0,0,1-2.5.141Z"
            transform="translate(-5.352 -0.272)"
          />
          <path
            ref={completedArrowRef}
            className="slide-button__arrow slide-button__arrow--completed"
            d="M13.878,82.457,5.979,75.4a1.763,1.763,0,0,1,0-2.5L33.835,41.625,5.874,10.349a1.763,1.763,0,0,1,0-2.5l7.9-7.052a1.763,1.763,0,0,1,2.5,0L52.77,41.625,16.381,82.316a1.763,1.763,0,0,1-2.5.141Z"
            transform="translate(-5.352 -0.272)"
          />
        </svg>
      </div>
    </div>
  )
}
