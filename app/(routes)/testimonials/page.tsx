import TestimonialsComponent from "@/components/custom/testimonials/testimonials-component";
import clientImage1 from "@/public/client-image.png";
export default function TestimonialsPage() {
  // Example Usage Component

  const sampleTestimonials: Testimonial[] = [
    {
      id: "1",
      clientName: "Emily Johnson",
      quote:
        "An incredible experience finding my dream home. The team was supportive throughout the entire process.",
      propertyType: "Residential",
      service: "sale",
      location: "New York",
      rating: 5,
      clientImageDetails: {
        src: clientImage1,
        alt: "Emily Johnson - Residential Property Buyer",
      },
    },
    {
      id: "2",
      clientName: "Michael Chen",
      quote:
        "Perfect rental solution for my family. Professional, quick, and hassle-free.",
      propertyType: "Apartment",
      service: "rent",
      location: "San Francisco",
      rating: 4,
      clientImageDetails: {
        src: clientImage1,
        alt: "Michael Chen - Apartment Renter",
      },
    },
    {
      id: "3",
      clientName: "Sarah Martinez",
      quote:
        "Exceptional service in finding a commercial property for my business.",
      propertyType: "Commercial",
      service: "sale",
      location: "Chicago",
      rating: 5,
      clientImageDetails: {
        src: clientImage1,
        alt: "Sarah Martinez - Commercial Property Buyer",
      },
    },
    {
      id: "4",
      clientName: "David Lee",
      quote:
        "A seamless process from start to finish. Highly recommend their services for anyone looking for a new home.",
      propertyType: "Residential",
      service: "sale",
      location: "Los Angeles",
      rating: 5,
      clientImageDetails: {
        src: clientImage1,
        alt: "David Lee - Residential Property Buyer",
      },
    },
    {
      id: "5",
      clientName: "Sophia Brown",
      quote:
        "They helped me find the perfect office space for my startup. Couldn't be happier with the service.",
      propertyType: "Commercial",
      service: "rent",
      location: "Seattle",
      rating: 4,
      clientImageDetails: {
        src: clientImage1,
        alt: "Sophia Brown - Commercial Property Renter",
      },
    },
    {
      id: "6",
      clientName: "James Wilson",
      quote:
        "Their expertise in the real estate market is unmatched. Found a great vacation home thanks to them.",
      propertyType: "Vacation Home",
      service: "sale",
      location: "Miami",
      rating: 5,
      clientImageDetails: {
        src: clientImage1,
        alt: "James Wilson - Vacation Home Buyer",
      },
    },
    // Add more testimonials as needed
  ];

  return (
    <div>
      <TestimonialsComponent
        testimonials={sampleTestimonials}
        heroText="Discover What Our Clients Say About Us"
      />
    </div>
  );
}
