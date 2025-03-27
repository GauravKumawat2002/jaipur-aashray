"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const PropertyListingPage: React.FC<PropertyListingPageProps> = ({
  propertyList,
  propertyAmenity,
}) => {
  // State for filters and properties
  const [filters, setFilters] = useState<Filters>({
    propertyType: "all",
    listingType: "all",
    minPrice: 0,
    maxPrice: 1000000,
    location: "",
    minBedrooms: 0,
    minBathrooms: 0,
    selectedAmenities: [],
  });

  // State for view mode
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  // Filtered properties based on current filters
  const filteredProperties = useMemo(() => {
    return propertyList.filter((property) => {
      // Property type filter
      if (
        filters.propertyType !== "all" &&
        property.type !== filters.propertyType
      )
        return false;

      // Listing type filter
      if (
        filters.listingType !== "all" &&
        property.listingType !== filters.listingType
      )
        return false;

      // Price range filter
      if (
        property.price < filters.minPrice ||
        property.price > filters.maxPrice
      )
        return false;

      // Location filter
      if (
        filters.location &&
        !property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      )
        return false;

      // Bedrooms filter
      if (property.bedrooms && property.bedrooms < filters.minBedrooms)
        return false;

      // Bathrooms filter
      if (property.bathrooms && property.bathrooms < filters.minBathrooms)
        return false;

      // Amenities filter
      if (filters.selectedAmenities.length > 0) {
        const propertyAmenityIds = property.amenities.map((a) => a.id);
        return filters.selectedAmenities.every((amenity) =>
          propertyAmenityIds.includes(amenity),
        );
      }

      return true;
    });
  }, [filters, propertyList]);

  // Reset filters function
  const resetFilters = () => {
    setFilters({
      propertyType: "all",
      listingType: "all",
      minPrice: 0,
      maxPrice: 1000000,
      location: "",
      minBedrooms: 0,
      minBathrooms: 0,
      selectedAmenities: [],
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 text-slate-800">
      {/* Filter Section */}
      <div className="mb-8 rounded-lg border border-slate-200 bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            Property Filters
          </h2>
          <button
            onClick={resetFilters}
            className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
          >
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Property Type Filter */}
          <select
            value={filters.propertyType}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                propertyType: e.target.value as Filters["propertyType"],
              }))
            }
            className="rounded border bg-white p-2 text-slate-700"
          >
            <option value="all">All Property Types</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
          </select>

          {/* Listing Type Filter */}
          <select
            value={filters.listingType}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                listingType: e.target.value as Filters["listingType"],
              }))
            }
            className="rounded border bg-white p-2 text-slate-700"
          >
            <option value="all">All Listing Types</option>
            <option value="sale">For Sale</option>
            <option value="rent">For Rent</option>
          </select>

          {/* Location Filter */}
          <input
            type="text"
            placeholder="Location"
            value={filters.location}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                location: e.target.value,
              }))
            }
            className="rounded border p-2 text-slate-700"
          />

          {/* Price Range */}
          <div className="flex items-center space-x-2">
            <input
              type="number"
              placeholder="Min Price"
              value={filters.minPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  minPrice: Number(e.target.value),
                }))
              }
              className="w-full rounded border p-2 text-slate-700"
            />
            <input
              type="number"
              placeholder="Max Price"
              value={filters.maxPrice}
              onChange={(e) =>
                setFilters((prev) => ({
                  ...prev,
                  maxPrice: Number(e.target.value),
                }))
              }
              className="w-full rounded border p-2 text-slate-700"
            />
          </div>

          {/* Bedrooms & Bathrooms */}
          <select
            value={filters.minBedrooms}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minBedrooms: Number(e.target.value),
              }))
            }
            className="rounded border bg-white p-2 text-slate-700"
          >
            <option value={0}>Bedrooms</option>
            <option value={1}>1+ Bedrooms</option>
            <option value={2}>2+ Bedrooms</option>
            <option value={3}>3+ Bedrooms</option>
          </select>

          <select
            value={filters.minBathrooms}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                minBathrooms: Number(e.target.value),
              }))
            }
            className="rounded border bg-white p-2 text-slate-700"
          >
            <option value={0}>Bathrooms</option>
            <option value={1}>1+ Bathrooms</option>
            <option value={2}>2+ Bathrooms</option>
          </select>

          {/* Amenities Filter */}
          <div className="col-span-full flex flex-wrap gap-2">
            {propertyAmenity.map((amenity) => (
              <button
                key={amenity.id}
                onClick={() =>
                  setFilters((prev) => ({
                    ...prev,
                    selectedAmenities: prev.selectedAmenities.includes(
                      amenity.id,
                    )
                      ? prev.selectedAmenities.filter((a) => a !== amenity.id)
                      : [...prev.selectedAmenities, amenity.id],
                  }))
                }
                className={`rounded-full px-3 py-1 text-sm transition ${
                  filters.selectedAmenities.includes(amenity.id)
                    ? "bg-red-600 text-white"
                    : "bg-slate-200 text-slate-700"
                } `}
              >
                {amenity.icon} {amenity.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-800">
          {filteredProperties.length} Properties Found
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => setViewMode("grid")}
            className={`rounded p-2 ${viewMode === "grid" ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"}`}
          >
            Grid View
          </button>
          <button
            onClick={() => setViewMode("list")}
            className={`rounded p-2 ${viewMode === "list" ? "bg-red-600 text-white" : "bg-slate-200 text-slate-700"}`}
          >
            List View
          </button>
        </div>
      </div>

      {/* Properties Grid/List */}
      <motion.div
        layout
        className={`gap-6 ${
          viewMode === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "space-y-4"
        } `}
      >
        {filteredProperties.map((property) => (
          <motion.div
            key={property.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg ${
              viewMode === "list"
                ? "flex items-center space-x-4 p-4"
                : "relative"
            } `}
          >
            {/* Property Image */}
            <div
              className={
                viewMode === "grid" ? "relative h-48" : "relative h-48 w-1/3"
              }
            >
              <Image
                src={property.images[0]}
                alt={property.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Property Details */}
            <div className={viewMode === "list" ? "w-2/3" : ""}>
              <div className="p-4">
                <h3 className="mb-2 text-xl font-bold text-slate-800">
                  {property.title}
                </h3>
                <p className="mb-2 text-slate-600">{property.location}</p>

                <div className="mb-2 flex items-center justify-between">
                  <span className="font-bold text-red-600">
                    ${property.price.toLocaleString()}
                    <span className="ml-1 text-sm text-slate-600">
                      {property.listingType === "sale"
                        ? "For Sale"
                        : "For Rent"}
                    </span>
                  </span>
                  <div className="flex space-x-2">
                    {property.bedrooms && (
                      <span className="flex items-center text-slate-700">
                        🛏️ {property.bedrooms}
                      </span>
                    )}
                    {property.bathrooms && (
                      <span className="flex items-center text-slate-700">
                        🚿 {property.bathrooms}
                      </span>
                    )}
                  </div>
                </div>

                {/* Amenities */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {property.amenities.map((amenity) => (
                    <span
                      key={amenity.id}
                      className="rounded bg-slate-100 px-2 py-1 text-sm text-slate-700"
                    >
                      {amenity.icon} {amenity.name}
                    </span>
                  ))}
                </div>
              </div>

              {/* View Details Link */}
              <Link
                href={`/properties/${property.id}`}
                className="block w-full bg-red-700 py-2 text-center text-white transition hover:bg-red-800"
              >
                View Property Details
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* No Properties Found */}
      {filteredProperties.length === 0 && (
        <div className="rounded-lg border border-slate-200 bg-white py-12 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-slate-600">
            No Properties Found
          </h3>
          <p className="text-slate-500">
            Try adjusting your filters to find matching properties.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyListingPage;
