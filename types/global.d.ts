import { StaticImageData } from "next/image";

export declare global {
  // Common/Shared Interfaces
  interface Link {
    href: string;
    title: string;
  }

  interface SectionTitleProps {
    className?: string;
    title: string;
    primaryColor?: string;
  }

  // About Us Section
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

  interface AboutUsContentProps {
    title: string;
    subtitle: string;
    tagline: string;
    card: CardProps;
    children: ReactNode;
  }

  interface AboutUsImageProps {
    src: string | StaticImageData;
    alt: string;
  }

  // Properties Section
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

  interface PropertySectionProps {
    sectionTitle: string;
    viewMoreButtonText?: string;
    properties: PropertyCardDetails[];
    className?: string;
  }

  // Features Section
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

  // Testimonials Section
  interface ClientTestimonialCardProps {
    name: string;
    role: string;
    testimonial: string;
    imageUrl?: string;
  }

  interface TestimonialSectionProps {
    testimonials: {
      name: string;
      role: string;
      testimonial: string;
      imageUrl?: string;
    }[];
    className?: string;
  }

  // Contact Section
  interface ContactUsSectionProps {
    className?: string;
  }

  interface ContactFormProps {
    heading?: string;
    className?: string;
  }

  // Footer Section
  interface FooterLinksProps {
    heading: string;
    className?: string;
    links: Link[];
  }

  interface FooterSocialProps {
    className?: string;
    footerSocial: {
      href: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
    };
  }
  interface FooterProps {
    className?: string;
  }
}
