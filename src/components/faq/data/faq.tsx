import type { FaqItem } from "@/types/faq"

export const FAQS: FaqItem[] = [
  {
    question: "What services does NAVORYN offer?",
    answer:
      "NAVORYN provides website design and development services, including business websites, landing pages, custom web applications, dashboards, and responsive digital experiences. We also offer integrations, performance optimization, and ongoing website maintenance.",
  },
  {
    question: "How much does it cost to build a website?",
    answer: (
      <div className="space-y-3">
        <p>
          Website pricing depends on the number of pages, design complexity, functionality,
          and integrations required. Our starting estimates are:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Single-page website: ₹5,000</li>
          <li>2–3 pages: ₹8,000–₹15,000</li>
          <li>6–10 pages: ₹20,000–₹35,000</li>
          <li>10+ pages: Custom quotation</li>
        </ul>
        <p>
          You can use our Custom Quote Calculator to estimate your project cost based on your
          requirements.
        </p>
      </div>
    ),
  },
  {
    question: "How long does it take to develop a website?",
    answer: (
      <div className="space-y-3">
        <p>
          The timeline depends on the project&apos;s size and complexity. Typical delivery
          estimates are:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Single-page website: 4–5 days</li>
          <li>2–3 pages: Approximately 7 days</li>
          <li>6–10 pages: Approximately 10–14 days</li>
        </ul>
        <p>
          Timelines begin after requirements, content, and project direction are approved.
          Additional functionality may require more time.
        </p>
      </div>
    ),
  },
  {
    question: "Will my website work on mobile, tablet, and desktop?",
    answer:
      "Absolutely. We build responsive websites that adapt to different screen sizes and devices. We focus on consistent layouts, accessible interactions, readable typography, and smooth navigation across mobile phones, tablets, laptops, and desktops.",
  },
  {
    question: "Can I request a custom design for my business?",
    answer:
      "Yes. Every business has different goals and requirements. We can create a website tailored to your brand identity, preferred design direction, content, and target audience rather than relying on a generic template.",
  },
  {
    question:
      "Can you add features such as payment gateways, contact forms, and WhatsApp integration?",
    answer:
      "Yes. We can integrate features such as contact forms, WhatsApp click-to-chat, Google Maps, automated emails, payment gateways, booking systems, and custom functionality. The cost depends on the integration and its complexity.",
  },
  {
    question: "Can I update my website after it has been delivered?",
    answer:
      "Yes, depending on how your website is developed. We can build custom dashboards or content management functionality where required. For simpler websites, content and design changes can be requested through our maintenance or feature development services.",
  },
  {
    question: "Do you provide website maintenance and technical support?",
    answer:
      "Yes. We offer ongoing website maintenance starting at ₹3,500 per month. Depending on the agreed maintenance scope, this can include updates, bug fixes, performance checks, and technical assistance. New features and major redesigns are quoted separately.",
  },
  {
    question: "Do I need to purchase a domain name and hosting separately?",
    answer:
      "Domain registration and hosting are generally purchased separately by the client. We can help you choose suitable providers and configure the deployment. Any domain, hosting, premium tools, or third-party subscription charges are separate unless explicitly included in your project quotation.",
  },
  {
    question: "What is your payment process?",
    answer: (
      <div className="space-y-3">
        <p>We follow a simple two-stage payment process:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            <span className="font-medium text-foreground">50% advance:</span> Payable once the
            project scope, requirements, and demo direction are approved.
          </li>
          <li>
            <span className="font-medium text-foreground">50% final payment:</span> Payable
            after project completion and approval, before final delivery and handover.
          </li>
        </ul>
        <p>
          The agreed scope, pricing, and timeline are confirmed before development begins.
        </p>
      </div>
    ),
  },
  {
    question: "Will I own my website after the project is completed?",
    answer:
      "Yes. After full payment and handover, you receive the agreed project deliverables and ownership rights as specified in your project agreement. Third-party software, libraries, fonts, and services remain subject to their respective licences and terms.",
  },
  {
    question: "How do I get started with NAVORYN?",
    answer:
      "Getting started is simple. Share your business details, website goals, preferred design direction, and required features through our contact form. We'll review your requirements, discuss the project, and provide a suitable quotation and estimated timeline.",
  },
]
