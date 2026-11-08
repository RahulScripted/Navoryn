import { useEffect, useRef, type ReactNode } from "react"
import Footer from "@/ui/footer"

export default function RevealFooter({ children }: { children: ReactNode }) {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<HTMLDivElement | null>(null)
  const footerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    const main = mainRef.current
    const content = contentRef.current
    const footer = footerRef.current
    if (!root || !main || !content || !footer) return

    let footerHeight = 0

    const clearInline = () => {
      root.style.height = ""
      main.style.top = ""
      footer.style.bottom = ""
    }

    const layout = () => {
      footerHeight = footer.offsetHeight
      const canReveal = window.innerWidth >= 768 && footerHeight < window.innerHeight

      if (!canReveal) {
        root.classList.add("footer-parallax-root--static")
        clearInline()
        return
      }

      root.classList.remove("footer-parallax-root--static")
      const documentHeight = content.offsetHeight + footerHeight
      root.style.height = `${documentHeight}px`
      onScroll()
    }

    const onScroll = () => {
      if (root.classList.contains("footer-parallax-root--static")) return
      const scroll = window.scrollY
      main.style.top = `-${scroll}px`

      const revealPoint = content.offsetHeight - window.innerHeight
      footer.style.bottom = scroll >= revealPoint ? "0px" : `-${footerHeight}px`
    }

    layout()

    const resizeObs = new ResizeObserver(layout)
    resizeObs.observe(content)
    resizeObs.observe(footer)

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", layout)

    return () => {
      resizeObs.disconnect()
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", layout)
    }
  }, [])

  return (
    <div ref={rootRef} className="footer-parallax-root">
      <div ref={mainRef} className="footer-parallax-main">
        <div ref={contentRef} className="footer-parallax-content">
          {children}
        </div>
      </div>
      <div ref={footerRef} className="footer-parallax-footer">
        <Footer />
      </div>
    </div>
  )
}
