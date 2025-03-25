import { routes } from "@/app/routes";
import AboutUsSection from "@/components/custom/home/about-us-section";
import Hero from "@/components/custom/home/hero";
import PropertySection from "@/components/custom/home/property-section";
import PropertyCard from "@/components/custom/shared/property-card";
import SectionTitle from "@/components/custom/shared/section-title";
import { Button } from "@/components/ui/button";
import p2 from "@/public/p2.png";
import { MoveRight } from "lucide-react";
import Link from "next/link";

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
  {
    propertyName: "Beach House",
    propertyPrice: "$1,200,000",
    propertyLocation: "Malibu, CA",
    propertyImage: p2,
    bhkDetails: {
      bed: 4,
      hall: 2,
      kitchen: 2,
    },
    propertyImageAlt: "property Image",
  },
  {
    propertyName: "Penthouse Suite",
    propertyPrice: "$2,500,000",
    propertyLocation: "Miami, FL",
    propertyImage: p2,
    bhkDetails: {
      bed: 3,
      hall: 2,
      kitchen: 1,
    },
    propertyImageAlt: "property Image",
  },
  {
    propertyName: "Suburban Home",
    propertyPrice: "$600,000",
    propertyLocation: "Austin, TX",
    propertyImage: p2,
    bhkDetails: {
      bed: 3,
      hall: 2,
      kitchen: 1,
    },
    propertyImageAlt: "property Image",
  },
];

export default function Home() {
  return (
    <>
      <section className="mb-8">
        {" "}
        <Hero
          title="Invest Today In Your Dream Home"
          subtitle="Find your dream home with us—where trust, innovation, and lifestyle come together seamlessly!"
          tagline="DREAMS WITHIN REACH"
          primaryColor="#c22126"
        />
      </section>
      <section className="mb-8">
        <AboutUsSection {...aboutUsData} />
      </section>
      <section className="mb-8">
        <PropertySection
          sectionTitle={"Featured Properties"}
          properties={propertyCardDetails}
          viewMoreButtonText="View More"
        />
      </section>
    </>
  );
}
