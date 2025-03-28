import PropertyDetails from "@/components/custom/property/property-details";

export default async function PropertyDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(id);
  const sampleProperty: PropertyDetail = {
    id: "prop1",
    title: "Luxury Downtown Apartment",
    type: "residential",
    listingType: "sale",
    price: 750000,
    location: "Downtown, Metropolis",
    bedrooms: 3,
    bathrooms: 2,
    area: 1800,
    description:
      "A stunning modern apartment with breathtaking city views, located in the heart of the city. Featuring high-end finishes, open floor plan, and premium amenities.",
    images: [
      "/sample-property-1.jpg",
      "/sample-property-2.jpg",
      "/sample-property-3.jpg",
    ],
    amenities: [
      { id: "parking", name: "Parking", icon: "🚗" },
      { id: "pool", name: "Swimming Pool", icon: "🏊" },
      { id: "gym", name: "Gym", icon: "🏋️" },
      { id: "security", name: "24/7 Security", icon: "🛡️" },
    ],
    yearBuilt: 2018,
    virtualTourUrl: "https://www.youtube.com/watch?v=dZyQNy3-HjU", // Replace with actual virtual tour URL
    neighborhood: {
      description:
        "A vibrant neighborhood with excellent restaurants, parks, and public transportation.",
      nearbyPlaces: [
        { name: "Central Park", type: "Park", distance: "0.5 miles" },
        {
          name: "Metro Station",
          type: "Public Transit",
          distance: "0.2 miles",
        },
        { name: "Shopping Mall", type: "Retail", distance: "1 mile" },
      ],
    },
  };

  const similarProperties: SimilarProperty[] = [
    {
      id: "prop2",
      title: "Modern Loft in Uptown",
      price: 680000,
      location: "Uptown, Metropolis",
      images: ["/sample-property-4.jpg"],
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      id: "prop3",
      title: "Spacious Family Home",
      price: 850000,
      location: "Suburbia, Metropolis",
      images: ["/sample-property-5.jpg"],
      bedrooms: 4,
      bathrooms: 3,
    },
  ];
  return (
    <PropertyDetails
      property={sampleProperty}
      similarProperties={similarProperties}
    />
  );
}
