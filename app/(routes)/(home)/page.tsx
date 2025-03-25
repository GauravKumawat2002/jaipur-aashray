import { routes } from "@/app/routes";
import AboutUsSection, {
  AboutUsProps,
} from "@/components/custom/home/about-us-section";
import ContactUsSection from "@/components/custom/home/contact-us-section";
import FeaturesSection from "@/components/custom/home/features-section";
import Hero from "@/components/custom/home/hero";
import PropertySection from "@/components/custom/home/property-section";
import TestimonialSection from "@/components/custom/home/testimonials-section";
import { PropertyCardDetails } from "@/components/custom/shared/property-card";
import p2 from "@/public/p2.png";

const aboutUsData: AboutUsProps = {
  title: "About Us",
  subtitle: "Building dreams since 2003",
  tagline: "Your perfect home is just a click away",
  card: {
    title: "Find Your Home",
    text: "We specialize in matching you with properties that fit your lifestyle and budget.",
    buttonText: "EXPLORE NOW →",
    ctaButtonLink: routes["about-us"],
  },
  stats: [
    { number: "20+", label: "Years Experience" },
    { number: "5000+", label: "Happy Clients" },
  ],
  imageAlt: "Our team working",
};
const propertyCardDetails: PropertyCardDetails[] = [
  {
    propertyName: "Luxury Villa",
    propertyPrice: "$1,000,000",
    propertyLocation: "Beverly Hills, CA",
    propertyImage: p2,
    bhkDetails: {
      bed: 3,
      hall: 2,
      kitchen: 2,
    },
    propertyImageAlt: "property Image",
  },
  {
    propertyName: "Modern Apartment",
    propertyPrice: "$750,000",
    propertyLocation: "New York, NY",
    propertyImage: p2,
    bhkDetails: {
      bed: 2,
      hall: 1,
      kitchen: 1,
    },
    propertyImageAlt: "property Image",
  },
  {
    propertyName: "Cozy Cottage",
    propertyPrice: "$500,000",
    propertyLocation: "Aspen, CO",
    propertyImage: p2,
    bhkDetails: {
      bed: 2,
      hall: 1,
      kitchen: 1,
    },
    propertyImageAlt: "property Image",
  },
  // {
  //   propertyName: "Beach House",
  //   propertyPrice: "$1,200,000",
  //   propertyLocation: "Malibu, CA",
  //   propertyImage: p2,
  //   bhkDetails: {
  //     bed: 4,
  //     hall: 2,
  //     kitchen: 2,
  //   },
  //   propertyImageAlt: "property Image",
  // },
  // {
  //   propertyName: "Penthouse Suite",
  //   propertyPrice: "$2,500,000",
  //   propertyLocation: "Miami, FL",
  //   propertyImage: p2,
  //   bhkDetails: {
  //     bed: 3,
  //     hall: 2,
  //     kitchen: 1,
  //   },
  //   propertyImageAlt: "property Image",
  // },
  // {
  //   propertyName: "Suburban Home",
  //   propertyPrice: "$600,000",
  //   propertyLocation: "Austin, TX",
  //   propertyImage: p2,
  //   bhkDetails: {
  //     bed: 3,
  //     hall: 2,
  //     kitchen: 1,
  //   },
  //   propertyImageAlt: "property Image",
  // },
];
const featuresContent = {
  sectionTitle: "Our Features",
  cardContent: [
    {
      title: "Seamless Solutions Your Success",
      description:
        "Discover properties, connect with experts, and unlock opportunities effortlessly. Building dreams, one home at a time—your journey starts here.",
    },
    {
      title: "Proactive Realty Services",
      description:
        "Our trusted partner in real estate. Offering expert guidance, tailored solutions, and seamless experiences to help you find and invest in the perfect property.",
    },
    {
      title: "Supreme Home Finders",
      description:
        "Turning dreams into reality. Your ultimate destination for discovering perfect homes, tailored to your needs. Let us guide you to your supreme living space.",
    },
  ],
};
const testimonialsData = [
  {
    name: "John Doe",
    role: "CEO, XYZ Corp",
    testimonial:
      "Working with this team was an amazing experience. They delivered beyond expectations!",
    imageUrl: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO, ABC Ltd",
    testimonial:
      "Excellent service and outstanding results. Highly recommended!",
    imageUrl: "/jane-smith.jpg",
  },
  {
    name: "Robert Brown",
    role: "Project Manager, LMN Inc",
    testimonial: "Professional and result-driven team. Great to work with!",
    imageUrl: "/robert-brown.jpg",
  },
  {
    name: "John Doe",
    role: "CEO, XYZ Corp",
    testimonial:
      "Working with this team was an amazing experience. They delivered beyond expectations!",
    imageUrl: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO, ABC Ltd",
    testimonial:
      "Excellent service and outstanding results. Highly recommended!",
    imageUrl: "/jane-smith.jpg",
  },
  {
    name: "Robert Brown",
    role: "Project Manager, LMN Inc",
    testimonial: "Professional and result-driven team. Great to work with!",
    imageUrl: "/robert-brown.jpg",
  },
  {
    name: "John Doe",
    role: "CEO, XYZ Corp",
    testimonial:
      "Working with this team was an amazing experience. They delivered beyond expectations!",
    imageUrl: "/john-doe.jpg",
  },
  {
    name: "Jane Smith",
    role: "CTO, ABC Ltd",
    testimonial:
      "Excellent service and outstanding results. Highly recommended!",
    imageUrl: "/jane-smith.jpg",
  },
  {
    name: "Robert Brown",
    role: "Project Manager, LMN Inc",
    testimonial: "Professional and result-driven team. Great to work with!",
    imageUrl: "/robert-brown.jpg",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-8">
      <section>
        <Hero
          title="Invest Today In Your Dream Home"
          subtitle="Find your dream home with us—where trust, innovation, and lifestyle come together seamlessly!"
          tagline="DREAMS WITHIN REACH"
          primaryColor="#c22126"
        />
      </section>
      <section>
        <AboutUsSection {...aboutUsData} />
      </section>
      <section>
        <PropertySection
          sectionTitle={"Featured Properties"}
          properties={propertyCardDetails}
          viewMoreButtonText="View More"
        />
      </section>
      <section>
        <FeaturesSection sectionContent={featuresContent} />
      </section>
      <section>
        <ContactUsSection className="" />
      </section>
      <section>
        <TestimonialSection
          testimonials={testimonialsData}
          className="mx-auto"
        />
      </section>
    </div>
  );
}
