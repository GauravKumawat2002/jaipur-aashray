import { StaticImageData } from "next/image";

export declare global {
  interface StatItem {
    number: string;
    label: string;
  }

  interface CardProps {
    title: string;
    text: string;
    buttonText: string;
    ctaButtonLink: string;
  }

  interface AboutUsProps {
    title: string;
    subtitle: string;
    tagline: string;
    card: CardProps;
    stats: StatItem[];
    imageAlt: string;
    className?: string;
  }
  interface PropertyCardDetails {
    propertyImage: string | StaticImageData;
    propertyName: string;
    propertyImageAlt: string;
    propertyLocation: string;
    propertyPrice: string;
    bhkDetails: {
      bed: number;
      hall: number;
      kitchen: number;
    };
  }
  interface PropertyCardProps {
    className?: string;
    cardDetails: PropertyCardDetails;
  }
  interface SectionTitleProps {
    className?: string;
    title: string;
    primaryColor?: string;
  }
  interface PropertySectionProps {
    sectionTitle: string;
    viewMoreButtonText?: string;
    properties: PropertyCardDetails[];
    className?: string;
  }
  interface FeaturesSectionProps {
    className?: string;
    sectionContent: {
      sectionTitle: string;
      cardContent: {
        title: string;
        description: string;
      }[];
    };
  }
}
