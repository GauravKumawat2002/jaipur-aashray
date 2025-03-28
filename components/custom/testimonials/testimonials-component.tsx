"use client";
import React from "react";
// import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { default as World } from "@/components/ui/world-map";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Star } from "lucide-react";
import Image from "next/image";

const TestimonialsComponent: React.FC<TestimonialsPageProps> = ({
  testimonials,
  heroText = "What our clients say about us",
}) => {
  // Filter states
  // const [selectedPropertyType, setSelectedPropertyType] = useState<
  //   string | null
  // >(null);
  // const [selectedService, setSelectedService] = useState<
  //   "sale" | "rent" | null
  // >(null);

  // Derive unique property types and services
  //   const propertyTypes = Array.from(
  //     new Set(testimonials.map((t) => t.propertyType)),
  //   );
  //   const services = Array.from(new Set(testimonials.map((t) => t.service)));

  // Filter testimonials
  //   const filteredTestimonials = useMemo(() => {
  //     return testimonials.filter(
  //       (testimonial) =>
  //         (!selectedPropertyType ||
  //           testimonial.propertyType === selectedPropertyType) &&
  //         (!selectedService || testimonial.service === selectedService),
  //     );
  //   }, [testimonials, selectedPropertyType, selectedService]);

  // Typewriter effect words
  const words = heroText.split(" ").map((word) => ({
    text: word,
    className: "text-slate-800 dark:text-slate-200",
  }));

  return (
    <div className="bg-white">
      {/* Hero Section with World Map and Typewriter */}
      <div className="relative w-full">
        <World />
        {/* <World className="absolute inset-0 z-0" /> */}
        <div className="absolute top-20 z-10 flex flex-col items-center justify-center p-8 xl:px-16">
          <TypewriterEffect words={words} />
          <Carousel
            className="mx-auto mt-12 w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="group relative hidden overflow-hidden border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:block">
                    {/* Glowing Effect for Desktop */}
                    <div className="pointer-events-none absolute -inset-0.5 rounded-xl bg-gradient-to-r from-red-500 to-slate-500 opacity-20 blur transition-opacity duration-300 group-hover:opacity-40" />

                    <CardContent className="relative z-10 pt-6">
                      <div className="flex items-stretch gap-4 text-left">
                        <Image
                          src={testimonial.clientImageDetails.src}
                          alt={testimonial.clientImageDetails.alt}
                          className="size-40 rounded-full object-cover"
                        />
                        <div>
                          <p className="mb-4 text-slate-700 italic">
                            &quot;{testimonial.quote}&quot;
                          </p>
                          <div className="flex flex-col items-start justify-center pb-6">
                            <div className="mb-2 flex items-center">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="fill-yellow-400 text-yellow-400"
                                  size={16}
                                />
                              ))}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-800">
                              {testimonial.clientName}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {testimonial.propertyType} - {testimonial.service}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Mobile Version */}
                  <Card className="border border-slate-200 bg-white px-4 py-6 text-center shadow-md md:hidden">
                    <p className="mb-4 text-slate-700 italic">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>
                    <div className="mb-2 flex items-center justify-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="fill-yellow-400 text-yellow-400"
                          size={16}
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-800">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-slate-600">
                      {testimonial.propertyType} - {testimonial.service}
                    </p>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      {/* Filters */}
      {/* <div className="container mx-auto px-4 py-8"> */}
      {/* <div className="mb-8 flex flex-wrap justify-center gap-4">
          //* Property Type Filters 
          <div className="flex items-center space-x-2">
            <span className="text-slate-600">Property Type:</span>
            <Button
              variant={selectedPropertyType === null ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedPropertyType(null)}
            >
              All
            </Button>
            {propertyTypes.map((type) => (
              <Button
                key={type}
                variant={selectedPropertyType === type ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedPropertyType(type)}
                className="flex items-center gap-2"
              >
                {type === "Residential" ? (
                  <Home size={16} />
                ) : (
                  <Building2 size={16} />
                )}
                {type}
              </Button>
            ))}
          </div> */}
      {/* Service Filters */}
      {/* <div className="flex items-center space-x-2">
          <span className="text-slate-600">Service:</span>
          <Button
            variant={selectedService === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedService(null)}
          >
            All
          </Button>
          {services.map((service) => (
            <Button
              key={service}
              variant={selectedService === service ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedService(service)}
            >
              {service === "sale" ? "For Sale" : "For Rent"}
            </Button>
          ))}
        </div>
      </div> */}
      {/* Testimonials Carousel */}
      {/* </div> */}
    </div>
  );
};

export default TestimonialsComponent;
