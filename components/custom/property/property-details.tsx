"use client";
import {
  MapPin,
  Share2,
  Printer,
  Heart,
  CreditCard,
  Ruler,
  Calendar,
  Bed,
  Bath,
  Phone,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const PropertyDetails: React.FC<{
  property: PropertyDetail;
  similarProperties: SimilarProperty[];
}> = ({ property, similarProperties }) => {
  // State for image gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // State for contact modal
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  // Share functionality (client-side only)
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: property.title,
          text: `Check out this amazing property: ${property.title}`,
          url: window.location.href,
        })
        .catch(console.error);
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href).then(() => {
        alert("Property link copied to clipboard!");
      });
    }
  };

  // Print functionality
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container mx-auto px-4 py-8 text-slate-800">
      {/* Property Image Gallery */}
      <div className="mb-12 grid gap-8 md:grid-cols-2">
        {/* Main Image */}
        <div className="relative h-96 w-full">
          <Image
            src={property.images[currentImageIndex]}
            alt={property.title}
            fill
            className="rounded-lg object-cover shadow-lg"
            priority
          />

          {/* Image Navigation Buttons */}
          {property.images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {property.images.map((_, index) => (
                <Button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 w-2 rounded-full ${
                    index === currentImageIndex ? "bg-red-600" : "bg-slate-300"
                  } `}
                />
              ))}
            </div>
          )}
        </div>

        {/* Thumbnail Gallery */}
        <div className="grid grid-cols-4 gap-2">
          {property.images.map((image, index) => (
            <div
              key={index}
              className="relative h-24 cursor-pointer"
              onClick={() => setCurrentImageIndex(index)}
            >
              <Image
                src={image}
                alt={`Property thumbnail ${index + 1}`}
                fill
                className={`rounded object-cover ${
                  index === currentImageIndex
                    ? "border-2 border-red-600"
                    : "opacity-70 hover:opacity-100"
                } `}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Property Details Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {property.title}
          </h1>
          <p className="flex items-center text-slate-600">
            <MapPin className="mr-2 text-red-600" size={20} />
            {property.location}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <Button
            onClick={handleShare}
            className="rounded-full bg-slate-100 p-2 transition hover:bg-slate-200"
            title="Share Property"
          >
            <Share2 className="text-slate-700" />
          </Button>
          <button
            onClick={handlePrint}
            className="rounded-full bg-slate-100 p-2 transition hover:bg-slate-200"
            title="Print Property Details"
          >
            <Printer className="text-slate-700" />
          </button>
          <button
            className="rounded-full bg-slate-100 p-2 transition hover:bg-slate-200"
            title="Save Favorite"
          >
            <Heart className="text-slate-700" />
          </button>
        </div>
      </div>

      {/* Property Key Details */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-slate-50 p-4">
          <div className="mb-2 flex items-center">
            <CreditCard className="mr-2 text-red-600" />
            <span className="font-bold">Price</span>
          </div>
          <p className="text-2xl font-bold text-red-600">
            ${property.price.toLocaleString()}
            <span className="ml-2 text-sm text-slate-600">
              {property.listingType === "sale" ? "For Sale" : "For Rent"}
            </span>
          </p>
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <div className="mb-2 flex items-center">
            <Ruler className="mr-2 text-red-600" />
            <span className="font-bold">Area</span>
          </div>
          <p className="text-xl">{property.area} sq ft</p>
        </div>

        <div className="rounded-lg bg-slate-50 p-4">
          <div className="mb-2 flex items-center">
            <Calendar className="mr-2 text-red-600" />
            <span className="font-bold">Year Built</span>
          </div>
          <p className="text-xl">{property.yearBuilt || "N/A"}</p>
        </div>
      </div>

      {/* Property Description */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Property Description
        </h2>
        <p className="leading-relaxed text-slate-700">{property.description}</p>
      </div>

      {/* Amenities */}
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Amenities</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {property.amenities.map((amenity) => (
            <div
              key={amenity.id}
              className="flex items-center rounded-lg bg-slate-50 p-3"
            >
              <span className="mr-3 text-2xl">{amenity.icon}</span>
              <span>{amenity.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Neighborhood Information */}
      {property.neighborhood && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Neighborhood
          </h2>
          <p className="mb-4 text-slate-700">
            {property.neighborhood.description}
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {property.neighborhood.nearbyPlaces.map((place, index) => (
              <div key={index} className="rounded-lg bg-slate-50 p-4">
                <h3 className="mb-2 font-bold text-slate-900">{place.name}</h3>
                <p className="text-slate-600">
                  {place.type} - {place.distance}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Virtual Tour */}
      {property.virtualTourUrl && (
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Virtual Tour
          </h2>
          <iframe
            src={property.virtualTourUrl}
            width="100%"
            height="500"
            allowFullScreen
            className="rounded-lg"
          />
        </div>
      )}

      {/* Similar Properties */}
      <div>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Similar Properties
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {similarProperties.map((similar) => (
            <Link
              href={`/properties/${similar.id}`}
              key={similar.id}
              className="block"
            >
              <div className="overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="relative h-48 w-full">
                  <Image
                    src={similar.images[0]}
                    alt={similar.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-bold">{similar.title}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-red-600">
                      ${similar.price.toLocaleString()}
                    </span>
                    <div className="flex space-x-2">
                      {similar.bedrooms && (
                        <span className="flex items-center">
                          <Bed size={16} className="mr-1" /> {similar.bedrooms}
                        </span>
                      )}
                      {similar.bathrooms && (
                        <span className="flex items-center">
                          <Bath size={16} className="mr-1" />{" "}
                          {similar.bathrooms}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
          onClick={() => setIsContactModalOpen(false)}
        >
          <motion.div
            className="w-full max-w-md rounded-lg bg-white p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Contact About This Property
            </h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded border p-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded border p-2"
              />
              <textarea
                placeholder="Your Message"
                className="h-32 w-full rounded border p-2"
              />
              <button
                type="submit"
                className="w-full rounded bg-red-600 p-2 text-white transition hover:bg-red-700"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>
        </div>
      )}

      {/* Contact CTA */}
      <div className="fixed right-0 bottom-10 z-40 rounded-tl-lg rounded-bl-lg bg-slate-200 p-4 shadow-lg">
        <div className="mx-auto flex flex-col items-start justify-between gap-4">
          <div>
            <p className="font-bold text-slate-700">
              Interested in this property?
            </p>
            <p className="text-slate-600">Contact us for more information</p>
          </div>
          <div className="flex space-x-4">
            <button
              className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
              onClick={() => setIsContactModalOpen(true)}
            >
              Inquire Now
            </button>
            <a
              href="tel:+1234567890"
              className="flex items-center rounded bg-slate-100 px-4 py-2 text-slate-800 transition hover:bg-slate-200"
            >
              <Phone size={20} className="mr-2" /> Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
