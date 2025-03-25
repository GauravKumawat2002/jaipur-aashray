import { routes } from "@/app/routes";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import PropertyCard, { PropertyCardDetails } from "../shared/property-card";
import SectionTitle from "../shared/section-title";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface PropertySectionProps {
  sectionTitle: string;
  viewMoreButtonText?: string;
  properties: PropertyCardDetails[];
  className?: string;
}

export default function PropertySection({
  sectionTitle = "Our Previous Sold Properties",
  viewMoreButtonText = "View More",
  properties,
  className,
}: PropertySectionProps) {
  return (
    <div className={cn("border bg-slate-700 p-8", className)}>
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center lg:mb-12">
        <SectionTitle title={sectionTitle} className="text-gray-50" />
        <Button
          asChild
          className="rounded-md bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700 focus:bg-red-700 focus:outline-none focus-visible:bg-red-700 focus-visible:outline-none"
        >
          <Link href={routes.properties} className="flex items-center gap-2">
            {viewMoreButtonText}
            <MoveRight />
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 items-center justify-evenly gap-6 md:grid-cols-2 lg:grid-cols-3">
        {properties.map((cardDetail) => (
          <PropertyCard
            cardDetails={cardDetail}
            key={cardDetail.propertyName}
          />
        ))}
      </div>
    </div>
  );
}
