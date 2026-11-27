import type { FaqItem } from "@/types/faq"

// Every plan shows five questions. The full lists are kept here so any of them can be swapped in.

const GENERAL: FaqItem[] = [
  {
    question: "How does payment work?",
    answer:
      "We typically divide payments into milestones, starting with an initial advance and the remaining amount at agreed project stages. The payment schedule is confirmed before development begins.",
  },
  {
    question: "Who owns the code and domain?",
    answer:
      "You retain ownership of the final project source code and domain once the agreed payments are completed. Domain registration and third-party account ownership remain under your control.",
  },
  {
    question: "How long do revisions take?",
    answer:
      "Revision timelines depend on the complexity of the requested changes. We review your feedback, agree on the changes and share an estimated completion timeline.",
  },
  {
    question: "Is hosting included?",
    answer:
      "Hosting is not automatically included in every package. We can help you choose, configure and deploy your website on a suitable hosting platform. Hosting and domain charges may be separate.",
  },
  {
    question: "Can I upgrade my package later?",
    answer:
      "Yes. You can expand your website with additional pages, features and integrations as your business requirements grow.",
  },
  {
    question: "What happens if I need additional features?",
    answer:
      "Additional functionality can be discussed and scoped separately. We'll provide an estimate of the cost and timeline before proceeding.",
  },
  {
    question: "Do I need to provide the website content?",
    answer:
      "You can provide your own text, images and brand assets. If you need assistance with content preparation or visual assets, we can discuss those requirements separately.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. All packages include responsive layouts designed to work across mobile phones, tablets and desktop screens.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "We follow SEO-friendly development practices. Advanced SEO implementation and additional optimization depend on the selected package and agreed scope.",
  },
  {
    question: "Do you provide support after launch?",
    answer: "Yes. Post-launch support depends on the selected package and agreed maintenance coverage.",
  },
]

const STARTER: FaqItem[] = [
  {
    question: "What is included in the Starter package?",
    answer:
      "The Starter package covers the essential foundation of your website, including up to three pages, structured sections, responsive layouts and one revision round.",
  },
  {
    question: "Can I add more pages later?",
    answer: "Yes. Additional pages can be added as a separate requirement with revised pricing.",
  },
  {
    question: "Can I request custom functionality?",
    answer:
      "The Starter package focuses on essential website functionality. More advanced features can be discussed separately.",
  },
  {
    question: "Will you help me launch my website?",
    answer: "Yes. Deployment and launch requirements can be discussed as part of the project scope.",
  },
  {
    question: "Can I upgrade from Starter to Pro?",
    answer:
      "Absolutely. You can upgrade when your website needs more pages, integrations or advanced functionality.",
  },
]

const PRO: FaqItem[] = [
  {
    question: "What makes Pro different from Starter?",
    answer:
      "Pro offers more room to grow, with 6–10 pages, a search-ready foundation, basic integrations and two rounds of revisions.",
  },
  {
    question: "Can you integrate payment gateways?",
    answer:
      "Payment gateway integration can be discussed based on your requirements, supported providers and the agreed project scope.",
  },
  {
    question: "Can I manage website content myself?",
    answer:
      "Content management options can be discussed depending on your website requirements and selected implementation.",
  },
  {
    question: "Does Pro include advanced dashboards?",
    answer:
      "The Pro package focuses on standard business website functionality. Custom dashboards and more advanced administrative features are available as additional scope or through Pro Max.",
  },
  {
    question: "Can I upgrade to Pro Max later?",
    answer:
      "Yes. We can extend your existing project with advanced functionality, integrations and custom development.",
  },
]

const PROMAX: FaqItem[] = [
  {
    question: "What makes Pro Max different from the other packages?",
    answer:
      "Pro Max is designed for more ambitious projects requiring advanced functionality, custom dashboards, integrations, security considerations and performance monitoring.",
  },
  {
    question: "Can you build a completely custom web application?",
    answer:
      "Yes. We can develop tailored web applications around your business workflows, user requirements and technical needs after defining the project scope.",
  },
  {
    question: "Can you integrate third-party APIs and external services?",
    answer:
      "Yes. Pro Max supports advanced integrations such as payment gateways, CRM platforms, booking systems and external APIs, subject to provider compatibility.",
  },
  {
    question: "Does Pro Max include an admin dashboard?",
    answer:
      "Yes. Custom administrative interfaces can be developed to manage content, users, reports and other project-specific operations.",
  },
  {
    question: "How long does a Pro Max project take?",
    answer:
      "The timeline depends on the project's complexity, integrations, functionality and final requirements. We establish a delivery schedule after the discovery and scoping process.",
  },
  {
    question: "What does post-launch maintenance include?",
    answer:
      "It can cover agreed bug fixes, technical updates, troubleshooting and ongoing assistance. The duration and coverage should be confirmed in your project agreement.",
  },
  {
    question: "Can you build authentication and role-based access?",
    answer:
      "Yes. We can implement authentication, user roles, permissions and protected application workflows according to your requirements.",
  },
  {
    question: "Will you provide the complete source code?",
    answer:
      "Yes. The agreed project source code and handover materials are provided after completion and settlement of the agreed payments.",
  },
  {
    question: "Can the application scale as my business grows?",
    answer:
      "We can design the architecture with maintainability, performance and future expansion in mind. Infrastructure scaling requirements depend on the application's needs.",
  },
  {
    question: "Can you develop additional features after delivery?",
    answer:
      "Yes. New features, modules and integrations can be scoped and developed as future enhancements.",
  },
]

const SHOWN = 5
const pick = (items: FaqItem[], indexes: number[]) => indexes.map((index) => items[index])

/** Five questions for each plan. Custom builds use the general questions that matter most for a bespoke project. */
export const PLAN_FAQS: Record<string, FaqItem[]> = {
  starter: STARTER.slice(0, SHOWN),
  pro: PRO.slice(0, SHOWN),
  promax: PROMAX.slice(0, SHOWN),
  custom: pick(GENERAL, [0, 1, 2, 3, 5]),
}

export const planFaqs = (plan: string): FaqItem[] => (Object.hasOwn(PLAN_FAQS, plan) ? PLAN_FAQS[plan] : PLAN_FAQS.custom)
