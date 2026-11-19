import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '@/index.css'
import PreLoader from '@/ui/preloader'
import TargetCursor from '@/utilities/TargetCursor/TargetCursor'
import Hero from '@/pages/hero'
import About from '@/pages/about'
import WhatWeDo from '@/pages/what-we-do'
import TextLoopBand from '@/pages/text-loop'
import Technology from '@/pages/technology'
import Testimonial from '@/pages/testimonial'
import Pricing from '@/components/pricing'
import Faq from '@/pages/faq'
import Cta from '@/components/cta'
import RevealFooter from '@/ui/footer/RevealFooter'
import Header from '@/ui/header'
import NotFound from '@/ui/not-found'
import { SECTION_BY_SLUG, scrollToSection } from '@/lib/sections'

export default function App() {
  const { section } = useParams()
  const sectionId = section ? SECTION_BY_SLUG[section] : undefined
  const isUnknown = Boolean(section) && !sectionId

  const mountedAt = useRef<number | null>(null)
  useEffect(() => {
    if (isUnknown) return
    if (mountedAt.current === null) mountedAt.current = performance.now()
    const justArrived = performance.now() - mountedAt.current < 4500
    if (!justArrived) {
      const timer = window.setTimeout(() => scrollToSection(sectionId), 0)
      return () => window.clearTimeout(timer)
    }
    if (!sectionId) return

    let cancelled = false
    let timer = 0
    let tries = 0
    const stop = () => {
      cancelled = true
    }
    const interrupts = ['wheel', 'touchstart', 'keydown'] as const
    interrupts.forEach((type) => window.addEventListener(type, stop, { once: true, passive: true }))
    const aim = () => {
      if (cancelled || tries++ > 16) return
      scrollToSection(sectionId, 'auto')
      timer = window.setTimeout(aim, 250)
    }
    timer = window.setTimeout(aim, 100)
    return () => {
      window.clearTimeout(timer)
      interrupts.forEach((type) => window.removeEventListener(type, stop))
    }
  }, [sectionId, isUnknown])

  if (isUnknown) return <NotFound />
  return (
    <>
      <PreLoader />
      <Header />

      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
      />

      <RevealFooter>
        <main className="page-px">
          <Hero />
          <About />
          <WhatWeDo />
          <TextLoopBand />
          <Technology />
          <Testimonial />
          <Pricing />
          <Faq />
          <Cta />
        </main>
      </RevealFooter>
    </>
  )
}
