import { CONTACT_EMAIL } from "../contact"
import type { LegalDocument } from "../types"
export const SECURITY: LegalDocument = {
  slug: "security",
  title: "Security",
  metaDescription:
    "How Navoryn handles client information, project files and access credentials, and how to report a security concern.",
  intro: [
    "We understand that clients may share confidential business information, project files, technical documentation and access credentials during the course of a project. We aim to handle these materials responsibly and apply appropriate safeguards throughout our working relationship.",
  ],
  sections: [
    {
      title: "No User Accounts or Login System",
      blocks: [
        "Navoryn's website does not currently provide user registration, sign-in or client account functionality. Project communication, agreements, approvals and payment coordination take place through direct communication between the client and our team. We do not ask visitors to create website accounts to enquire about or engage our services.",
      ],
    },
    {
      title: "Information Handling",
      blocks: [
        "Information shared with Navoryn is used only for the purposes connected with the relevant enquiry, project, service agreement or ongoing support arrangement. We aim to limit access to client information to individuals who require it to perform their assigned responsibilities.",
      ],
    },
    {
      title: "Project Files and Credentials",
      blocks: [
        "Project files, source code, technical documentation and access credentials are handled with care. Where access credentials are required, clients should share them through appropriate secure channels rather than public or unsecured communication methods. Access should be limited to what is necessary for the agreed work. Clients should also avoid sharing unnecessary personal, financial or confidential information.",
      ],
    },
    {
      title: "Technical Security Practices",
      blocks: [
        "Depending on the project and its technical requirements, appropriate security measures may include:",
        {
          list: [
            "Secure development and deployment practices.",
            "Access controls and restricted permissions.",
            "Secure handling of project credentials and configuration.",
            "Dependency and package management.",
            "Regular updates to supported software components.",
            "Appropriate backup and recovery practices.",
            "Testing of relevant application functionality.",
            "Secure communication with supported third-party services.",
          ],
        },
        "Specific security measures may vary according to the nature, scope and infrastructure of each project.",
      ],
    },
    {
      title: "Third-Party Infrastructure",
      blocks: [
        "Some projects may use external hosting platforms, cloud providers, APIs, payment gateways, domain registrars or other technical services. These providers maintain their own security policies and infrastructure. Where third-party services are involved, their terms, technical limitations and security responsibilities should be considered as part of the project arrangement.",
      ],
    },
    {
      title: "Responsible Access and Collaboration",
      blocks: [
        "Security is a shared responsibility. Navoryn takes reasonable care when handling client information and project access. Clients are also responsible for maintaining the security of their own accounts, devices, credentials and third-party services. Any access provided for development or maintenance should be authorised by the client.",
      ],
    },
    {
      title: "Security Concerns and Reporting",
      blocks: [
        "If you identify a potential security issue involving our website, project deliverables or information handled by Navoryn, please report it directly to us. Please include sufficient details to help us understand and investigate the concern. Do not publicly disclose suspected vulnerabilities or access confidential information beyond what is necessary to report the issue.",
        { list: [`Security Contact: ${CONTACT_EMAIL}`] },
      ],
    },
    {
      title: "Security Updates",
      blocks: [
        "We may update this page as our internal practices, technical infrastructure and service offerings evolve. The latest version will be published here with its effective date.",
      ],
    },
  ],
  closing: "Navoryn — Built on Trust. Driven by Purpose.",
}
