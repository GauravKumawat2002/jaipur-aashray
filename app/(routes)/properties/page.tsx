import PropertyListingPage from "@/components/custom/property/property-listing";

// Sample amenities list
const ALL_AMENITIES: PropertyAmenity[] = [
  { id: "parking", name: "Parking", icon: "🚗" },
  { id: "pool", name: "Swimming Pool", icon: "🏊" },
  { id: "gym", name: "Gym", icon: "🏋️" },
  { id: "garden", name: "Garden", icon: "🌳" },
  { id: "security", name: "24/7 Security", icon: "🛡️" },
  { id: "elevator", name: "Elevator", icon: "🛗" },
];

// Sample property data (would typically come from a local JSON file)
const SAMPLE_PROPERTIES: Property[] = [
  {
    id: "prop1",
    title: "Luxury Apartment in City Center",
    type: "residential",
    listingType: "sale",
    price: 500000,
    location: "Downtown, Metropolis",
    bedrooms: 3,
    bathrooms: 2,
    area: 1200,
    description: "Spacious and modern apartment with stunning city views.",
    images: ["/commercial-building.jpg", "/p2.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[1], // Swimming Pool
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop2",
    title: "2 BHK Flat in Mumbai Suburbs",
    type: "residential",
    listingType: "rent",
    price: 25000,
    location: "Andheri, Mumbai",
    bedrooms: 2,
    bathrooms: 2,
    area: 900,
    description: "Well-maintained flat with easy access to metro and markets.",
    images: ["/sample-property-3.jpg", "/sample-property-4.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop3",
    title: "Commercial Office Space in IT Hub",
    type: "commercial",
    listingType: "sale",
    price: 15000000,
    location: "Whitefield, Bengaluru",
    area: 2500,
    description: "Prime office space in the heart of the IT corridor.",
    images: ["/sample-property-5.jpg", "/sample-property-6.jpg"],
    amenities: [
      ALL_AMENITIES[4], // Security
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop4",
    title: "Independent Villa with Garden",
    type: "residential",
    listingType: "sale",
    price: 7500000,
    location: "Alwarpet, Chennai",
    bedrooms: 4,
    bathrooms: 3,
    area: 3000,
    description: "Spacious villa with private garden and parking space.",
    images: ["/sample-property-7.jpg", "/sample-property-8.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[3], // Garden
    ],
  },
  {
    id: "prop5",
    title: "Studio Apartment for Rent",
    type: "residential",
    listingType: "rent",
    price: 15000,
    location: "Hinjewadi, Pune",
    bedrooms: 1,
    bathrooms: 1,
    area: 450,
    description: "Compact studio apartment ideal for working professionals.",
    images: ["/sample-property-9.jpg", "/sample-property-10.jpg"],
    amenities: [
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop6",
    title: "Retail Shop in Prime Location",
    type: "commercial",
    listingType: "sale",
    price: 3000000,
    location: "Connaught Place, Delhi",
    area: 600,
    description: "High footfall area, perfect for retail businesses.",
    images: ["/sample-property-11.jpg", "/sample-property-12.jpg"],
    amenities: [
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop7",
    title: "3 BHK Flat with Sea View",
    type: "residential",
    listingType: "sale",
    price: 12000000,
    location: "Marine Drive, Mumbai",
    bedrooms: 3,
    bathrooms: 3,
    area: 1500,
    description: "Luxurious flat with breathtaking views of the Arabian Sea.",
    images: ["/sample-property-13.jpg", "/sample-property-14.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[1], // Swimming Pool
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop8",
    title: "Penthouse with Private Terrace",
    type: "residential",
    listingType: "rent",
    price: 80000,
    location: "Banjara Hills, Hyderabad",
    bedrooms: 4,
    bathrooms: 4,
    area: 3500,
    description:
      "Exclusive penthouse with a private terrace and modern amenities.",
    images: ["/sample-property-15.jpg", "/sample-property-16.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[1], // Swimming Pool
      ALL_AMENITIES[3], // Garden
    ],
  },
  {
    id: "prop9",
    title: "Warehouse for Lease",
    type: "commercial",
    listingType: "rent",
    price: 100000,
    location: "Manesar, Gurgaon",
    area: 5000,
    description: "Spacious warehouse with easy access to highways.",
    images: ["/sample-property-17.jpg", "/sample-property-18.jpg"],
    amenities: [
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop10",
    title: "Affordable 1 BHK Flat",
    type: "residential",
    listingType: "sale",
    price: 2000000,
    location: "Salt Lake, Kolkata",
    bedrooms: 1,
    bathrooms: 1,
    area: 600,
    description: "Budget-friendly flat in a well-connected locality.",
    images: ["/sample-property-19.jpg", "/sample-property-20.jpg"],
    amenities: [
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop11",
    title: "Luxury Farmhouse with Pool",
    type: "residential",
    listingType: "sale",
    price: 25000000,
    location: "Chattarpur, Delhi",
    bedrooms: 5,
    bathrooms: 5,
    area: 5000,
    description: "Opulent farmhouse with a private pool and lush greenery.",
    images: ["/sample-property-21.jpg", "/sample-property-22.jpg"],
    amenities: [
      ALL_AMENITIES[1], // Swimming Pool
      ALL_AMENITIES[3], // Garden
    ],
  },
  {
    id: "prop12",
    title: "Shared Office Space",
    type: "commercial",
    listingType: "rent",
    price: 20000,
    location: "Koramangala, Bengaluru",
    area: 300,
    description:
      "Fully furnished shared office space with high-speed internet.",
    images: ["/sample-property-23.jpg", "/sample-property-24.jpg"],
    amenities: [
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop13",
    title: "Independent House for Sale",
    type: "residential",
    listingType: "sale",
    price: 6000000,
    location: "Viman Nagar, Pune",
    bedrooms: 3,
    bathrooms: 3,
    area: 2000,
    description: "Independent house with ample parking and garden space.",
    images: ["/sample-property-25.jpg", "/sample-property-26.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[3], // Garden
    ],
  },
  {
    id: "prop14",
    title: "Beachfront Villa",
    type: "residential",
    listingType: "rent",
    price: 150000,
    location: "ECR, Chennai",
    bedrooms: 4,
    bathrooms: 4,
    area: 4000,
    description: "Luxurious villa with direct access to the beach.",
    images: ["/sample-property-27.jpg", "/sample-property-28.jpg"],
    amenities: [
      ALL_AMENITIES[1], // Swimming Pool
      ALL_AMENITIES[3], // Garden
    ],
  },
  {
    id: "prop15",
    title: "2 BHK Apartment in Gated Community",
    type: "residential",
    listingType: "sale",
    price: 4500000,
    location: "Gachibowli, Hyderabad",
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    description: "Modern apartment with clubhouse and gym facilities.",
    images: ["/sample-property-29.jpg", "/sample-property-30.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[2], // Gym
    ],
  },
  {
    id: "prop16",
    title: "Commercial Shop for Rent",
    type: "commercial",
    listingType: "rent",
    price: 50000,
    location: "MG Road, Bengaluru",
    area: 800,
    description: "Shop in a prime commercial area with high visibility.",
    images: ["/sample-property-31.jpg", "/sample-property-32.jpg"],
    amenities: [
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop17",
    title: "Serviced Apartment for Rent",
    type: "residential",
    listingType: "rent",
    price: 60000,
    location: "Powai, Mumbai",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    description: "Fully furnished serviced apartment with housekeeping.",
    images: ["/sample-property-33.jpg", "/sample-property-34.jpg"],
    amenities: [
      ALL_AMENITIES[0], // Parking
      ALL_AMENITIES[4], // Security
    ],
  },
  {
    id: "prop18",
    title: "Luxury Office Space",
    type: "commercial",
    listingType: "sale",
    price: 20000000,
    location: "Cyber City, Gurgaon",
    area: 3000,
    description: "Premium office space with state-of-the-art facilities.",
    images: ["/sample-property-35.jpg", "/sample-property-36.jpg"],
    amenities: [
      ALL_AMENITIES[4], // Security
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop19",
    title: "Budget Studio Apartment",
    type: "residential",
    listingType: "sale",
    price: 1500000,
    location: "Rajarhat, Kolkata",
    bedrooms: 1,
    bathrooms: 1,
    area: 400,
    description: "Affordable studio apartment in a developing area.",
    images: ["/sample-property-37.jpg", "/sample-property-38.jpg"],
    amenities: [
      ALL_AMENITIES[5], // Elevator
    ],
  },
  {
    id: "prop20",
    title: "Heritage Bungalow",
    type: "residential",
    listingType: "sale",
    price: 10000000,
    location: "Fort Kochi, Kerala",
    bedrooms: 5,
    bathrooms: 4,
    area: 4500,
    description: "Charming heritage bungalow with traditional architecture.",
    images: ["/sample-property-39.jpg", "/sample-property-40.jpg"],
    amenities: [
      ALL_AMENITIES[3], // Garden
    ],
  },
];

export default function PropertyListing() {
  return (
    <div>
      <PropertyListingPage
        propertyAmenity={ALL_AMENITIES}
        propertyList={SAMPLE_PROPERTIES}
      />
    </div>
  );
}
