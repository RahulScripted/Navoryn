import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import '@/index.css'
import TargetCursor from '@/utilities/TargetCursor/TargetCursor'
import Hero from '@/pages/hero'
import RevealFooter from '@/ui/footer/RevealFooter'
import Header from '@/ui/header'
import NotFound from '@/ui/not-found'
import { usePreloaderDone } from '@/ui/preloader/hooks/usePreloaderDone'
import { usePageMeta } from '@/lib/pageMeta'
import { SECTION_BY_SLUG, scrollToSection } from '@/lib/sections'

const HomeSections = lazy(() => import('@/pages/home-sections'))
const Placeholder = () => <div aria-hidden="true" style={{ minHeight: '300vh' }} />
export default function App() {
  const { section } = useParams()
  const { state } = useLocation()
  const sectionId = section ? SECTION_BY_SLUG[section] : (state?.scrollTo as string | undefined)
  const isUnknown = Boolean(section) && !sectionId

  usePageMeta({
    title: 'Navoryn',
    description:
      'Navoryn is an independent digital studio building high-performance websites, web apps, mobile apps and custom dashboards for ambitious businesses.',
    noindex: isUnknown,
  })
  const mountedAt = useRef<number | null>(null)
  const preloaderDone = usePreloaderDone()
  const [loadBelow, setLoadBelow] = useState(false)
  const [belowReady, setBelowReady] = useState(false)
  const onBelowMounted = useCallback(() => setBelowReady(true), [])
  const sectionsReady = !sectionId || belowReady
  useEffect(() => {
    if (sectionId || !preloaderDone) return
    const go = () => setLoadBelow(true)
    if (typeof window.requestIdleCallback === 'function') {
      const id = window.requestIdleCallback(go, { timeout: 1500 })
      return () => window.cancelIdleCallback(id)
    }
    const id = window.setTimeout(go, 800)
    return () => window.clearTimeout(id)
  }, [sectionId, preloaderDone])
  useEffect(() => {
    if (isUnknown) return
    if (!sectionsReady) return
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
  }, [sectionId, isUnknown, sectionsReady])

  if (isUnknown) return <NotFound />
  return (
    <>
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
          {loadBelow || sectionId ? (
            <Suspense fallback={<Placeholder />}>
              <HomeSections onMounted={onBelowMounted} />
            </Suspense>
          ) : (
            <Placeholder />
          )}
        </main>
      </RevealFooter>
    </>
  )
}
