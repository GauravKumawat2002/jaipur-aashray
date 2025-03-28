import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import SectionTitle from "../shared/section-title";

const Hero = ({
  title = "Lorem Ipsum Dolor Sit Amet",
  subtitle = "Find your dream home with us—where trust, innovation, and lifestyle come together seamlessly!",
  tagline = "DREAMS WITHIN REACH",
  // primaryColor = "#c22126",
  // imageAlt = "Hero image",
  className = "",
}) => {
  return (
    <div className={cn("w-full bg-slate-50", className)}>
      <div className="mx-auto flex flex-col gap-8 p-8 md:flex-row">
        {/* Text Content */}
        <div className="space-y-4 md:w-1/2">
          {tagline && (
            <p className="text-sm font-bold tracking-wider uppercase">
              {tagline}
            </p>
          )}
          <SectionTitle title={title} />
          {subtitle && <p className="max-w-md text-gray-600">{subtitle}</p>}
          <div className="pt-4">
            <Button
              className="cursor-pointer rounded-md bg-red-600 px-6 py-3 font-medium text-white transition-all hover:bg-red-700 focus:bg-red-700 focus-visible:bg-red-700"
              asChild
              //   style={{ backgroundColor: primaryColor }}
            >
              <Link href={"/about"}>Learn More</Link>
            </Button>
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="h-64 overflow-hidden rounded-md bg-gray-200 md:h-96 md:w-1/2">
          {/* Image would be placed here */}
          <div className="flex h-full w-full items-center justify-center text-gray-500">
            Image Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
