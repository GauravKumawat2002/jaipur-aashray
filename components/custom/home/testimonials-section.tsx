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

interface TestimonialSectionProps {
  testimonials: {
    name: string;
    role: string;
    testimonial: string;
    imageUrl?: string;
  }[];
  className?: string;
}

export default function TestimonialSection({
  testimonials,
  className,
}: TestimonialSectionProps) {
  return (
    <div className={cn("flex w-full flex-col items-center", className)}>
      <SectionTitle title="What Our Clients Say" />

      <div className="relative mx-auto w-full max-w-[95%] lg:max-w-full">
        {/* Carousel */}
        <Carousel
          className="w-full"
          opts={{
            align: "start",
            loop: true,
            containScroll: "keepSnaps",
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="py-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <ClientTestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev Button */}
          <CarouselPrevious className="absolute left-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-md transition-all duration-300 hover:bg-gray-600" />

          {/* Next Button */}
          <CarouselNext className="absolute right-0 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-white shadow-md transition-all duration-300 hover:bg-gray-600" />
        </Carousel>
      </div>
    </div>
  );
}
