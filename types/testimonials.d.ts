import { StaticImageData } from "next/image";

export declare global {
  interface Testimonial {
    id: string;
    clientName: string;
    quote: string;
    propertyType: string;
    service: "sale" | "rent";
    location: string;
    rating: number;
    clientImageDetails: { src: string | StaticImageData; alt: string };
  }

  interface TestimonialsPageProps {
    testimonials: Testimonial[];
    heroText?: string;
  }
}
