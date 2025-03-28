import { cn } from "@/lib/utils";
import ContactForm from "@/components/custom/shared/contact-form";
import Image from "next/image";

interface ContactUsSectionProps {
  className?: string;
}
export default function ContactUsSection({ className }: ContactUsSectionProps) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-[url(/commercial-building.jpg)] bg-cover bg-center bg-no-repeat",
        className,
      )}
    >
      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      <div className="relative z-10 grid grid-cols-1 gap-8 rounded-xl border border-gray-700/40 p-6 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-2xl md:grid-cols-2 md:gap-16 md:p-10">
        {/* Left Side - Image Section */}
        <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-lg">
          <Image
            src="/commercial-building.jpg"
            alt="Contact Us"
            height={50}
            width={50}
            className="h-64 w-full rounded-lg object-cover transition-transform duration-300 ease-in-out hover:scale-105 md:h-full"
          />
        </div>

        {/* Right Side - Form Section */}
        <div className="flex h-full w-full items-center justify-center">
          <div className="w-full">
            <ContactForm
              heading="Get in Touch"
              //   subHeading="We're here to help. Fill out the form and we'll get back to you as soon as possible."
              //   buttonText="Send Message"
            />
          </div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute top-0 left-0 -z-10 h-16 w-16 animate-pulse rounded-full bg-blue-500 opacity-20 blur-md md:h-20 md:w-20"></div>
        <div className="absolute right-0 bottom-0 -z-10 h-20 w-20 animate-pulse rounded-full bg-pink-500 opacity-20 blur-md md:h-24 md:w-24"></div>
      </div>
    </div>
  );
}
