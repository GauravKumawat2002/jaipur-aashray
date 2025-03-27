export declare global {
  interface PrivacyPolicySection {
    id: string;
    title: string;
    content: string[];
  }

  interface PrivacyPolicyProps {
    companyName: string;
    lastUpdated: string;
    sections: PrivacyPolicySection[];
  }

  // Type definitions for Terms & Conditions Sections
  interface TermsSection {
    id: string;
    title: string;
    content: string[];
    icon?: React.ComponentType;
  }

  interface TermsPageProps {
    companyName: string;
    lastUpdated: string;
    sections: TermsSection[];
  }
}
