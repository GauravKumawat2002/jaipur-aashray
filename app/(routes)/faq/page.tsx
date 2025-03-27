import FAQ from "@/components/custom/faq/faq-page";

const sampleFAQs: FAQ[] = [
  {
    id: "1",
    question: "How do I start the property buying process?",
    answer:
      "Begin by assessing your budget, getting pre-approved for a mortgage, and contacting a real estate agent.",
    category: "Buying Properties",
  },
  {
    id: "2",
    question: "What documents are needed for renting?",
    answer:
      "Typically, you'll need proof of income, identification, rental history, and references.",
    category: "Renting Properties",
  },
  {
    id: "3",
    question: "What are the legal requirements for property transfer?",
    answer:
      "Legal requirements include title search, property valuation, and drafting of transfer documents.",
    category: "Legal Questions",
  },
  {
    id: "4",
    question: "How can I determine the market value of a property?",
    answer:
      "You can determine the market value by comparing similar properties in the area, consulting a real estate agent, or hiring an appraiser.",
    category: "Property Valuation",
  },
  {
    id: "5",
    question: "What is the process for applying for a home loan?",
    answer:
      "The process includes checking your credit score, gathering necessary documents, choosing a lender, and submitting an application.",
    category: "Financing",
  },
  {
    id: "6",
    question: "What should I inspect before buying a property?",
    answer:
      "Inspect the property's condition, location, legal clearances, and any potential maintenance issues.",
    category: "Buying Properties",
  },
  {
    id: "7",
    question: "What are the common mistakes to avoid when renting a property?",
    answer:
      "Avoid signing a lease without reading it thoroughly, not inspecting the property, and failing to document existing damages.",
    category: "Renting Properties",
  },
  {
    id: "8",
    question: "How do I resolve disputes with my landlord?",
    answer:
      "Communicate clearly, document all interactions, and seek mediation or legal advice if necessary.",
    category: "Legal Questions",
  },
  {
    id: "9",
    question:
      "What is the difference between a fixed-rate and adjustable-rate mortgage?",
    answer:
      "A fixed-rate mortgage has a consistent interest rate, while an adjustable-rate mortgage's rate can change over time.",
    category: "Financing",
  },
  {
    id: "10",
    question: "How do I prepare my property for sale?",
    answer:
      "Clean and declutter, make necessary repairs, stage the property, and set a competitive price.",
    category: "Selling Properties",
  },
  {
    id: "11",
    question: "What are the tax implications of selling a property?",
    answer:
      "You may be subject to capital gains tax, but exemptions or deductions may apply depending on your situation.",
    category: "Legal Questions",
  },
  {
    id: "12",
    question: "How do I find a reliable real estate agent?",
    answer:
      "Ask for recommendations, check online reviews, and interview multiple agents to find the best fit.",
    category: "General",
  },
  {
    id: "13",
    question: "What is the importance of a property title search?",
    answer:
      "A title search ensures that the property is free of liens or disputes and confirms the seller's ownership.",
    category: "Legal Questions",
  },
  {
    id: "14",
    question: "What are the benefits of investing in real estate?",
    answer:
      "Real estate can provide steady income, tax advantages, and long-term appreciation in value.",
    category: "Investing",
  },
  {
    id: "15",
    question: "How do I choose the right neighborhood for my family?",
    answer:
      "Consider factors like safety, schools, amenities, commute times, and future development plans.",
    category: "Buying Properties",
  },
  {
    id: "16",
    question: "What is the role of a property manager?",
    answer:
      "A property manager handles tenant relations, maintenance, rent collection, and ensures compliance with local laws.",
    category: "Renting Properties",
  },
  {
    id: "17",
    question:
      "How do I calculate the return on investment (ROI) for a property?",
    answer:
      "ROI is calculated by dividing the net profit from the property by the total investment cost, then multiplying by 100.",
    category: "Investing",
  },
  {
    id: "18",
    question: "What are the risks of buying a foreclosed property?",
    answer:
      "Risks include hidden damages, unclear titles, and potential legal complications.",
    category: "Buying Properties",
  },
  {
    id: "19",
    question: "How do I negotiate the best price for a property?",
    answer:
      "Research market trends, understand the seller's motivations, and make a reasonable offer backed by data.",
    category: "Buying Properties",
  },
  {
    id: "20",
    question:
      "What is the difference between freehold and leasehold properties?",
    answer:
      "Freehold properties grant full ownership, while leasehold properties are owned for a set period under a lease agreement.",
    category: "Legal Questions",
  },
];
export default function FAQPage() {
  return <FAQ faqs={sampleFAQs} />;
}
