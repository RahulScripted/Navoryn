import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '@/index.css'
import PreLoader from '@/ui/preloader'
import TargetCursor from '@/utilities/TargetCursor/TargetCursor'
import About from '@/pages/about'
import WhatWeDo from '@/pages/what-we-do'
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

  // Scroll to the section named by the URL, on first load and on every navigation.
  useEffect(() => {
    if (isUnknown) return
    // Within the first 2s the page is still laying out (images, reveals), so retry the scroll.
    const first = performance.now() < 2000
    if (first && !sectionId) return
    const timers = first
      ? [400, 1500].map((ms) => window.setTimeout(() => scrollToSection(sectionId, 'auto'), ms))
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
          <Technology />
          <Testimonial />
          <Pricing />
          <Faq />
        </main>
      </RevealFooter>
    </>
  )
}
