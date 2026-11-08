import '@/index.css'
import PreLoader from '@/ui/preloader'
import TargetCursor from '@/utilities/TargetCursor/TargetCursor'
import About from '@/pages/about'
import Technology from '@/pages/technology'
import Testimonial from '@/pages/testimonial'
import Pricing from '@/pages/pricing'
import Faq from '@/pages/faq'
import RevealFooter from '@/ui/footer/RevealFooter'

export default function App() {
  return (
    <>
      <PreLoader />

      <TargetCursor
        targetSelector=".cursor-target"
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
      />

      <RevealFooter>
        <main className="page-px">
          <About />
          <Technology />
          <Testimonial />
          <Pricing />
          <Faq />
        </main>
      </RevealFooter>
    </>
  )
}
