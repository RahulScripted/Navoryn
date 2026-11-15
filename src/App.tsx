import { useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import '@/index.css'
import PreLoader from '@/ui/preloader'
import TargetCursor from '@/utilities/TargetCursor/TargetCursor'
import About from '@/pages/about'
import WhatWeDo from '@/pages/what-we-do'
import TextLoopBand from '@/pages/text-loop'
import Technology from '@/pages/technology'
import Testimonial from '@/pages/testimonial'
import Pricing from '@/pages/pricing'
import Faq from '@/pages/faq'
import RevealFooter from '@/ui/footer/RevealFooter'
import Header from '@/ui/header'
import NotFound from '@/ui/not-found'
import { SECTION_BY_SLUG, scrollToSection } from '@/lib/sections'

export default function App() {
  const { section } = useParams()
  const sectionId = section ? SECTION_BY_SLUG[section] : undefined
  const isUnknown = Boolean(section) && !sectionId

  const arrived = useRef(false)
  useEffect(() => {
    if (isUnknown) return
    const justArrived = !arrived.current
    arrived.current = true
    const early = performance.now() < 2000
    if (justArrived && !sectionId) {
      if (!early) window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }
    const timers = justArrived
      ? [100, 500, 1200].map((ms) => window.setTimeout(() => scrollToSection(sectionId, 'auto'), ms))
      : [window.setTimeout(() => scrollToSection(sectionId), 0)]
    return () => timers.forEach(window.clearTimeout)
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
          <About />
          <WhatWeDo />
          <TextLoopBand />
          <Technology />
          <Testimonial />
          <Pricing />
          <Faq />
        </main>
      </RevealFooter>
    </>
  )
}
