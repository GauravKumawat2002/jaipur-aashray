export declare global {
  export interface FAQ {
    id: string;
    question: string;
    answer: string;
    category: string;
  }

  export interface FAQPageProps {
    faqs: FAQ[];
  }
}
