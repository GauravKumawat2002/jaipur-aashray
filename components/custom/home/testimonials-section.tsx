"use client";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import ClientTestimonialCard from "./testimonials-card";
import SectionTitle from "../shared/section-title";



export default function TestimonialSection({
  testimonials,
  className,
}: TestimonialSectionProps) {
  return (
    <div className={cn("flex w-full flex-col items-center", className)}>
      <SectionTitle title="What Our Clients Say" />

      <div className="relative">
        {/* Carousel */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="-ml-2 py-8">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="basis-full pl-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/3"
              >
                <ClientTestimonialCard {...testimonial} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev Button */}
          <CarouselPrevious className="absolute top-1/2 left-0 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 text-white shadow-md transition-all duration-300 hover:bg-gray-600" />

          {/* Next Button */}
          <CarouselNext className="absolute top-1/2 right-0 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-gray-800 text-white shadow-md transition-all duration-300 hover:bg-gray-600" />
        </Carousel>
      </div>
    </div>
  );
}
