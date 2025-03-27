"use client";
import { FileText, AlertTriangle, Scale, Gavel } from "lucide-react";
import TermsAndConditionsComponent from "@/components/custom/terms-conditions/terms";

const termssections: TermsSection[] = [
  {
    id: "website-use",
    title: "Use of Website",
    icon: FileText,
    content: [
      "By accessing and using our website, you agree to comply with and be bound by the following terms and conditions of use.",
      "We grant you a limited, non-exclusive, and revocable right to access and use our website for personal, non-commercial purposes.",
    ],
  },
  {
    id: "property-information",
    title: "Property Information Disclaimer",
    icon: AlertTriangle,
    content: [
      "All property information provided on our platform is for informational purposes only. We do not guarantee the accuracy, completeness, or reliability of any information.",
      "Users are advised to independently verify all property details, pricing, and availability before making any decisions.",
    ],
  },
  {
    id: "user-responsibilities",
    title: "User Responsibilities",
    icon: Scale,
    content: [
      "Users are responsible for maintaining the confidentiality of their account information and for all activities that occur under their account.",
      "You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.",
    ],
  },
  {
    id: "limitation-of-liability",
    title: "Limitation of Liability",
    icon: Gavel,
    content: [
      "Our company shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.",
      "We reserve the right to modify, suspend, or discontinue any aspect of our service at any time without notice.",
    ],
  },
];

export default function TermsAndConditionsPage() {
  return (
    <TermsAndConditionsComponent
      companyName="Property Connect"
      lastUpdated="March 27, 2025"
      sections={termssections}
    />
  );
}
