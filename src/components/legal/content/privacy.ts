import { CONTACT_EMAIL, CONTACT_WEBSITE } from "../contact"
import type { LegalDocument } from "../types"
export const PRIVACY: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  metaDescription:
    "Navoryn's Privacy Policy explains what information we collect, why we collect it, and how we handle and protect it.",
  intro: [],
  sections: [
    {
      title: "Information We Collect",
      blocks: [
        "Navoryn does not currently offer user accounts, sign-in pages or login-based services. However, when you contact us, request a quotation or discuss a potential project, we may collect information such as:",
        {
          list: [
            "Your name and business or organisation name.",
            "Email address and contact number.",
            "Project requirements, references and relevant documents.",
            "Business information voluntarily shared during discussions.",
            "Any other information you choose to provide through our communication channels.",
          ],
        },
        "We may also collect basic technical information when you visit our website, such as browser type, device information, IP address and website usage data, depending on the analytics and website technologies in use.",
      ],
    },
    {
      title: "How We Use Your Information",
      blocks: [
        "We use the information you provide to:",
        {
          list: [
            "Respond to enquiries and project discussions.",
            "Understand your business requirements.",
            "Prepare proposals, quotations and project estimates.",
            "Establish project agreements and communicate progress.",
            "Deliver agreed design, development and related services.",
            "Manage invoices, payments and business records.",
            "Improve our website, services and client experience.",
            "Meet applicable legal and business obligations.",
          ],
        },
        "We do not sell or rent your personal information to third parties.",
      ],
    },
    {
      title: "Project Information and Confidentiality",
      blocks: [
        "Information shared during project discussions and execution is treated as confidential business information. We use client-provided materials, documents, credentials and project information only for purposes connected with the agreed services, unless otherwise authorised or legally required. Where necessary, confidentiality arrangements may also be documented separately between Navoryn and the client.",
      ],
    },
    {
      title: "Sharing of Information",
      blocks: [
        "We do not share personal or project information for advertising or unrelated commercial purposes. Information may be shared with trusted service providers when necessary to operate our website or deliver a project. These may include hosting providers, domain registrars, payment providers, communication platforms and other technical partners. We may also disclose information when required by law or to protect our legitimate business interests and legal rights.",
      ],
    },
    {
      title: "Data Retention",
      blocks: [
        "We retain information only for as long as reasonably necessary to fulfil its intended purpose, maintain business records, provide ongoing support or comply with applicable legal requirements. Project files and business communications may be retained for reference, maintenance, contractual or accounting purposes.",
      ],
    },
    {
      title: "Cookies and Website Technologies",
      blocks: [
        "Our website may use cookies or similar technologies to support essential website functionality, understand website performance and improve the browsing experience. You can manage or disable cookies through your browser settings. Certain website features may not function as intended if essential cookies are disabled.",
      ],
    },
    {
      title: "Your Privacy Rights",
      blocks: [
        "You may contact us to request access to, correction of or deletion of personal information that we hold, subject to applicable legal, contractual and record-retention requirements. We will review reasonable requests and respond appropriately.",
      ],
    },
    {
      title: "Policy Updates",
      blocks: [
        "We may update this Privacy Policy when our services, website technologies or legal obligations change. The latest version will be published on this page with its updated effective date.",
      ],
    },
    {
      title: "Contact Us",
      blocks: [
        "For privacy-related questions, requests or concerns, contact us:",
        { list: [`Email: ${CONTACT_EMAIL}`, `Website: ${CONTACT_WEBSITE}`] },
      ],
    },
  ],
}
