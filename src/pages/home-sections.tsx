import { useEffect } from "react"
import Impact from "@/pages/impact"
import About from "@/pages/about"
import WhatWeDo from "@/pages/what-we-do"
import TextLoopBand from "@/pages/text-loop"
import Technology from "@/pages/technology"
import Testimonial from "@/pages/testimonial"
import Pricing from "@/components/pricing"
import Faq from "@/pages/faq"
import Blogs from "@/pages/blogs"
import Cta from "@/components/cta"
export default function HomeSections({ onMounted }: { onMounted: () => void }) {
  useEffect(() => {
    onMounted()
  }, [onMounted])
  return (
    <>
      <Impact />
      <About />
      <WhatWeDo />
      <TextLoopBand />
      <Technology />
      <Testimonial />
      <Pricing />
      <Faq />
      <Blogs />
      <Cta />
    </>
  )
}
