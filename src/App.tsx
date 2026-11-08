import '@/index.css'
import PreLoader from '@/ui/preloader'
import Technology from '@/pages/technology'

export default function App() {
  return (
    <>
      {/* Preloader — shown by default, lifts off when loading completes */}
      <PreLoader />

      {/* Main content — every page section stacks here */}
      <main>
        {/* <Hero /> */}
        {/* <Projects /> */}
        <Technology />
      </main>
    </>
  )
}
