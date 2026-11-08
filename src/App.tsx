import '@/index.css'
import PreLoader from '@/ui/preloader'
import TargetCursor from '@/components/common/TargetCursor/TargetCursor'
import Technology from '@/pages/technology'
import Testimonial from '@/pages/testimonial'
import Pricing from '@/pages/pricing'
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
          <Technology />
          <Pricing />
          <Testimonial />
        </main>
      </RevealFooter>
    </>
  )
}
