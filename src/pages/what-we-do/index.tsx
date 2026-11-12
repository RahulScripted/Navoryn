import { SectionHeading } from "@/utilities/SectionHeading/SectionHeading"
import { ServiceScroller } from "@/components/what-we-do/components/scroller/ServiceScroller"

export default function WhatWeDo() {
  return (
    <section className="w-full overflow-x-clip bg-background py-24 text-foreground sm:py-28 lg:py-32">
      <SectionHeading
        className="mb-16 sm:mb-20"
        title="Design That Looks Sharp. Code That Performs."
        description="Designs and develops high-performance websites, web apps, and custom dashboards for ambitious businesses. From online payments and bookings to WhatsApp integration and admin tools, we build everything you need to sell, serve, and scale, then stay on to keep it running."
        tabletDescription="High-performance websites and web apps with payments, bookings, and dashboards built in. Designed to convert, built to scale."
        mobileDescription="High-performance websites and web apps that look sharp, load fast, and turn visitors into customers."
      />

      <ServiceScroller />
    </section>
  )
}
