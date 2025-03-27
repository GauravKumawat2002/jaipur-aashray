import PrivacyPolicyPage from "@/components/custom/privacy-policy/privacy-policy";

export default function ExamplePrivacyPolicy() {
  const privacyPolicySections: PrivacyPolicySection[] = [
    {
      id: "data-collection",
      title: "Data Collection",
      content: [
        "We collect personal information that you voluntarily provide to us when registering for an account, expressing an interest in obtaining information about us or our products and services, or otherwise contacting us.",
        "The personal information that we collect depends on the context of your interactions with us and the website, the choices you make and the products and features you use.",
      ],
    },
    {
      id: "data-usage",
      title: "Data Usage",
      content: [
        "We use personal information collected via our website for a variety of business purposes described below:",
        "- To provide and maintain our service",
        "- To notify you about changes to our service",
        "- To allow you to participate in interactive features of our service when you choose to do so",
      ],
    },
    {
      id: "user-rights",
      title: "User Rights",
      content: [
        "You have certain rights under applicable data protection laws. These may include the right to request access to, correction of, or deletion of your personal information.",
        "You can exercise these rights by contacting us using the contact information provided.",
      ],
    },
    {
      id: "cookie-policy",
      title: "Cookie Policy",
      content: [
        "We use cookies and similar tracking technologies to track the activity on our service and store certain information.",
        "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device.",
      ],
    },
    {
      id: "data-security",
      title: "Data Security",
      content: [
        "We implement appropriate technical and organizational measures to protect the security of your personal information.",
        "However, please also remember that we cannot guarantee that the internet itself is 100% secure.",
      ],
    },
    {
      id: "third-party-services",
      title: "Third-Party Services",
      content: [
        "We may share your information with third-party vendors, service providers, contractors, or agents who perform services for us or on our behalf.",
        "These third parties are required to maintain the confidentiality of your information.",
      ],
    },
    {
      id: "data-retention",
      title: "Data Retention",
      content: [
        "We will only keep your personal information for as long as it is necessary for the purposes set out in this privacy policy.",
        "When we have no ongoing legitimate business need to process your personal information, we will delete or anonymize it.",
      ],
    },
    {
      id: "children-privacy",
      title: "Children's Privacy",
      content: [
        "Our services are not directed to individuals under the age of 13.",
        "We do not knowingly collect personal information from children under 13.",
      ],
    },
    {
      id: "international-transfers",
      title: "International Transfers",
      content: [
        "Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction.",
        "We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this privacy policy.",
      ],
    },
    {
      id: "legal-basis",
      title: "Legal Basis for Processing",
      content: [
        "We process your personal information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.",
      ],
    },
    {
      id: "marketing-communications",
      title: "Marketing Communications",
      content: [
        "You can opt-out of receiving marketing emails from us at any time by following the unsubscribe link in the emails.",
        "We will respect your request to stop receiving marketing communications.",
      ],
    },
    {
      id: "data-breach",
      title: "Data Breach",
      content: [
        "In the event of a data breach, we will notify affected users and relevant authorities as required by applicable laws.",
        "We will take immediate steps to mitigate the impact of the breach.",
      ],
    },
    {
      id: "user-consent",
      title: "User Consent",
      content: [
        "By using our services, you consent to the collection and use of your information as described in this privacy policy.",
        "If you do not agree with this policy, please do not use our services.",
      ],
    },
    {
      id: "policy-changes",
      title: "Policy Changes",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.",
        "We encourage you to review this policy periodically for any updates.",
      ],
    },
    {
      id: "contact-information",
      title: "Contact Information",
      content: [
        "If you have any questions or concerns about this privacy policy, please contact us at privacy@propertyconnect.com.",
      ],
    },
    {
      id: "data-access",
      title: "Data Access",
      content: [
        "You have the right to request access to the personal information we hold about you.",
        "To make such a request, please contact us using the information provided in this policy.",
      ],
    },
    {
      id: "data-correction",
      title: "Data Correction",
      content: [
        "If you believe that any personal information we hold about you is incorrect or incomplete, you have the right to request correction.",
        "We will promptly update any information found to be incorrect.",
      ],
    },
    {
      id: "data-deletion",
      title: "Data Deletion",
      content: [
        "You have the right to request the deletion of your personal information under certain circumstances.",
        "We will comply with your request in accordance with applicable laws.",
      ],
    },
    {
      id: "analytics",
      title: "Analytics",
      content: [
        "We may use third-party service providers to monitor and analyze the use of our service.",
        "These providers may collect information about your use of the service to help us improve it.",
      ],
    },
    {
      id: "advertising",
      title: "Advertising",
      content: [
        "We may use third-party advertising companies to serve ads when you visit our website.",
        "These companies may use information about your visits to provide advertisements about goods and services of interest to you.",
      ],
    },
    {
      id: "social-media",
      title: "Social Media",
      content: [
        "Our website may include social media features, such as the Facebook Like button.",
        "These features may collect your IP address and set a cookie to enable the feature to function properly.",
      ],
    },
    {
      id: "external-links",
      title: "External Links",
      content: [
        "Our website may contain links to other websites that are not operated by us.",
        "We are not responsible for the content or privacy practices of these external sites.",
      ],
    },
    {
      id: "user-feedback",
      title: "User Feedback",
      content: [
        "We welcome your feedback about our privacy policy and practices.",
        "Please contact us with any comments or suggestions.",
      ],
    },
    {
      id: "dispute-resolution",
      title: "Dispute Resolution",
      content: [
        "If you have a dispute regarding our privacy practices, please contact us to resolve the issue.",
        "We will work with you to address your concerns in a timely manner.",
      ],
    },
  ];
  return (
    <PrivacyPolicyPage
      companyName="Property Connect"
      lastUpdated="March 27, 2025"
      sections={privacyPolicySections}
    />
  );
}
