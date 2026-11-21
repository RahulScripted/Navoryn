import { useEffect, useRef } from "react"
import gsap from "gsap"

const LANGUAGES = [
  { name: "English", letter: "A" },
  { name: "Hindi", letter: "अ" },
  { name: "Bengali", letter: "অ" },
  { name: "Assamese", letter: "অ" },
  { name: "Gujarati", letter: "અ" },
  { name: "Punjabi", letter: "ਅ" },
  { name: "Odia", letter: "ଅ" },
  { name: "Tamil", letter: "அ" },
  { name: "Telugu", letter: "అ" },
  { name: "Kannada", letter: "ಅ" },
  { name: "Malayalam", letter: "അ" },
  { name: "Urdu", letter: "ا" },
  { name: "Sanskrit", letter: "अ" },
  { name: "Marathi", letter: "अ" },
  { name: "Nepali", letter: "अ" },
  { name: "Konkani", letter: "अ" },
  { name: "Dogri", letter: "अ" },
  { name: "Kashmiri", letter: "ا" },
  { name: "Sindhi", letter: "ا" },
  { name: "Manipuri", letter: "ꯑ" },
  { name: "Bodo", letter: "अ" },
  { name: "Maithili", letter: "अ" },
]

const OUT = { opacity: 0, filter: "blur(18px)", scale: 0.65, rotationX: -65, y: -24 }
const IN_FROM = { opacity: 0, filter: "blur(18px)", scale: 1.35, rotationX: 65, y: 24 }
const IN_TO = { opacity: 1, filter: "blur(0px)", scale: 1, rotationX: 0, y: 0 }

interface LanguageMorphProps {
  holdDuration?: number
  transitionDuration?: number
}

export default function LanguageMorph({ holdDuration = 2, transitionDuration = 0.7 }: LanguageMorphProps) {
  const letterRef = useRef<HTMLSpanElement>(null)
  const nameRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const letter = letterRef.current
    const name = nameRef.current
    if (!letter || !name) return
    const show = (i: number) => {
      letter.textContent = LANGUAGES[i].letter
      name.textContent = LANGUAGES[i].name
    }
    show(0)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const half = transitionDuration / 2
    const timeline = gsap.timeline({ repeat: -1 })
    for (let step = 1; step <= LANGUAGES.length; step++) {
      const next = step % LANGUAGES.length
      timeline.to({}, { duration: holdDuration })
      timeline.to(letter, { ...OUT, duration: half, ease: "power2.in", onComplete: () => show(next) })
      timeline.fromTo(letter, IN_FROM, { ...IN_TO, duration: half, ease: "power3.out" })
      timeline.fromTo(name, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" }, "<")
    }
    return () => {
      timeline.kill()
    }
  }, [holdDuration, transitionDuration])

  return (
    <div
      role="img"
      aria-label="A greeting across India's 22 scheduled languages"
      className="flex size-full flex-col items-center justify-center text-center text-foreground [perspective:1000px]"
    >
      <div
        aria-hidden="true"
        className="grid min-h-[1.2em] min-w-[1.2em] place-items-center overflow-visible text-[clamp(44px,24cqh,88px)] font-bold leading-[1.2] tracking-[-0.06em] [transform-style:preserve-3d]"
      >
        <span ref={letterRef} className="inline-block will-change-[transform,opacity,filter]">
          A
        </span>
      </div>
      <span
        ref={nameRef}
        aria-hidden="true"
        className="mt-1 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-muted-foreground"
      >
        English
      </span>
    </div>
  )
}
