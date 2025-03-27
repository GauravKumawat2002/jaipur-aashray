export declare global {
  // TypeScript interfaces for property data
  interface PropertyAmenity {
    id: string;
    name: string;
    icon: string;
  }

  interface Property {
    id: string;
    title: string;
    type: "residential" | "commercial";
    listingType: "sale" | "rent";
    price: number;
    location: string;
    bedrooms?: number;
    bathrooms?: number;
    area: number;
    description: string;
    images: string[];
    amenities: PropertyAmenity[];
  }

  // Filter interface
  interface Filters {
    propertyType: "all" | "residential" | "commercial";
    listingType: "all" | "sale" | "rent";
    minPrice: number;
    maxPrice: number;
    location: string;
    minBedrooms: number;
    minBathrooms: number;
    selectedAmenities: string[];
  }
  interface PropertyListingPageProps {
    propertyList: Property[];
    propertyAmenity: PropertyAmenity[];
  }

  // Property Details Component

  // Sample Similar Property Interface
  interface SimilarProperty {
    id: string;
    title: string;
    price: number;
    location: string;
    images: string[];
    bedrooms?: number;
    bathrooms?: number;
  }

  interface PropertyDetail extends Property {
    yearBuilt?: number;
    virtualTourUrl?: string;
    neighborhood?: {
      description: string;
      nearbyPlaces: Array<{
        name: string;
        type: string;
        distance: string;
      }>;
    };
  }
}
